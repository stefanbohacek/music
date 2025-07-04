export default async () => {
  setTimeout(async () => {
    if (!window.Matomo) {
      const url = `https://tools.stefanbohacek.com/info?idsite=26&action_name=${encodeURIComponent(
        document.title
      )}&url=${window.location.href}&uadata=${encodeURIComponent(
        JSON.stringify(navigator.userAgentData)
      )}&res=${window.screen.availWidth}x${window.screen.availHeight}`;

      await fetch(url);
    }

    const audioElements = document.querySelectorAll("audio");

    audioElements.forEach((audio) => {
      audio.addEventListener("play", () => {
        _paq.push(["trackEvent", "Audio", "Play", audio.dataset.matomoTitle]);
      });

      // audio.addEventListener("pause", () => {
      //   _paq.push(["trackEvent", "Audio", "Pause", audio.dataset.matomoTitle]);
      // });

      audio.addEventListener("ended", () => {
        _paq.push([
          "trackEvent",
          "Audio",
          "Completed",
          audio.dataset.matomoTitle,
        ]);
      });
    });
  }, 2000);
};
