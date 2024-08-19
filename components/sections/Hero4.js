

export default function Hero4({ style }) {
    return (
        <>
            <section id="hero-4" className="hero-section">
                {/* HERO-4 CONTENT */}
                <div className="hero-4-content division">
                    <div className="container">
                        <div className="row">
                            {/* HERO TEXT */}
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <div className="hero-txt white-color">
                                    {/* Title */}
                                    <h3 className="h3-xl">Organize all your media content easily</h3>
                                    {/* Text */}
                                    <p className="p-lg">Feugiat primis ligula risus auctor a laoreet egestas augue mauris
                                        viverra
                                        tortor in iaculis pretium magna, mauris rhoncus ipsum placerat feugiat primis
                                    </p>
                                    {/* HERO NEWSLETTER FORM */}
                                    <form className="newsletter-form">
                                        {/* Newsletter Inputs */}
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Your email address" required id="s-email" />
                                            <span className="input-group-btn">
                                                <button type="submit" className="btn btn-green black-hover">Get Early
                                                    Access</button>
                                            </span>
                                        </div>
                                        {/* Newsletter Form Notification */}
                                        <label htmlFor="s-email" className="newsletter-form-notification" />
                                    </form>
                                    {/* FORM TEXT */}
                                    <div className="form-text">
                                        <span>* We will never share your information or send you spam</span>
                                    </div>
                                </div>
                            </div> {/* END HERO TEXT */}
                        </div> {/* End row */}
                    </div> {/* End container */}
                </div> {/* END HERO-4 CONTENT */}
                {/* HERO IMAGE */}
                <div className="hero-4-img">
                    <img className="img-fluid" src="/images/hero-4-img.png" alt="hero-image" />
                </div>
            </section>
        </>
    )
}
