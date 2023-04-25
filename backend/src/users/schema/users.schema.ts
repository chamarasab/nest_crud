import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;
@Schema({ collection: 'users' })
export class Users {
  @Prop()
  name: string;

  @Prop()
  contact: string;

  @Prop()
  image: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
