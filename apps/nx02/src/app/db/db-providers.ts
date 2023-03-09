import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from './inject-tokens';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/catDemo'),
  },
];
