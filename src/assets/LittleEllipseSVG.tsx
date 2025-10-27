const LittleEllipseSVG = () => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_886_37901)">
            <circle cx="35.9275" cy="35.9275" r="20.8045" fill="url(#paint0_radial_886_37901)" shapeRendering="crispEdges" />
            <circle cx="35.9275" cy="35.9275" r="20.0043" stroke="white" strokeWidth="1.60035" shapeRendering="crispEdges" />
        </g>
        <defs>
            <filter id="filter0_d_886_37901" x="-0.000217319" y="-0.000217319" width="71.8559" height="71.8554" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1.60035" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_886_37901" />
                <feOffset />
                <feGaussianBlur stdDeviation="6.76146" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.56 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_886_37901" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_886_37901" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_886_37901" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.9275 35.9275) rotate(90) scale(20.8045)">
                <stop offset="0.5625" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.56" />
            </radialGradient>
        </defs>
    </svg>

);

export default LittleEllipseSVG;