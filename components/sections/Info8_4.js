import VideoPopup from "../elements/VidepPopup"

export default function Info8_4() {
    return (
        <div>
            <section id="info-8" className="info-8-row bg-scroll bg-geometric pt-100 info-section division">
                <div className="container white-color">
                    <div className="row">
                        {/* TEXT BLOCK */}
                        <div className="col-lg-10 offset-lg-1">
                            <div className="txt-block text-center mb-50 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Title */}
                                <h3 className="h3-lg">Security, Simplicity, Easiness</h3>
                                {/* Text */}
                                <p className="p-md">An enim nullam tempor sapien gravida donec an ipsum pretium porta justo
                                    integer
                                    at odio velna vitae auctor integer and congue magna at purus pretium ligula rutrum
                                    luctus
                                </p>
                                {/* Button */}
                                <VideoPopup style={6}/>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-12">
                            <div className="img-block wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="images/mac-screen.png" alt="info-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </div>
    )
}
