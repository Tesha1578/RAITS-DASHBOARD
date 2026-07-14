import { useState } from 'react'
import { useNavigate } from 'react-router'
import { ChevronLeft, Phone, MessageCircle, Star, ShieldAlert, X } from 'lucide-react'
import StatusBar from '../../components/StatusBar'
import FauxMap from '../../components/FauxMap'
import { DRIVERS } from '../../lib/data'

export default function TrackingScreen() {
  const nav = useNavigate()
  const [started, setStarted] = useState(false)
  const driver = DRIVERS[0]

  return (
    <div className="relative flex h-full flex-col">
      <div className="absolute inset-0">
        <FauxMap variant="tracking" className="h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      </div>

      <div className="relative z-10">
        <StatusBar light />
        <div className="flex items-center justify-between px-5 pt-1">
          <button onClick={() => nav(-1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow">
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>
          <div className="rounded-full bg-white/90 px-4 py-2 shadow">
            <p className="text-[12px] font-bold text-black">
              {started ? 'Trip in progress · 12 min left' : 'Driver arriving in 2 min'}
            </p>
          </div>
          <div className="w-9" />
        </div>
      </div>

      {/* bottom sheet */}
      <div className="relative z-10 mt-auto px-4 pb-28">
        <div className="rounded-[28px] bg-ink border border-white/5 p-4 shadow-2xl">
          {/* progress steps */}
          <div className="mb-4 flex items-center gap-2">
            {['Driver assigned', 'Arriving', 'On trip'].map((step, i) => {
              const active = started ? i <= 2 : i <= 1
              const current = started ? i === 2 : i === 1
              return (
                <div key={step} className="flex flex-1 items-center gap-2">
                  <div className="flex-1">
                    <div className={`h-1.5 rounded-full ${active ? 'bg-brand' : 'bg-white/10'}`} />
                    <p className={`mt-1.5 text-[9px] font-semibold ${current ? 'text-brand' : 'text-white/40'}`}>{step}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* driver row */}
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold text-black"
              style={{ backgroundColor: driver.color }}
            >
              {driver.initials}
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-bold text-white">{driver.name}</p>
              <p className="flex items-center gap-1 text-[11px] text-white/50">
                <Star className="h-3 w-3 fill-brand text-brand" /> {driver.rating} · Your black SUV · TN 10 AB 1234
              </p>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-700 border border-white/5">
              <MessageCircle className="h-4 w-4 text-white/70" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand">
              <Phone className="h-4 w-4 text-black" />
            </button>
          </div>

          {/* actions */}
          <div className="mt-4 flex gap-3">
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-ink-700 border border-red-500/30 px-4 py-3.5 text-[12px] font-bold text-red-400">
              <ShieldAlert className="h-4 w-4" /> SOS
            </button>
            <button
              onClick={() => (started ? nav('/app/payment') : setStarted(true))}
              className="flex-1 rounded-2xl bg-brand py-3.5 text-[14px] font-extrabold text-black active:scale-[0.98] transition-transform"
            >
              {started ? 'End Trip & Pay' : 'Start Trip'}
            </button>
            <button onClick={() => nav('/app')} className="flex items-center justify-center rounded-2xl bg-ink-700 border border-white/5 px-4">
              <X className="h-4 w-4 text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
