import Head from "next/head";

export default function Header(){

    return(
        <div className="bg-black text-white">
        <Head>
          <title>Dark Theme Landing Page</title>
          <meta name="description" content="Next.js landing page with Tailwind CSS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        {/* Navigation */}
        <nav className="px-6 py-4 flex justify-between items-center border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl text-purple-500">STARK ACADEMY</div>
            <div className="hidden md:flex ml-10 space-x-8 w-110 h-10 rounded bg-#FFFFFF4D item-center">
              <a href="#" className="text-gray-300 hover:text-white">Feutures</a>
              <a href="/Courses" className="text-gray-300 hover:text-white">Courses</a>
              <a href="#" className="text-gray-300 hover:text-white">Tournaments</a>
              <a href="#" className="text-gray-300 hover:text-white">Tutors</a>
              <a href="#" className="text-gray-300 hover:text-white">FAQs</a>

            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white">Sign Up</button>
            <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">Login</button>
          </div>
        </nav>

        </div>
    );
}

