import Link from "next/link"


export default function Hero8({ style }) {
    return (
        <>
            <section id="hero-8" className="hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-7 col-xl-6">
                            <div className="hero-txt mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Small Title */}
                                <h3 className="h3-xl">Track all your money goals in one place</h3>
                                {/* Text */}
                                <p className="p-md">Feugiat primis ligula risus auctor laoreet augue undo egestas mauris viverra
                                    tortor in iaculis pretium magna, rhoncus and mauris ipsum in placerat feugiat primis
                                    ultrice
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
                            
                                    <span className="os-version">* Now Available on Android Devices From 5.5</span>
                                </div> {/* END STORE BADGES */}
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-5 col-xl-6">
                            <div className="hero-8-img mb-40 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">
                                <img className="img-fluid" src="/images/hero-8-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
