import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Wallet } from './wallet.entity';

@Entity('transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'char', length: 36, unique: true })
  referencia: string;

  @Column({ nullable: true })
  wallet_origen_id: number;

  @ManyToOne(() => Wallet, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'wallet_origen_id' })
  wallet_origen: Wallet;

  @Column({ nullable: true })
  wallet_destino_id: number;

  @ManyToOne(() => Wallet, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'wallet_destino_id' })
  wallet_destino: Wallet;

  @Column({
    type: 'enum',
    enum: ['SERVICIOS', 'CREDITO', 'TRANSFERENCIA', 'PAGO_QR'],
  })
  tipo: string;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  monto: number;

  @Column({ type: 'char', length: 3, default: 'PEN' })
  moneda: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descripcion: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
