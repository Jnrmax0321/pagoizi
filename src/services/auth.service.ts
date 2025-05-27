import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/dtos/usuario.dto';
import { Usuario } from 'src/entities/usuarios.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password_hash } = loginDto;

    const user = await this.usuarioRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const passwordValid = await bcrypt.compare(password_hash, user.password_hash);

    if (!passwordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return {
      message: 'Login exitoso',
      user: {
        id: user.id,
        nombres: user.nombre,
        email: user.email,
        estado: user.estado,
      },
    };
  }
}
