// To Manage Complex States
export let initialValue = 0;

export const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state === 0) {
        if (state === 0) {
          window.alert(`We Cannot Decrement less than 0`);
          return state;
        }
      }
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
