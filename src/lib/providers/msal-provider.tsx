"use client";

import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../services/auth";

interface Props {
  children?: React.ReactNode;
}

const msalInstance: any = new PublicClientApplication(msalConfig);
msalInstance.addEventCallback((event: any) => {
  try {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      msalInstance.setActiveAccount(event.payload.account);
    }
  } catch (error) {
    console.error("Something wrong in msalInstance.addEventCallback - ", error);
  }
});

export default function CustomMsalProvider({ children }: Props) {
  return <MsalProvider instance={msalInstance}>
    {children}
  </MsalProvider>
}