import { useContext } from "react";
import { WishlistContext } from "./WishlistContextValue";

export const useWishlist = () => useContext(WishlistContext);
