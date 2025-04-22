import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Financial Management
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Gain clarity and control over your finances with intelligent
            budgeting, transaction tracking, and actionable insights.
            Enterprise-grade security included.
          </p>
          <div className="flex justify-center space-x-4">
            <SignedOut>
              <SignUpButton>
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                  Start Free Trial
                </Button>
              </SignUpButton>
              {/* <SignInButton>
                <Button
                  variant="outline"
                  className="px-8 py-4 border-gray-300 text-gray-700"
                >
                  Demo Preview
                </Button>
              </SignInButton> */}
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                  Go to Dashboard <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
