import React from "react";
import Image from "next/image";
import logos from "@/constants/logos";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LandingNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-36 bg-transparent flex items-center">
      <div className="container flex items-center justify-between">
        <div className="logoWrapper">
          <Image src={logos.logo} alt="Logo" width={80} height={80} />
        </div>
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default LandingNavigation;
