'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'react-hot-toast';
import { Upload, Plus, Loader2 } from 'lucide-react';

export default function AdminProducts() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Silk Sarees',
    price: '',
  });

  const categories = ['Silk Sarees', 'Cotton Sarees', 'Lehengas', 'Kurtis', 'Accessories'];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast.error('Please upload an image');
      return;
    }

    setLoading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('products')
        .insert([
          {
            name: formData.name,
            description: formData.description,
            category: formData.category,
            price: parseFloat(formData.price) || 0,
            image_url: publicUrl,
          }
        ]);

      if (dbError) throw dbError;

      toast.success('Product added successfully!');
      
      setFormData({ name: '', description: '', category: 'Silk Sarees', price: '' });
      setFile(null);
      setPreview(null);
      
    } catch (error: any) {
      toast.error(error.message || 'Failed to add product');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-deepbrown dark:text-ivory mb-2">Manage Products</h1>
        <p className="text-deepbrown/60 dark:text-sand/60">Add new products to your store catalog.</p>
      </div>

      <div className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-200 dark:border-stone-800">
        <h2 className="text-xl font-semibold text-deepbrown dark:text-ivory mb-6 flex items-center">
          <Plus className="mr-2 h-5 w-5 text-terracotta" /> Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-deepbrown dark:text-ivory mb-2">Product Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-stone-300 dark:border-stone-700 border-dashed rounded-xl hover:border-mutedgold transition-colors bg-stone-50 dark:bg-stone-800">
                <div className="space-y-2 text-center">
                  {preview ? (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <img src={preview} alt="Preview" className="object-cover w-full h-full" />
                    </div>
                  ) : (
                    <Upload className="mx-auto h-12 w-12 text-stone-400" />
                  )}
                  <div className="flex text-sm text-deepbrown/60 dark:text-sand/60 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-mutedgold hover:text-mutedgold/80 focus-within:outline-none px-2 py-1">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" accept="image/*" className="sr-only" onChange={handleFileChange} />
                    </label>
                  </div>
                  <p className="text-xs text-stone-500">PNG, JPG, WEBP up to 5MB</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-deepbrown dark:text-ivory mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 bg-transparent text-deepbrown dark:text-ivory rounded-lg focus:ring-2 focus:ring-mutedgold outline-none"
                  placeholder="e.g., Banarasi Silk Saree"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-deepbrown dark:text-ivory mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-deepbrown dark:text-ivory rounded-lg focus:ring-2 focus:ring-mutedgold outline-none"
                >
                  {categories.map((c) => (
                    <option key={c} value={c} className="bg-white text-deepbrown dark:bg-stone-900 dark:text-ivory">{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-deepbrown dark:text-ivory mb-1">Price (₹)</label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 bg-transparent text-deepbrown dark:text-ivory rounded-lg focus:ring-2 focus:ring-mutedgold outline-none"
                  placeholder="e.g., 5000"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-deepbrown dark:text-ivory mb-1">Description</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-stone-300 dark:border-stone-700 bg-transparent text-deepbrown dark:text-ivory rounded-lg focus:ring-2 focus:ring-mutedgold outline-none"
              placeholder="Describe the product details, fabric, and origin..."
            />
          </div>

          <div className="flex justify-end pt-4 border-t border-stone-200 dark:border-stone-800">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center px-6 py-3 bg-deepbrown dark:bg-ivory text-white dark:text-deepbrown rounded-lg hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-mutedgold transition-all disabled:opacity-50"
            >
              {loading ? (
                <><Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" /> Adding Product...</>
              ) : (
                'Save Product'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
