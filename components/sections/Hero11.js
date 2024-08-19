import Link from "next/link"


export default function Hero11({ style }) {
    return (
        <>
            <section id="hero-11" className="hero-section">
                {/* HERO TEXT */}
                <div className="bg-scroll hero-11-txt division">
                    <div className="container white-color">
                        <div className="row">
                            <div className="col-md-7 col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Title */}
                                <h3 className="h3-md">Keep all your devices in sync with Cloud Storage</h3>
                                {/* Text */}
                                <p className="p-md">Feugiat primis ligula risus auctor augue egestas and mauris viverra tortor
                                    in iaculis magna feugiat mauris undo ipsum in placerat ligula risus auctor augue egestas
                                </p>
                                {/* STORE BADGES */}
                                <div className="stores-badge">
                                    {/* AppStore */}
                                    <Link href="#" className="store">
                                        <img className="appstore-original" src="/images/store_badges/appstore.png" alt="appstore-logo" />
                                    </Link>
                                    {/* Google Play */}
                                    <Link href="#" className="store">
                                        <img className="googleplay-original" src="/images/store_badges/googleplay.png" alt="googleplay-logo" />
                                    </Link>
                        
                                </div> {/* END STORE BADGES */}
                            </div>
                        </div> {/* End row */}
                    </div> {/* End container */}
                </div> {/* END HERO TEXT */}
                {/* HERO IMAGE */}
                <div className="hero-11-img division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-4 text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="/images/hero-11-img.png" alt="hero-image" />
                            </div>
                        </div> {/* End row */}
                    </div> {/* End container */}
                </div> {/* END HERO IMAGE */}
            </section>
        </>
    )
}
