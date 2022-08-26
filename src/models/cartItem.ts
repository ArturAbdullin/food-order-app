import { Meal } from "./meal";
import { PartialBy } from "./utility";

export type CartItem = PartialBy<Meal, "description"> & {
  amount: number;
};
