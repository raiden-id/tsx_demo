export default function Home() {
  return (
    <main
      className="h-screen"
      style={{
        background: `linear-gradient(to bottom, hsl(270, 100%, 10%), hsl(269, 93%, 20%), hsl(266, 83%, 40%))`,
      }}
    >
      <header className="w-full flex justify-between absolute p-6">
        <h2 className="font-semibold bg-blue-500 text-xl px-2">hudaxcode</h2>
        <div className="relative"></div>
      </header>
      <div className="flex flex-col sm:flex-row-reverse items-center justify-center h-full">
        <div className="relative -translate-y-4 z-10 sm:pl-20 sm:translate-y-0">
          <div className="h-40 w-40 md:h-64 md:w-64 bg-bg-500 absolute transition duration-700 translate-x-4 rotate-12 bg-custom-purple"></div>
          <div className="h-40 w-40 md:h-64 md:w-64 overflow-hidden border-2 border-whites transition duration-700 ease-in-out bg-purple-900 rotate-12">
            <img
              src="https://pebrianz.vercel.app/assets/anime3-3f7c5407.jpg"
              className="h-full w-full object-cover object-center transition duration-700 -rotate-12"
            />
          </div>
        </div>
        <div className="mt-2 transition duration-700 ease-in-out opacity-1">
          <div className="flex flex-col justify-center items-center space-x-2">
            <h1 className="font-vt323 font-black text-6xl md:text-8xl text-neoyeon-300 italic uppercase">
              HUDAWA
            </h1>
          </div>
          <div className="flex justify-center space-x-4 font-vt323">
            <button className="bg-neoyeon-300 text-white text-xl md:text-3xl px-2 py-0.2 mt-2 rounded-sm uppercase">
              <a href="/about">About Me</a>
            </button>
            <button className="bg-white text-purple-900 text-xl md:text-3xl font-bold px-2 py-0.2 mt-2 rounded-sm ring-2 ring-neoyeon-300 uppercase">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full p-6 z-50 left-1/2 -translate-x-1/2 sm:max-w-[1200px]">
        <p className="text-md md:text-2xl text-center font-japan text-bg-900">
          copyright © 2022 hudaxcode, All rights reserved
        </p>
      </footer>
    </main>
  );
}
