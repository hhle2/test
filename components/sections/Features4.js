import Link from "next/link"


export default function Features4({ style }) {
    return (
        <>
            <section id="features-4" className="features-section">
                <div className="bg-fixed bg-lines pt-100 bg-inner bg-lightgrey division">
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 section-title">
                                {/* Title 	*/}
                                <h3 className="h3-lg">Register, Connect, Enjoy NextApp</h3>
                                {/* Text */}
                                <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                    libero tempus, blandit posuere ligula varius magna congue cursus porta
                                </p>
                            </div>
                        </div>
                        {/* FEATURES-4 CONTENT */}
                        <div className="row">
                            <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                <div className="f4-content">
                                    <div className="row">
                                        {/* FEATURE BOX #1 */}
                                        <div className="col-md-6">
                                            <div className="fbox-4 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                                {/* Icon  */}
                                                <div className="fbox-4-icon">
                                                    <img className="img-90" src="/images/icons/keyhole.png" alt="feature-icon" />
                                                </div>
                                                {/* Title */}
                                                <h5 className="h5-lg">Integer congue magna a pretium purus ligula</h5>
                                                {/* Text */}
                                                <p>Feugiat primis ultrice semper lacus cursus porta, in ligula risus auctor
                                                    tempus feugiat dolor felis
                                                </p>
                                                {/* Button */}
                                                <Link href="#" className="btn btn-sm btn-blue black-hover">Find Out More</Link>
                                            </div>
                                        </div> {/* END FEATURE BOX #1 */}
                                        {/* FEATURE BOX #2 */}
                                        <div className="col-md-6">
                                            <div className="fbox-4 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                                {/* Icon  */}
                                                <div className="fbox-4-icon">
                                                    <img className="img-90" src="/images/icons/shuffle-1.png" alt="feature-icon" />
                                                </div>
                                                {/* Title */}
                                                <h5 className="h5-lg">Egestas magna ipsum vitae purus ipsum</h5>
                                                {/* Text */}
                                                <p>Porta semper lacus and cursus feugiat primis ultrice ligula risus auctor
                                                    porta feugiat dolor
                                                </p>
                                                {/* Button */}
                                                <Link href="#" className="btn btn-sm btn-blue black-hover">Find Out More</Link>
                                            </div>
                                        </div> {/* END FEATURE BOX #2 */}
                                    </div>
                                </div>
                            </div>
                        </div> {/* END FEATURES-4 CONTENT */}
                    </div> {/* End container */}
                </div> {/* End Inner Background */}
            </section>
        </>
    )
}



