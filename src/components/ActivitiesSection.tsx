
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Shield, Leaf, Users, Handshake } from "lucide-react";

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4 flex items-center justify-center gap-2">
            <Target className="h-8 w-8" />
            🎯 Our Activities & Objectives
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
  );
};

export default ActivitiesSection;
