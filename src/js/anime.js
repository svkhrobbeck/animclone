// styles
import "../scss/main.scss";
import { onSetAnimeEpisode } from "./helpers/delegations";
import { elAnimeButtons, elAnimeSelect } from "./helpers/elements";
import { onSetDownloadEpisode } from "./helpers/events";
import { renderAnimePage } from "./helpers/render";
import { getData } from "./helpers/request";

import "./service/axios";

const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");
const anime = { series: [] };

const fetches = async () => {
  const anim = await getData(`/season/v2/${animeId}`);
  renderAnimePage(anim.seria, anim.data.name.uz, anim.data._id);

  anime.series = anim.seria;
};

fetches();

// events
elAnimeButtons.addEventListener("click", e =>
  onSetAnimeEpisode(e, anime.series, animeId)
);

elAnimeSelect.addEventListener("change", onSetDownloadEpisode);
