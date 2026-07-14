import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Wallet, Star, Clock, Route, ChevronRight, Settings, ShieldCheck, Headphones, LogOut, Info, Car } from 'lucide-react'
import StatusBar from '../../components/StatusBar'
import { TRIPS } from '../../lib/data'

export default function ProfileScreen() {
  const nav = useNavigate()
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="relative flex h-full flex-col">
      <StatusBar />

      {/* profile header */}
      <div className="px-5 pb-5 pt-3">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#FFB26B] to-[#FF6B8A] flex items-center justify-center text-xl font-extrabold text-black">
            NK
          </div>
          <div className="flex-1">
            <h1 className="text-[18px] font-extrabold text-white">Naveen Kumar</h1>
            <p className="text-[12px] text-white/45">+91 98765 43210</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="flex items-center gap-1 rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-bold text-brand">
                <Star className="h-3 w-3 fill-brand" /> 4.8 rider rating
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-32 space-y-4">
        {/* wallet */}
        <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-dim p-4 text-black">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              <span className="text-[12px] font-bold">DLP Wallet</span>
            </div>
            <span className="text-[11px] font-semibold opacity-70">Auto-pay ON</span>
          </div>
          <p className="mt-2 text-[28px] font-extrabold">₹1,240</p>
          <button className="mt-1 rounded-full bg-black/15 px-4 py-1.5 text-[11px] font-bold">+ Add money</button>
        </div>

        {/* stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Route, label: 'Trips', value: '47' },
            { icon: Clock, label: 'Hours', value: '126' },
            { icon: Star, label: 'Rating', value: '4.8' },
          ].map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="rounded-2xl bg-ink-700 border border-white/5 p-3 text-center">
                <Icon className="mx-auto h-4 w-4 text-brand" />
                <p className="mt-1.5 text-[17px] font-extrabold text-white">{s.value}</p>
                <p className="text-[10px] text-white/40">{s.label}</p>
              </div>
            )
          })}
        </div>

        {/* trip history */}
        <div>
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[13px] font-bold text-white/80">Recent trips</p>
            <span className="text-[11px] text-white/40">View all</span>
          </div>
          <div className="space-y-2.5">
            {TRIPS.map((t) => (
              <div key={t.id} className="rounded-2xl bg-ink-700 border border-white/5 p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-white/40">{t.date}</p>
                  <span className={`text-[10px] font-bold ${t.status === 'completed' ? 'text-brand' : 'text-red-400'}`}>
                    {t.status === 'completed' ? 'COMPLETED' : 'CANCELLED'}
                  </span>
                </div>
                <p className="mt-1.5 text-[12px] font-semibold text-white truncate">{t.from} → {t.to}</p>
                <div className="mt-1 flex items-center justify-between text-[11px] text-white/45">
                  <span>{t.driver} · {t.duration}</span>
                  <span className="font-bold text-white">{t.status === 'completed' ? `₹${t.fare}` : '—'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* settings */}
        <div className="rounded-3xl bg-ink-700 border border-white/5 divide-y divide-white/5">
          {[
            { icon: Settings, label: 'Settings' },
            { icon: ShieldCheck, label: 'Safety & SOS contacts' },
            { icon: Headphones, label: 'Help & Support' },
            { icon: Info, label: 'About Driver Link Pro', action: () => setShowAbout(true) },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button 
                key={item.label} 
                onClick={item.action}
                className="flex w-full items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors"
              >
                <Icon className="h-4 w-4 text-white/50" />
                <span className="flex-1 text-left text-[13px] font-semibold text-white">{item.label}</span>
                <ChevronRight className="h-4 w-4 text-white/25" />
              </button>
            )
          })}
          <button onClick={() => nav('/')} className="flex w-full items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors">
            <LogOut className="h-4 w-4 text-red-400" />
            <span className="flex-1 text-left text-[13px] font-semibold text-red-400">Log out</span>
          </button>
        </div>
      </div>

      {/* About Modal Bottom Sheet */}
      {showAbout && (
        <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-xs transition-all duration-300">
          <div className="w-full rounded-t-[32px] bg-ink border-t border-white/10 p-6 text-white shadow-2xl">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
                <Car className="h-5 w-5 text-black" />
              </div>
              <div>
                <h2 className="text-[17px] font-extrabold">Driver Link Pro</h2>
                <p className="text-[11px] text-white/45">Version 1.0.0 (Beta)</p>
              </div>
            </div>

            <div className="mt-5 space-y-3.5 text-[13px] leading-relaxed text-white/70">
              <p>
                Driver Link Pro is India's first AI-powered driver network, offering professional, on-demand drivers for your personal vehicle.
              </p>
              
              <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-brand">Live Web App Link</p>
                <a 
                  href="https://driver-link-app-nine.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-1.5 block text-[13px] font-bold text-brand hover:underline break-all"
                >
                  https://driver-link-app-nine.vercel.app/
                </a>
              </div>
            </div>

            <button 
              onClick={() => setShowAbout(false)}
              className="mt-6 w-full rounded-2xl bg-white/10 hover:bg-white/15 py-3.5 text-[14px] font-bold text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

