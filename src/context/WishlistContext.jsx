
import { useState, useEffect } from "react";
import { WishlistContext } from "./WishlistContextValue";

const WishlistProvider = ({ children }) => {

    const [wishlistItems, setWishlistItems] = useState(() => {
        try {
            const savedWishlist = localStorage.getItem("thwe-store-wishlist");
            return savedWishlist ? JSON.parse(savedWishlist) : [];
        } catch {
            return [];
        }
    });


    useEffect(() => {
        localStorage.setItem(
            "thwe-store-wishlist",
            JSON.stringify(wishlistItems)
        );
    }, [wishlistItems]);


    const addToWishlist = (product) => {

        const isAlreadyAdd = wishlistItems.some(
            (item) => item.id === product.id
        );

        if (isAlreadyAdd) {
            return;
        }

        setWishlistItems((prev) => [
            ...prev,
            product
        ]);
    };

    const removeFromWishlist = (id) => {

        setWishlistItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                setWishlistItems,
                addToWishlist,
                removeFromWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};


export { WishlistProvider };
