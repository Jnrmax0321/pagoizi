// Controlador para gestionar cuentas bancarias: permite crear, listar, obtener y eliminar cuentas bancarias.
import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateCuentaBancariaDto } from 'src/dtos/cuenta_bancaria.dto';
import { CuentaBancariaService } from 'src/services/cuenta_bancaria.service';

@Controller('cuentas-bancarias')
export class CuentaBancariaController {
  constructor(private readonly cuentaService: CuentaBancariaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una cuenta bancaria' })
  create(@Body() dto: CreateCuentaBancariaDto) {
    return this.cuentaService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las cuentas bancarias' })
  findAll() {
    return this.cuentaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una cuenta bancaria por id' })
  findOne(@Param('id') id: string) {
    return this.cuentaService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una cuenta bancaria por id' })
  remove(@Param('id') id: string) {
    return this.cuentaService.remove(+id);
  }
}
