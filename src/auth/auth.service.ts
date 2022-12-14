import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { PwCompare } from 'src/utils/PwTransformer';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (PwCompare(pass, user)) {
      const { password, ...result } = user;
      return result;
    }
    return new UnauthorizedException();
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(user: User) {
    // 유저 비밀번호 암호화 로직 구현.
    await this.usersService.create(user);
    return user.email;
  }
}
