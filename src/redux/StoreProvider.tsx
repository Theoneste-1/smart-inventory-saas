"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "./store"; // I'll update store.ts to export AppStore if needed, but for now simple store is fine.

/* 
Note: For Next.js 15 App Router, it's often better to create the store instance inside the provider 
if sharing state across server/client is not needed, but for this SaaS, a global store is standard.
*/

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
