declare namespace NodeJS {
  export interface ProcessEnv {
    readonly GOOGLE_CLIENT_ID: string;
    readonly GOOGLE_CLIENT_SECRET: string;

    readonly GOOGLE_REDIRECT_URI: string;
    readonly JWT_SECRET: string;
  }
}
