import React from "react";
import Image from "next/image";
import logos from "@/constants/logos";
import Link from "next/link";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LandingNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src={logos.logo}
              alt="Paušalni Prihodi Logo"
              width={50}
              height={50}
            />
          </Link>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">
              Paušalni Prihodi
            </span>
            <span className="text-sm text-gray-600">Za preduzetnike</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Funkcije
          </Link>
          <Link
            href="#benefits"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Prednosti
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Recenzije
          </Link>
          <Link
            href="#demo"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Demo
          </Link>
          <Link
            href="#faq"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Česta pitanja
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Kontakt
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Prijava
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavigation;
