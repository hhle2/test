import Layout from "@/components/layout/Layout"
import Reviews3 from "@/components/sections/Reviews3"
import Link from "next/link"
export default function Reviews() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Client's Reviews">
                <div>
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
                    {/* TESTIMONIALS-3
			============================================= */}
                    <Reviews3 />	 {/* END TESTIMONIALS-3 */}
                    {/* MORE APPS
			============================================= */}
                    <section id="more-apps" className="bg-lightgrey wide-60 moreapps-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    {/* Title 	*/}
                                    <h3 className="h3-lg">Other Apps by AliThemes</h3>
                                    {/* Text */}
                                    <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                        libero tempus, blandit posuere ligula varius magna congue cursus porta
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-10 offset-xl-1">
                                    <div className="row">
                                        {/* OTHER APP #1 */}
                                        <div className="col-sm-4">
                                            <div className="app-box text-center mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                                <div className="m-img">
                                                    <img className="img-fluid" src="/images/app-logo-1.png" width={150} height={150} alt="app-logo" />
                                                </div>
                                                {/* Title */}
                                                <h5 className="h5-xl">AllFixer</h5>
                                                <span className="app-cat">Productivity</span>
                                                {/* Text */}
                                                <p>Aliquam a augue luctus neque purus ipsum neque dolor primis suscipit</p>
                                                {/* Links */}
                                                <div className="app-links">
                                                    <Link href="#"><i className="fab fa-apple" /> <span>IOS</span></Link>
                                                    <Link href="#"><i className="fab fa-android" /> <span>Android</span></Link>
                                                </div>
                                            </div>
                                        </div>	{/* END OTHER APP #1 */}
                                        {/* OTHER APP #2 */}
                                        <div className="col-sm-4">
                                            <div className="app-box text-center mb-40 wow fadeInUp" data-wow-delay="0.5s">
                                                <div className="m-img">
                                                    <img className="img-fluid" src="/images/app-logo-2.png" width={150} height={150} alt="app-logo" />
                                                </div>
                                                {/* Title */}
                                                <h5 className="h5-xl">AppSet</h5>
                                                <span className="app-cat">Social Networking</span>
                                                {/* Text */}
                                                <p>Aliquam a augue luctus neque purus ipsum neque dolor primis suscipit</p>
                                                {/* Links */}
                                                <div className="app-links">
                                                    <Link href="#"><i className="fab fa-apple" /> <span>IOS</span></Link>
                                                    <Link href="#"><i className="fab fa-android" /> <span>Android</span></Link>
                                                </div>
                                            </div>
                                        </div>	{/* END OTHER APP #2 */}
                                        {/* OTHER APP #3 */}
                                        <div className="col-sm-4">
                                            <div className="app-box text-center mb-40 wow fadeInUp" data-wow-delay="0.7s">
                                                <div className="m-img">
                                                    <img className="img-fluid" src="/images/app-logo-3.png" width={150} height={150} alt="app-logo" />
                                                </div>
                                                {/* Title */}
                                                <h5 className="h5-xl">MobiCom</h5>
                                                <span className="app-cat">Finance</span>
                                                {/* Text */}
                                                <p>Aliquam a augue luctus neque purus ipsum neque dolor primis suscipit</p>
                                                {/* Links */}
                                                <div className="app-links">
                                                    <Link href="#"><i className="fab fa-apple" /> <span>IOS</span></Link>
                                                    <Link href="#"><i className="fab fa-android" /> <span>Android</span></Link>
                                                </div>
                                            </div>
                                        </div>	{/* END OTHER APP #3 */}
                                    </div>
                                </div>
                            </div>	 {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END MORE APPS */}
                </div>

            </Layout>
        </>
    )
}