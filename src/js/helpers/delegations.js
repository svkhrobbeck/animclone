import { ACTIVE_CLASS } from "./constants";
import { elAnimeButtons, elAnimeIframe, elAnimeSubtitle } from "./elements";
import { customStorage } from "./utils";

export const onSetAnimeEpisode = (e, series = [], id) => {
  const el = e.target.closest(".js-anime-button");
  if (!el) return;

  const activeBtn = elAnimeButtons.querySelector(`.${ACTIVE_CLASS}`);
  activeBtn.classList.remove(ACTIVE_CLASS);

  el.classList.add(ACTIVE_CLASS);
  const slug = el.dataset.slug;

  const anime = series.find(ep => ep.slug === slug);
  customStorage.set(`anime_${id}`, slug);

  elAnimeIframe.src = anime.video;
  elAnimeSubtitle.textContent = anime.name.uz;
};


