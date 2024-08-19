import Link from "next/link"
import { useState } from "react"
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, headerLight }) {
    const [isDropdown, setDropdown] = useState(false)
    const handleDropdown = () => setDropdown(!isDropdown)
    return (
        <>
            <header id="header" className="header">
                <nav className={`navbar fixed-top navbar-expand-md hover-menu ${headerLight ? "navbar-light" : "navbar-dark"} bg-tra white-scroll ${scroll ? "scroll" : ""}`}>
                    <div className="container">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 240 x 60 pixels) */}
                        <Link href="/" className="navbar-brand logo-black"><img src="/images/logo.png" width={120} height={30} alt="header-logo" /></Link>
                        <Link href="/" className="navbar-brand logo-white"><img src="/images/logo-white.png" width={120} height={30} alt="header-logo" /></Link>
                        {/* Responsive Menu Button */}
                        <button className="navbar-toggler" type="button" onClick={handleMobileMenu}>
                            <span className="navbar-bar-icon"><i className="fas fa-bars" /></span>
                        </button>
                        {/* Navigation Menu */}
                        <div id="navbarContent" className={`collapse navbar-collapse ${isMobileMenu ? "show" : ""}`}>
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item dropdown ${isDropdown ? "show" : ""}`} onClick={handleDropdown}>
                                    <Link className="nav-link dropdown-toggle" href="#" id="DropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Demos
                                    </Link>
                                    <ul className={`two-columns dropdown-menu ${isDropdown ? "show" : ""}`} aria-labelledby="DropdownMenu">                                       
                                        <li><Link className="dropdown-item" href="/demo-1">Demo 01</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-2">Demo 02</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-3">Demo 03</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-4">Demo 04</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-5">Demo 05</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-6">Demo 06</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-7">Demo 07</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-8">Demo 08</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-9">Demo 09</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-10">Demo 10</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-11">Demo 11</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-12">Demo 12</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-13">Demo 13</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-14">Demo 14</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-15">Demo 15</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-16">Demo 16</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-17">Demo 17</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-18">Demo 18</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-19">Demo 19</Link></li>
                                        <li><Link className="dropdown-item" href="/demo-20">Demo 20</Link></li>
                                    </ul>
                                </li>
                                <li className={`nav-item dropdown ${isDropdown ? "show" : ""}`} onClick={handleDropdown}>
                                    <Link className="nav-link dropdown-toggle" href="#" id="DropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                    </Link>
                                    <ul className={`dropdown-menu ${isDropdown ? "show" : ""}`} aria-labelledby="DropdownMenu">
                                        <li><Link className="dropdown-item" href="/pricing">Pricing</Link></li>
                                        <li><Link className="dropdown-item" href="/reviews">Reviews</Link></li>
                                        <li><Link className="dropdown-item" href="/faqs">Faqs</Link></li>
                                        <li><Link className="dropdown-item" href="/download">Download</Link></li>
                                        <li><Link className="dropdown-item" href="/terms">Terms</Link></li>
                                        <li><Link className="dropdown-item" href="/contacts">Contacts</Link></li>
                                    </ul>
                                </li>                                
                                <li className="nav-item nl-simple"><Link className="nav-link" href="/#features">Features</Link></li>
                                <li className={`nav-item dropdown ${isDropdown ? "show" : ""}`} onClick={handleDropdown}>
                                    <Link className="nav-link dropdown-toggle" href="#" id="DropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Our Blog
                                    </Link>
                                    <ul className={`dropdown-menu ${isDropdown ? "show" : ""}`} aria-labelledby="DropdownMenu">
                                        <li><Link className="dropdown-item" href="/blog-listing">Blog Listing</Link></li>
                                        <li><Link className="dropdown-item" href="/single-post">Blog Single</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item nl-simple"><Link className="nav-link" href="/contacts">Contact Us</Link></li>
                           
                            </ul>
                            <span className="navbar-text white-color">
                                <Link href="#newsletter-1" className="btn btn-green tra-hover">Get Early Access</Link>
                            </span>
                        </div> 
                    </div>
                </nav>
            </header>
        </>
    )
}
