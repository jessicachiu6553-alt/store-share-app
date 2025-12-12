export const env = {
  CLIENT_ID: process.env.REACT_APP_CLIENT_ID || '',
  CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET || '',
  COGNITO_DOMAIN: process.env.REACT_APP_COGNITO_DOMAIN || '',
  COGNITO_DOMAIN_LINK: process.env.REACT_APP_COGNITO_DOMAIN_LINK || '',
  COGNITO_ENDPOINT: process.env.REACT_APP_COGNITO_ENDPOINT || '',
  FILES_API_ENDPOINT: process.env.REACT_APP_FILES_API_ENDPOINT || '',
};

export const getEnv = (key: keyof typeof env) => env[key];