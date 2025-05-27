// Controlador para gestionar transacciones: permite crear, listar y obtener transacciones.
import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateTransaccionDto } from 'src/dtos/transaccion.dto';
import { TransaccionService } from 'src/services/transaccion.service';

@Controller('transacciones')
export class TransaccionController {
  constructor(private readonly transaccionService: TransaccionService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una transacción' })
  create(@Body() dto: CreateTransaccionDto) {
    return this.transaccionService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las transacciones' })
  findAll() {
    return this.transaccionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una transacción por id' })
  findOne(@Param('id') id: string) {
    return this.transaccionService.findOne(+id);
  }
}
