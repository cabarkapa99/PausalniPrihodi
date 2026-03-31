import Image from "next/image";

import logo from "@/assets/logos/logo.png";

export default function Logo() {
  return (
    <div className="payload-admin-logo">
      <Image
        src={logo}
        alt="Pausalni Prihodi logo"
        className="payload-admin-logo__image"
        priority
      />
      <div className="payload-admin-logo__text">
        <strong>Paušalni Prihodi</strong>
        <span>Prijavite se na administrativni panel</span>
      </div>
    </div>
  );
}
