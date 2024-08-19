import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"


export default function Hero18({ style }) {
    return (
        <>
            <section id="hero-18" className="bg-lightgrey hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-10 offset-md-1">
                            <div className="hero-txt text-center">
                                {/* Title */}
                                <h3 className="h3-sm">Powerful calendar app for <span>Mac</span> and <span>iOS</span></h3>
                                {/* Video Preview */}
                                <div className="video-preview">
                                    <VideoPopup style={18} />
                                </div>
                                {/* Buttons Group */}
                                <div className="btns-group">
                                    {/* Buttons */}
                                    <Link href="/download" className="btn btn-blue black-hover mr-10">Free Download</Link>
                                    <Link href="#" className="store"><img className="mac-appstore" src="/images/store_badges/mac-appstore.png" alt="macstore-logo" /></Link>
                                    {/* Text */}
                                    <div className="btn-notice">
                                        <p className="p-sm">Latest release: NextApp 14.0.2, requires Mac OS X 10.8.5+</p>
                                        <p className="p-sm">Other versions available for <span><Link href="#">older
                                            Macs.</Link></span></p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* END HERO TEXT */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
