import { createContext, useContext, ReactNode } from "react";
import { useCart } from "@/hooks/useCart";

type CartProviderProps = { children: ReactNode };

const CartContext = createContext<ReturnType<typeof useCart> | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const cart = useCart();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCartContext must be used within a CartProvider");
  return context;
};
