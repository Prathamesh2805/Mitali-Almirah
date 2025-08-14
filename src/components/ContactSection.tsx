import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 89832 27762", "+91 89998 72415"],
    description: "Call us for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["temp@gmail.com", "temp@gmail.com"],  
    description: "Send us your requirements"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Vasarni, Nanded Waghala, Maharashtra - 123456"],
    description: "Visit our manufacturing unit"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    description: "We're here to help you"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space with our premium storage solutions? 
            Contact us today for a consultation and customized quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                    <Input placeholder="Your phone number" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                  <Input placeholder="What can we help you with?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements, dimensions, preferred materials, budget, etc."
                    className="min-h-32 resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-product transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-wood-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-primary">
                        {contact.title}
                      </h3>
                      {contact.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-foreground font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-muted-foreground text-sm mt-1">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-wood-light rounded-lg shadow-elegant">
            <div className="mr-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-primary font-semibold">
              🏭 Factory visits welcome! Schedule an appointment to see our manufacturing process
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;