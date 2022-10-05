import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            
            userId: 1, 
            username: 'bigshot11@gmail.com',
            password: '1234567890'
        },
        {
            userId: 2, 
            username: 'abcd95751@gmail.com',
            password: '1234567890'
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user=> user.username === username)
    }
}
