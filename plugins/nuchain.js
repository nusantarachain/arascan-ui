import { ApiPromise, WsProvider } from "@polkadot/api";

export default async ({ app }, inject) => {
  console.log(`connecting to nuchain ${process.env.NUCHAIN_WS_ENDPOINT}...`);

  const api = await ApiPromise.create({
    provider: new WsProvider(process.env.NUCHAIN_WS_ENDPOINT),
    types: {
      Address: "MultiAddress",
      LookupSource: "MultiAddress"
    }
  });

  inject("nuchain", {
    api: api
  });
};
