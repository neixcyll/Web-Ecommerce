import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartContext } from "@/components/cart-context";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartContext();
  const { toast } = useToast();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product);

    toast({
      title: "Produk ditambahkan",
      description: `${product.name} berhasil ditambahkan ke keranjang`,
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.featured && (
              <Badge variant="destructive" className="text-xs">
                Featured
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-green-500 text-white text-xs">
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="secondary" className="w-8 h-8">
              <Heart className="w-4 h-4" />
            </Button>
            <Link to={`/product/${product.id}`}>
              <Button size="icon" variant="secondary" className="w-8 h-8">
                <Eye className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive">Stok Habis</Badge>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs mb-2">
              {product.brand}
            </Badge>
            <h3 className="font-semibold text-sm mb-1 line-clamp-2 text-card-foreground">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-lg text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.inStock ? "Tambah ke Keranjang" : "Stok Habis"}
        </Button>
      </CardFooter>
    </Card>
  );
};
