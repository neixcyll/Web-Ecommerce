import { Search, Home, Bell, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemCount?: number;
  onSearchChange?: (query: string) => void;
}

export const Header = ({ cartItemCount = 0, onSearchChange }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold"><img src="logo_fixie.png" alt="" /></span>
            </div>
            <span className="text-xl font-bold text-foreground">FixieStore</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari produk fixie..."
                className="pl-10 bg-muted/50"
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="w-5 h-5" />
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs p-0"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};