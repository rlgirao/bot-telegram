export class EnvUtil {
  static get TelegramPort(): string {
    const property = 'TELEGRAM_PORT';
    return this.getPropertyFromEnv(property);
  }

  static get mongoUrl(): string {
    const property = 'MONGODB_URL';
    return this.getPropertyFromEnv(property);
  }

  static get mongoHost(): string {
    const property = 'MONGODB_HOST';
    return this.getPropertyFromEnv(property);
  }

  static get mongoPort(): string {
    const property = 'MONGODB_PORT';
    return this.getPropertyFromEnv(property);
  }

  static get mongoUsername(): string {
    const property = 'MONGODB_USERNAME';
    return this.getPropertyFromEnv(property);
  }

  static get mongoPassword(): string {
    const property = 'MONGODB_PASSWORD';
    return this.getPropertyFromEnv(property);
  }

  static get mongoDatabase(): string {
    const property = 'MONGODB_DATABASE';
    return this.getPropertyFromEnv(property);
  }

  static get mongoConnectionTimeOut(): string {
    const property = 'MONGODB_CONNECTION_TIME_OUT';
    return this.getPropertyFromEnv(property);
  }

  static get mongoAquireTimeOut(): string {
    const property = 'MONGODB_ACQUIRE_TIME_OUT';
    return this.getPropertyFromEnv(property);
  }

  static get mongoConnectionLimit(): string {
    const property = 'MONGODB_CONNECTION_LIMIT';
    return this.getPropertyFromEnv(property);
  }

  private static getPropertyFromEnv(property: string): string {
    switch (process.env.NODE_ENV) {
      case 'production':
        return process.env[`${property}_PROD`] || process.env[property];
      case 'staging':
        return process.env[`${property}_HOM`] || process.env[property];
      default:
        return process.env[property];
    }
  }
}
