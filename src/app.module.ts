import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { PerfilModule } from './perfil/perfil.module';
import { Perfil } from './perfil/entities/perfil.entity';
import { RequestModule } from './request/request.module';
import { RequestTypeModule } from './request-type/request-type.module';
import { Request } from './request/entities/request.entity';
import { RequestType } from './request-type/entities/request-type.entity';
import { EventTypeModule } from './event-type/event-type.module';
import { CorporeoModule } from './corporeo/corporeo.module';
import { Corporeo } from './corporeo/entities/corporeo.entity';
import { EventType } from './event-type/entities/event-type.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'machine',
      password: '',
      database: 'bruna',
      entities: [
        User,
        Perfil,
        Request,
        RequestType,
        Corporeo,
        EventType
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    PerfilModule,
    RequestModule,
    RequestTypeModule,
    EventTypeModule,
    CorporeoModule,
  ],

  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
