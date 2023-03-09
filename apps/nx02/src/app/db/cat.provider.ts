import { Connection } from 'mongoose';
import {
  CAT_MODEL,
  CAT_MODEL_NAME,
  DATABASE_CONNECTION,
} from './inject-tokens';
import { CatSchema } from './schemas/cat.schema';

export const catsProviders = [
  {
    provide: CAT_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(CAT_MODEL_NAME, CatSchema),
    inject: [DATABASE_CONNECTION],
  },
];
