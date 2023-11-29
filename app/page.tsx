import { Analytics } from "@vercel/analytics/react";

import { Home, HomeInner } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      {/* <Home /> */}
      {serverConfig.isDev ? <HomeInner /> : <Home />}
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
