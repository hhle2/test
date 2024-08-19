import Link from "next/link"


export default function Download2({ style }) {
    return (
        <>
            <section id="download-2" className="wide-100 download-section">
                <div className="bg-scroll bg-image bg-inner division">
                    <div className="container white-color">
                        <div className="row d-flex align-items-center">



                            {style === 1 && <>
                                <div className="col-md-6">
                                    <div className="download-txt pc-45 wow fadeInUp" data-wow-delay="0.3s">
                                        <h3 className="h3-lg">Stunning landing page for your App</h3>
                                        <div className="stores-badge">
                                            <Link href="#" className="store">
                                                <img className="appstore-white" src="/images/store_badges/appstore-tra-white.png" alt="appstore-logo" />
                                            </Link>
                                            <Link href="#" className="store">
                                                <img className="googleplay-white" src="/images/store_badges/googleplay-tra-white.png" alt="googleplay-logo" />
                                            </Link>
                                            <span className="os-version">* Available on iPhone, iPad and all Android devices from
                                                5.5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="download-2-img text-center pr-45 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                        <img className="img-fluid" src="/images/image-10.png" alt="download-image" />
                                    </div>
                                </div>
                            </>}
                            {style === 2 &&
                                <>
                                    <div className="col-md-6">
                                        <div className="download-txt pc-45 wow fadeInUp" data-wow-delay="0.3s">
                                            {/* Title */}
                                            <h3 className="h3-lg">Post your photos anywhere and see it everywhere</h3>
                                            {/* STORE BADGES */}
                                            <div className="stores-badge">
                                                {/* AppStore */}
                                                <a href="#" className="store">
                                                    <img className="appstore-white" src="images/store_badges/appstore-tra-white.png" alt="appstore-logo" />
                                                </a>
                                                {/* Google Play */}
                                                <a href="#" className="store">
                                                    <img className="googleplay-white" src="images/store_badges/googleplay-tra-white.png" alt="googleplay-logo" />
                                                </a>
                                                {/* OS Prerequisite */}
                                                <span className="os-version">* Available on iPhone, iPad and all Android devices from
                                                    5.5</span>
                                            </div>
                                        </div>
                                    </div> {/*END DOWNLOAD TXT */}
                                    {/* DOWNLOAD IMAGE */}
                                    <div className="col-md-6">
                                        <div className="download-2-img text-center pr-45 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                            <img className="img-fluid" src="images/image-10.png" alt="download-image" />
                                        </div>
                                    </div>
                                </>

                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
