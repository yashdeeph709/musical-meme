import { createStore } from "redux";

const initialState = {
  todos: [
    {
      name: "Learn Single SPA",
    },
    {
      name: "Learn Multiple SPA",
    },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        todos: [...state.todos, action.data],
      };
    default:
      return state;
  }
}

export const storeInstance = createStore(reducer);
