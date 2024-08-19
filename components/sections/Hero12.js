

export default function Hero12({ style }) {
    return (
        <>
            <section id="hero-12" className="bg-fixed hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-7 col-xl-6">
                            <div className="hero-txt white-color mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Hero App Data */}
                                <div className="hero-app-data">
                                    <h4 className="h4-xs">NextApp 14.0.2</h4>
                                    <span className="app-version">New</span>
                                </div>
                                {/* Title */}
                                <h2 className="h2-xs">The easiest way to exchange your contact information</h2>
                                {/* Text */}
                                <p className="p-lg">Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra
                                    tortor in iaculis</p>
                                {/* HERO NEWSLETTER FORM */}
                                <form className="newsletter-form">
                                    {/* Newsletter Inputs */}
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Your email address" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-green black-hover">Get Free Trial</button>
                                        </span>
                                    </div>
                                    {/* Newsletter Form Notification */}
                                    <label htmlFor="s-email" className="newsletter-form-notification" />
                                </form>
                                {/* HERO LINKS */}
                                <div className="form-text">
                                    <span>* We will never share your information or send you spam</span>
                                </div>
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-5 col-xl-5 offset-xl-1">
                            <div className="hero-12-img wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">
                                <img className="img-fluid" src="/images/hero-12-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
                {/* Bottom wave */}
                <div className="bg-fixed bottom-wave" />
            </section>
        </>
    )
}
