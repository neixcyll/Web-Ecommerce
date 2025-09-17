import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartContext } from "@/components/cart-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCartContext();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartItemCount={cart.itemCount} />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground" />
            <div>
              <h1 className="text-2xl font-bold mb-2">Keranjang Kosong</h1>
              <p className="text-muted-foreground">Belum ada produk di keranjang Anda</p>
            </div>
            <Link to="/">
              <Button size="lg" className="px-4 py-1 rounded mt-20">Mulai Belanja</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={cart.itemCount} />

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Lanjutkan Belanja
        </Link>

        <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <Card key={item.product.id}>
                <CardContent className="p-6 flex gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.product.brand}</p>
                    <p className="font-bold text-primary">{formatPrice(item.product.price)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>

                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({cart.itemCount} items)</span>
                    <span>{formatPrice(cart.total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongkos Kirim</span>
                    <span className="text-green-600">GRATIS</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(cart.total)}</span>
                </div>

                <Link to="/checkout">
                  <Button className="w-full" size="lg">
                    Lanjut ke Pembayaran
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center">
                  Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
