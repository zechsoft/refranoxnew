import { Wrench, Clock, RefreshCcw, Mail } from "lucide-react";

export default function Maintenance() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 text-center">
      {/* Animated Icon */}
      <div className="relative">
        <div className="bg-gradient-to-tr from-orange-500 to-yellow-400 p-6 rounded-full shadow-2xl">
          <Wrench className="h-12 w-12 text-white animate-spin-slow" />
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="mt-8 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
        We’re Under Maintenance
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg text-gray-300 max-w-lg">
        Our website is currently being upgraded to serve you better. 
        Please check back soon. Thank you for your patience!
      </p>

      {/* Status Card */}
      <div className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-sm w-full">
        <div className="flex items-center justify-center gap-3 text-gray-200">
          <Clock className="h-6 w-6 text-orange-400" />
          <span className="text-lg font-semibold">Estimated Downtime: Few Hours</span>
        </div>
      </div>

      {/* Email for Support */}
      

      {/* Animated Footer Loader */}
      <div className="mt-12 flex items-center gap-2 text-gray-500">
        <RefreshCcw className="h-4 w-4 animate-spin" />
        <span className="text-sm">Refreshing soon...</span>
      </div>
    </div>
  );
}
