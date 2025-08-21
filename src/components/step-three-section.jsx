export function StepThreeSection() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Mockup */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-4 border-gray-700">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-green-400 px-6 py-3 flex justify-between items-center text-black text-sm font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                      <div className="w-6 h-3 border border-black rounded-sm"></div>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6 bg-white">
                    {/* Back Button and Menu */}
                    <div className="flex justify-between items-center mb-6">
                      <button className="text-gray-600">←</button>
                      <button className="text-gray-600">⋮</button>
                    </div>

                    {/* Profile Picture and Name */}
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-200">
                        <img
                          src="/professional-woman-profile.png"
                          alt="Karen profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-black">Karen</h3>
                    </div>

                    {/* Level Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Lvl 1</span>
                        <span>Lvl 2</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                      </div>
                      <p className="text-center text-sm text-gray-600 mt-2">25/50 points earned</p>
                    </div>

                    {/* Stats */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-4">Stats</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Total Discussions</p>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-black">5</span>
                            <span className="text-gray-400">💬</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Total Wins</p>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl font-bold text-black">1</span>
                            <span className="text-gray-400">🏆</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Participation Categories */}
                    <div>
                      <h4 className="font-semibold text-black mb-4">Participation in each category</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-black">Sports and games</span>
                            <span className="text-gray-600">5%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-400 h-2 rounded-full" style={{ width: "5%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-black">Philosophy & Life</span>
                            <span className="text-gray-600">95%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-400 h-2 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-600 rounded-full opacity-20"></div>
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-green-400 rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2 tracking-wider">STEP 3:</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-green-400">BATTLE</span> <span className="text-white">&</span>{" "}
                <span className="text-teal-400">LEARN</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              What's a product or se Swipe on topics and argue with rivals! Argue with strangers Mobile App rvice you'd
              like to show.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
