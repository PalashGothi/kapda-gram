'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cart';
import { useAuthStore } from '@/store/auth';
import { supabase } from '@/lib/supabase';
import { toast } from 'react-hot-toast';
import { Trash2, Minus, Plus } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCartStore();
  const { user } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      toast.error('Please login to place an order');
      router.push('/login');
      return;
    }

    if (items.length === 0) return;

    setLoading(true);

    try {
      // 1. Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([
          { customer_id: user.id, total_amount: totalPrice() }
        ])
        .select()
        .single();

      if (orderError) throw orderError;

      // 2. Create order items
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price_at_time: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      toast.success('Order placed successfully! We will contact you soon.');
      clearCart();
      router.push('/products');
      
    } catch (error: any) {
      toast.error(error.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-24 container mx-auto px-4 md:px-8 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-serif text-deepbrown dark:text-ivory mb-4">Your cart is empty</h1>
        <p className="text-deepbrown/60 dark:text-sand/60 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products" className="px-8 py-3 bg-mutedgold text-deepbrown font-medium hover:bg-mutedgold/90 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 container mx-auto px-4 md:px-8 min-h-screen">
      <h1 className="text-4xl font-serif text-deepbrown dark:text-ivory mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 p-4 border border-stone-200 dark:border-stone-800 rounded-xl bg-white dark:bg-[#1a0f0a]">
              <div className="relative w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-stone-100 dark:bg-stone-900 rounded-lg overflow-hidden">
                <Image src={item.image_url} alt={item.name} fill className="object-cover" />
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-serif text-deepbrown dark:text-ivory">{item.name}</h3>
                    <button onClick={() => removeItem(item.id)} className="text-stone-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-deepbrown/60 dark:text-sand/60 mb-2">{item.category}</p>
                  <p className="font-medium text-deepbrown dark:text-ivory">₹{item.price}</p>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-stone-50 dark:bg-[#1a0f0a] border border-stone-200 dark:border-stone-800 p-6 rounded-xl sticky top-32">
            <h2 className="text-xl font-serif text-deepbrown dark:text-ivory mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-deepbrown/70 dark:text-sand/70">
                <span>Subtotal</span>
                <span>₹{totalPrice()}</span>
              </div>
              <div className="flex justify-between text-deepbrown/70 dark:text-sand/70">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="border-t border-stone-200 dark:border-stone-700 pt-4 mt-4 flex justify-between font-medium text-lg text-deepbrown dark:text-ivory">
                <span>Total</span>
                <span>₹{totalPrice()}</span>
              </div>
            </div>

            {!user ? (
              <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-lg text-sm mb-4">
                You must login to place an order.
                <Link href="/login" className="block mt-2 font-medium underline">Go to Login</Link>
              </div>
            ) : null}

            <button
              onClick={handleCheckout}
              disabled={loading || !user}
              className="w-full py-4 bg-deepbrown dark:bg-ivory text-white dark:text-deepbrown font-medium tracking-wide hover:opacity-90 transition-opacity rounded-lg disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Place Order Request'}
            </button>
            <p className="text-xs text-center mt-4 text-deepbrown/50 dark:text-sand/50">
              By placing an order, our team will contact you to confirm shipping details and payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
