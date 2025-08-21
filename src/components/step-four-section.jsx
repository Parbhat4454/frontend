export function StepFourSection() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-sm text-gray-400 font-medium tracking-wider">STEP 4:</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                STAY IN THE GAME
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Stay engaged with endless discussions and exciting challenges. Whether it's philosophy, sports, or random
              fun, there's always a new debate waiting. Keep earning, keep learning, and keep proving your voice matters
              in every conversation.
            </p>
          </div>

          {/* Right Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl border border-gray-700">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-white">
                    <span className="text-black text-sm font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                      <div className="w-6 h-3 border border-black rounded-sm">
                        <div className="w-4 h-1.5 bg-black rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center px-6 py-4 border-b border-gray-200">
                    <svg className="w-6 h-6 text-gray-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <h1 className="text-lg font-semibold text-black">Matches & Discussions</h1>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Matches Section */}
                    <div>
                      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">MATCHES</h2>
                      <div className="flex gap-3">
                        {/* Philosophy Card */}
                        <div className="flex-1 bg-teal-400 rounded-lg p-4 text-white">
                          <div className="text-xs font-medium mb-2">PHILOSOPHY & LIFE</div>
                          <div className="text-sm mb-3">
                            Store managers are not always required in dealing with simple disputes.
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs">Matched with</div>
                            <button className="bg-white/20 text-white px-3 py-1 rounded text-xs font-medium">
                              Start Discussion
                            </button>
                          </div>
                          <div className="flex items-center mt-2">
                            <img src="/professional-woman-avatar.png" alt="George" className="w-6 h-6 rounded-full mr-2" />
                            <span className="text-xs">George</span>
                          </div>
                        </div>

                        {/* Fun Card */}
                        <div className="w-20 bg-red-400 rounded-lg p-3 text-white">
                          <div className="text-xs font-medium mb-2">FUN</div>
                          <div className="text-xs mb-2">Win</div>
                          <img src="/smiling-woman-avatar.png" alt="Karen" className="w-8 h-8 rounded-full" />
                          <div className="text-xs mt-1">Karen</div>
                        </div>
                      </div>
                    </div>

                    {/* Discussions Section */}
                    <div>
                      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">DISCUSSIONS</h2>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-xs text-red-400 font-medium mb-2">FUN & ENTERTAINMENT</div>
                        <h3 className="text-sm font-medium text-black mb-2">
                          A year without eyebrows is better than a year without eyelashes
                        </h3>
                        <div className="text-xs text-gray-600 mb-3">George • Who needs eyebrows anyway?</div>

                        <div className="border-t border-gray-200 pt-3">
                          <div className="text-xs text-gray-500 mb-2">Participants</div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center">
                                <img
                                  src="/smiling-woman-avatar.png"
                                  alt="Karen"
                                  className="w-6 h-6 rounded-full mr-2"
                                />
                                <span className="text-xs text-black">Karen</span>
                              </div>
                              <div className="flex items-center">
                                <img
                                  src="/professional-man-avatar.png"
                                  alt="George"
                                  className="w-6 h-6 rounded-full mr-2"
                                />
                                <span className="text-xs text-black">George</span>
                              </div>
                            </div>
                            <span className="text-xs text-purple-500 font-medium">Reply Received</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
