export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3333,
  env: process.env.ENV,
  debug: process.env.DEBUG === '1',
  database: {
    host: process.env.MONGO_HOST,
    port: parseInt(process.env.MONGO_PORT, 10) || 27017,
    databaseName: process.env.MONGO_DATABASE,
  },
});

export const getMongoCnx = (): string => {
  const cnx = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
  if (process.env.DEBUG === '1') {
    console.log(`DB Connection: ${cnx}`);
  }
  return cnx;
};
