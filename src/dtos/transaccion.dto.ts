import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTransaccionDto {
  @IsUUID()
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'Referencia única de la transacción (UUID)' })
  referencia: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: 1, description: 'ID de la wallet de origen' })
  wallet_origen_id?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: 2, description: 'ID de la wallet de destino' })
  wallet_destino_id?: number;

  @IsEnum(['SERVICIOS', 'CREDITO', 'TRANSFERENCIA', 'PAGO_QR'])
  @ApiProperty({ example: 'TRANSFERENCIA', enum: ['SERVICIOS', 'CREDITO', 'TRANSFERENCIA', 'PAGO_QR'], description: 'Tipo de transacción' })
  tipo: string;

  @IsNumber()
  @ApiProperty({ example: 50.75, description: 'Monto de la transacción' })
  monto: number;

  @IsString()
  @ApiProperty({ example: 'PEN', description: 'Moneda de la transacción' })
  moneda: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Pago de servicios', description: 'Descripción de la transacción' })
  descripcion?: string;
}
