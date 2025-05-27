import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBancoDto {
  @IsString()
  @ApiProperty({ example: 'BCP', description: 'Código único del banco' })
  codigo: string;

  @IsString()
  @ApiProperty({ example: 'Banco de Crédito del Perú', description: 'Nombre del banco' })
  nombre: string;
}
