import React from "react";
import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-cyan-950 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/mainpropic.jpg"
        width={200}
        height={200}
        alt="PNCH"
        priority={true}
      />
    </section>
  );
}
