import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className="border rounded-full shadow-lg hover:shadow-xl"
        src="/android-chrome-512x512.png"
        alt="Logo"
        width={256}
        height={256}
        priority
      />

      <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
        <Image
          className="inline-block md:mr-1 pb-5"
          alt="love"
          src="/waving-hand.png"
          width={50}
          height={50}
          priority
        />{" "}
        Hii, I&apos;m{" "}
        <Link className="text-blue-500 mx-1" href="https://github.com/ptosbc">
          PTOS B. C.
        </Link>
      </h1>

      <h5 className="text-base">
        Made with{" "}
        <Image
          className="inline-block mx-1"
          alt="love"
          src="/red-heart.png"
          width={25}
          height={25}
          priority
        />{" "}
        by{" "}
        <Link className="inline-block text-blue-500 mx-1" href="https://github.com/ptosbc">
          PTOS B. C.
        </Link>
      </h5>
    </main>
  );
}
