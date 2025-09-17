import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Bike, CircleDot, Zap, Framer, Accessibility, Tangent, LoaderPinwheel } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All', icon: Crown },
  { id: 'fixie', label: 'Fixie', icon: Bike },
  { id: 'velg', label: 'Velg', icon: LoaderPinwheel },
  { id: 'ban', label: 'Ban', icon: CircleDot },
  { id: 'gear', label: 'Gear', icon: Zap },
  { id: 'frame', label: 'Frame', icon: Framer },
  { id: 'saddle', label: 'Saddle', icon: Accessibility },
  { id: 'stang', label: 'Stang', icon: Tangent },
];

export const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <div className="bg-white py-4 sticky top-[64px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center gap-2 whitespace-nowrap ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};