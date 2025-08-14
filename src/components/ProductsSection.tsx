import { Card, CardContent } from "@/components/ui/card";
import steelAlmirah from "@/assets/steel-almirah.jpg";
import traditionalAlmirah from "@/assets/traditional-almirah.jpg";
import modularAlmirah from "@/assets/modular-almirah.jpg";

const products = [
  {
    title: "Gold Italian Sangam",
    image: steelAlmirah,
    description: "Premium 2-door steel almirahs with stylish bangle stand, secret lockers, and coat & saree chambers. Available in multiple colours.",
    dimensions: "D: 20\" | W: 47\" | H: 78\"",
    features: ["Two Door Design", "Stylish Bangle Stand", "Secret Lockers", "Coat & Saree Chamber", "Inside 1 & Outside 2 Drawer", "Fully Powder Coated"],
    variants: []
  },
  {
    title: "Regular 3 Door 3 Drop",
    image: traditionalAlmirah,
    description: "Standard design almirahs with 3 Doors and premium finishes with stylish bangle stand, 2 secret lockers, coat & saree chambers and 3 outside drawers.",
    dimensions: "D: 20\" | W: 47\" | H: 78\"",
    features: ["Secret Locker System", "Coat & Saree Chamber", "Inside & Outside Drawers", "Superior Powder Coating"],
    variants: []
  },
  {
    title: "Regular Sangam",
    image: modularAlmirah,
    description: "Spacious 2-door almirahs with inner drawer and compartments. Perfect for small families. Available in multiple colors.",
    dimensions: "D: 19\" | W: 42\" | H: 78\"",
    features: ["Two Door Configuration", "Stylish bangle stand", "Two Secret Locker", "Coat & Saree Chamber", "Optimized Storage"],
    variants: []
  }
];

const colorOptions = [
  { name: "Black", color: "bg-gray-900" },
  { name: "Maroon", color: "bg-red-900" },
  { name: "Navy Blue", color: "bg-blue-900" },
  { name: "Purple", color: "bg-purple-800" },
  { name: "Grey", color: "bg-gray-500" },
  { name: "Pink", color: "bg-pink-400" }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Mitali Almirah Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Premium steel almirahs with innovative designs and superior quality. From compact solutions to spacious multi-door systems.
          </p>
          
          {/* Color Options Display */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="text-sm font-semibold text-primary">Available Colors:</span>
            {colorOptions.map((color, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${color.color} border-2 border-gray-300`}></div>
                <span className="text-sm text-muted-foreground">{color.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-product hover:-translate-y-2 bg-background/90 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-wood-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm font-semibold text-wood-accent mb-3">
                  {product.dimensions}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-wood-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  {/* <h4 className="text-sm font-semibold text-primary mb-2">Available Variants:</h4> */}
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, variantIndex) => (
                      <span 
                        key={variantIndex} 
                        className="px-2 py-1 bg-wood-light text-xs rounded-md text-primary font-medium"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Complete Product Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-wood-accent mb-2">Regular Series</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regular Sangam (17×38×78")</li>
                  <li>• Regular Single (17×34×78")</li>
                  <li>• Regular 3 Door Plain (20×47×78")</li>
                  <li>• Regular 3 Door 3 Drop (20×47×78")</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-wood-accent mb-2">Italian Collection</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Diamond Italian Sangam (20×44×78")</li>
                  <li>• Gold Italian Sangam (20×47×78")</li>
                  <li>• Gold Italian 3 Door 3 Drop (20×47×78")</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-wood-accent mb-2">Premium Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Auto Hinges (Italian Series)</li>
                  <li>• Secret Locker System</li>
                  <li>• Stylish Bangle Stand</li>
                  <li>• Coat & Saree Chamber</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-wood-accent mb-2">Unique Series</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Unique 3 Door 3 Drop (20×48×78")</li>
                  <li>• Custom Configurations</li>
                  <li>• Special Color Options</li>
                  <li>• Bulk Order Pricing</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-3">
            Get detailed specifications, pricing, and customization options for your requirements.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-wood-light rounded-lg">
            <span className="text-primary font-semibold">📧 Contact us for complete catalog with pricing details</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;