import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { Marquee } from "~/components/magicui/marquee";
import { ShineBorder } from "~/components/ui/shine-border";
import { api, HydrateClient } from "~/trpc/server";
import Pricing from "./_components/Pricing";
import SupabillText from "./_components/supabilltextcompoenent";

export default async function Home() {

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="group">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <span className="text-3xl font-bold bg-gradient-to-r from-[#AF80FF] to-[#904FFF] bg-clip-text text-transparent">
                  Supabill
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#AF80FF] to-[#904FFF] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link 
              href="#get-started" 
              className="bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Try Supabill 🎉
            </Link>
          </div>
        </div>
      </nav>
      <main className="pt-32">
        <div className="flex w-full items-center justify-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="flex w-full max-w-5xl flex-col gap-6 px-6 text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Future of Billing is Here
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Simplify billing with <span className="bg-gradient-to-r from-[#AF80FF] to-[#904FFF] bg-clip-text text-transparent">Supabill</span>
            </h1>
            <p className="text-lg text-gray-400 text-center">
              Streamline your billing with simplicity, affordability, and zero headaches —because you deserve it
            </p>
            <div className="flex w-full items-center justify-center py-6">
              <button className="rounded-md bg-[#904FFF] px-6 py-2 text-white hover:bg-gray-700">
                Try Supabill 🎉
              </button>
            </div>

          </div>
        </div>

        {/* Marquee Section */}
        <div className="max-w-5xl mx-auto mt-10 flex flex-col items-center gap-4">
          <ShineBorder className="w-full max-w-4xl">
            <div className="relative w-full">
              <img
                src="/supabillhero2.png"
                alt="Hero Image"
                className="w-full rounded-lg"
              />
            </div>
          </ShineBorder>
          <Marquee pauseOnHover={true} className="text-white bg-black py-6 max-w-screen">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">* Edaikazhinadu Coffee House</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">* Stakehouse London</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">* 721 Bistro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">* Sunrise Cafe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">* Moonlight Diner</span>
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
            {/* <div className="flex w-full items-center justify-center mt-4">
              <button className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
                Get Supabill
              </button>
            </div> */}
          </div>
        </div>

        {/* Effortless Billing Section */}
        <div className="w-full bg-black py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left side - Content */}
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#AF80FF] to-[#904FFF] bg-clip-text text-transparent">
                  Effortless Billing, Maximum Efficiency
                </h2>
                <p className="text-lg text-gray-300">
                  Streamline your billing process with our intuitive platform designed for businesses of all sizes. 
                  Spend less time on paperwork and more time growing your business.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    '✅ Generate bills in a snap',
                    '✅ Track inventory and manage stock with ease',
                    '✅ Manage multiple outlets from a single dashboard',
                    '✅ Accept payments online and offline with ease',
                    '✅ Get real-time reports and insights to grow your business'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {/* <span className="text-green-400">✓</span> */}
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <button className="bg-[#904FFF] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
                    Buy Now
                  </button>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="relative">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/featuredimage.png"
                        alt="Billing Dashboard Preview"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                </div>
              </div>
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
