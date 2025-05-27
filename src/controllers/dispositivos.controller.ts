// Controlador para gestionar dispositivos: permite crear, listar, obtener y eliminar dispositivos.
import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateDispositivoDto } from 'src/dtos/dispositivos.dto';
import { DispositivoService } from 'src/services/dispositivos.service';

@Controller('dispositivos')
export class DispositivoController {
  constructor(private readonly dispositivoService: DispositivoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un dispositivo' })
  create(@Body() dto: CreateDispositivoDto) {
    return this.dispositivoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los dispositivos' })
  findAll() {
    return this.dispositivoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un dispositivo por id' })
  findOne(@Param('id') id: string) {
    return this.dispositivoService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un dispositivo por id' })
  remove(@Param('id') id: string) {
    return this.dispositivoService.remove(+id);
  }
}
