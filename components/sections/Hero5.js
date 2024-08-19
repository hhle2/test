import Link from "next/link"


export default function Hero5({ style }) {
    return (
        <>
            <section id="hero-5" className="bg-skyblue hero-section division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-lg-6">
                            <div className="hero-txt text-center wow fadeInUp" data-wow-delay="0.3s">
                                {/* HERO APP LOGO */}
                                <div className="hero-app-logo">
                                    <div className="d-flex align-items-center">
                                        <span>NextApp</span>
                                        <img className="img-fluid" src="/images/chat-logo.png" width={90} height={90} alt="hero-app-logo" />
                                    </div>
                                </div>
                                {/* Text */}
                                <h5 className="h5-lg">Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra
                                    tortor in iaculis suscipit mauris laoreet rhoncus ipsum
                                </h5>
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
                           
                                    {/* OS Prerequisite */}
                                    <span className="os-version">* Now Available on Android Devices From 5.5</span>
                                </div> {/* END STORE BADGES */}
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-lg-5 offset-lg-1">
                            <div className="hero-5-img text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="/images/hero-5-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
