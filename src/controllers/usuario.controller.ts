// Controlador para gestionar usuarios: permite crear, listar, obtener y eliminar usuarios.
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUsuarioDto } from 'src/dtos/usuario.dto';
import { UsuarioService } from 'src/services/usuario.service';


@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un usuario' })
  create(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los usuarios' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por id' })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario por id' })
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
