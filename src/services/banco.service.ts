import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBancoDto } from 'src/dtos/banco.dto';
import { Banco } from 'src/entities/banco.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BancoService {
  constructor(
    @InjectRepository(Banco)
    private bancoRepository: Repository<Banco>,
  ) {}

  create(dto: CreateBancoDto) {
    const banco = this.bancoRepository.create(dto);
    return this.bancoRepository.save(banco);
  }

  findAll() {
    return this.bancoRepository.find();
  }

  async findOne(codigo: string) {
    const banco = await this.bancoRepository.findOne({ where: { codigo } });
    if (!banco) throw new NotFoundException('Banco no encontrado');
    return banco;
  }

  async remove(codigo: string) {
    const banco = await this.findOne(codigo);
    return this.bancoRepository.remove(banco);
  }
}
