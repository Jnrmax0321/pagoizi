import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWalletDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: 'ID del usuario propietario de la wallet' })
  usuario_id: number;

  @IsOptional()
  @ApiPropertyOptional({ example: 100.50, description: 'Saldo inicial de la wallet' })
  saldo?: number;

  @IsString()
  @ApiProperty({ example: 'PEN', description: 'Moneda de la wallet (ej: PEN, USD)' })
  moneda: string;

  @IsEnum(['ACTIVO', 'BLOQUEADO'])
  @IsOptional()
  @ApiPropertyOptional({ example: 'ACTIVO', enum: ['ACTIVO', 'BLOQUEADO'], description: 'Estado de la wallet' })
  estado?: string;
}
