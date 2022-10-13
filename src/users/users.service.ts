import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

//export type User = any;



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private dataSource: DataSource          
    ) {}

    // private readonly users = [
    //     {
            
    //         userId: 1, 
    //         username: 'bigshot11@gmail.com',
    //         password: '1234567890'
    //     },
    //     {
    //         userId: 2, 
    //         username: 'abcd95751@gmail.com',
    //         password: '1234567890'
    //     }
    // ];

        

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(email: string): Promise<User> {  // string -> number   
        return this.usersRepository.findOneBy({ email });
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async create(user: User) {
        const queryRunner = this.dataSource.createQueryRunner();
      
        console.log(user.email);
        console.log(user.id);
        console.log(user.isActive);
        console.log(user.password);
        await queryRunner.connect();
        console.log('connect');
        await queryRunner.startTransaction();
        console.log('startTransaction');
        try {
          await queryRunner.manager.save(user);
          console.log('save(user)');
      
          await queryRunner.commitTransaction();
          console.log('commit Transaction');
        } catch (err) {
          console.log(err)
          console.log('catch(err)');
          // since we have errors lets rollback the changes we made
          await queryRunner.rollbackTransaction();
          console.log('rollbackTranscation()');
        } finally {
          // you need to release a queryRunner which was manually instantiated
          await queryRunner.release();
          console.log('release');
        }
      }
      
    //  async findOne(username: string): Promise<User | undefined> {
    //      return this.users.find(user=> user.username === username)
    //  }
}
