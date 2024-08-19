

export default function Info1({ style }) {
    return (
        <>
            <section id="info-1" className="info-1-row wide-60 info-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block pc-45 mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Section ID */}
                                <span className="section-id id-color">Beauty of simplicity</span>
                                {/* Title */}
                                <h3 className="h3-lg">Elegant  intuitive user interface</h3>
                                {/* Text */}
                                <p>An enim nullam tempor sapien gravida donec an ipsum pretium porta justo integer at
                                    odio velna vitae auctor integer and congue magna at purus pretium ligula rutrum luctus
                                    ultrice undo gravida lectus suscipit gestas magna suscipit luctus undo
                                </p>
                                {/* INFO BLOCKS */}
                                <div className="info-blocks mt-30 clearfix">
                                    {/*INFO BLOCK #1 */}
                                    <div className="iblock icon-xs">
                                        <span className="grey-color flaticon-090-settings-1" />
                                        <p>Powerful Options</p>
                                    </div>
                                    {/*INFO BLOCK #2 */}
                                    <div className="iblock icon-xs">
                                        <span className="grey-color flaticon-089-notification-1" />
                                        <p>Smart Notifications</p>
                                    </div>
                                    {/*INFO BLOCK #3 */}
                                    <div className="iblock icon-xs">
                                        <span className="grey-color flaticon-103-keyhole" />
                                        <p>Concrete Security</p>
                                    </div>
                                    {/*INFO BLOCK #4 */}
                                    <div className="iblock icon-xs">
                                        <span className="grey-color flaticon-094-shield-1" />
                                        <p>Unlimited Access</p>
                                    </div>
                                </div> {/* END INFO BLOCKS */}
                            </div>
                        </div> {/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block pr-45 mb-40 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.8s">
                                <img className="img-fluid" src="/images/image-10.png" alt="info-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </>
    )
}
