import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuarios.entity';
import { Banco } from './banco.entity';

@Entity('cuentas_bancarias')
export class CuentaBancaria {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  usuario_id: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'char', length: 8 })
  banco_codigo: string;

  @ManyToOne(() => Banco, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'banco_codigo', referencedColumnName: 'codigo' })
  banco: Banco;

  @Column({ type: 'varchar', length: 30 })
  numero_cuenta: string;

  @Column({ type: 'varchar', length: 24, nullable: true })
  cci: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  alias: string;

  @Column({ type: 'tinyint', default: 0 })
  verificado: boolean;

  @CreateDateColumn()
  creado_en: Date;
}
