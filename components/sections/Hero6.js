import Link from "next/link"


export default function Hero6({ style }) {
    return (
        <>
            <section id="hero-6" className="bg-scroll hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO IMAGE */}
                        <div className="col-md-6 col-xl-6">
                            <div className="hero-6-img text-center mb-40 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                <img className="img-fluid" src="/images/hero-6-img.png" alt="hero-image" />
                            </div>
                        </div>
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-xl-5 offset-xl-1">
                            <div className="hero-txt mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Hero App Data */}
                                <div className="hero-app-data">
                                    <h4 className="h4-lg">NextApp 14.0.2</h4>
                                    <span className="app-version">New</span>
                                </div>
                                {/* Title */}
                                <h3 className="h3-xl">Banking has never been so rewarding</h3>
                                {/* Text */}
                                <p className="p-md grey-color">Feugiat primis ligula risus auctor laoreet augue egestas and
                                    mauris viverra tortor in iaculis pretium magna undo ipsum mauris in placerat feugiat
                                    primis ultrice
                                </p>
                                {/* Buttons */}
                                <Link href="#newsletter-2" className="btn btn-blue black-hover mr-10">Free Trial</Link>
                                <Link href="#pricing-1" className="btn btn-tra-grey black-hover">Get Full Version</Link>
                            </div>
                        </div> {/* END HERO TEXT */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
