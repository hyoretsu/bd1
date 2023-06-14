import React, { createContext, useCallback, useState, useContext, useEffect, PropsWithChildren, useMemo } from 'react';

interface CartContextData {
    products: Record<string,number>;
    decreaseProduct: (productId: number)=>void;
    increaseProduct: (productId: number)=>void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [products, setProducts] = useState<Record<string,number>>({});


    const decreaseProduct = useCallback((productId: number) => {
        setProducts((prevQuantities) => ({
          ...prevQuantities,
          [productId]: (prevQuantities[productId] || 1) - 1,
        }));
      },[]);

      const increaseProduct = useCallback((productId: number) => {
        setProducts((prevQuantities) => ({
          ...prevQuantities,
          [productId]: (prevQuantities[productId] || 0) + 1,
        }));
      },[]);

    const cartData = useMemo(
        () => ({ decreaseProduct,increaseProduct,products }),
        [decreaseProduct,increaseProduct,products],
    );

    return <CartContext.Provider value={cartData}>{children}</CartContext.Provider>;
};

function useCart(): CartContextData {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within an CartProvider');
    }

    return context;
}

export { CartProvider, useCart };
