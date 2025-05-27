import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Correo electrónico del usuario registrado',
    example: 'usuario@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña del usuario (en texto plano)',
    example: '123456',
  })
  @IsString()
  password_hash: string; // aunque el nombre es "password_hash", se espera en texto plano
}

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '987654321', description: 'Teléfono del usuario' })
  telefono: string;

  @IsString()
  @ApiProperty({ example: 'Juan', description: 'Nombre del usuario' })
  nombre: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: 'Pérez',
    description: 'Apellidos del usuario',
  })
  apellidos?: string;

  @IsEmail()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'usuario@email.com',
    description: 'Correo electrónico del usuario',
  })
  email?: string;

  @IsEnum(['DNI', 'CE', 'PASAPORTE'])
  @IsOptional()
  @ApiPropertyOptional({
    example: 'DNI',
    enum: ['DNI', 'CE', 'PASAPORTE'],
    description: 'Tipo de documento',
  })
  documento_tipo?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '12345678',
    description: 'Número de documento',
  })
  documento_numero?: string;

  @IsString()
  @ApiProperty({
    example: 'password123',
    description: 'Contraseña del usuario (hash)',
  })
  password_hash: string;
}
