import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) { 
        const { password, ...result } = user;
        return result;
    }
    return null;
  }
  
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(user: User) {
    const new_user = await this.usersService.create(user);
    console.log('done');
    return user;

    //const payload = { username: user.username, password: user.password, };
    

    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }
}