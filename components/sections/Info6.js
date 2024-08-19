import VideoPopup from "../elements/VidepPopup"


export default function Info6({ style }) {
    return (
        <>
            <section id="info-6" className="info-6-row pt-80 info-section">
                <div className="pb-100 bg-inner bg-lightgrey division">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            {/* TEXT BLOCK */}
                            <div className="col-md-6">
                                <div className="txt-block pc-45 wow fadeInUp" data-wow-delay="0.3s">
                                    {/* Section ID */}
                                    <span className="section-id id-color"> Handling With Ease</span>
                                    {/* Title */}
                                    <h3 className="h3-lg">Share your photos with friends easily</h3>
                                    {/* Text */}
                                    <p>An enim nullam tempor sapien gravida donec an ipsum pretium porta justo integer at
                                        odio
                                        velna vitae auctor integer and congue magna at purus pretium ligula rutrum luctus
                                        ultrice
                                        undo gravida lectus suscipit gestas magna suscipit luctus undo
                                    </p>
                                    {/* Button */}
                                    <VideoPopup style={6} />
                                </div>
                            </div> {/* END TEXT BLOCK */}
                            {/* IMAGE BLOCK */}
                            <div className="col-md-6">
                                <div className="info-6-img pc-45 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                    <img className="img-fluid" src="/images/image-11.png" alt="info-image" />
                                </div>
                            </div>
                        </div> {/* End row */}
                    </div> {/* End container */}
                </div> {/* End Inner Background */}
            </section>

        </>
    )
}
