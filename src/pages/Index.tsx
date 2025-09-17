import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CategoryNav } from '@/components/CategoryNav';
import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';
import { sampleProducts } from '@/data/products';
import { useCart } from '@/hooks/useCart';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { cart, addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={cart.itemCount}
        onSearchChange={setSearchQuery}
      />
      
      <HeroSection />
      
      <CategoryNav 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-8">
        {searchQuery && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              Menampilkan {filteredProducts.length} hasil untuk "{searchQuery}"
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-lg font-semibold mb-2">Tidak ada produk ditemukan</h3>
            <p className="text-muted-foreground">
              Coba ubah kategori atau kata kunci pencarian
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
