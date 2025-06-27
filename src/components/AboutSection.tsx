
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <Card className="mb-12 border-0 shadow-lg">
          <CardHeader className="bg-green-50 text-center">
            <CardTitle className="text-3xl text-green-800 flex items-center justify-center gap-2">
              <Users className="h-8 w-8" />
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                <strong>Sakhisaheli Mahila Farmer Producer Company Limited</strong> is a women-led farmer producer 
                organization registered under the Companies Act, 2013. Established in 2022 under the CSS scheme 
                for formation and promotion of 10,000 FPOs, the company is located in Aklera Block, Jhalawar District, Rajasthan.
              </p>
              <p className="text-lg mb-6">
                With over <strong>500 women shareholders</strong>, the company focuses on empowering small and marginal 
                farmers — especially women and tribal farmers — by improving access to quality inputs, better prices, 
                and sustainable farming practices.
              </p>
              <p className="text-lg">
                Supported by <strong>NABARD</strong> and implemented through <strong>SIIRD</strong>, our FPO connects 
                farmers with markets, inputs, and capacity building for better productivity and income.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
