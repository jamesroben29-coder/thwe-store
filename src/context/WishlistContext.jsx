
// import React, { useState } from 'react';
// import { createContext , useContext} from 'react';

// const WishlistContext = createContext();
// const WishlistProvider = ({children}) => {

//     const [ wishlistItems , setWishlistItems ] = useState([]);

//     const addToWishlist = (product) => {
//         const isAlreadyAdd = wishlistItems.some((item) => item.id === product.id);

//         if(isAlreadyAdd){
//             return;
//         }else{
//             setWishlistItems(prev => [ ...prev, product]);
//         }
        
//     }

//     const removeFromWishlist = (id) => {
//         setWishlistItems((prev) => prev.filter((item) => item.id !== id));
//     }

//   return (
//         <WishlistContext.Provider value={{ wishlistItems, setWishlistItems, addToWishlist, removeFromWishlist}}>
//             {children}
//         </WishlistContext.Provider>
//   )
// }

// const useWishlist = () => {
//     return useContext(WishlistContext)
// };
// export { WishlistProvider, useWishlist};



import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {

    const [wishlistItems, setWishlistItems] = useState(() => {
        try {
            const savedWishlist = localStorage.getItem("thwe-store-wishlist");
            return savedWishlist ? JSON.parse(savedWishlist) : [];
        } catch (error) {
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


const useWishlist = () => {
    return useContext(WishlistContext);
};

export { WishlistProvider, useWishlist };