import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

// #region agent log
let __agentKeystaticConfigLogged = false;
function __agentLogKeystaticResolvedConfig() {
  if (__agentKeystaticConfigLogged) return;
  __agentKeystaticConfigLogged = true;
  const singletonKeys = Object.keys(config.singletons ?? {});
  const storageKind =
    config.storage && "kind" in config.storage
      ? String(config.storage.kind)
      : "unknown";
  fetch("http://127.0.0.1:7318/ingest/1f54153a-0bb6-4320-a581-b359a30c3c2d", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "4cb762",
    },
    body: JSON.stringify({
      sessionId: "4cb762",
      hypothesisId: "H1-H2",
      location: "api/keystatic/[...params]/route.ts:module",
      message: "Resolved Keystatic config at route module load",
      data: {
        singletonKeys,
        singletonCount: singletonKeys.length,
        storageKind,
      },
      timestamp: Date.now(),
      runId: "pre-fix",
    }),
  }).catch(() => {});
}
__agentLogKeystaticResolvedConfig();
// #endregion

export const { POST, GET } = makeRouteHandler({ config });
