import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWalletDto } from 'src/dtos/wallet.dto';
import { Wallet } from 'src/entities/wallet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepo: Repository<Wallet>,
  ) {}

  create(dto: CreateWalletDto) {
    const wallet = this.walletRepo.create(dto);
    return this.walletRepo.save(wallet);
  }

  findAll() {
    return this.walletRepo.find();
  }

  async findOne(id: number) {
    const wallet = await this.walletRepo.findOne({ where: { id } });
    if (!wallet) throw new NotFoundException('Wallet no encontrada');
    return wallet;
  }

  async remove(id: number) {
    const wallet = await this.findOne(id);
    return this.walletRepo.remove(wallet);
  }
}
