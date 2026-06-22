import { cn } from "@/lib/utils";

type HiRobotProps = {
  className?: string;
};

export function HiRobot({ className }: HiRobotProps) {
  return (
    <div
      className={cn("pointer-events-none select-none", className)}
      aria-hidden
    >
      <div className="origin-bottom-right -rotate-[10deg]">
        <div className="animate-bob">
          <div className="relative animate-pop-in">
        <svg
          width="170"
          height="215"
          viewBox="0 0 140 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible drop-shadow-[0_12px_28px_hsl(var(--primary)/0.4)]"
        >
          <defs>
            <linearGradient id="robotBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3f5fb" />
              <stop offset="100%" stopColor="#dfe3ee" />
            </linearGradient>
            <linearGradient id="robotAccent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <radialGradient id="faceGrad" cx="0.5" cy="0.45" r="0.7">
              <stop offset="0%" stopColor="#1a2236" />
              <stop offset="100%" stopColor="#0a0f1c" />
            </radialGradient>
            <radialGradient id="eyeHalo" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
          </defs>

          <ellipse cx="70" cy="173" rx="30" ry="3.5" fill="#000" opacity="0.25" />

          <ellipse
            cx="70"
            cy="168"
            rx="28"
            ry="5"
            fill="url(#robotBody)"
            stroke="hsl(var(--primary) / 0.25)"
            strokeWidth="1"
          />

          <ellipse
            cx="70"
            cy="128"
            rx="40"
            ry="34"
            fill="url(#robotBody)"
            stroke="hsl(var(--primary) / 0.2)"
            strokeWidth="1"
          />

          <path
            d="M 44 102 Q 58 94 70 100 Q 82 94 96 102 Q 96 114 84 112 Q 78 120 70 115 Q 62 120 56 112 Q 44 114 44 102 Z"
            fill="url(#robotAccent)"
            opacity="0.95"
          />

          <ellipse
            cx="70"
            cy="56"
            rx="42"
            ry="40"
            fill="url(#robotBody)"
            stroke="hsl(var(--primary) / 0.2)"
            strokeWidth="1"
          />

          <path
            d="M 52 22 Q 70 10 88 22 Q 90 32 70 32 Q 50 32 52 22 Z"
            fill="url(#robotAccent)"
          />

          <ellipse
            cx="22"
            cy="58"
            rx="5"
            ry="10"
            fill="url(#robotBody)"
            stroke="hsl(var(--primary) / 0.2)"
            strokeWidth="1"
          />
          <ellipse
            cx="108"
            cy="58"
            rx="5.5"
            ry="10"
            fill="url(#robotBody)"
            stroke="hsl(var(--primary) / 0.2)"
            strokeWidth="1"
          />

          <ellipse
            cx="70"
            cy="60"
            rx="32"
            ry="26"
            fill="url(#faceGrad)"
          />
          <ellipse
            cx="70"
            cy="58"
            rx="30"
            ry="23"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            opacity="0.35"
          />

          <ellipse cx="58" cy="58" rx="10" ry="7" fill="url(#eyeHalo)" />
          <ellipse cx="82" cy="58" rx="10" ry="7" fill="url(#eyeHalo)" />

          <g
            className="animate-blink origin-[70px_60px]"
            style={{ transformBox: "view-box" }}
          >
            <g filter="url(#softGlow)" opacity="0.9">
              <path
                d="M 51 62 Q 58 50 65 62"
                stroke="hsl(var(--primary))"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 75 62 Q 82 50 89 62"
                stroke="hsl(var(--primary))"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 60 72 Q 70 80 80 72"
                stroke="hsl(var(--primary))"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </g>
            <g>
              <path
                d="M 51 62 Q 58 50 65 62"
                stroke="#a5d8ff"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              >
                <animate
                  attributeName="stroke-width"
                  values="2.2;2.6;2.2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M 75 62 Q 82 50 89 62"
                stroke="#a5d8ff"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              >
                <animate
                  attributeName="stroke-width"
                  values="2.2;2.6;2.2"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M 60 72 Q 70 80 80 72"
                stroke="#a5d8ff"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>

          <g
            style={{
              transformOrigin: "38px 107px",
              transformBox: "view-box",
            }}
            className="animate-wave"
          >
            <ellipse
              cx="26"
              cy="74"
              rx="8.5"
              ry="34"
              fill="url(#robotBody)"
              stroke="hsl(var(--primary) / 0.2)"
              strokeWidth="1"
              transform="rotate(-20 26 74)"
            />
            <ellipse
              cx="13"
              cy="40"
              rx="10"
              ry="9.5"
              fill="url(#robotAccent)"
              stroke="hsl(var(--primary) / 0.2)"
              strokeWidth="1"
            />
          </g>
        </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
