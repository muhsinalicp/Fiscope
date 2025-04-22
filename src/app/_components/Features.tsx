import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, PieChart, Wallet } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Financial Tools
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage personal finances effectively
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-blue-100 w-fit p-3 rounded-lg mb-4">
                <Wallet className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Transaction Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Real-time tracking with intelligent categorization and custom
                rules
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-green-100 w-fit p-3 rounded-lg mb-4">
                <PieChart className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Visual Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Interactive dashboards with spending trends and budget
                forecasting
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-purple-100 w-fit p-3 rounded-lg mb-4">
                <Lock className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Bank-grade Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                AES-256 encryption and multi-factor authentication
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
