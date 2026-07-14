import { useState } from 'react'
import { useNavigate } from 'react-router'
import { ChevronLeft, ArrowUpDown, Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react'
import StatusBar from '../../components/StatusBar'
import { SERVICES } from '../../lib/data'

const QUICK_DESTINATIONS = ['Phoenix Marketcity', 'Chennai Airport', 'ECR Beach House', 'OMR IT Park']

export default function BookingScreen() {
  const nav = useNavigate()
  const [service, setService] = useState('s1')
  const [when, setWhen] = useState<'now' | 'later'>('now')
  const [dest, setDest] = useState('')

  return (
    <div className="flex h-full flex-col">
      <StatusBar />

      <div className="flex items-center gap-3 px-5 pb-4 pt-2">
        <button onClick={() => nav(-1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-700 border border-white/5">
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <h1 className="text-[17px] font-bold text-white">Book a Driver</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-32 space-y-4">
        {/* route card */}
        <div className="rounded-3xl bg-ink-700 border border-white/5 p-4">
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-1 pt-1.5">
              <span className="h-3 w-3 rounded-full border-[3px] border-brand" />
              <span className="h-10 w-px bg-white/20" />
              <MapPin className="h-4 w-4 text-white/50" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="rounded-xl bg-ink px-3 py-3 border border-white/5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">Pickup · your car</p>
                <p className="text-[13px] font-semibold text-white">Home — 2972 Westheimer Rd</p>
              </div>
              <div className="rounded-xl bg-ink px-3 py-3 border border-white/5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/35">Destination</p>
                <input
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                  placeholder="Enter drop location"
                  className="w-full bg-transparent text-[13px] font-semibold text-white placeholder:text-white/35 outline-none"
                />
              </div>
            </div>
            <button className="mt-8 flex h-9 w-9 items-center justify-center rounded-full bg-ink-600">
              <ArrowUpDown className="h-4 w-4 text-white/60" />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK_DESTINATIONS.map((d) => (
              <button
                key={d}
                onClick={() => setDest(d)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold border transition-colors ${
                  dest === d ? 'bg-brand text-black border-brand' : 'bg-ink-600 text-white/60 border-white/5'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* when */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setWhen('now')}
            className={`flex items-center gap-2.5 rounded-2xl p-3.5 border transition-colors ${when === 'now' ? 'bg-brand/10 border-brand' : 'bg-ink-700 border-white/5'}`}
          >
            <Navigation className={`h-4 w-4 ${when === 'now' ? 'text-brand' : 'text-white/50'}`} />
            <span className="text-[13px] font-bold text-white">Now</span>
          </button>
          <button
            onClick={() => setWhen('later')}
            className={`flex items-center gap-2.5 rounded-2xl p-3.5 border transition-colors ${when === 'later' ? 'bg-brand/10 border-brand' : 'bg-ink-700 border-white/5'}`}
          >
            <Calendar className={`h-4 w-4 ${when === 'later' ? 'text-brand' : 'text-white/50'}`} />
            <span className="text-[13px] font-bold text-white">Schedule</span>
          </button>
        </div>

        {/* service type */}
        <div>
          <p className="mb-2.5 text-[13px] font-bold text-white/80">Service type</p>
          <div className="space-y-2.5">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setService(s.id)}
                className={`flex w-full items-center justify-between rounded-2xl p-3.5 border transition-colors ${
                  service === s.id ? 'bg-brand/10 border-brand' : 'bg-ink-700 border-white/5'
                }`}
              >
                <div className="text-left">
                  <p className="text-[13px] font-bold text-white">{s.name}</p>
                  <p className="text-[11px] text-white/40">{s.desc}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[13px] font-extrabold text-white">{s.price}</span>
                  <span className={`h-4 w-4 rounded-full border-2 ${service === s.id ? 'border-brand bg-brand' : 'border-white/25'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* AI fare estimate */}
        <div className="rounded-3xl bg-gradient-to-br from-ink-700 to-ink-800 border border-brand/20 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-brand" />
            <p className="text-[12px] font-bold text-brand">PriceNet AI Estimate</p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] text-white/40">Estimated fare</p>
              <p className="text-[26px] font-extrabold text-white">₹199<span className="text-[13px] font-semibold text-white/40"> – ₹249</span></p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-white/50">
              <Clock className="h-3.5 w-3.5" />
              <span>~2 min pickup</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => nav('/app/drivers')}
          className="w-full rounded-2xl bg-brand py-4 text-[15px] font-extrabold text-black shadow-[0_8px_30px_rgba(207,250,75,0.35)] active:scale-[0.98] transition-transform"
        >
          Find Nearby Drivers
        </button>
      </div>
    </div>
  )
}
