import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateContactoDto {
  @IsNumber()
  @ApiProperty({ example: 1, description: 'ID del usuario que agrega el contacto' })
  usuario_id: number;

  @IsNumber()
  @ApiProperty({ example: 2, description: 'ID del usuario que es el contacto' })
  contacto_usuario_id: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Amigo del trabajo', description: 'Alias para identificar el contacto' })
  alias?: string;
}
