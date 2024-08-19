import Link from "next/link"


export default function Download3({ style }) {
    return (
        <>
            <section id="download-3" className="bg-lightdark download-section division">
                <div className="container white-color">
                    <div className="row">
                        {/* DOWNLOAD TXT */}
                        <div className="col-md-12 text-center">
                            <div className="download-txt">
                                <div className="d-line d-flex align-items-center wow fadeInUp" data-wow-delay="0.3s">
                                    {/* Title */}
                                    <h5 className="h5-xl">Available now for all your Apple iOS devices</h5>
                                    {/* DOWNLOAD STORE BADGES */}
                                    <div className="stores-badge">
                                        {/* AppStore */}
                                        <Link href="#" className="store">
                                            <img className="appstore-original" src="/images/store_badges/appstore.png" alt="appstore-logo" />
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
