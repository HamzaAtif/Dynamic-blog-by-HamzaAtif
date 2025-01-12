import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-black lg-rounded-lg p-6 mt-[100px] mb-[200px]">
        <div className="flex items-center">


        <Image
          src={'/Profile.jpeg'}
          alt='Profile'
          width={50}
          height={50}
          className="ml-5 rounded-full cursor-pointer transition-all ease-out transform hover:border-2 hover:border-blue-500 hover:shadow-lg active:scale-90"
        />

        <div className="ml-5">
          <h3 className="text-2xl text-white">Hamza Atif</h3>
          <p className="text-slate-500">
            Software engineer | AI Beginner | Tech enthusiast
          </p>
        </div>

      </div>

      <p className="mt-8 leading-relaxed text-white">
        Hamza is a a Software engineer, learning from Giaic and doing O-levels in Beaconhouse. Hamza&apos;s growng interest in learning machine learning algorithms and building AI based models have encourage him to dive deep in the world of AI.
      </p>

      <div className="mt-4 flex space-x-3 sm:flex-shrink-1 ">

        <Link
          href=""
          className="px-4 py-2 h-10 text-white rounded-md bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
          Linkedin
        </Link>

        <Link
          href=""
          className="px-4 py-2 h-10 text-white rounded-md bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
          Github
        </Link>

        <Link
          href=""
          className="px-4 py-2 h-10 text-white rounded-md bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hidden lg:block md:block">
          Gmail
        </Link>

      </div>
    </div>
  );
}