import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { Marquee } from "~/components/magicui/marquee";
import { api, HydrateClient } from "~/trpc/server";
import Pricing from "./_components/Pricing";
import SupabillText from "./_components/supabilltextcompoenent";

export default async function Home() {

  return (
    <div>
      <nav className="flex items-center justify-between border-b border-b-slate-200 bg-black px-4 py-4 shadow-sm">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
        >
          Supabill
        </Link>
        <button className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
          Try Supabill
        </button>
      </nav>
      <main className="bg-black pt-36">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full max-w-5xl flex-col gap-4 px-4">
            <h1 className="text-6xl font-bold text-white text-center">
              Simplify billing with Supabill sleek, easy, and painless
            </h1>
            <p className="text-lg text-gray-400 text-center">
              Streamline your billing with simplicity, affordability, and zero headaches —because you deserve it
            </p>
            <div className="flex w-full items-center justify-center py-6">
              <button className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
                Try Supabill 🎉
              </button>
            </div>

          </div>
        </div>

        {/* Marquee Section */}
        <div className="max-w-5xl mx-auto mt-10 flex flex-col items-center gap-4">
          <div>
            <img
              src="/heroimage.png"
              alt="Hero Image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <Marquee pauseOnHover={true} className="text-white bg-purple-500 py-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl">* Edaikazhinadu Coffee House</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">* Stakehouse London</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">* 721 Bistro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">* Sunrise Cafe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">* Moonlight Diner</span>
              </div>
            </div>
          </Marquee>
        </div>

        {/* a statement about supabill */}
        <div className="flex w-full items-center justify-center mt-24">
          <div className="flex w-full max-w-5xl flex-col gap-4 px-4">
            <h1 className="text-5xl font-bold text-white text-center">
              Billing So Simple, Competitors Are Jealous
            </h1>
            <p className="text-lg text-gray-400 text-center">
              Streamline your billing with simplicity, affordability, and zero headaches —because you deserve it
            </p>
            <div className="flex w-full items-center justify-center mt-4">
              <button className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
                Get Supabill
              </button>
            </div>
          </div>
        </div>
        {/* Pricing */}
        <Pricing />
        {/* Footer */}
        <footer className="bg-black text-white mt-12 py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Subscription */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">
                Hit your mail and hear back what we got for you!
              </h3>
              <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="youremail@id.com"
                  className="bg-transparent px-4 py-2 text-gray-400 focus:outline-none flex-grow"
                />
                <button className="bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
                  →
                </button>
              </div>
            </div>

            {/* Sitemap */}
            <div>
              <h3 className="text-lg font-bold mb-4">Sitemap</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md flex items-center justify-between">
              <span className="text-lg font-bold">Whatsapp</span>
              <a
                href="#"
                className="text-white bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-600"
              >
                →
              </a>
            </div>
          </div>
        </footer>
        <div className="h-[140px] flex justify-center overflow-hidden">
          <SupabillText />
        </div>

      </main>
    </div>
  );
}
