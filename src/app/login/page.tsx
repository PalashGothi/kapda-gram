'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/auth';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast.error('Please enter both name and phone number');
      return;
    }

    setLoading(true);

    try {
      // Check if user exists
      let { data: existingUser, error: searchError } = await supabase
        .from('customers')
        .select('*')
        .eq('phone', phone)
        .single();

      if (searchError && searchError.code !== 'PGRST116') {
        throw searchError; // PGRST116 is "no rows returned"
      }

      let userToLogin = existingUser;

      // If user doesn't exist, create one
      if (!existingUser) {
        const { data: newUser, error: insertError } = await supabase
          .from('customers')
          .insert([{ name, phone }])
          .select()
          .single();

        if (insertError) throw insertError;
        userToLogin = newUser;
      }

      // Log in
      login({
        id: userToLogin.id,
        name: userToLogin.name,
        phone: userToLogin.phone,
      });

      toast.success(`Welcome, ${userToLogin.name}!`);
      router.push('/products'); // Redirect to products
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 container mx-auto px-4 md:px-8 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-[#1a0f0a] p-8 rounded-2xl shadow-xl border border-sand-200 dark:border-stone-800">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-deepbrown dark:text-ivory mb-2">Login or Register</h1>
          <p className="text-deepbrown/60 dark:text-sand/60 font-light text-sm">
            Enter your details to track orders and checkout easily.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-deepbrown dark:text-ivory mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg focus:ring-2 focus:ring-mutedgold outline-none transition-colors"
              placeholder="e.g. Aditi Sharma"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-deepbrown dark:text-ivory mb-2">Phone Number</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg focus:ring-2 focus:ring-mutedgold outline-none transition-colors"
              placeholder="+91 9876543210"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-mutedgold text-deepbrown font-medium tracking-wide hover:bg-mutedgold/90 transition-colors duration-300 rounded-lg disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
