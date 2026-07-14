import { useLocation, useNavigate } from 'react-router'
import { Home, MapPin, Receipt, User } from 'lucide-react'

const ITEMS = [
  { to: '/app', label: 'Home', icon: Home },
  { to: '/app/tracking', label: 'Trip', icon: MapPin },
  { to: '/app/payment', label: 'Wallet', icon: Receipt },
  { to: '/app/profile', label: 'Profile', icon: User },
]

export default function BottomNav() {
  const nav = useNavigate()
  const loc = useLocation()

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 px-5 pb-6 pt-3">
      <div className="flex items-center justify-around rounded-[28px] bg-[#141417]/95 px-2 py-2 backdrop-blur-md border border-white/5 shadow-2xl">
        {ITEMS.map((item) => {
          const active = loc.pathname === item.to
          const Icon = item.icon
          return (
            <button
              key={item.to}
              onClick={() => nav(item.to)}
              className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all ${
                active ? 'bg-brand text-black' : 'text-white/55 hover:text-white'
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              {active && <span>{item.label}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
