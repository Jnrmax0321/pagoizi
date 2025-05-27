import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 15, unique: true })
  telefono: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100, nullable: true })
  apellidos: string;

  @Column({ length: 150, unique: true, nullable: true })
  email: string;

  @Column({ type: 'enum', enum: ['DNI', 'CE', 'PASAPORTE'], default: 'DNI' })
  documento_tipo: string;

  @Column({ length: 20, nullable: true })
  documento_numero: string;

  @Column({ length: 60 })
  password_hash: string;

  @Column({
    type: 'enum',
    enum: ['ACTIVO', 'SUSPENDIDO', 'ELIMINADO'],
    default: 'ACTIVO',
  })
  estado: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
