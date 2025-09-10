import { Injectable } from '@nestjs/common'; 
import { UserEntity } from '../entities/user.entity'; 
import { DataSource, DeepPartial, Repository } from 'typeorm'; 
import { IUser } from '@project-manager-api/domain/interfaces/user.interface'; 
import { IUsersRepository } from '@project-manager-api/domain/repositories/users-repository.interface'; 
 
@Injectable() 
export class UsersRepositoryService 
  extends Repository<UserEntity> 
  implements IUsersRepository 
{ 
  constructor(dataSource: DataSource) { 
    super(UserEntity, dataSource.createEntityManager()); 
  } 
 
  findById(id: number): Promise<IUser | null> { 
    return this.findOneBy({ id }); 
  } 

  findByEmail(email: string): Promise<IUser | null> { 
    return this.findOneBy({ email }); 
  } 

  add(payload: DeepPartial<IUser>): Promise<IUser> { 
    return this.save(payload) as Promise<IUser>; 
  } 
}