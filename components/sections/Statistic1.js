

export default function Statistic1({ style }) {
    return (
        <>
            <section id="statistic-1" className="bg-fixed bg-graph wide-60 statistic-section division">
                <div className="container white-color">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">More Faster, More Powerful App</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                            <div className="row">
                                {/* STATISTIC BLOCK #1 */}
                                <div className="col-sm-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                        <h5 className="statistic-number"><span className="count-element">28</span>%</h5>
                                        <p className="txt-400">Faster Access</p>
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #2 */}
                                <div className="col-sm-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <h5 className="statistic-number"><span className="count-element">47</span>%</h5>
                                        <p className="txt-400">App Productivity</p>
                                    </div>
                                </div>
                                {/* STATISTIC BLOCK #3 */}
                                <div className="col-sm-4">
                                    <div className="statistic-block wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
                                        <h5 className="statistic-number"><span className="count-element">54</span>%</h5>
                                        <p className="txt-400">Battery Saving</p>
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
