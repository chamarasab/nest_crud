import { Injectable } from '@nestjs/common';
import { Users, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async getAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  async create(users: Users) {
    const newUsers = new this.usersModel(users);
    return newUsers.save();
  }
}
