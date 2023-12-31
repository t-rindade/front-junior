import "./style.css"
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <>
        <header id="header">
        <div id="logodivheader">
        <svg id="logoeventheader" width="293" height="51" viewBox="0 0 293 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_24_16)">
<path d="M0 0.658386V4.25327L33.0148 3.95041V0.658386H0Z" fill="url(#paint0_linear_24_16)"/>
<path d="M0 23.7026V27.2975L33.0148 26.9946V23.7026H0Z" fill="url(#paint1_linear_24_16)"/>
<path d="M0 47.4051V51L33.0148 50.6971V47.4051H0Z" fill="url(#paint2_linear_24_16)"/>
<path d="M107.628 0V3.59489L140.643 3.29202V0H107.628Z" fill="url(#paint3_linear_24_16)"/>
<path d="M107.628 23.0441V26.639L140.643 26.3362V23.0441H107.628Z" fill="url(#paint4_linear_24_16)"/>
<path d="M107.628 46.7467V50.3416L140.643 50.0387V46.7467H107.628Z" fill="url(#paint5_linear_24_16)"/>
<path d="M44.5437 0.658386H48.7564L68.3408 45.7591L89.2986 0.658386H93.1811L70.5858 51H67.1324L44.5437 0.658386Z" fill="url(#paint6_linear_24_16)"/>
<path d="M163.225 51H159.686V0.658386H163.225L197.099 45.1007V0.658386H200.314V51H197.112L163.423 8.23004L163.225 51Z" fill="url(#paint7_linear_24_16)"/>
<path d="M214.643 0.658386H254.604V4.02942H236.479V51H232.854V3.62121H214.643V0.658386Z" fill="url(#paint8_linear_24_16)"/>
<path d="M279.774 10.8636H276.334V40.6762H279.774V10.8636Z" fill="url(#paint9_linear_24_16)"/>
<path d="M293.007 24.0515H263.108V27.4818H293.007V24.0515Z" fill="url(#paint10_linear_24_16)"/>
</g>
<defs>
<linearGradient id="paint0_linear_24_16" x1="0" y1="2.45583" x2="33.0148" y2="2.45583" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint1_linear_24_16" x1="0" y1="25.5" x2="0.660297" y2="25.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint2_linear_24_16" x1="0" y1="49.2025" x2="0.660297" y2="49.2025" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint3_linear_24_16" x1="107.628" y1="1.79744" x2="140.643" y2="1.79744" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint4_linear_24_16" x1="107.628" y1="24.8416" x2="140.643" y2="24.8416" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint5_linear_24_16" x1="107.628" y1="48.5441" x2="140.643" y2="48.5441" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint6_linear_24_16" x1="44.5437" y1="25.8292" x2="93.1811" y2="25.8292" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint7_linear_24_16" x1="159.686" y1="25.8292" x2="200.314" y2="25.8292" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint8_linear_24_16" x1="214.643" y1="25.8292" x2="254.604" y2="25.8292" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint9_linear_24_16" x1="276.334" y1="25.7699" x2="279.774" y2="25.7699" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<linearGradient id="paint10_linear_24_16" x1="263.108" y1="25.77" x2="293" y2="25.77" gradientUnits="userSpaceOnUse">
<stop stop-color="#B51D44"/>
<stop offset="0.99" stop-color="#821B47"/>
</linearGradient>
<clipPath id="clip0_24_16">
<rect width="293" height="51" fill="white"/>
</clipPath>
</defs>
</svg>
        </div>
<div id="linksdiv">
        <Link to="/home" className="linksheader">Home</Link>
        <Link to="/eventos" className="linksheader">Eventos</Link>
        <Link to="/contatos" className="linksheader">Contatos</Link>

        </div>
        <Link to="/contatos" className="linksheader" id="logarheader">Logar</Link>
        </header>
        </>
    )
}