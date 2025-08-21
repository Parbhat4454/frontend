import { Button } from "@/components/ui/button"

export function FooterSection() {
  return (
    <footer className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-64">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-800/30 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-gray-700/20 to-transparent transform skew-y-3"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100 rounded-xl px-6 py-3 h-auto flex items-center gap-3 min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Apple Logo using CSS */}
              <div className="relative">
                <div className="w-6 h-7 bg-black rounded-t-full rounded-bl-full transform rotate-12 relative">
                  <div className="absolute -top-1 right-1 w-2 h-2 bg-black rounded-full transform -rotate-45"></div>
                  <div className="absolute top-1 right-0 w-1 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-600">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </Button>

          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100 rounded-xl px-6 py-3 h-auto flex items-center gap-3 min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Google Play Logo using CSS */}
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-sm transform rotate-45"></div>
                <div className="absolute inset-1 bg-white rounded-sm"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-sm"></div>
              </div>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-600">GET IT ON</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </Button>
        </div>

        {/* Privacy Policy Button */}
        <div className="mb-8">
          <Button
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8 py-2 bg-transparent"
          >
            PRIVACY POLICY
          </Button>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">Copyright © 2023 Topic Hero - All Rights Reserved.</p>
      </div>
    </footer>
  )
}
