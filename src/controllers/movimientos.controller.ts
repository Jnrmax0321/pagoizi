// Controlador para gestionar movimientos financieros: permite crear, listar, buscar por usuario, obtener y eliminar movimientos.
import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateMovimientoDto } from 'src/dtos/movimientos.dto';
import { MovimientoService } from 'src/services/movimientos.service';

@Controller('movimientos')
export class MovimientoController {
  constructor(private readonly movimientoService: MovimientoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un movimiento' })
  create(@Body() dto: CreateMovimientoDto) {
    return this.movimientoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los movimientos' })
  findAll() {
    return this.movimientoService.findAll();
  }

  @Get('usuario/:usuario_id')
  @ApiOperation({ summary: 'Listar movimientos por usuario' })
  findByUsuario(@Param('usuario_id') usuario_id: string) {
    return this.movimientoService.findByUsuario(+usuario_id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un movimiento por id' })
  findOne(@Param('id') id: string) {
    return this.movimientoService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un movimiento por id' })
  remove(@Param('id') id: string) {
    return this.movimientoService.remove(+id);
  }
}
