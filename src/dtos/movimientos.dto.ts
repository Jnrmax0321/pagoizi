import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovimientoDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: 'ID del usuario asociado al movimiento' })
  usuario_id: number;

  @IsNumber()
  @ApiProperty({ example: 10, description: 'ID de la transacción asociada' })
  transaccion_id: number;

  @IsNumber()
  @ApiProperty({ example: 100.00, description: 'Monto del movimiento' })
  monto: number;

  @IsString()
  @ApiProperty({ example: 'PEN', description: 'Moneda del movimiento' })
  moneda: string;
}
