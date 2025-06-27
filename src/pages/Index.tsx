
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Users, Target, Eye, Heart, Leaf, TrendingUp, Shield, Handshake } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              🌾 Sakhisaheli Mahila Farmer Producer Company Limited
            </h1>
            <p className="text-green-100 text-lg">
              Empowering Women Farmers • Building Sustainable Agriculture • Creating Prosperity
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Transforming Lives Through Agriculture
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto">
            A women-led farmer producer organization dedicated to empowering over 500 women shareholders 
            in Jhalawar District, Rajasthan since 2022.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600">Women Shareholders</div>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">2022</div>
              <div className="text-sm text-gray-600">Established</div>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-green-600">Rajasthan</div>
              <div className="text-sm text-gray-600">Jhalawar District</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
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

      {/* Vision and Mission */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                  <Eye className="h-6 w-6" />
                  👁️‍🗨️ Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  To become a leading women-led Farmer Producer Company in Rajasthan, creating a sustainable 
                  agricultural ecosystem that ensures prosperity, dignity, and self-reliance for women farmers.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  🌟 Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Empower women and tribal farmers through collective action and capacity building.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide timely access to affordable agri-inputs and market linkages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Promote value addition, processing, and direct marketing to increase farmers' income.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Strengthen rural livelihoods through innovation, partnerships, and inclusive development.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
              <Target className="h-8 w-8" />
              🎯 Our Objectives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to empowering farmers and building sustainable agricultural practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Market & Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Produce, procure, process, and market members' agricultural produce, ensuring fair prices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Quality Inputs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Provide quality seeds, fertilizers, pesticides, and technical services to our members.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Sustainable Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Promote sustainable and organic farming methods for long-term agricultural health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Capacity Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Undertake capacity building, training, and awareness programs for farmer development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Handshake className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Collective Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance collective bargaining power of women farmers in the marketplace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create infrastructure for grading, sorting, packaging, and storage of produce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Sakhisaheli Mahila Farmer Producer Company Limited</h3>
            <p className="text-gray-400 mb-4">
              Aklera Block, Jhalawar District, Rajasthan | Registered under Companies Act, 2013
            </p>
            <p className="text-gray-400 text-sm">
              Supported by NABARD • Implemented through SIIRD • Part of CSS scheme for 10,000 FPOs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
