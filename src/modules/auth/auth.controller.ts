import { Controller, Post, Body } from '@nestjs/common';
import { LoginDTO } from './dto';
import { User } from '../user/user.interface';
@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<User> {}
}
