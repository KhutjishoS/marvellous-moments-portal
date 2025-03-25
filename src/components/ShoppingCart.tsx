
import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { toast } from '@/hooks/use-toast';

const ShoppingCart: React.FC = () => {
  const { 
    cartItems, 
    cartCount, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    isCartOpen, 
    toggleCart 
  } = useShoppingCart();

  const handleCheckout = () => {
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your order. We'll be in touch soon.",
    });
    clearCart();
    toggleCart();
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  ).toFixed(2);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-md max-h-[90vh] m-4 overflow-hidden flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-wedding-cream">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5 text-wedding-gold" />
            <h3 className="font-serif text-xl">Your Cart ({cartCount})</h3>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleCart} 
            className="rounded-full hover:bg-wedding-gold/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>

        <div className="flex-grow overflow-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <ShoppingBag className="h-12 w-12 text-wedding-gold/30 mb-4" />
              <p className="text-wedding-charcoal/70">Your cart is empty</p>
              <Button 
                variant="outline" 
                onClick={toggleCart} 
                className="mt-4 border-wedding-gold/30 text-wedding-gold hover:bg-wedding-gold/10"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="border-b border-wedding-gold/10 pb-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-wedding-gold">R{item.price.toFixed(2)} per person</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeFromCart(item.id)} 
                      className="h-8 w-8 rounded-full hover:bg-wedding-gold/10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-wedding-gold/20 rounded-full">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 rounded-full hover:bg-wedding-gold/10"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 rounded-full hover:bg-wedding-gold/10"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="font-medium">R{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <CardFooter className="border-t border-wedding-gold/10 p-4 flex flex-col">
            <div className="flex justify-between w-full mb-4">
              <span className="font-medium">Total:</span>
              <span className="font-serif text-lg text-wedding-gold">R{totalPrice}</span>
            </div>
            <div className="flex gap-2 w-full">
              <Button 
                variant="outline" 
                onClick={clearCart} 
                className="flex-1 border-wedding-gold/30 text-wedding-charcoal hover:bg-wedding-gold/10"
              >
                Clear Cart
              </Button>
              <Button 
                onClick={handleCheckout} 
                className="flex-1 bg-wedding-gold hover:bg-wedding-gold/90 text-white"
              >
                Checkout
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ShoppingCart;
