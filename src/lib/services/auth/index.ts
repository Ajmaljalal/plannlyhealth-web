import { decryptData, getSessionIdFromCookie, removeSessionIdFromCookie, setSessionIdToCookie } from "@/lib/helpers";
// import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import axios from "axios";
// import * as Msal from 'msal';
import { Configuration, RedirectRequest } from "@azure/msal-browser";

import AWS from 'aws-sdk';

const API_URL = `${process.env.NEXT_PUBLIC_PLANNLY_API_DEV}`;

export const signIn = async (email: string, password: string) => {
  try {
    const result = await axios.post(`/api/login`, { email, password });
    localStorage.setItem('refreshId', result.data.refreshId)
    setSessionIdToCookie(result.data.sessionId)
    return result.data;
  } catch (error) {
    return error;
  }
}

export const signOut = async () => {
  const sessionId = getSessionIdFromCookie() as string;
  const decryptedSessionId = decryptData(sessionId)

  try {
    const result = await axios.get(`${API_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${decryptedSessionId}`,
      },
    });
    localStorage.removeItem('refreshId')
    removeSessionIdFromCookie()
    return result.data;
  } catch (error: any) {
    return error?.response?.data;
  }
}

export const signUp = async (email: string, password: string) => {
  try {
    const user = await axios.post(`${API_URL}/auth/register`, { email, password });
    return user;
  } catch (error) {
    return error;
  }
}

export const forgotPassword = async (email: string) => {
  try {
    const result = await axios.post(`${API_URL}/auth/forgot-password`, { email });
    return result.data;
  } catch (error) {
    return error;
  }
}

export const resetPassword = async ({ code, password, email }: any) => {
  try {
    const result = await axios.post(`${API_URL}/auth/reset-password`, { email, password, code });
    return result.data;
  } catch (error) {
    return error;
  }
}




// MSAL authentication part

// export const signInWithMicrosoft = async () => {
//   const msalConfig: any = {
//     auth: {
//       clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
//       authority: "https://login.microsoftonline.com/common",
//       redirectUri: "http://localhost:3000/api/auth/callback/azure-ad",
//     },
//     cache: {
//       cacheLocation: "sessionStorage",
//       storeAuthStateInCookie: false,
//     }
//   };

//   const myMSALObj = new Msal.UserAgentApplication(msalConfig);

//   const loginRequest = {
//     scopes: ["openid", "profile", "User.Read"],
//   };

//   myMSALObj.loginPopup(loginRequest)
//     .then((loginResponse: any) => {
//       //Login Success callback code here
//       const idToken = loginResponse.idToken.rawIdToken;

//       // AWS Cognito federated sign in
//       // AWS.config.credentials = new AWS.CognitoIdentityCredentials({

//       //   IdentityPoolId: 'us-west-2:f74108fa-e811-4490-baac-6a031d933cde', // your identity pool id here
//       //   Logins: {
//       //     'login.microsoftonline.com': idToken
//       //   }
//       // });

//       //@ts-ignore
//       // AWS.config.credentials.get(function (err: any) {
//       //   if (err) {
//       //     console.log('Error:', err);
//       //     return;
//       //   }

//       // AWS resources access here.
//       //@ts-ignore
//       console.log('token:', idToken);
//       // });
//     }).catch(function (error: any) {
//       console.log(error);
//     });
// }





// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: 'fd07f02f-e5a8-4e82-8cb4-b29c9d062d25',
    authority: `https://login.microsoftonline.com/common`,
    redirectUri: 'https://event-detection-technology-git-authentication-plannly-dev.vercel.app/shared/login',
    postLogoutRedirectUri: "/"
  }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: RedirectRequest = {
  scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft-ppe.com/v1.0/me"
};

export const signInWithMicrosoft = async () => {
}
