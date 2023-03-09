import * as mongoose from 'mongoose';
import { getMongoCnx } from '../config/configuration';
import { DATABASE_CONNECTION } from './inject-tokens';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(getMongoCnx()),
  },
];
