"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("panatribes-cart");
    if (savedCart) {
      try {
        const parsedItems = JSON.parse(savedCart);
        // Normalize IDs to strings for consistency
        const normalizedItems = parsedItems.map((item: any) => ({
          ...item,
          id: String(item.id)
        }));
        setItems(normalizedItems);
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("panatribes-cart", JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addToCart = (product: Product, quantity: number) => {
    const productId = String(product.id);
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => String(item.id) === productId);
      if (existingItem) {
        return prevItems.map((item) =>
          String(item.id) === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, id: productId, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string | number) => {
    const idStr = String(productId);
    setItems((prevItems) => prevItems.filter((item) => String(item.id) !== idStr));
  };

  const updateQuantity = (productId: string | number, quantity: number) => {
    const idStr = String(productId);
    if (quantity <= 0) {
      removeFromCart(idStr);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        String(item.id) === idStr ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
