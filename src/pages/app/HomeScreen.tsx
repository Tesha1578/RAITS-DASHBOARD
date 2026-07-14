import { useNavigate } from 'react-router'
import { Bell, Search, Clock, Car, Users, ChevronRight } from 'lucide-react'
import StatusBar from '../../components/StatusBar'
import FauxMap from '../../components/FauxMap'
import { SERVICES } from '../../lib/data'

export default function HomeScreen() {
  const nav = useNavigate()

  return (
    <div className="flex h-full flex-col">
      <StatusBar />

      {/* header */}
      <div className="flex items-center justify-between px-5 pb-4 pt-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FFB26B] to-[#FF6B8A] flex items-center justify-center text-sm font-bold text-black">
            NK
          </div>
          <div>
            <p className="text-[15px] font-bold text-white">Naveen</p>
            <p className="text-[11px] text-white/45">Good Evening !!</p>
          </div>
        </div>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-ink-700 border border-white/5">
          <Bell className="h-[18px] w-[18px] text-white/80" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-brand" />
        </button>
      </div>

      {/* headline */}
      <div className="px-5 pb-4">
        <h1 className="text-[22px] font-extrabold leading-tight text-white">
          Need a driver<br />for your car?
        </h1>
      </div>

      {/* pickup / search card */}
      <div className="mx-5 rounded-3xl bg-ink-700 border border-white/5 p-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-1 pt-1">
            <span className="h-3 w-3 rounded-full border-[3px] border-brand" />
            <span className="h-6 w-px bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <p className="text-[13px] font-semibold text-white">Your Car · Home</p>
              <p className="text-[11px] text-white/40">2972 Westheimer Rd, Chennai</p>
            </div>
            <button
              onClick={() => nav('/app/booking')}
              className="flex w-full items-center gap-2 rounded-xl bg-ink px-3 py-2.5 text-left border border-white/5"
            >
              <Search className="h-4 w-4 text-white/40" />
              <span className="text-[13px] text-white/40">Where do you want to go?</span>
            </button>
          </div>
        </div>
      </div>

      {/* map */}
      <div className="relative mx-5 mt-4 h-[150px] rounded-3xl overflow-hidden border border-white/5">
        <FauxMap variant="drivers" className="h-full w-full" />
        <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur">
          12 drivers nearby
        </div>
      </div>

      {/* service options */}
      <div className="mt-4 flex-1 overflow-y-auto no-scrollbar px-5 pb-32 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold text-white/80">Choose a service</p>
          <span className="text-[11px] text-white/40">AI-priced · PriceNet</span>
        </div>
        {SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => nav('/app/booking')}
            className="flex w-full items-center gap-3 rounded-2xl bg-ink-700 border border-white/5 p-3.5 text-left hover:border-brand/40 transition-colors"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-600">
              {s.id === 's1' ? <Clock className="h-5 w-5 text-brand" /> : s.id === 's2' ? <Car className="h-5 w-5 text-brand" /> : <Users className="h-5 w-5 text-brand" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-bold text-white">{s.name}</p>
                {s.popular && (
                  <span className="rounded-md bg-brand px-1.5 py-0.5 text-[9px] font-extrabold text-black">POPULAR</span>
                )}
              </div>
              <p className="text-[11px] text-white/40">{s.desc}</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[14px] font-extrabold text-white">{s.price}</span>
              <ChevronRight className="h-4 w-4 text-white/30" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
