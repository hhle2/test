import Link from "next/link"


export default function Download1({ style,cls }) {
    return (
        <>
            <section id="download-1" className={`bg-scroll download-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row">
                        {/* DOWNLOAD TXT */}
                        <div className="col-lg-10 offset-lg-1">
                            <div className="download-txt text-center wow fadeInUp" data-wow-delay="0.3s">
                                {/* Title */}
                                <h3 className="h3-xs">Getting started takes less than 5 minutes</h3>
                                {/* Text */}
                                <p className="p-md">Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices
                                    posuere cubilia curae integer congue leo metus, eu mollis lorem primis in orci integer metus
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
                                    <span className="os-version">* Available on iPhone, iPad and all Android devices from 5.5</span>
                                </div>	{/* END STORE BADGES */}
                            </div>
                        </div>	{/* END DOWNLOAD TXT */}
                    </div>	  {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
