import {
  SET_BACKGROUND_COLOR,
  SET_ACTIVE_PAGE_SECTION_FLAG,
  PREVIEW_IMAGE,
} from "./types";

const initialState = {
  backgroundColorIndex: 0,
  sectionFlags: [false, false, false, false, false],
  previewImage: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColorIndex: action.backgroundColorIndex,
      };
    case PREVIEW_IMAGE:
      return {
        ...state,
        previewImage: action.image,
      };
    case SET_ACTIVE_PAGE_SECTION_FLAG:
      return {
        ...state,
        sectionFlags: state.sectionFlags.map(
          (sectionFlag, i) =>
            i === action.pageSectionIndex ? action.value : sectionFlag
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;
