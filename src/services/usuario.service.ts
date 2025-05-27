import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entities/usuarios.entity';
import { CreateUsuarioDto } from 'src/dtos/usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(dto: CreateUsuarioDto) {
    const saltOrRounds = 10;

    // Hasheamos la contraseña
    const hashedPassword = await bcrypt.hash(dto.password_hash, saltOrRounds);

    const nuevoUsuario = this.usuarioRepository.create({
      ...dto,
      password_hash: hashedPassword,
    });

    return this.usuarioRepository.save(nuevoUsuario);
  }

  async findAll() {
    return this.usuarioRepository.find();
  }

  async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    return usuario;
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuarioRepository.remove(usuario);
  }
}
