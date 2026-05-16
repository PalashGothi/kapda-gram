'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Package, ShoppingBag, LogOut, Menu, X } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  // Do not wrap the login page in the dashboard layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/dashboard/products', icon: Package },
    { name: 'Orders', href: '/admin/dashboard/orders', icon: ShoppingBag },
  ];

  return (
    <div className="min-h-screen bg-ivory dark:bg-[#1a0f0a] flex">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-deepbrown/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:w-64
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          <div className="px-6 py-8 border-b border-stone-200 dark:border-stone-800 flex justify-between items-center">
            <h2 className="text-2xl font-serif font-bold text-deepbrown dark:text-ivory">Admin</h2>
            <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
              <X className="h-6 w-6 text-deepbrown/60 dark:text-sand/60" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors group
                    ${isActive 
                      ? 'bg-deepbrown text-white dark:bg-ivory dark:text-deepbrown' 
                      : 'text-deepbrown/70 dark:text-sand/70 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-deepbrown dark:hover:text-ivory'
                    }
                  `}
                >
                  <Icon className={`h-5 w-5 mr-3 ${isActive ? '' : 'text-deepbrown/40 dark:text-sand/40 group-hover:text-deepbrown dark:group-hover:text-ivory'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-stone-200 dark:border-stone-800">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 lg:hidden">
          <div className="px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-serif font-bold text-deepbrown dark:text-ivory">Kapda Gram Admin</h1>
            <button onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6 text-deepbrown/70 dark:text-sand/70" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
