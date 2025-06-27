
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Heart } from "lucide-react";

const VisionMission = () => {
  return (
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
  );
};

export default VisionMission;
