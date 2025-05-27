import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('bancos')
export class Banco {
  @PrimaryColumn({ type: 'char', length: 8 })
  codigo: string;

  @Column({ type: 'varchar', length: 150 })
  nombre: string;
}
