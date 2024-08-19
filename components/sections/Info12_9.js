import { useState } from "react"
import VideoPopup from "../elements/VidepPopup"

export default function Info12_9() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <div>
            <section id="info-12" className="info-12-row bg-lightgrey wide-100 info-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block pc-45">
                                <div id="list-tab" className="list-group" role="tablist">
                                    {/* TAB #1 NAVIGATION LINK */}
                                    <a id="tab1-list" className={activeIndex == 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                                        onClick={() => handleOnClick(1)} data-toggle="list" href="#tab-1" role="tab" aria-controls="tab-1">
                                        <div className="ibox-5">
                                            {/* Text */}
                                            <h5 className="h5-sm">Scan for Lost Data</h5>
                                            <p>Semper lacus cursus porta, feugiat primis in luctus ultrice tellus potenti
                                                neque
                                                dolor in primis congue
                                            </p>
                                        </div>
                                    </a>
                                    {/* TAB #2 NAVIGATION LINK */}
                                    <a id="tab2-list" className={activeIndex == 2 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                                        onClick={() => handleOnClick(2)} data-toggle="list" href="#tab-2" role="tab" aria-controls="tab-2">
                                        <div className="ibox-5">
                                            {/* Text */}
                                            <h5 className="h5-sm">Detect  Delete Duplicates</h5>
                                            <p>Lacus cursus porta,feugiat primis congue magna purus at pretium ligula rutrum
                                                luctus and ultrice tellus
                                            </p>
                                        </div>
                                    </a>
                                    {/* TAB #3 NAVIGATION LINK */}
                                    <a id="tab3-list" className={activeIndex == 3 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                                        onClick={() => handleOnClick(3)} data-toggle="list" href="#tab-3" role="tab" aria-controls="tab-3">
                                        <div className="ibox-5">
                                            {/* Text */}
                                            <h5 className="h5-sm">Clear Your Mailbox</h5>
                                            <p>Luctus congue magna at pretium purus pretium ligula rutrum neque incidunt
                                                tempor
                                                laoreet ipsum rhoncus, tempor posuere ligula varius donec purus feugiat
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="info-img text-center pr-45">
                                <div id="nav-tabContent" className="tab-content">
                                    {/* TAB #1 IMAGE */}
                                    <div id="tab-1" className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} role="tabpanel" aria-labelledby="tab1-list">
                                        <img className="img-fluid" src="images/image-02.png" alt="tab-image" />
                                    </div>
                                    {/* TAB #2 IMAGE */}
                                    <div id="tab-2" className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} role="tabpanel" aria-labelledby="tab2-list">
                                        <div className="video-preview text-center">
                                            {/* Change the link HERE!!! */}
                                            <VideoPopup style={7}/>
                                        </div>
                                    </div>
                                    {/* TAB #3 IMAGE */}
                                    <div id="tab-3" className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} role="tabpanel" aria-labelledby="tab3-list">
                                        <img className="img-fluid" src="images/image-17.png" alt="tab-image" />
                                    </div>
                                </div>
                            </div>
                        </div> {/* END IMAGE BLOCK */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </div>
    )
}
