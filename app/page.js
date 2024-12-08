// import Link from 'next/link';
// import {Button} from '../components/ui/button';
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h2>AI Interviewer</h2>
//       <Link href='/dashboard'>
//       <Button>Enter</Button>
//       </Link>
//     </div>
//   );
// }


import Link from 'next/link';
import { Button } from '../components/ui/button';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="space-y-8">
            {/* Logo/Icon */}
            <div className="relative w-24 h-24 mx-auto">
              <Image
                src="/ailogo.png"
                alt="AI Interviewer Logo"
                width={96}
                height={96}
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">AI Interviewer</span>
              <span className="block text-blue-600 mt-2">Practice Makes Perfect</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-md mx-auto text-xl text-gray-500">
              Master your interview skills with our AI-powered interview simulator. Get real-time feedback and improve with every session.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <Link href="/dashboard">
                <Button className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                  Start Your Interview
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Feedback</h3>
                <p className="mt-2 text-gray-500">Get instant analysis of your responses and performance</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">Custom Job Position Based Interview</h3>
                <p className="mt-2 text-gray-500">Practice with industry-specific job questions</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">History of Performance</h3>
                <p className="mt-2 text-gray-500">History of all the interviews attended</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}