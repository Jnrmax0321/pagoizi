import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuarios.entity';
import { Transaccion } from './transacciones.entity';

@Entity('movimientos')
export class Movimiento {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  usuario_id: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  transaccion_id: number;

  @ManyToOne(() => Transaccion, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'transaccion_id' })
  transaccion: Transaccion;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  monto: number;

  @Column({ type: 'char', length: 3, default: 'PEN' })
  moneda: string;

  @CreateDateColumn()
  created_at: Date;
}
