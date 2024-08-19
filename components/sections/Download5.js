import Link from "next/link"


export default function Download5({ style, title }) {
    return (
        <>
            <section id="download-5" className="bg-scroll bg-image pt-100 download-section division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* DOWNLOAD IMAGE */}
                        <div className="col-md-6">
                            <div className="download-5-img text-center wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="/images/image-16.png" alt="download-image" />
                            </div>
                        </div>
                        {/* DOWNLOAD TEXT */}
                        <div className="col-md-6">
                            <div className="download-txt mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Title */}
                                <h3 className="h3-xl">{title}</h3>
                                {/* Text */}
                                <p>An nullam tempor sapien, eget gravida donec enim ipsum porta justo integer at odio velna
                                    vitae
                                    auctor integer congue magna undo impedit. Gravida magna lacus odio ac risus auctor
                                    tempus
                                </p>
                                {/* STORE BADGES */}
                                <div className="stores-badge">
                                    {/* AppStore */}
                                    <Link href="#" className="store">
                                        <img className="appstore-original" src="/images/store_badges/appstore.png" alt="appstore-logo" />
                                    </Link>
                                    {/* Google Play */}
                                    <Link href="#" className="store">
                                        <img className="googleplay-original" src="/images/store_badges/googleplay.png" alt="googleplay-logo" />
                                    </Link>
                                    
                                </div> {/* END STORE BADGES */}
                            </div>
                        </div> {/* END DOWNLOAD TEXT */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
