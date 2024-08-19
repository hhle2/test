

export default function Hero14({ style }) {
    return (
        <>
            <section id="hero-14" className="bg-fixed hero-section division">
                <div className="container">
                    {/* HERO TEXT */}
                    <div className="row">
                        <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                            <div className="hero-txt text-center mb-40">
                                {/* Title */}
                                <h3 className="h3-xl">Next Generation Messaging App</h3>
                                {/* Text */}
                                <p className="p-md grey-color">
                                    Feugiat primis ligula risus auctor laoreet augue egestas and mauris viverra tortor in
                                    iaculis pretium magna undo ipsum mauris
                                </p>
                            </div>
                        </div>
                    </div> {/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-14-img text-center">
                                <img className="img-fluid" src="/images/hero-14-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* END HERO IMAGE */}
                </div> {/* End container */}
            </section>
        </>
    )
}
