import { useNavigate } from 'react-router'
import { ChevronLeft, Star, Clock, ShieldCheck, Languages } from 'lucide-react'
import StatusBar from '../../components/StatusBar'
import FauxMap from '../../components/FauxMap'
import { DRIVERS } from '../../lib/data'

export default function DriversScreen() {
  const nav = useNavigate()

  return (
    <div className="flex h-full flex-col">
      <StatusBar />

      <div className="flex items-center justify-between px-5 pb-3 pt-2">
        <div className="flex items-center gap-3">
          <button onClick={() => nav(-1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-700 border border-white/5">
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <h1 className="text-[17px] font-bold text-white">Nearby Drivers</h1>
        </div>
        <span className="rounded-full bg-ink-700 px-3 py-1.5 text-[11px] font-semibold text-brand border border-white/5">
          4 available
        </span>
      </div>

      {/* map strip */}
      <div className="mx-5 h-[110px] rounded-3xl overflow-hidden border border-white/5 relative">
        <FauxMap variant="drivers" className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-4 pb-32 space-y-3">
        {DRIVERS.map((d) => (
          <button
            key={d.id}
            onClick={() => nav('/app/confirm')}
            className="w-full rounded-3xl bg-ink-700 border border-white/5 p-4 text-left hover:border-brand/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-extrabold text-black"
                style={{ backgroundColor: d.color }}
              >
                {d.initials}
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-ink-700 bg-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="truncate text-[14px] font-bold text-white">{d.name}</p>
                  {d.tag && (
                    <span className="shrink-0 rounded-md bg-ink-600 px-1.5 py-0.5 text-[9px] font-extrabold text-brand">{d.tag.toUpperCase()}</span>
                  )}
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-[11px] text-white/50">
                  <span className="flex items-center gap-0.5 text-brand">
                    <Star className="h-3 w-3 fill-brand" /> {d.rating}
                  </span>
                  <span>·</span>
                  <span>{d.trips} trips</span>
                  <span>·</span>
                  <span>{d.experience}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[16px] font-extrabold text-white">₹{d.ratePerHour}<span className="text-[10px] font-medium text-white/40">/hr</span></p>
                <p className="flex items-center justify-end gap-1 text-[11px] text-white/45">
                  <Clock className="h-3 w-3" /> {d.eta} away
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
              <div className="flex items-center gap-3 text-[10px] text-white/45">
                <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-brand" /> Verified</span>
                <span className="flex items-center gap-1"><Languages className="h-3.5 w-3.5" /> {d.languages.slice(0, 2).join(', ')}</span>
              </div>
              <span className="rounded-full bg-brand px-4 py-1.5 text-[11px] font-extrabold text-black">Select</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
