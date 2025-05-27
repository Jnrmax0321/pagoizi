import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuentaBancaria } from 'src/entities/cuentas_bancarias.entity';
import { CreateCuentaBancariaDto } from 'src/dtos/cuenta_bancaria.dto';

@Injectable()
export class CuentaBancariaService {
  constructor(
    @InjectRepository(CuentaBancaria)
    private cuentaRepo: Repository<CuentaBancaria>,
  ) {}

  create(dto: CreateCuentaBancariaDto) {
    const cuenta = this.cuentaRepo.create(dto);
    return this.cuentaRepo.save(cuenta);
  }

  findAll() {
    return this.cuentaRepo.find({ relations: ['usuario', 'banco'] });
  }

  async findOne(id: number) {
    const cuenta = await this.cuentaRepo.findOne({
      where: { id },
      relations: ['usuario', 'banco'],
    });
    if (!cuenta) throw new NotFoundException('Cuenta bancaria no encontrada');
    return cuenta;
  }

  async remove(id: number) {
    const cuenta = await this.findOne(id);
    return this.cuentaRepo.remove(cuenta);
  }
}
