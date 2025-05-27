import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from './database/database.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Usuario } from './entities/usuarios.entity';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { BancoController } from './controllers/banco.controller';
import { ContactoController } from './controllers/contactos.controller';
import { CuentaBancariaController } from './controllers/cuenta_bancaria.controller';
import { Dispositivo } from './entities/dispositivos.entity';
import { DispositivoController } from './controllers/dispositivos.controller';
import { MovimientoController } from './controllers/movimientos.controller';
import { TransaccionController } from './controllers/transaccion.controller';
import { BancoService } from './services/banco.service';
import { ContactoService } from './services/contactos.service';
import { CuentaBancariaService } from './services/cuenta_bancaria.service';
import { DispositivoService } from './services/dispositivos.service';
import { MovimientoService } from './services/movimientos.service';
import { TransaccionService } from './services/transaccion.service';
import { Banco } from './entities/banco.entity';
import { Contacto } from './entities/contactos.entity';
import { CuentaBancaria } from './entities/cuentas_bancarias.entity';
import { Movimiento } from './entities/movimientos.entity';
import { Transaccion } from './entities/transacciones.entity';
import { Wallet } from './entities/wallet.entity';
import { WalletController } from './controllers/wallet.controller';
import { WalletService } from './services/wallet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      Banco,
      Contacto,
      CuentaBancaria,
      Dispositivo,
      Movimiento,
      Transaccion,
      Wallet,
    ]),
    ConfigModule.forRoot({
      // * Definimos que es global
      isGlobal: true,
      // * Definimos el archivo de configuracion
      envFilePath: '.env',
      // * Definimos el esquema y la validacion
      load: [config],
      // validationSchema: Joi.object(validation),
    }),
    DatabaseModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [
    AuthController,
    UsuarioController,
    BancoController,
    ContactoController,
    CuentaBancariaController,
    DispositivoController,
    MovimientoController,
    TransaccionController,
    WalletController
  ],
  providers: [
    AuthService,
    UsuarioService,
    BancoService,
    ContactoService,
    CuentaBancariaService,
    DispositivoService,
    MovimientoService,
    TransaccionService,
    WalletService
  ],
})
export class AppModule {}
