import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from '../constant';
export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DATABASE_URL),
  },
];
