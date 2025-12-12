// src/api/loginAPI.ts

import { getEnv } from "../env";
import CryptoJS from "crypto-js";
export interface LoginResponse {
  AuthenticationResult?: {
    AccessToken: string;
    IdToken: string;
    RefreshToken?: string;
    ExpiresIn: number;
    TokenType: string;
  };
  ChallengeName?: string;
}

interface LoginInput {
  username: string;
  password: string;
}

const COGNITO_ENDPOINT = getEnv("COGNITO_ENDPOINT");
const CLIENT_ID = getEnv("CLIENT_ID");
const CLIENT_SECRET = getEnv("CLIENT_SECRET");

function computeSecretHash(username: string, clientId: string, clientSecret: string): string {
  const msg = username + clientId;
  const hash = CryptoJS.HmacSHA256(msg, clientSecret);
  return CryptoJS.enc.Base64.stringify(hash);
}

export async function AWSlogin({
  username,
  password,
}: LoginInput): Promise<LoginResponse> {
  const SECRET_HASH = computeSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const body = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: CLIENT_ID,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
      SECRET_HASH: SECRET_HASH,
    },
  };

  const res = await fetch(COGNITO_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target": "AWSCognitoIdentityProviderService.InitiateAuth",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error("Login failed: " + errorText);
  }

  return res.json();
}
