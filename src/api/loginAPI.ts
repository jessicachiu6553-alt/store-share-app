import axios, { AxiosResponse } from "axios";
import CryptoJS from "crypto-js"; // npm install crypto-js
import { getEnv } from '../../env';

// ---- Types ----
interface CognitoTokenResponse {
  access_token: string;
  id_token: string;
  refresh_token?: string;
  token_type: string;
  expires_in: number;
}

// ---- Config ----
const CLIENT_ID = getEnv('CLIENT_ID');
const CLIENT_SECRET = getEnv('CLIENT_SECRET'); // only for dev/testing
const COGNITO_DOMAIN = getEnv('COGNITO_DOMAIN'); // Hosted UI domain

// ---- Functions ----
function computeSecretHash(username: string, clientId: string, clientSecret: string): string {
  const msg = username + clientId;
  const hash = CryptoJS.HmacSHA256(msg, clientSecret);
  return CryptoJS.enc.Base64.stringify(hash);
}

export async function login(username: string, password: string): Promise<CognitoTokenResponse | null> {
  const secretHash = computeSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const params = new URLSearchParams();
  params.append("grant_type", "password");
  params.append("client_id", CLIENT_ID);
  params.append("username", username);
  params.append("password", password);
  params.append("SECRET_HASH", secretHash);
  params.append("scope", "openid email profile");

  try {
    const response: AxiosResponse<CognitoTokenResponse> = await axios.post(
      `https://${COGNITO_DOMAIN}/oauth2/token`,
      params.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("IdToken:", response.data.id_token);
    console.log("AccessToken:", response.data.access_token);

    return response.data;
  } catch (err: any) {
    console.error("Login error:", err.response?.data || err.message);
    return null;
  }
}

// ---- Example usage ----
(async () => {
  const tokens = await login("alice@example.com", "Password123!");
  if (tokens) {
    console.log("Successfully logged in:", tokens.id_token);
  }
})();
