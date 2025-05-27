import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { Usuario } from './usuarios.entity';

@Entity('wallets')
export class Wallet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  usuario_id: number;

  @ManyToOne(() => Usuario, usuario => usuario.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'decimal', precision: 18, scale: 2, default: 0.00 })
  saldo: number;

  @Column({ type: 'char', length: 3, default: 'PEN' })
  moneda: string;

  @Column({ type: 'enum', enum: ['ACTIVO', 'BLOQUEADO'], default: 'ACTIVO' })
  estado: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
