import Link from "next/link"


export default function Hero1({ style }) {
    return (
        <>
            <section id="hero-1" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-txt mb-40 white-color wow fadeInUp" data-wow-delay="0.3s">
                                {/* Title */}
                                <h2 className="h2-xs">Turn your photos into works of art</h2>
                                {/* Text */}
                                <p className="p-md">Feugiat primis ligula risus auctor laoreet augue egestas and mauris viverra
                                    tortor in iaculis pretium magna undo ipsum mauris in placerat feugiat primis ultrice
                                </p>
                                {/* STORE BADGES */}
                                <div className="stores-badge">
                                    {/* AppStore */}
                                    <Link href="#" className="store">
                                        <img className="appstore-white" src="/images/store_badges/appstore-tra-white.png" alt="appstore-logo" />
                                    </Link>
                                    {/* Google Play */}
                                    <Link href="#" className="store">
                                        <img className="googleplay-white" src="/images/store_badges/googleplay-tra-white.png" alt="googleplay-logo" />
                                    </Link>
                                    {/* OS Prerequisite */}
                                    <span className="os-version">* Available on iPhone, iPad and all Android devices from
                                        5.5</span>
                                </div> {/* END STORE BADGES */}
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-1-img text-center mb-40 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="/images/hero-1-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>


        </>
    )
}
