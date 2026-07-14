import { Outlet } from 'react-router'
import BottomNav from './BottomNav'

/** Fullscreen mobile app frame — phone-sized column centered on dark backdrop. */
export default function AppShell() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-[#050506]">
      <div className="relative flex h-screen w-full max-w-[430px] flex-col overflow-hidden bg-ink shadow-2xl">
        <div className="relative flex-1 overflow-hidden">
          <Outlet />
        </div>
        <BottomNav />
      </div>
    </div>
  )
}
