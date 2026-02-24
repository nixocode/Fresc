export default function Logo({ height = 56, inverted = false }: { height?: number; inverted?: boolean }) {
    const scale = height / 56;
    const width = Math.round(80 * scale);
    const pinColor = inverted ? '#FFFFFF' : '#1B7A3D';
    const pinLight = inverted ? 'rgba(255,255,255,0.7)' : '#2ECC55';
    const textColor = inverted ? '#FFFFFF' : '#1B7A3D';

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 80 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Fresc logo"
        >
            {/* Pin shape */}
            <g transform="translate(0, 0)">
                <path
                    d="M18 2C10.3 2 4 8.3 4 16c0 10 14 22 14 22s14-12 14-22c0-7.7-6.3-14-14-14z"
                    fill={pinLight}
                    stroke={pinColor}
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                />
                {/* Strawberry */}
                <g transform="translate(18, 15)">
                    {/* Berry body */}
                    <ellipse cx="0" cy="2" rx="6.5" ry="7.5" fill="#E84C3D" />
                    <ellipse cx="0" cy="0" rx="5.5" ry="6.5" fill="#EF5350" />
                    {/* Seeds */}
                    <ellipse cx="-2" cy="-2" rx="0.6" ry="0.9" fill="#C0392B" transform="rotate(-15)" />
                    <ellipse cx="2" cy="-1" rx="0.6" ry="0.9" fill="#C0392B" transform="rotate(15)" />
                    <ellipse cx="0" cy="2" rx="0.6" ry="0.9" fill="#C0392B" />
                    <ellipse cx="-2.5" cy="2.5" rx="0.6" ry="0.9" fill="#C0392B" transform="rotate(-10)" />
                    <ellipse cx="2.5" cy="3" rx="0.6" ry="0.9" fill="#C0392B" transform="rotate(10)" />
                    {/* Leaf */}
                    <path
                        d="M-1-6.5C-1-6.5 0-9 0-9.5S1.5-8 2-6.5c0 0-0.5-1.5-1-1.5S-1-6.5-1-6.5z"
                        fill="#27AE60"
                    />
                    <path
                        d="M-2.5-6C-2.5-6-4-8-3.5-8.5S-1-7.5-0.5-6.5"
                        fill="#2ECC71"
                        stroke="#27AE60"
                        strokeWidth="0.3"
                    />
                    <path
                        d="M2.5-6C2.5-6 4-8 3.5-8.5S1-7.5 0.5-6.5"
                        fill="#2ECC71"
                        stroke="#27AE60"
                        strokeWidth="0.3"
                    />
                </g>
            </g>

            {/* "fresc" text */}
            <text
                x="40"
                y="50"
                fontFamily="'Nunito', sans-serif"
                fontWeight="800"
                fontSize="18"
                fill={textColor}
                textAnchor="start"
                dominantBaseline="auto"
                letterSpacing="-0.5"
            >
                fresc
            </text>
        </svg>
    );
}
