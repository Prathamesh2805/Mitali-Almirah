import { Shield, Award, Users, Factory } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Premium Manufacturing",
    description:
      "State-of-the-art manufacturing with fully powder coated finish for superior durability and rust resistance.",
  },
  {
    icon: Shield,
    title: "25+ Years Experience",
    description:
      "Built on decades of expertise in cooler industry, now bringing same quality standards to almirah manufacturing.",
  },
  {
    icon: Award,
    title: "Italian Design Excellence",
    description:
      "Premium Italian collection with durable hinges, secret lockers, and innovative storage compartments.",
  },
  {
    icon: Users,
    title: "Complete Range",
    description:
      "From compact 2-door models to spacious 4-door systems with multiple color options to suit every need.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Mitali Almirah
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established in 2020, Mitali Almirah / Cool Home Safe has swiftly
              become a prominent name in the furniture industry. This
              achievement is a testament to the dedication of our skilled
              workforce, our commitment to constant innovation, and our ongoing
              investment in research and development, which enables us to meet
              the evolving demands of urban markets. As one of leading furniture
              manufacturers, Mitali Almirah / Cool Home Safe offers a Premium
              range of powder-coated furniture. With our high-quality products,
              efficient delivery, and excellent customer service, we strive to
              be the preferred choice for home and office furniture.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Additionally, With 25 years of experience in the cooler industry,
              Cool Home Coolers is committed to delivering High-quality air
              Coolers paired with good service, ensuring an optimal experience
              for our customers.
            </p>
            <p className="text-xl md:text-1xl font-bold mb-6 text-primary">
              - Mr. Pratham Ganesh Mamdi (Director)
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-wood-light rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">
                  Product Models
                </div>
              </div>
              <div className="text-center p-4 bg-wood-light rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">6</div>
                <div className="text-sm text-muted-foreground">
                  Color Options
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid (Always 2x2) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gradient-subtle rounded-lg shadow-elegant hover:shadow-product transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wood-accent rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
