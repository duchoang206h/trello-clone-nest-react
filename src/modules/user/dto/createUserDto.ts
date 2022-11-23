import { IsEmail, IsString, IsAlpha } from 'class-validator';
export class CreateUserDto {
  @IsAlpha()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
