import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from '../constant';
import { User } from './user.interface';
import { CreateUserDto } from './dto';
@Injectable()
export class UserService {
  constructor(@Inject(USER_MODEL) private readonly userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create(createUserDto);
  }
  async findById(userId: string): Promise<User | null> {
    return await this.userModel.findById(userId).exec();
  }
  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }
  async updatePassword(userId: string, password: string): Promise<any> {
    return await this.userModel.updateOne({ _id: userId }, { password }).exec();
  }
}
