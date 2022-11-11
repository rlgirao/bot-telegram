import { Logger } from '@nestjs/common';
import * as moment from 'moment';
import * as fs from 'fs';

export class Log {
    static info(title, message) {
        this.writeLog(title, message, "INFO");
        Logger.log(message, title);
    }

    static debug(title, message) {
        this.writeLog(title, message, "DEBUG");
        Logger.debug(message, title);
    }

    static error(title, message) {
        this.writeLog(title, message, "ERROR");
        Logger.error(message, title);
    }

    static warn(title, message) {
        this.writeLog(title, message, "WARN");
        Logger.warn(message, title);
    }

    private static writeLog(title: string, message: any, type: string) {
        const localPath = `${__dirname}/../logs`;
        const fullPath = `${localPath}/${moment().format('DD-MM-YYYY')}-bot-telegram.log`;
        const logMessage = `${new Date().toLocaleString()} ${type} [${title}] ${message}\r`;
        if (!fs.existsSync(localPath)) {
            fs.mkdirSync(localPath);
        }

        const writer = fs.appendFile(fullPath, logMessage, (err) => {
            if (err) Logger.error(err, "WRITE LOGS");
        });
    }
}