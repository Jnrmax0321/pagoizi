import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacto } from 'src/entities/contactos.entity';

import { Usuario } from 'src/entities/usuarios.entity';
import { CreateContactoDto } from 'src/dtos/contactos.dto';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Contacto)
    private contactoRepo: Repository<Contacto>,

    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
  ) {}

  async create(dto: CreateContactoDto) {
    if (dto.usuario_id === dto.contacto_usuario_id) {
      throw new BadRequestException('No puedes agregarte a ti mismo como contacto');
    }

    const user = await this.usuarioRepo.findOne({ where: { id: dto.usuario_id } });
    const contacto = await this.usuarioRepo.findOne({ where: { id: dto.contacto_usuario_id } });

    if (!user || !contacto) {
      throw new NotFoundException('Usuario o contacto no encontrado');
    }

    const yaExiste = await this.contactoRepo.findOne({
      where: {
        usuario_id: dto.usuario_id,
        contacto_usuario_id: dto.contacto_usuario_id,
      },
    });

    if (yaExiste) {
      throw new BadRequestException('Este contacto ya existe');
    }

    const nuevoContacto = this.contactoRepo.create(dto);
    return this.contactoRepo.save(nuevoContacto);
  }

  findAll() {
    return this.contactoRepo.find({
      relations: ['usuario', 'contacto'],
    });
  }

  async findByUsuario(usuario_id: number) {
    return this.contactoRepo.find({
      where: { usuario_id },
      relations: ['contacto'],
    });
  }

  async remove(id: number) {
    const contacto = await this.contactoRepo.findOne({ where: { id } });
    if (!contacto) throw new NotFoundException('Contacto no encontrado');
    return this.contactoRepo.remove(contacto);
  }
}
