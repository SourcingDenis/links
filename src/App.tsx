import React from 'react';
import { SocialLinks } from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-['Montserrat_Alternates']">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
          
          {/* Section header */}
          <div className="relative flex flex-col items-center">
            <span className="mb-2 inline-flex items-center rounded-full bg-[rgba(23,160,184,0.17)] px-3 py-1 text-sm font-medium text-[#17a2b8]">
              Connect With Me
            </span>
            <h2 className="bg-white px-4 text-4xl font-bold tracking-tight text-[#3f345f]">
              Social Links
            </h2>
          </div>

          {/* Social links grid */}
          <div className="mt-16">
            <div className="mx-auto max-w-3xl rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm">
              <SocialLinks />
              <p className="mt-8 text-center text-sm text-gray-500">
                Follow me on social media to stay tuned
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;