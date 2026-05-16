'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ orders: 0, products: 0, revenue: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const { count: productCount } = await supabase
          .from('products')
          .select('*', { count: 'exact', head: true });

        const { data: orders, count: orderCount } = await supabase
          .from('orders')
          .select('total_amount');

        const revenue = orders?.reduce((acc, order) => acc + (Number(order.total_amount) || 0), 0) || 0;

        setStats({
          products: productCount || 0,
          orders: orders?.length || 0,
          revenue,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-deepbrown dark:text-ivory mb-2">Welcome Back, Admin</h1>
        <p className="text-deepbrown/60 dark:text-sand/60">Here's an overview of your store today.</p>
      </div>

      {loading ? (
        <div className="flex justify-center p-12">
          <Loader2 className="animate-spin h-8 w-8 text-mutedgold" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800">
            <h3 className="text-sm font-medium text-deepbrown/50 dark:text-sand/50 mb-1">Total Orders</h3>
            <p className="text-3xl font-bold text-deepbrown dark:text-ivory">{stats.orders}</p>
          </div>
          <div className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800">
            <h3 className="text-sm font-medium text-deepbrown/50 dark:text-sand/50 mb-1">Total Products</h3>
            <p className="text-3xl font-bold text-deepbrown dark:text-ivory">{stats.products}</p>
          </div>
          <div className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800">
            <h3 className="text-sm font-medium text-deepbrown/50 dark:text-sand/50 mb-1">Total Revenue</h3>
            <p className="text-3xl font-bold text-deepbrown dark:text-ivory">₹{stats.revenue.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
