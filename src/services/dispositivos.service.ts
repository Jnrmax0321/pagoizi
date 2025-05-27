import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dispositivo } from 'src/entities/dispositivos.entity';
import { CreateDispositivoDto } from 'src/dtos/dispositivos.dto';

@Injectable()
export class DispositivoService {
  constructor(
    @InjectRepository(Dispositivo)
    private dispositivoRepo: Repository<Dispositivo>,
  ) {}

  create(dto: CreateDispositivoDto) {
    const nuevo = this.dispositivoRepo.create(dto);
    return this.dispositivoRepo.save(nuevo);
  }

  findAll() {
    return this.dispositivoRepo.find({ relations: ['usuario'] });
  }

  async findOne(id: number) {
    const dispositivo = await this.dispositivoRepo.findOne({
      where: { id },
      relations: ['usuario'],
    });

    if (!dispositivo) throw new NotFoundException('Dispositivo no encontrado');
    return dispositivo;
  }

  async remove(id: number) {
    const dispositivo = await this.findOne(id);
    return this.dispositivoRepo.remove(dispositivo);
  }
}
