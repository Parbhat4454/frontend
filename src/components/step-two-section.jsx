export function StepTwoSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-gray-400 text-sm font-medium tracking-wider">STEP 2:</div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-red-500">AI DELIVERS THE THROWDOWN</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              AI is the future - and we've given it the task to help us determine the inner workings of what makes a
              healthy discussion. It's surprised us with how intuitive, creative and thoughtful some of these statements
              are and here are some examples.
            </p>
          </div>

          {/* Right Content - Mobile Mockups Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white/30 rounded-full"></div>

              {/* Main phone mockup */}
              <div className="relative z-10">
                <div className="bg-white rounded-3xl p-1 shadow-2xl transform rotate-3 mb-4">
                  <div className="bg-gray-100 rounded-3xl overflow-hidden">
                    {/* Phone header */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between">
                      <div className="text-xs text-gray-500">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="p-4 space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Agree or Disagree</h3>
                      </div>

                      {/* Swipe indicator */}
                      <div className="flex items-center justify-center space-x-2 text-teal-600">
                        <span className="text-sm font-medium">Swipe</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      {/* Statement card */}
                      <div className="bg-teal-500 text-white p-4 rounded-2xl">
                        <p className="text-sm leading-relaxed">
                          Store managers are not always required in dealing with simple finances
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex justify-center space-x-4 pt-4">
                        <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-medium">AGREE</button>
                      </div>

                      {/* Bottom navigation */}
                      <div className="flex justify-center space-x-8 pt-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary phone mockup */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-1 shadow-xl transform -rotate-12 scale-75">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden w-48">
                    <div className="bg-white px-3 py-2 text-xs text-gray-500 text-center">9:41</div>
                    <div className="p-3 space-y-2">
                      <div className="text-xs font-bold text-gray-800">Philosophy & Life</div>
                      <div className="space-y-1">
                        <div className="bg-purple-100 p-2 rounded text-xs">
                          <span className="font-medium text-purple-800">You:</span>
                          <span className="text-gray-700"> I think that's an interesting perspective...</span>
                        </div>
                        <div className="bg-gray-200 p-2 rounded text-xs">
                          <span className="font-medium text-gray-800">Karen:</span>
                          <span className="text-gray-700"> Yes, but consider this different approach...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keep your cool text */}
              <div className="absolute bottom-6 right-6 text-white">
                <p className="text-2xl font-bold">
                  Keep <span className="text-yellow-300">your</span>
                </p>
                <p className="text-2xl font-bold">cool!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
