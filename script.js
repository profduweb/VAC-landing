const videoContainer = document.querySelector("[data-video]");
const videoButton = document.querySelector("[data-video-play]");

videoButton?.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.className = "video-frame";
  iframe.src = "https://www.youtube-nocookie.com/embed/videoseries?list=UUNzUonmxxvG-HIqOC3S7Thw&autoplay=1";
  iframe.title = "Dernières vidéos de VAC — Vulgarisateur Apple & Cie";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  videoContainer.replaceWith(iframe);
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
