import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"


export default function Hero20({ style }) {
    return (
        <>
            <section id="hero-20" className="bg-fixed bg-darkviolet hero-section division">
                <div className="container white-color">
                    <div className="row">
                        {/* HERO TEXT */}
                        <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                            <div className="hero-txt text-center">
                                {/* Title */}
                                <h3 className="h3-xl">The best way to collect, organize and share your media files</h3>
                                {/* Video Play Button */}
                                <div className="video-block">
                                    <VideoPopup style={20} />
                                </div>
                                {/* Play Button Text */}
                                <p className="play-btn-txt">See how NextApp works (2:40 min)</p>
                                {/* Buttons Group */}
                                <div className="btns-group">
                                    {/* Buttons */}
                                    <Link href="#newsletter-1" className="btn btn-green tra-hover mr-15">Try It For Free</Link>
                                    <Link href="#" className="btn btn-tra-white black-hover">Buy For Only $6.99</Link>
                                    {/* Text */}
                                    <div className="btn-notice">
                                        <p className="p-sm">Latest release: NextApp 14.0.2, requires Mac OS X 10.8.5+</p>
                                        <p className="p-sm">Other versions available for <span><Link href="#">older Macs.</Link></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                    </div>	   {/* End row */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
