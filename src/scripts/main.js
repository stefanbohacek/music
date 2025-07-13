import onReady from "./modules/onReady.js";
import backToTop from "./modules/backToTop.js";
import pauseOtherPlayers from "./modules/pauseOtherPlayers.js";

onReady(async () => {
  backToTop();
  pauseOtherPlayers();
  try {
    const { default: matomo } = await import("./modules/matomo.js");
    matomo();
  } catch (error) { /* noop */
  }
});
