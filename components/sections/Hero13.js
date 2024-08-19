import VideoPopup from "../elements/VidepPopup"


export default function Hero13({ style }) {
    return (
        <>
            <section id="hero-13" className="bg-scroll hero-section division">
                <div className="container white-color">
                    {/* HERO TEXT */}
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="hero-txt text-center mb-50">
                                {/* HERO APP LOGO */}
                                <div className="hero-app-logo">
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid" src="/images/photo-logo.png" width={65} height={65} alt="hero-app-logo" />
                                        <span>NextApp</span>
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="h3-lg">Capture and share your best memories with NextApp</h3>
                            </div>
                        </div>
                    </div> {/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="hero-13-img text-center">
                                {/* Video Preview */}
                                <div className="video-preview">
                                    <VideoPopup style={13} />
                                </div>
                            </div>
                        </div>
                    </div> {/* END HERO TEXT */}
                </div> {/* End container */}
            </section>
        </>
    )
}
