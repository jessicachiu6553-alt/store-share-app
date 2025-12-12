// src/env.ts
export const env = {
  CLIENT_ID: process.env.CLIENT_ID || '',
  CLIENT_SECRET: process.env.CLIENT_SECRET || '',
  COGNITO_DOMAIN: process.env.COGNITO_DOMAIN || '',
  COGNITO_DOMAIN_LINK: process.env.COGNITO_DOMAIN_LINK || '',

};

export const getEnv = (key: keyof typeof env) => env[key];
