import { Signal, Wifi, BatteryFull } from 'lucide-react'

export default function StatusBar({ light = false }: { light?: boolean }) {
  const color = light ? 'text-black' : 'text-white'
  return (
    <div className={`flex items-center justify-between px-6 pt-3 pb-1 text-[13px] font-semibold ${color}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal className="h-3.5 w-3.5" />
        <Wifi className="h-3.5 w-3.5" />
        <BatteryFull className="h-4 w-4" />
      </div>
    </div>
  )
}
