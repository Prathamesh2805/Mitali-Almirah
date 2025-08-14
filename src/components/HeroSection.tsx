import brandLogo from "@/assets/brand-logo.png";
import heroImage from "@/assets/hero-image.png";
import heroImageMobile from "@/assets/hero-image-mobile.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-hero pt-20 md:min-h-screen">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-center w-full max-w-6xl px-6 gap-12">
        <div className="flex-1 flex justify-center">
          <img
            src={brandLogo}
            alt="Brand Logo"
            className="w-full max-w-md h-auto"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={heroImage}
            alt="Hero Image"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden w-full h-screen">
        <img
          src={heroImageMobile}
          alt="Hero Mobile"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
