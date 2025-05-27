import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movimiento } from 'src/entities/movimientos.entity';
import { CreateMovimientoDto } from 'src/dtos/movimientos.dto';

@Injectable()
export class MovimientoService {
  constructor(
    @InjectRepository(Movimiento)
    private movimientoRepo: Repository<Movimiento>,
  ) {}

  create(dto: CreateMovimientoDto) {
    const movimiento = this.movimientoRepo.create(dto);
    return this.movimientoRepo.save(movimiento);
  }

  findAll() {
    return this.movimientoRepo.find({
      relations: ['usuario', 'transaccion'],
      order: { created_at: 'DESC' },
    });
  }

  async findByUsuario(usuario_id: number) {
    return this.movimientoRepo.find({
      where: { usuario_id },
      relations: ['transaccion'],
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number) {
    const mov = await this.movimientoRepo.findOne({
      where: { id },
      relations: ['usuario', 'transaccion'],
    });
    if (!mov) throw new NotFoundException('Movimiento no encontrado');
    return mov;
  }

  async remove(id: number) {
    const mov = await this.findOne(id);
    return this.movimientoRepo.remove(mov);
  }
}
