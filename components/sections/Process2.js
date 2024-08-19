import Link from "next/link"


export default function Process2({ style }) {
    return (
        <>
            <section id="process-2" className="bg-lightgrey wide-60 process-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Tracktime And Earn Your Money</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="processbar process-yellow">
                            {/* PROCESS BOX #1 */}
                            <li id="step-1" className="col-md-4">
                                <div className="pbox-2 text-center">
                                    {/* Icon */}
                                    <div className="step-icon">
                                        <img className="img-60" src="/images/icons/add-user.png" alt="process-icon" />
                                    </div>
                                    {/* Text */}
                                    <h5 className="h5-sm">Register</h5>
                                    <p>Nemo ipsam egestas volute fugit dolores quaerat sodales </p>
                                </div>
                            </li>
                            {/* PROCESS BOX #2 */}
                            <li id="step-2" className="col-md-4">
                                <div className="pbox-2 text-center">
                                    {/* Icon */}
                                    <div className="step-icon">
                                        <img className="img-60" src="/images/icons/settings-1.png" alt="process-icon" />
                                    </div>
                                    {/* Text */}
                                    <h5 className="h5-sm">Customize</h5>
                                    <p>Nemo ipsam egestas volute fugit dolores quaerat sodales</p>
                                </div>
                            </li>
                            {/* PROCESS BOX #3 */}
                            <li id="step-3" className="col-md-4">
                                <div className="pbox-2 text-center">
                                    {/* Icon */}
                                    <div className="step-icon">
                                        <img className="img-60" src="/images/icons/target.png" alt="process-icon" />
                                    </div>
                                    {/* Text */}
                                    <h5 className="h5-sm">Connect</h5>
                                    <p>Nemo ipsam egestas volute fugit dolores quaerat sodales</p>
                                </div>
                            </li>
                        </ul>
                    </div> {/* End row */}
                    {/* PROCESS BUTTON */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="process-btn">
                                <p><Link href="#" className="process-link">Discover more about <span>NextApp Process</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div> {/* End container */}
            </section>
        </>
    )
}
