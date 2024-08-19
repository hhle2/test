import VideoPopup from "../elements/VidepPopup"

export default function Info4_2() {
    return (
        <div>
            <section id="info-4" className="info-4-row pt-100 info-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block pc-45 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="images/image-12.png" alt="info-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block pc-45 mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Section ID */}
                                <span className="section-id id-color">Easily Share Lists</span>
                                {/* Title */}
                                <h3 className="h3-lg">Plan and share your adventures</h3>
                                {/* Text */}
                                <p>An enim nullam tempor sapien gravida donec an ipsum pretium porta justo integer at
                                    odio velna vitae auctor integer and congue magna at purus pretium ligula rutrum luctus
                                    ultrice undo gravida lectus suscipit gestas magna suscipit luctus undo
                                </p>
                                {/* Button */}
                                <VideoPopup style={6}/>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </div>
    )
}
