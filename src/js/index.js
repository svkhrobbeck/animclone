// styles
import "../scss/main.scss";

// helpers
import { DEF_CATEGORY } from "./helpers/constants";
import { elMoviesWrapper } from "./helpers/elements";
import { renderAnimations } from "./helpers/render";
import { postHomePageAnime } from "./helpers/request";

import "./service/axios";

const fetches = async () => {
  const { data } = await postHomePageAnime(DEF_CATEGORY);
  renderAnimations(data, elMoviesWrapper);
  console.log(data);
};

fetches();
