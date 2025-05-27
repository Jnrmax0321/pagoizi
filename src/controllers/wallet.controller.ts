// Controlador para gestionar wallets: permite crear, listar, obtener y eliminar wallets.
import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateWalletDto } from 'src/dtos/wallet.dto';
import { WalletService } from 'src/services/wallet.service';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una wallet' })
  create(@Body() dto: CreateWalletDto) {
    return this.walletService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las wallets' })
  findAll() {
    return this.walletService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una wallet por id' })
  findOne(@Param('id') id: string) {
    return this.walletService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una wallet por id' })
  remove(@Param('id') id: string) {
    return this.walletService.remove(+id);
  }
}
