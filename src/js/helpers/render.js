import { ACTIVE_CLASS, BASE_IMG_URL, BOT_URL } from "./constants";
import {
  elAnimeButtons,
  elAnimeIframe,
  elAnimeSelect,
  elAnimeSubtitle,
  elAnimeTitle,
} from "./elements";
import { customStorage } from "./utils";

export const renderAnimations = (animations = [], elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  animations.forEach(anime => {
    html += `
    <div class="card">
      <a class="card__link" href="anime.html?id=${anime._id}"></a>
      <div class="card__img-wrapper">
        <img class="card__img" src=${BASE_IMG_URL + anime.image} alt="" />
      </div>
      <div class="card__bottom"></div>
      <h4 class="card__title">${anime.name.uz}</h4>
    </div>
    `;
  });

  elWrapper.innerHTML = html;
};

export const renderAnimePage = (buttons, name, id) => {
  let html = "";
  let selectHtml = '<option value="" disabled selected>qismni tanlang</option>';

  const slug = customStorage.get(`anime_${id}`);
  const activeEp = buttons.find(ep => ep.slug === slug);

  buttons.reverse().forEach((button, idx) => {
    const isActive = button.slug === slug;
    const btnClass = isActive
      ? ACTIVE_CLASS
      : idx === 0 && !activeEp
      ? ACTIVE_CLASS
      : "";

    html += `
    <button class="anime-page__button ${btnClass} button button--orange js-anime-button" data-slug=${button.slug}>${button.name.uz}</button>
    `;

    selectHtml += `
      <option class="select-option" ${
        !button.url.includes(BOT_URL) ? "disabled" : ""
      } value=${button.url}>${button.name.uz}</option>
    `;
  });

  elAnimeSelect.innerHTML = selectHtml;

  elAnimeIframe.src = activeEp ? activeEp.video : buttons[0].video;
  elAnimeSubtitle.textContent = activeEp
    ? activeEp.name.uz
    : buttons[0].name.uz;

  elAnimeTitle.textContent = name;
  elAnimeButtons.innerHTML = html;
};
