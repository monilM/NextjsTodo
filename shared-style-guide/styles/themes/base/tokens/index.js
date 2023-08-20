import getColors from "./colors";
import borders from "./border";
import spacing from "./spacing";
import typography from "./typography";
import zIndex from "./zIndex";
import breakpoints from "./breakpoints";

const memberPortalColors = getColors("member");
const employerPortalColors = getColors("employer");

const memberPortalTokens = {
  colors: memberPortalColors,
  borders,
  spacing,
  typography,
  zIndex,
  breakpoints,
};

const employerPortalTokens = {
  colors: employerPortalColors,
  borders,
  spacing,
  typography,
  zIndex,
  breakpoints,
};

export default function tokens() {
  return memberPortalTokens;
}
