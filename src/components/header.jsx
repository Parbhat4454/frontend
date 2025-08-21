import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between p-6 md:p-8">
      <Button
        variant="outline"
        className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full px-6"
      >
        HOME
      </Button>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 relative">
          {/* Colorful interconnected logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <svg width="64" height="64" viewBox="0 0 64 64" className="animate-pulse"> */}
              {/* node */}
              {/* <circle cx="32" cy="16" r="6" fill="#3B82F6" />
              <circle cx="48" cy="32" r="6" fill="#10B981" />
              <circle cx="32" cy="48" r="6" fill="#EF4444" />
              <circle cx="16" cy="32" r="6" fill="#F59E0B" /> */}

              {/* Connecting lines */}
              {/* <line x1="32" y1="16" x2="48" y2="32" stroke="#3B82F6" strokeWidth="2" opacity="0.6" />
              <line x1="48" y1="32" x2="32" y2="48" stroke="#10B981" strokeWidth="2" opacity="0.6" />
              <line x1="32" y1="48" x2="16" y2="32" stroke="#EF4444" strokeWidth="2" opacity="0.6" />
              <line x1="16" y1="32" x2="32" y2="16" stroke="#F59E0B" strokeWidth="2" opacity="0.6" /> */}
            {/* </svg> */}

            <img src="Topic_Hero_Logo.png" alt="Logo" />
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full px-6"
      >
        CONTACT US
      </Button>
    </header>
  )
}
