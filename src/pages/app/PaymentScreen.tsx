import { useState } from 'react'
import { useNavigate } from 'react-router'
import { ChevronLeft, Wallet, Smartphone, Banknote, CheckCircle2, Star, Download } from 'lucide-react'
import StatusBar from '../../components/StatusBar'

const METHODS = [
  { id: 'wallet', label: 'DLP Wallet', sub: 'Balance ₹1,240', icon: Wallet },
  { id: 'upi', label: 'UPI', sub: 'GPay · PhonePe · Paytm', icon: Smartphone },
  { id: 'cash', label: 'Cash', sub: 'Pay the driver directly', icon: Banknote },
]

const FARE = [
  { label: 'Base fare (1 hr)', value: 199 },
  { label: 'Distance charge (0.2 km)', value: 20 },
  { label: 'Platform fee', value: 15 },
  { label: 'GST (5%)', value: 15 },
]

export default function PaymentScreen() {
  const nav = useNavigate()
  const [method, setMethod] = useState('wallet')
  const [paid, setPaid] = useState(false)
  const [rating, setRating] = useState(0)
  const total = FARE.reduce((s, f) => s + f.value, 0)

  if (paid) {
    return (
      <div className="flex h-full flex-col items-center px-6">
        <StatusBar />
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand/20 blur-2xl scale-150" />
            <CheckCircle2 className="relative h-20 w-20 text-brand" />
          </div>
          <h1 className="mt-6 text-[22px] font-extrabold text-white">Payment Successful</h1>
          <p className="mt-1 text-[13px] text-white/50">₹{total} paid via DLP Wallet</p>

          <div className="mt-6 w-full rounded-3xl bg-ink-700 border border-white/5 p-4 text-left">
            <p className="text-[12px] font-bold text-white/70 mb-3">Rate your driver</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C5CFF] text-[13px] font-extrabold text-black">OR</div>
              <div>
                <p className="text-[13px] font-bold text-white">Oman Richie</p>
                <div className="mt-1 flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} onClick={() => setRating(n)}>
                      <Star className={`h-5 w-5 ${n <= rating ? 'fill-brand text-brand' : 'text-white/20'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-white/50">
            <Download className="h-4 w-4" /> Download receipt
          </button>
        </div>

        <div className="w-full pb-32">
          <button
            onClick={() => nav('/app')}
            className="w-full rounded-2xl bg-brand py-4 text-[15px] font-extrabold text-black"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      <StatusBar />

      <div className="flex items-center gap-3 px-5 pb-4 pt-2">
        <button onClick={() => nav(-1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-700 border border-white/5">
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <h1 className="text-[17px] font-bold text-white">Payment</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-32 space-y-4">
        {/* trip summary */}
        <div className="rounded-3xl bg-ink-700 border border-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1 pt-1">
              <span className="h-2.5 w-2.5 rounded-full border-[3px] border-brand" />
              <span className="h-8 w-px bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
            </div>
            <div className="flex-1 space-y-2.5">
              <div>
                <p className="text-[10px] text-white/35">PICKUP</p>
                <p className="text-[12px] font-semibold text-white">Home — 2972 Westheimer Rd</p>
              </div>
              <div>
                <p className="text-[10px] text-white/35">DROP</p>
                <p className="text-[12px] font-semibold text-white">Phoenix Marketcity, Velachery</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-white/35">DURATION</p>
              <p className="text-[12px] font-bold text-white">38 min</p>
            </div>
          </div>
        </div>

        {/* fare breakdown */}
        <div className="rounded-3xl bg-ink-700 border border-white/5 p-4">
          <p className="mb-3 text-[13px] font-bold text-white/80">Fare breakdown</p>
          <div className="space-y-2.5">
            {FARE.map((f) => (
              <div key={f.label} className="flex justify-between text-[12px]">
                <span className="text-white/50">{f.label}</span>
                <span className="font-semibold text-white">₹{f.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between border-t border-white/10 pt-3">
            <span className="text-[13px] font-bold text-white">Total</span>
            <span className="text-[18px] font-extrabold text-brand">₹{total}</span>
          </div>
        </div>

        {/* payment methods */}
        <div>
          <p className="mb-2.5 text-[13px] font-bold text-white/80">Payment method</p>
          <div className="space-y-2.5">
            {METHODS.map((m) => {
              const Icon = m.icon
              return (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl p-3.5 border transition-colors ${
                    method === m.id ? 'bg-brand/10 border-brand' : 'bg-ink-700 border-white/5'
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-600">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-[13px] font-bold text-white">{m.label}</p>
                    <p className="text-[11px] text-white/40">{m.sub}</p>
                  </div>
                  <span className={`h-4 w-4 rounded-full border-2 ${method === m.id ? 'border-brand bg-brand' : 'border-white/25'}`} />
                </button>
              )
            })}
          </div>
        </div>

        <button
          onClick={() => setPaid(true)}
          className="w-full rounded-2xl bg-brand py-4 text-[15px] font-extrabold text-black shadow-[0_8px_30px_rgba(207,250,75,0.35)] active:scale-[0.98] transition-transform"
        >
          Pay ₹{total}
        </button>
      </div>
    </div>
  )
}
