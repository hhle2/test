import Link from "next/link"


export default function Hero9({ style }) {
    return (
        <>
            <section id="hero-9" className="bg-scroll mb-100 hero-section division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-xl-5">
                            <div className="hero-9-img text-center wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">
                                <img className="img-fluid" src="/images/hero-9-img.png" alt="hero-image" />
                            </div>
                        </div>
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-xl-5 offset-xl-1">
                            <div className="hero-txt wow fadeInUp" data-wow-delay="0.3s">
                                {/* Title */}
                                <h2 className="h2-xs">Showcase your App in easy way</h2>
                                {/* Text */}
                                <p className="p-md">
                                    Semper lacus cursus porta, feugiat primis luctus ultrice tellus neque dolor primis
                                    magna nullam laoreet purus potenti undo tempor ipsum at magna congue
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
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
