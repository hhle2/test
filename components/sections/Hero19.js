import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"


export default function Hero19({ style }) {
    return (
        <>
            <section id="hero-19" className="bg-fixed hero-section division">
                <div className="container">
                    <div className="row">
                        {/* HERO TEXT */}
                        <div className="col-md-10 offset-md-1">
                            <div className="hero-txt text-center">
                                {/* Video Preview */}
                                <div className="video-preview">
                                    <VideoPopup style={19} />
                                </div>
                                {/* Title */}
                                <h3 className="h3-sm">Get your disc space back with <span>NextApp</span> Utility</h3>
                                {/* Text */}
                                <p className="p-lg">Feugiat primis ligula risus auctor augue egestas and mauris viverra tortor
                                    in iaculis magna undo ipsum mauris in placerat feugiat ligula risus auctor
                                </p>
                                {/* Buttons Group */}
                                <div className="btns-group">
                                    {/* Buttons */}
                                    <Link href="/download" className="btn btn-green black-hover mr-15">Free Download</Link>
                                    <Link href="#pricing-2" className="btn btn-blue black-hover">Buy For Only $8.99</Link>
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
