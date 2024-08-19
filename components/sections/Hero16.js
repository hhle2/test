

export default function Hero16({ style }) {
    return (
        <>
            <section id="hero-16" className="bg-scroll hero-section division">
                <div className="container white-color">
                    {/* HERO TEXT */}
                    <div className="row">
                        <div className="col-md-10 col-xl-10 offset-md-1 offset-xl-1">
                            <div className="hero-txt text-center">
                                {/* Logo */}
                                <div className="hero-app-logo wow fadeInUp" data-wow-delay="0.5s">
                                    <img className="img-fluid" src="/images/chat-logo.png" width={150} height={150} alt="hero-app-logo" />
                                </div>
                                {/* Title */}
                                <h3 className="h3-xl wow fadeInUp" data-wow-delay="0.5s">
                                    Welcome to NextApp Desktop
                                </h3>
                                {/* Text */}
                                <p className="p-lg wow fadeInUp" data-wow-delay="0.9s">
                                    Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in
                                    iaculis pretium magna, mauris rhoncus ipsum
                                </p>
                            </div>
                        </div>
                    </div> {/* END HERO TEXT */}
                </div> {/* End container */}
            </section>
        </>
    )
}
