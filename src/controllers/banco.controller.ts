// Controlador para gestionar bancos: permite crear, listar, obtener y eliminar bancos.
import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateBancoDto } from 'src/dtos/banco.dto';
import { BancoService } from 'src/services/banco.service';


@Controller('bancos')
export class BancoController {
  constructor(private readonly bancoService: BancoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un banco' })
  create(@Body() dto: CreateBancoDto) {
    return this.bancoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los bancos' })
  findAll() {
    return this.bancoService.findAll();
  }

  @Get(':codigo')
  @ApiOperation({ summary: 'Obtener un banco por código' })
  findOne(@Param('codigo') codigo: string) {
    return this.bancoService.findOne(codigo);
  }

  @Delete(':codigo')
  @ApiOperation({ summary: 'Eliminar un banco por código' })
  remove(@Param('codigo') codigo: string) {
    return this.bancoService.remove(codigo);
  }
}
