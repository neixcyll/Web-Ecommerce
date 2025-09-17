import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-muted via-background to-accent/20 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
                RIDE
                <span className="block text-primary">WITH</span>
                <span className="block">YOUR</span>
                <span className="block text-primary">CULTURE</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Temukan sepeda fixie premium dan aksesoris berkualitas tinggi untuk urban cycling experience terbaik.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="px-8">
                Jelajahi Koleksi
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>

          {/* Bike Illustration Area */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              {/* Decorative Shape */}
              <div className="w-80 h-48 bg-gradient-to-r from-muted to-accent/30 rounded-full relative">
                {/* Bike SVG Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-auto rounded-lg"><img src="Enjoy.png" alt="" /></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/40 rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};