
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for our cart items and context
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
};

// Create the context
const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

// Create a provider component
export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setCartItems(currentItems => {
      // Check if item already exists in cart
      const existingItem = currentItems.find(item => item.id === newItem.id);
      
      if (existingItem) {
        // Increase quantity if item exists
        return currentItems.map(item => 
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new item to cart with quantity 1
        return [...currentItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(currentItems => 
      currentItems.filter(item => item.id !== id)
    );
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    toggleCart
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Create a custom hook to use the shopping cart context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};
