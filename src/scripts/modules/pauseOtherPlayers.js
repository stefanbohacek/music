export default () => {
  document.addEventListener(
    "play",
    (e) => {
      let audios = document.getElementsByTagName("audio");
      console.log(e.target, audios);
      for (let i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
          audios[i].pause();
        }
      }
    },
    true
  );
};
