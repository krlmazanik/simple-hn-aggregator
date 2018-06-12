import { ADD_STORIES } from "./actions";

const initialState = {
  stories: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STORIES:
      var newState = { ...state };
      return {
        ...newState,
        stories: [action.stories]
      };
    default:
      return state;
  }
}
