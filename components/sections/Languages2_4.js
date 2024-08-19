

export default function Languages2_4() {
    return (
        <div>
            <section id="languages-2" className="wide-60 languages-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block pc-45 mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Section ID */}
                                <span className="section-id id-color">Multi-Language Support</span>
                                {/* Title */}
                                <h3 className="h3-md">Speaks your language</h3>
                                {/* List */}
                                <ul className="txt-list">
                                    <li>Vitae auctor integer congue magna at pretium purus pretium a ligula rutrum luctus
                                        risus enim ipsum blandit and enim
                                    </li>
                                    <li>Vitae auctor integer congue magna at pretium purus</li>
                                    <li>Justo odio integer a velna lectus aenean magna and mauris lectus pretium
                                        ligula rutrum luctus risus ac risus
                                    </li>
                                </ul>
                                {/* Button */}
                                <a href="/contacts" className="btn btn-blue black-hover mt-30">Want to help with
                                    translation?</a>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block text-center pr-45 mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="images/world-lang.png" alt="languages-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </div>
    )
}
