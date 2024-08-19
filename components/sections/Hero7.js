import Link from "next/link"


export default function Hero7({ style }) {
    return (
        <>
            <section id="hero-7" className="hero-section">
                {/* HERO LOGO */}
                <div className="bg-scroll hero-7-logo division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-6 hero-txt white-color">
                                {/* HERO APP LOGO */}
                                <div className="hero-app-logo">
                                    <div className="d-flex align-items-center">
                                        <span>NextApp</span>
                                        <img className="img-fluid" src="/images/focus-logo.png" width={90} height={90} alt="hero-app-logo" />
                                    </div>
                                    <h5 className="h5-lg">14.0.2</h5>
                                </div>
                            </div>
                        </div>
                    </div> {/* End container */}
                </div> {/* END HERO LOGO */}
                {/* HERO-7 CONTENT */}
                <div className="hero-7-content division">
                    <div className="container">
                        <div className="row">
                            {/* HERO IMAGE */}
                            <div id="hero-7-img" className="col-md-6 col-xl-6">
                                <div className="hero-img text-center">
                                    <img className="img-fluid" src="/images/hero-7-img.png" alt="hero-image" />
                                </div>
                            </div>
                            {/* HERO TEXT */}
                            <div className="col-md-6 col-xl-5">
                                <div className="hero-txt">
                                    {/* Title */}
                                    <h3 className="h3-xl">Stay focused and achieve more</h3>
                                    {/* Text */}
                                    <p className="p-md">Feugiat primis ligula risus auctor augue egestas mauris viverra
                                        tortor in iaculis magna ipsum mauris auctor
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
                             
                                        {/* OS Prerequisite */}
                                        <span className="os-version">* Now Available on Android Devices From 5.5</span>
                                    </div> {/* END STORE BADGES */}
                                </div>
                            </div> {/* END HERO TEXT */}
                        </div> {/* End row */}
                    </div> {/* End container */}
                </div> {/* END HERO-7 CONTENT */}
            </section>
        </>
    )
}
