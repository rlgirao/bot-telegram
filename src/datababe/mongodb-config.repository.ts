import { EnvUtil } from '../util/env-util';

export function mongodbConfig(): any {
  return {
    type: 'mongodb',
    url: EnvUtil.mongoUrl,
    synchronize: true,
    logging: false,
    useUnifiedTopology: true,
    autoLoadEntities: true,
    useNewUrlParser: true,
    connectTimeout: parseInt(EnvUtil.mongoConnectionTimeOut),
    acquireTimeout: parseInt(EnvUtil.mongoAquireTimeOut),
    extra: {
      connectionLimit: parseInt(EnvUtil.mongoConnectionLimit),
    },
    entities: ['dist/**/entity/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    subscribers: ['dist/observers/subscribers/*.subscriber.js'],
    cli: {
      entitiesDir: 'src/**/entity',
      migrationsDir: 'src/database/migrations',
      subscribersDir: 'src/observers/subscribers',
    },
    keepConnectionAlive: true,
  };
}
