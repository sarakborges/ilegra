import { Master } from "./Master";

export interface App {
  master: Master | undefined;
  isLoading: boolean;
}
