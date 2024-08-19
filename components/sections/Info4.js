

export default function Info4({ style }) {
    return (
        <>
            <section id="info-4" className="info-4-row pt-100 info-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block pc-45 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="/images/image-12.png" alt="info-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block pc-45 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Section ID */}
                                <span className="section-id id-color">Real Time Statistic</span>
                                {/* Title */}
                                <h3 className="h3-lg">Monitor your activity</h3>
                                {/* Text */}
                                <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at odio velna
                                    vitae auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus
                                </p>
                                {/* INFO BOX #1 */}
                                <div className="ibox-1">
                                    {/* Title */}
                                    <h5 className="h5-sm">High Quality Pages</h5>
                                    {/* List */}
                                    <ul className="txt-list">
                                        <li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros
                                            dolor auctor ipsum blandit purus
                                        </li>
                                        <li>Egestas magna ipsum vitae purus efficitur ipsum cubilia and laoreet pretium
                                            ligula rutrum luctus
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
