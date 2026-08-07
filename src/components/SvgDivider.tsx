type Props = {
  from?: string;
  to?: string;
  className?: string;
  flip?: boolean;
};

// Elegant SVG wave divider between sections
export default function SvgDivider({
  from = '#FFF8F0',
  to = '#F7F3EA',
  className = '',
  flip = false,
}: Props) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[90px]"
      >
        <defs>
          <linearGradient id={`g-${to.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0,64 C180,128 360,0 540,32 C720,64 900,128 1080,96 C1260,64 1380,16 1440,32 L1440,120 L0,120 Z"
          fill={`url(#g-${to.replace('#', '')})`}
        />
      </svg>
    </div>
  );
}
