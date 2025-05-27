import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuarios.entity';

@Entity('contactos')
export class Contacto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  usuario_id: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  contacto_usuario_id: number;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'contacto_usuario_id' })
  contacto: Usuario;

  @Column({ type: 'varchar', length: 100, nullable: true })
  alias: string;

  @CreateDateColumn()
  creado_en: Date;
}
