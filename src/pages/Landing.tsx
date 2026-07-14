import type { ReactNode } from 'react'
import { useNavigate } from 'react-router'
import { Car, Sparkles, ShieldCheck, MapPin, Clock, TrendingUp, ArrowRight, Smartphone } from 'lucide-react'
import PhoneFrame from '../components/PhoneFrame'
import HomeScreen from './app/HomeScreen'
import ConfirmScreen from './app/ConfirmScreen'

function ScaledScreen({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="relative h-[920px] w-[430px] bg-ink"
        style={{ transform: 'scale(0.651)', transformOrigin: 'top left' }}
      >
        {children}
        {/* home indicator */}
        <div className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-white/30" />
      </div>
    </div>
  )
}

const AI_FEATURES = [
  { icon: TrendingUp, name: 'PriceNet', desc: 'AI fare engine that prices every trip fairly — by hour, km, demand and traffic.' },
  { icon: MapPin, name: 'MatchCore', desc: 'Matches you with the best-rated nearby driver in under 30 seconds.' },
  { icon: Sparkles, name: 'DemandPulse', desc: 'Forecasts demand across the city so drivers are always where you need them.' },
  { icon: ShieldCheck, name: 'FraudShield', desc: 'Real-time route & behaviour monitoring keeps every trip safe and honest.' },
]

const STEPS = [
  { icon: Smartphone, title: 'Book in seconds', desc: 'Enter where your car is and where it needs to go. Pick hourly, one-way or round trip.' },
  { icon: Car, title: 'Meet your driver', desc: 'A verified, rated professional arrives at your car — license, Aadhaar & background checked.' },
  { icon: Clock, title: 'Ride & pay', desc: 'Track the trip live, SOS any time, and pay cashless when you arrive.' },
]

export default function Landing() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-[#070708] text-white overflow-x-hidden">
      {/* glow background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-brand/5 blur-[120px]" />
      </div>

      {/* header */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand">
            <Car className="h-5 w-5 text-black" />
          </div>
          <span className="text-[17px] font-extrabold tracking-tight">
            Driver Link <span className="text-brand">Pro</span>
          </span>
        </div>
        <button
          onClick={() => nav('/app')}
          className="flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[13px] font-extrabold text-black transition-transform hover:scale-105"
        >
          Launch App <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[12px] font-bold text-brand">
            <Sparkles className="h-3.5 w-3.5" /> India's first AI-powered driver network
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Your car.<br />
            A pro driver.<br />
            <span className="text-brand text-glow">On demand.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/55">
            Own a car but don't want to drive? Book a verified professional driver near you —
            by the hour, one-way or round trip. AI handles the pricing, matching and safety.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => nav('/app')}
              className="flex items-center gap-2 rounded-2xl bg-brand px-7 py-4 text-[15px] font-extrabold text-black shadow-[0_10px_40px_rgba(207,250,75,0.3)] transition-transform hover:scale-105"
            >
              Open Live Demo <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#how"
              className="flex items-center gap-2 rounded-2xl border border-white/15 px-7 py-4 text-[15px] font-bold text-white/80 hover:bg-white/5"
            >
              How it works
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            {[
              { v: '12K+', l: 'Verified drivers' },
              { v: '4.8★', l: 'Avg. rating' },
              { v: '2 min', l: 'Avg. pickup' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-extrabold text-white">{s.v}</p>
                <p className="text-[12px] text-white/40">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* phone mockups */}
        <div className="relative flex h-[660px] items-center justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-brand/10 blur-[100px]" />
          <PhoneFrame className="relative z-0 -rotate-6 scale-90 opacity-90 hidden sm:block">
            <ScaledScreen><ConfirmScreen /></ScaledScreen>
          </PhoneFrame>
          <PhoneFrame className="relative z-10 -ml-16 rotate-2 animate-float sm:-ml-10">
            <ScaledScreen><HomeScreen /></ScaledScreen>
          </PhoneFrame>
        </div>
      </section>

      {/* how it works */}
      <section id="how" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-[12px] font-bold uppercase tracking-[0.3em] text-brand">How it works</p>
        <h2 className="mt-3 text-center text-3xl font-extrabold md:text-4xl">Driver at your door in 3 steps</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="rounded-3xl border border-white/5 bg-ink-800 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <span className="text-[13px] font-extrabold text-white/25">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-[17px] font-bold">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* AI engine */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-[12px] font-bold uppercase tracking-[0.3em] text-brand">Powered by our own AI</p>
        <h2 className="mt-3 text-center text-3xl font-extrabold md:text-4xl">Four models running every trip</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {AI_FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.name} className="flex gap-4 rounded-3xl border border-white/5 bg-ink-800 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold">{f.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[36px] border border-brand/20 bg-gradient-to-br from-ink-800 to-ink px-8 py-16 text-center">
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand/10 blur-[100px]" />
          <h2 className="relative text-3xl font-extrabold md:text-4xl">Try the full app experience</h2>
          <p className="relative mx-auto mt-3 max-w-md text-[14px] text-white/55">
            Home, booking, driver selection, live tracking, payment and profile — all screens are live and interactive.
          </p>
          <button
            onClick={() => nav('/app')}
            className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand px-8 py-4 text-[15px] font-extrabold text-black shadow-[0_10px_40px_rgba(207,250,75,0.3)] transition-transform hover:scale-105"
          >
            Launch Driver Link Pro <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-[12px] text-white/35">
        Driver Link Pro — Starting from Chennai. Building for India. Powered by our own AI.
      </footer>
    </div>
  )
}
