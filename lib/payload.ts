import { getPayload } from "payload";
import type { Payload } from "payload";

let payloadPromise: Promise<Payload | null> | null = null;
let payloadInitFailed = false;

export const getPayloadClient = async (): Promise<Payload | null> => {
  if (payloadInitFailed) {
    return null;
  }

  if (!payloadPromise) {
    payloadPromise = (async () => {
      try {
        const configModule = await import("@payload-config");
        const config = configModule.default;
        return await getPayload({ config });
      } catch (error) {
        payloadPromise = null;
        payloadInitFailed = true;
        console.error("[payload] Initialization failed:", error);
        return null;
      }
    })();
  }

  return payloadPromise;
};
