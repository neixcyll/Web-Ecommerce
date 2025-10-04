import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  image_url?: string;
  category?: string;
}

const AdminPage = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Form tambah/update produk
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  // state untuk edit
  const [editingId, setEditingId] = useState<string | null>(null);

  // Fetch produk
  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Tambah / Update produk
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      // update produk
      const { error } = await supabase
        .from("products")
        .update({
          name,
          description: desc,
          price: parseFloat(price),
          stock: parseInt(stock),
          image_url: image,
        })
        .eq("id", editingId);

      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Sukses", description: "Produk diperbarui" });
        resetForm();
        fetchProducts();
      }
    } else {
      // tambah produk baru
      const { error } = await supabase.from("products").insert([
        {
          name,
          description: desc,
          price: parseFloat(price),
          stock: parseInt(stock),
          image_url: image,
        },
      ]);

      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Sukses", description: "Produk ditambahkan" });
        resetForm();
        fetchProducts();
      }
    }
  };

  // Hapus produk
  const handleDeleteProduct = async (id: string) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Produk dihapus" });
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  // Set data produk yang mau di-edit
  const handleEditProduct = (product: Product) => {
    setEditingId(product.id);
    setName(product.name);
    setDesc(product.description || "");
    setPrice(product.price.toString());
    setStock(product.stock.toString());
    setImage(product.image_url || "");
  };

  // Reset form
  const resetForm = () => {
    setEditingId(null);
    setName("");
    setDesc("");
    setPrice("");
    setStock("");
    setImage("");
  };

  return (
    <div className="p-8 space-y-8">
      {/* Form tambah/update produk */}
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>{editingId ? "Update Produk" : "Tambah Produk"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Nama Produk</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label>Deskripsi</Label>
              <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div>
              <Label>Harga</Label>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <Label>Stok</Label>
              <Input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </div>
            <div>
              <Label>URL Gambar</Label>
              <Input value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                {editingId ? "Update Produk" : "Tambah Produk"}
              </Button>
              {editingId && (
                <Button type="button" variant="secondary" onClick={resetForm}>
                  Batal
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* List produk */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Produk</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Memuat produk...</p>
          ) : products.length === 0 ? (
            <p>Tidak ada produk.</p>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Rp {product.price} | Stok: {product.stock}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditProduct(product)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;
