export interface Logger {
    debug(message: string, context?: object): void;
    info(message: string, context?: object): void;
    warn(message: string, context?: object): void;
    error(message: string, context?: object): void;
}
