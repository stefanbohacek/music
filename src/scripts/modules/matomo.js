export default () => {
  setTimeout(() => {
    if (!window.Matomo) {
      const url = `https://tools.stefanbohacek.com/info?idsite=26&action_name=${encodeURIComponent(document.title)}&url=${window.location.href}&uadata=${encodeURIComponent(JSON.stringify(navigator.userAgentData))}&res=${window.screen.availWidth}x${window.screen.availHeight}`;
      fetch(url);
    }
  }, 2000);
};
