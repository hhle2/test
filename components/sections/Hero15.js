import Link from "next/link"


export default function Hero15({ style }) {
    return (
        <>
            <section id="hero-15" className="bg-skyblue hero-section division">
                <div className="container white-color">
                    <div className="row">
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-xl-5">
                            <div className="hero-txt wow fadeInUp" data-wow-delay="0.3s">
                                {/* HERO APP LOGO */}
                                <div className="hero-app-logo">
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid" src="/images/design-logo.png" width={65} height={65} alt="hero-app-logo" />
                                        <span>NextApp</span>
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="h3-xl">The simple way to manage your events and reminders</h3>
                                {/* Text */}
                                <p className="p-lg">Feugiat primis ligula risus auctor laoreet an augue egestas and mauris
                                    viverra
                                    tortor pretium ligula
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
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-xl-6 offset-xl-1">
                            <div className="hero-15-img text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="/images/hero-15-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
                {/* Bottom Inclined Line */}
                <div className="bg-fixed left-incline" />
            </section>
        </>
    )
}
