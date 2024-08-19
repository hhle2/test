import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const FaqMasonary = dynamic(() => import('@/components/elements/FaqMasonary'), {
    ssr: false,
})
export default function Faqs() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5} breadcrumbTitle="FAQs">



                <div>
                    {/* INNER PAGE TITLE
			============================================= */}
                    <div id="inner-page-title" className="bg-lightgrey division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* SQUARE LOGO */}
                                <div className="col-md-6">
                                    <div className="square-logo d-flex align-items-center">
                                        {/* Logo */}
                                        <img className="img-fluid" src="/images/color-logo.png" width={85} height={85} alt="breadcrumb-logo" />
                                        {/* Rating */}
                                        <div className="square-logo-rating">
                                            <h5 className="h5-lg">NextApp</h5>
                                            {/* Rating */}
                                            <div className="rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                            {/* Text */}
                                            <span>4.6/5 based on 1.014 ratings</span>
                                        </div>
                                    </div>
                                </div>	{/* END SQUARE LOGO */}
                                {/* BUTTONS */}
                                <div className="col-md-6">
                                    <div className="btns-group text-right">
                                        {/* Buttons */}
                                        <Link href="/contacts" className="btn btn-blue black-hover mr-10">Write A Review</Link>
                                        <Link href="/faqs" className="btn btn-tra-grey black-hover">Ask A Question</Link>
                                    </div>
                                </div>	{/* END BUTTONS */}
                            </div>  {/* End row */}
                        </div>	{/* End container */}
                    </div>	{/* END INNER PAGE TITLE */}
                    {/* FAQs-3
			============================================= */}
                    <section id="faqs-3" className="wide-100 faqs-section division">
                        <div className="container">
                            {/* QUESTIONS HOLDER */}
                            <div className="row">
                                <div className="col-md-12 questions-grid">
                                    <FaqMasonary/>
                                </div>
                            </div>	{/* QUESTIONS HOLDER */}
                            {/* MORE QUESTIONS BUTTON */}
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="more-questions">
                                        <h5 className="h5-xs">Still have a question? <Link href="/contacts">Ask your question here</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>	   {/* End container */}
                    </section>	{/* END FAQs-3 */}
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
                                            <span className="os-version">* Available on iPhone, iPad and all Android devices from 5.5</span>
                                        </div>	{/* END STORE BADGES */}
                                    </div>
                                </div>	{/* END DOWNLOAD TXT */}
                            </div>	  {/* End row */}
                        </div>	   {/* End container */}
                    </section>
                </div>

            </Layout>
        </>
    )
}