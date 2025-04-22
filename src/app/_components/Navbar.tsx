"use client";
import { useInitUser } from "@/components/hooks/useInitUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  useClerk,
  UserButton,
  UserProfile,
  useUser,
} from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BarChart, LayoutDashboard, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  IconEyeQuestion,
  IconInfoCircle,
  IconLogout,
} from "@tabler/icons-react";

function Navbar() {
  useInitUser();

  const { user } = useUser();
  const { openUserProfile } = useClerk();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">FinViz</span>
          </Link>
          <div className="hidden sm:flex items-center space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              About
            </Link>
            <SignedOut>
              <div className="flex items-center space-x-4">
                <SignInButton>
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:bg-gray-100"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          <div className="flex sm:hidden">
            <SignedIn>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="h-10 w-10 rounded-full">
                    <AvatarImage
                      src={user?.hasImage ? user.imageUrl : ""}
                      alt={user?.fullName || "user profile pic"}
                    />
                    <AvatarFallback className="rounded-full">MA</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => openUserProfile()}>
                    <div className="flex items-center gap-1">
                      <User />
                      Profile
                    </div>
                  </DropdownMenuItem>

                  <Link href={"/about"}>
                    <DropdownMenuItem>
                      <div className="flex items-center gap-1">
                        <IconInfoCircle />
                        About
                      </div>
                    </DropdownMenuItem>
                  </Link>

                  <Link href={"/dashboard"}>
                    <DropdownMenuItem>
                      <div className="flex items-center gap-1">
                        <LayoutDashboard />
                        Dashboard
                      </div>
                    </DropdownMenuItem>
                  </Link>

                  <DropdownMenuItem>
                    <SignOutButton>
                      <div className="flex items-center gap-1">
                        <IconLogout />
                        Sign Out
                      </div>
                    </SignOutButton>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>

            <SignedOut>
              <div className="flex gap-2">
                <SignInButton>
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:bg-gray-100"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// <nav className="bg-white shadow-sm">
// <div className="container mx-auto px-4 sm:px-6 py-4">
//   <div className="flex justify-between items-center">
//     <Link href="/" className="flex items-center space-x-2">
//       <BarChart className="h-6 w-6 text-blue-600" />
//       <span className="text-xl font-semibold text-gray-900">FinViz</span>
//     </Link>

//     <div className="hidden md:flex items-center space-x-6">
//       <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
//         Dashboard
//       </Link>
//       <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
//         About
//       </Link>
//       <SignedOut>
//         <div className="flex items-center space-x-4">
//           <SignInButton>
//             <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton>
//             <Button className="bg-blue-600 hover:bg-blue-700">
//               Get Started
//             </Button>
//           </SignUpButton>
//         </div>
//       </SignedOut>
//       <SignedIn>
//         <UserButton afterSignOutUrl="/" />
//       </SignedIn>
//     </div>

//     <button
//       className="md:hidden p-2 rounded-lg hover:bg-gray-100"
//       onClick={() => setIsMenuOpen(!isMenuOpen)}
//     >
//       {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//     </button>
//   </div>

//   {isMenuOpen && (
//     <div className="md:hidden mt-4 space-y-4 pb-4">
//       <Link
//         href="/dashboard"
//         className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//         onClick={() => setIsMenuOpen(false)}
//       >
//         Dashboard
//       </Link>
//       <Link
//         href="/about"
//         className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
//         onClick={() => setIsMenuOpen(false)}
//       >
//         About
//       </Link>
//       <SignedOut>
//         <div className="space-y-2">
//           <SignInButton>
//             <Button
//               variant="outline"
//               className="w-full justify-center"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Button>
//           </SignInButton>
//           <SignUpButton>
//             <Button
//               className="w-full justify-center bg-blue-600 hover:bg-blue-700"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Get Started
//             </Button>
//           </SignUpButton>
//         </div>
//       </SignedOut>
//       <SignedIn>
//         <div className="pt-4 border-t border-gray-200">
//           <UserButton afterSignOutUrl="/" />
//         </div>
//       </SignedIn>
//     </div>
//   )}
// </div>
// </nav>
