import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCuentaBancariaDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: 'ID del usuario propietario de la cuenta' })
  usuario_id: number;

  @IsString()
  @ApiProperty({ example: 'BCP', description: 'Código del banco' })
  banco_codigo: string;

  @IsString()
  @ApiProperty({ example: '12345678901234', description: 'Número de cuenta bancaria' })
  numero_cuenta: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '00212345678901234567', description: 'Código de Cuenta Interbancario (CCI)' })
  cci?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Mi cuenta sueldo', description: 'Alias de la cuenta bancaria' })
  alias?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ example: true, description: 'Indica si la cuenta está verificada' })
  verificado?: boolean;
}
