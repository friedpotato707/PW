import {
  SET_BACKGROUND_COLOR,
  SET_ACTIVE_PAGE_SECTION_FLAG,
  PREVIEW_IMAGE,
} from "./types";

export function setBackgroundColor(colorIndex) {
  return {
    type: SET_BACKGROUND_COLOR,
    backgroundColorIndex: colorIndex > 1 ? 0 : colorIndex,
  };
}

export function setActivePageSectionFlag(pageSectionIndex, value) {
  return {
    type: SET_ACTIVE_PAGE_SECTION_FLAG,
    pageSectionIndex: pageSectionIndex,
    value: value,
  };
}

export function previewImage(image) {
  return {
    type: PREVIEW_IMAGE,
    image: image,
  };
}
