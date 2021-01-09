import { INCR, DECR } from "./counter.actiontypes";

let incrAction = () => {
  console.log("inside incr action");
  return { type: INCR, Karthik: "Good Boy" };
};

let decrAction = () => {
  return { type: DECR };
};
export { incrAction, decrAction };
