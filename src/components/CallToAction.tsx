
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
          Together, we can build a stronger, more sustainable agricultural future for women farmers in Rajasthan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
            Learn More About Us
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
