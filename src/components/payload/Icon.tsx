import Image from "next/image";

import logo from "@/assets/logos/logo.png";

export default function Icon() {
  return (
    <Image
      src={logo}
      alt="Pausalni Prihodi"
      width={24}
      height={24}
      style={{ borderRadius: 6 }}
    />
  );
}
