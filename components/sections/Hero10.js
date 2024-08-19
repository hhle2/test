import Link from "next/link"


export default function Hero10({ style }) {
    return (
        <>
            <section id="hero-10" className="bg-fixed hero-section division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-lg-5">
                            <div className="hero-txt text-center mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Logo */}
                                <img className="img-fluid" src="/images/color-logo.png" width={125} height={125} alt="hero-app-logo" />
                                {/* Title */}
                                <h2 className="h2-xs">NextApp</h2>
                                {/* Text */}
                                <p className="p-lg">Feugiat primis ligula risus auctor laoreet augue undo egestas mauris viverra
                                </p>
                                {/* STORE BADGES */}
                                <div className="stores-badge">
                                    {/* AppStore */}
                                    <Link href="#" className="store">
                                        <img className="appstore-original" src="/images/store_badges/appstore.png" alt="appstore-logo" />
                                    </Link>
                
                                    {/* OS Prerequisite */}
                                    <span className="os-version">Version 14.0.2, OS X 10.10+</span>
                                </div> {/* END STORE BADGES */}
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-lg-6 offset-lg-1">
                            <div className="hero-10-img text-center mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="/images/hero-10-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
