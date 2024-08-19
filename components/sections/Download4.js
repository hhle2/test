import Link from "next/link"


export default function Download4({ style, title, img }) {
    return (
        <>
            <section id="download-4" className="bg-scroll bg-image pt-100 download-section division">
                <div className="container white-color">
                    <div className="row d-flex align-items-center">
                        {/* DOWNLOAD TXT */}
                        <div className="col-md-7 col-xl-6">
                            <div className="download-txt mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Title */}
                                <h3 className="h3-xl">{title}</h3>
                                {/* Text */}
                                <p className="p-md">Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices
                                    posuere cubilia curae integer congue leo metus, eu mollis lorem primis in orci integer
                                    metus
                                    mollis faucibus
                                </p>
                                {/* STORE BADGES */}
                                <div className="stores-badge">
                                    {/* AppStore */}
                                    <Link href="#" className="store">
                                        <img className="appstore-white" src="/images/store_badges/appstore-tra-white.png" alt="appstore-logo" />
                                    </Link>
                                    {/* Google Play */}
                                    <Link href="#" className="store">
                                        <img className="googleplay-white" src="/images/store_badges/googleplay-tra-white.png" alt="googleplay-logo" />
                                    </Link>
                                    {/* OS Prerequisite */}
                                    <span className="os-version">* Available on iPhone, iPad and all Android devices from
                                        5.5</span>
                                </div> {/* END STORE BADGES */}
                            </div>
                        </div> {/* END DOWNLOAD TXT */}
                        {/* DOWNLOAD IMAGE */}
                        <div className="col-md-5 col-xl-5 offset-xl-1">
                            <div className="download-4-img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                {img === 1 && <img className="img-fluid" src="/images/image-13.png" alt="download-image" />}
                                {img === 2 && <img className="img-fluid" src="/images/image-14.png" alt="download-image" />}
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </>
    )
}
