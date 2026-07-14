import { useNavigate } from 'react-router'
import { ChevronLeft, Bell, Star, Users, Route, MessageCircle } from 'lucide-react'
import StatusBar from '../../components/StatusBar'
import FauxMap from '../../components/FauxMap'
import { DRIVERS } from '../../lib/data'

export default function ConfirmScreen() {
  const nav = useNavigate()
  const driver = DRIVERS[0]

  return (
    <div className="relative flex h-full flex-col">
      {/* map hero */}
      <div className="absolute inset-x-0 top-0 h-[46%]">
        <FauxMap variant="route" className="h-full w-full" />
      </div>

      {/* top bar over map */}
      <div className="relative z-10">
        <StatusBar light />
        <div className="flex items-center justify-between px-5 pt-1">
          <button onClick={() => nav(-1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow">
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>
          <h1 className="text-[15px] font-bold text-black">Confirm Your Driver</h1>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow">
            <Bell className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>

      {/* dark sheet */}
      <div className="relative z-10 mt-auto rounded-t-[32px] bg-ink px-5 pt-5 pb-28">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/15" />

        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[17px] font-extrabold text-white">Hourly Drive</h2>
          <span className="rounded-full bg-brand/15 px-2.5 py-1 text-[10px] font-bold text-brand">AI MATCHED · 98%</span>
        </div>

        {/* driver card */}
        <div className="flex items-center gap-3 rounded-2xl bg-ink-700 border border-white/5 p-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold text-black"
            style={{ backgroundColor: driver.color }}
          >
            {driver.initials}
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-bold text-white">{driver.name}</p>
            <p className="flex items-center gap-1 text-[11px] text-white/50">
              ₹{driver.ratePerHour}/hr
              <Star className="h-3 w-3 fill-brand text-brand" />
              <span className="text-white">{driver.rating}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-600">
              <MessageCircle className="h-4 w-4 text-white/70" />
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-ink-600 px-3 py-1.5">
              <Users className="h-3.5 w-3.5 text-white/60" />
              <span className="text-[9px] text-white/50">4 Seat</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl bg-ink-600 px-3 py-1.5">
              <Route className="h-3.5 w-3.5 text-white/60" />
              <span className="text-[9px] text-white/50">{driver.trips} Trip</span>
            </div>
          </div>
        </div>

        {/* car + stats */}
        <div className="mt-3 flex items-center gap-3 rounded-2xl bg-ink-700 border border-white/5 p-3">
          <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-ink-600 overflow-hidden">
            <img src="/car.png" alt="Your car" className="h-full w-full object-contain scale-125" />
          </div>
          <div className="flex flex-1 justify-between pr-1">
            {[
              { label: 'DISTANCE', value: '0.2 km' },
              { label: 'PICKUP', value: '2 min' },
              { label: 'PRICE', value: '₹199' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[9px] font-semibold tracking-wider text-white/35">{s.label}</p>
                <p className="mt-1 text-[13px] font-extrabold text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* recommended */}
        <div className="mt-3 flex items-center gap-2.5">
          <div className="flex -space-x-2">
            {['#FF8A5C', '#4FC3A1', '#F2C14E'].map((c, i) => (
              <span key={i} className="h-6 w-6 rounded-full border-2 border-ink" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span className="text-[11px] text-white/50">25 riders recommended this driver</span>
        </div>

        <button
          onClick={() => nav('/app/tracking')}
          className="mt-4 w-full rounded-2xl bg-brand py-4 text-[15px] font-extrabold text-black shadow-[0_8px_30px_rgba(207,250,75,0.35)] active:scale-[0.98] transition-transform"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  )
}
