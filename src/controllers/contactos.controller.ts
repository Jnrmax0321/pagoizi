// Controlador para gestionar contactos de usuario: permite crear, listar, buscar por usuario y eliminar contactos.
import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateContactoDto } from 'src/dtos/contactos.dto';
import { ContactoService } from 'src/services/contactos.service';

@Controller('contactos')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un contacto' })
  create(@Body() dto: CreateContactoDto) {
    return this.contactoService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los contactos' })
  findAll() {
    return this.contactoService.findAll();
  }

  @Get('usuario/:usuario_id')
  @ApiOperation({ summary: 'Listar contactos por usuario' })
  findByUsuario(@Param('usuario_id') usuario_id: string) {
    return this.contactoService.findByUsuario(+usuario_id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un contacto por id' })
  remove(@Param('id') id: string) {
    return this.contactoService.remove(+id);
  }
}
