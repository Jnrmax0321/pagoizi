import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDispositivoDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: 'ID del usuario propietario del dispositivo' })
  usuario_id: number;

  @IsEnum(['ANDROID', 'IOS'])
  @ApiProperty({ example: 'ANDROID', enum: ['ANDROID', 'IOS'], description: 'Sistema operativo del dispositivo' })
  sistema_operativo: string;

  @IsOptional()
  @IsEnum(['ACTIVO', 'INACTIVO'])
  @ApiPropertyOptional({ example: 'ACTIVO', enum: ['ACTIVO', 'INACTIVO'], description: 'Estado del dispositivo' })
  estado?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Samsung Galaxy S21', description: 'Modelo del dispositivo' })
  modelo?: string;
}
