import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from 'src/entities/transacciones.entity';
import { CreateTransaccionDto } from 'src/dtos/transaccion.dto';
import { Wallet } from 'src/entities/wallet.entity';

@Injectable()
export class TransaccionService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionRepo: Repository<Transaccion>,

    @InjectRepository(Wallet)
    private walletRepo: Repository<Wallet>,
  ) {}

  async create(dto: CreateTransaccionDto) {
    const {
      wallet_origen_id,
      wallet_destino_id,
      monto,
      referencia,
    } = dto;

    // Validar wallets
    const origen = wallet_origen_id
      ? await this.walletRepo.findOne({ where: { id: wallet_origen_id } })
      : null;

    const destino = wallet_destino_id
      ? await this.walletRepo.findOne({ where: { id: wallet_destino_id } })
      : null;

    if (wallet_origen_id && !origen) {
      throw new NotFoundException('Wallet origen no encontrada');
    }

    if (wallet_destino_id && !destino) {
      throw new NotFoundException('Wallet destino no encontrada');
    }

    if (origen && origen.saldo < monto) {
      throw new BadRequestException('Saldo insuficiente');
    }

    // Actualizar saldos
    if (origen) {
      origen.saldo -= monto;
      await this.walletRepo.save(origen);
    }

    if (destino) {
      destino.saldo += monto;
      await this.walletRepo.save(destino);
    }

    const nueva = this.transaccionRepo.create(dto);
    return this.transaccionRepo.save(nueva);
  }

  findAll() {
    return this.transaccionRepo.find({
      relations: ['wallet_origen', 'wallet_destino'],
    });
  }

  async findOne(id: number) {
    const trans = await this.transaccionRepo.findOne({
      where: { id },
      relations: ['wallet_origen', 'wallet_destino'],
    });
    if (!trans) throw new NotFoundException('Transacción no encontrada');
    return trans;
  }
}
