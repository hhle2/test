import VideoPopup from "../elements/VidepPopup"


export default function Info3_2() {
    return (
        <div>
            <section id="info-3" className="info-2-row wide-60 info-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block pl-45 mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="images/image-10.png" alt="info-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block pc-45 mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Section ID */}
                                <span className="section-id id-color">Easiest To Use</span>
                                {/* Title */}
                                <h3 className="h3-lg">More productivity with less effort</h3>
                                {/* List */}
                                <ul className="txt-list mb-35">
                                    <li>Vitae auctor integer congue magna at pretium</li>
                                    <li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros
                                        dolor auctor ipsum blandit purus
                                    </li>
                                    <li>Sagittis congue augue egestas volutpat egestas magna</li>
                                    <li>Egestas magna ipsum vitae purus efficitur ipsum cubilia and laoreet pretium
                                        ligula rutrum luctus
                                    </li>
                                </ul>
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
