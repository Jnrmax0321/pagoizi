// Controlador para autenticación: permite iniciar sesión de usuario.
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LoginDto } from 'src/dtos/usuario.dto';
import { AuthService } from 'src/services/auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión de usuario' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
