import { elDownloadBtn } from "./elements";

export const onSetDownloadEpisode = e => {
  const url = e.target.value;

  elDownloadBtn.classList.remove("button--hidden");
  elDownloadBtn.href = url;
  console.log(url);
};
