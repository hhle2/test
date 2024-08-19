import Link from "next/link"


export default function Hero17({ style }) {
    return (
        <>
            <section id="hero-17" className="hero-section">
                {/* HERO TEXT */}
                <div className="bg-fixed hero-17-txt division">
                    <div className="container white-color">
                        <div id="hero-17-content" className="row">
                            <div className="col-md-10 offset-md-1 hero-txt text-center">
                                {/* Title */}
                                <h3 className="h3-xl">Manage all your personal finance</h3>
                                {/* Text */}
                                <p className="p-lg">Feugiat primis ligula risus auctor laoreet augue egestas mauris viverra
                                    tortor in iaculis pretium magna, mauris rhoncus ipsum placerat efficitur ipsum
                                </p>
                                {/* Buttons Group */}
                                <div className="btns-group">
                                    {/* Buttons */}
                                    <Link href="#download-5" className="btn btn-yellow tra-hover mr-10">Try 14 days free trial</Link>
                                    <Link href="#process-3" className="btn btn-tra-white black-hover">Buy For Only $4.99</Link>
                                </div>
                            </div>
                        </div>
                    </div> {/* End container */}
                </div> {/* END HERO TEXT */}
                {/* HERO IMAGE */}
                <div className="hero-17-img division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img className="img-fluid" src="/images/hero-17-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
