const EllipseSVG = () => (

    <svg width="305" height="305" viewBox="0 0 305 305" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_771)">
            <circle cx="152.335" cy="152.334" r="113.535" fill="url(#paint0_radial_1_771)" shapeRendering="crispEdges" />
            <circle cx="152.335" cy="152.334" r="111.535" stroke="white" strokeWidth="4" shapeRendering="crispEdges" />
        </g>
        <defs>
            <filter id="filter0_d_1_771" x="0.000782013" y="-0.00019455" width="304.67" height="304.669" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_771" />
                <feOffset />
                <feGaussianBlur stdDeviation="18.9" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.84 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_771" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_771" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_1_771" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(152.335 152.334) rotate(90) scale(113.535)">
                <stop offset="0.831731" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.56" />
            </radialGradient>
        </defs>
    </svg>


);

export default EllipseSVG;