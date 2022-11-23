import { Mongoose } from 'mongoose';
import { UserSchema } from './user.schema';
import { USER_MODEL, DATABASE_CONNECTION } from '../constant';
export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
