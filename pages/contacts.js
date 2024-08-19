import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contacts() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5} breadcrumbTitle="Submit A Request">
                <div>
                    <section id="contacts-2" className="wide-100 contacts-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    {/* Title 	*/}
                                    <h3 className="h3-lg">Want To Get In Touch? We’re Listening.</h3>
                                    {/* Text */}
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                        libero tempus, blandit posuere ligula varius magna congue cursus porta
                                    </p>
                                </div>
                            </div>
                            {/* CONTACT FORM */}
                            <div className="row">
                                <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                                    <div className="form-holder">
                                        <form name="contactform" className="row contact-form">
                                            {/* Form Select */}
                                            <div id="input-subject" className="col-md-12 input-subject">
                                                <p>This question is about: </p>
                                                <span>Choose a topic, so we know who to send your request to: </span>
                                                <select id="inlineFormCustomSelect1" name="Subject" className="custom-select subject">
                                                    <option>This question is about...</option>
                                                    <option>Registering/Authorising</option>
                                                    <option>Using Application</option>
                                                    <option>Troubleshooting</option>
                                                    <option>Backup/Restore</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            {/* Contact Form Input */}
                                            <div id="input-name" className="col-lg-12">
                                                <p>Your Name: </p>
                                                <span>Please enter your real name: </span>
                                                <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                                            </div>
                                            <div id="input-email" className="col-lg-12">
                                                <p>Your Email Address: </p>
                                                <span>Please carefully check your email address for accuracy. If your address is
                                                    incorrect, we will not be able to reply.</span>
                                                <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                                            </div>
                                            <div id="input-message" className="col-lg-12 input-message">
                                                <p>Explain your question in details: </p>
                                                <span>Your OS version, NextApp version  build, steps you did. Be VERY
                                                    precise!</span>
                                                <textarea className="form-control message" name="message" rows={6} placeholder="I have a problem with..." />
                                            </div>
                                            {/* Contact Form Button */}
                                            <div className="col-lg-12 mt-15 form-btn text-right">
                                                <button type="submit" className="btn btn-blue black-hover submit">Submit
                                                    Request</button>
                                            </div>
                                            {/* Contact Form Message */}
                                            <div className="col-lg-12 contact-form-msg">
                                                <span className="loading" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> {/* END CONTACT FORM */}
                        </div> {/* End container */}
                    </section> {/* END CONTACTS-2 */}
                    {/* DOWNLOAD-1
			============================================= */}
                    <section id="download-1" className="bg-scroll bg-geometric download-section division">
                        <div className="container white-color">
                            <div className="row">
                                {/* DOWNLOAD TXT */}
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="download-txt text-center">
                                        {/* Title */}
                                        <h3 className="h3-xs">Getting started takes less than 5 minutes</h3>
                                        {/* Text */}
                                        <p className="p-md">Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices
                                            posuere cubilia curae integer congue leo metus, eu mollis lorem primis in orci integer
                                            metus mollis faucibus
                                        </p>
                                        {/* STORE BADGES */}
                                        <div className="stores-badge">
                                            {/* AppStore */}
                                            <Link href="#" className="store">
                                                <img className="appstore-white" src="/images/store_badges/appstore-tra-white.png" alt="appstore-logo" />
                                            </Link>
                                            {/* Google Play */}
                                            <Link href="#" className="store">
                                                <img className="googleplay-white" src="/images/store_badges/googleplay-tra-white.png" alt="googleplay-logo" />
                                            </Link>
                                            {/* OS Prerequisite */}
                                            <span className="os-version">* Available on iPhone, iPad and all Android devices from
                                                5.5</span>
                                        </div> {/* END STORE BADGES */}
                                    </div>
                                </div> {/* END DOWNLOAD TXT */}
                            </div> {/* End row */}
                        </div> {/* End container */}
                    </section>
                </div>

            </Layout>
        </>
    )
}