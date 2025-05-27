import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/dtos/usuario.dto';
import { Usuario } from 'src/entities/usuarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password_hash } = loginDto;

    const user = await this.usuarioRepository.findOne({
      where: { email, password_hash },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
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
