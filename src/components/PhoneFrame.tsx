import type { ReactNode } from 'react'

/** iPhone-style frame used on the landing page to showcase app screens. */
export default function PhoneFrame({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[300px] h-[620px] rounded-[44px] bg-[#0A0A0B] p-[10px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9),inset_0_0_0_2px_#2a2a2e]">
        {/* dynamic island */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 z-40 w-[92px] h-[26px] rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-ink">
          {children}
        </div>
        {/* side buttons */}
        <div className="absolute -left-[3px] top-[110px] h-[26px] w-[3px] rounded-l bg-[#2a2a2e]" />
        <div className="absolute -left-[3px] top-[146px] h-[44px] w-[3px] rounded-l bg-[#2a2a2e]" />
        <div className="absolute -left-[3px] top-[200px] h-[44px] w-[3px] rounded-l bg-[#2a2a2e]" />
        <div className="absolute -right-[3px] top-[160px] h-[60px] w-[3px] rounded-r bg-[#2a2a2e]" />
      </div>
    </div>
  )
}
