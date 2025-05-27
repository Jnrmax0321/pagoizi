import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuarios.entity';

@Entity('dispositivos')
export class Dispositivo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  usuario_id: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'enum', enum: ['ANDROID', 'IOS'] })
  sistema_operativo: string;

  @Column({ type: 'enum', enum: ['ACTIVO', 'INACTIVO'], default: 'ACTIVO' })
  estado: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  modelo: string;

  @CreateDateColumn()
  creado_en: Date;
}
