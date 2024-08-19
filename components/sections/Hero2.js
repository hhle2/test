

export default function Hero2({ style }) {
    return (
        <>
            <section id="hero-2" className="hero-section">
                {/* HERO TEXT */}
                <div className="bg-lightgrey hero-2-txt division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2 text-center">
                                {/* Title */}
                                <h3 className="h3-lg">The simplest way to manage Email</h3>
                                {/* Text */}
                                <p>Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra tortor in
                                    iaculis pretium magna rhoncus
                                </p>
                            </div>
                        </div> {/* End row */}
                    </div> {/* End container */}
                </div> {/* END HERO TEXT */}
                {/* HERO IMAGE */}
                <div className="hero-2-img division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img className="img-fluid" src="/images/hero-2-img.png" alt="hero-image" />
                            </div>
                        </div> {/* End row */}
                    </div> {/* End container */}
                </div> {/* END HERO IMAGE */}
            </section>
        </>
    )
}
