import { Module } from '@nestjs/common'; 
import { ProjectsRepositoryService } from 
'./repositories/projects.repository.service'; 
import { UsersRepositoryService } from 
'./repositories/users.repository.service'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
 
@Module({ 
  imports: [ 
    TypeOrmModule.forRoot({ 
      type: 'sqlite', 
      database: 'db/sql.sqlite', 
      entities: ['dist/**/*.entity{.ts,.js}'], 
      synchronize: true, 
      autoLoadEntities: true, 
    }), 
  ], 
  providers: [ 
    ProjectsRepositoryService, 
    UsersRepositoryService, 
  ], 
  exports: [ 
    ProjectsRepositoryService, 
    UsersRepositoryService, 
  ], 
}) 
export class DatabaseModule {} 
