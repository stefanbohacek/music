import onReady from "./modules/onReady.js";
// import highlightCode from "./modules/highlightCode.js";
import backToTop from "./modules/backToTop.js";
import matomo from "./modules/matomo.js";
import pauseOtherPlayers from "./modules/pauseOtherPlayers.js";
// import konami from "./modules/konami.js";
// import addParagraphIconToHeaders from "./modules/addParagraphIconToHeaders.js";

onReady(() => {
  console.log("DEBUG!");

  document.addEventListener(
    "play",
    (e) => {
      let audios = document.getElementsByTagName("audio");
      console.log(e.target, audios)
      for (let i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
          audios[i].pause();
        }
      }
    },
    true
  );

  // highlightCode();
  // pauseOtherPlayers();
  backToTop();
  // addParagraphIconToHeaders();
  matomo();
  // konami();
});
