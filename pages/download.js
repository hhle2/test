import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Download() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5} breadcrumbTitle="Download NextApp">
                <div id="download-page" className="download-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="download-page-txt text-center">
                                    {/* Icon */}
                                    <div className="download-page-icon">
                                        <img className="img-fluid" src="/images/download-icon.png" alt="download-icon" />
                                    </div>
                                    {/* Text */}
                                    <h2 className="h2-lg">Download NextApp</h2>
                                    <p className="p-lg">Your download should begin shortly. If it doesn't start automatically, try downloading below.</p>
                                    {/* Buttons Group */}
                                    <div className="btns-group">
                                        {/* Buttons */}
                                        <Link href="#" className="btn btn-blue black-hover mr-10">Available on the Mac App Store</Link>
                                        <Link href="#" className="btn btn-black black-tra-hover">Buy For Only $9.99</Link>
                                        {/* Text */}
                                        <div className="btn-notice">
                                            <p>Looking for <span>Windows</span> or <span>Android</span>? Join the <Link href="#">waitlist</Link> for first access!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* End row */}
                    </div>	 {/* End container */}
                </div>

            </Layout>
        </>
    )
}