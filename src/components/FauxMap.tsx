type Props = {
  variant?: 'route' | 'drivers' | 'tracking'
  className?: string
}

/** Stylised static map — light streets on paper, dark route, lime markers. */
export default function FauxMap({ variant = 'route', className = '' }: Props) {
  return (
    <div className={`relative overflow-hidden bg-[#EEEDE8] ${className}`}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
        {/* street grid */}
        <g stroke="#DDDBD3" strokeWidth="6" fill="none">
          <path d="M-20 120 L140 120 L220 200 L420 200" />
          <path d="M-20 320 L120 320 L200 420 L420 420" />
          <path d="M80 -20 L80 180 L180 280 L180 620" />
          <path d="M300 -20 L300 140 L240 220 L240 620" />
          <path d="M-20 520 L160 520 L260 480 L420 480" />
        </g>
        <g stroke="#E6E4DC" strokeWidth="3" fill="none">
          <path d="M-20 60 L420 60" />
          <path d="M-20 260 L420 260" />
          <path d="M-20 380 L420 380" />
          <path d="M20 -20 L20 620" />
          <path d="M140 -20 L140 620" />
          <path d="M360 -20 L360 620" />
        </g>
        {/* blocks */}
        <g fill="#E4E2DA" opacity="0.7">
          <rect x="30" y="140" width="40" height="100" rx="4" />
          <rect x="200" y="230" width="30" height="70" rx="4" />
          <rect x="320" y="80" width="50" height="90" rx="4" />
          <rect x="40" y="420" width="90" height="60" rx="4" />
          <rect x="260" y="500" width="80" height="70" rx="4" />
        </g>

        {(variant === 'route' || variant === 'tracking') && (
          <>
            {/* route shadow */}
            <path
              d="M180 470 L180 360 L110 290 L110 200 L190 130"
              stroke="#0B0B0D" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.12"
            />
            {/* route */}
            <path
              d="M180 470 L180 360 L110 290 L110 200 L190 130"
              stroke="#0B0B0D" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
          </>
        )}

        {/* start marker */}
        <circle cx="180" cy="470" r="9" fill="#0B0B0D" />
        <circle cx="180" cy="470" r="4" fill="#EEEDE8" />

        {/* end marker */}
        <circle cx="190" cy="130" r="10" fill="#CFFA4B" stroke="#0B0B0D" strokeWidth="3" />

        {variant === 'drivers' && (
          <g>
            <circle cx="70" cy="160" r="7" fill="#0B0B0D" />
            <circle cx="320" cy="300" r="7" fill="#0B0B0D" />
            <circle cx="240" cy="520" r="7" fill="#0B0B0D" />
            <circle cx="120" cy="420" r="7" fill="#0B0B0D" />
          </g>
        )}

        {variant === 'tracking' && (
          <g>
            <circle cx="180" cy="360" r="14" fill="#CFFA4B" opacity="0.35" style={{ transformOrigin: '180px 360px', animation: 'pulse-ring 1.8s ease-out infinite' }} />
            <circle cx="180" cy="360" r="8" fill="#CFFA4B" stroke="#0B0B0D" strokeWidth="3" />
          </g>
        )}
      </svg>
      <span className="absolute left-6 top-[38%] text-[11px] font-semibold tracking-widest text-black/25">ANNA NAGAR</span>
      <span className="absolute right-8 top-[62%] text-[11px] font-semibold tracking-widest text-black/25">T. NAGAR</span>
    </div>
  )
}
