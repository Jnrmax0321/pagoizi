import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          type: 'mariadb',
          host: configService.host,
          port: configService.port_db ? parseInt(configService.port_db, 10) : undefined,
          username: configService.user_name,
          // password: configService.password ?? null,
          password: configService.password === 'null' ? '' : configService.password,
          database: configService.database,
          autoLoadEntities: true,
          synchronize: false,
          keepConnectionAlive: true,
          // logging: true,
        };
      },
      inject: [config.KEY],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}