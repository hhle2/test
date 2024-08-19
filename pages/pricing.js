import Layout from "@/components/layout/Layout"
import Faqs1 from "@/components/sections/Faqs1"
import Link from "next/link"
export default function Pricing() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={5} breadcrumbTitle="Pricing Packages">
                <div>
                    <section id="pricing-2" className="bg-lightgrey wide-100 pricing-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    {/* Title 	*/}
                                    <h3 className="h3-lg">Try NextApp Free For 15 Days</h3>
                                    {/* Text */}
                                    <p className="p-md">You start with a free trial. We don’t collect your credit card until you've
                                        determined NextApp is the right landing page to promote your App or product.
                                    </p>
                                </div>
                            </div>	{/* END SECTION TITLE */}
                            {/* PRICING TABLES	*/}
                            <div className="row pricing-row">
                                {/* STARTED PRICE PLAN */}
                                <div className="col-md-4">
                                    <div className="pricing-table">
                                        {/* Icon  */}
                                        <div className="price-icon">
                                            <img className="img-130" src="/images/icons/scooter.png" alt="price-icon" />
                                        </div>
                                        {/* Plan Price  */}
                                        <div className="pricing-plan">
                                            <h5 className="h5-md">Starter</h5>
                                            <sup>$</sup>
                                            <span className="price">0</span>
                                            <sup className="validity">/mo</sup>
                                        </div>
                                        {/* Pricing Plan Features  */}
                                        <ul className="features">
                                            <li><strong>10</strong> Users Tasks</li>
                                            <li><strong>5 GB</strong> of Storage</li>
                                            <li><strong>10 mySQL</strong> Database</li>
                                            <li><strong>E-mail</strong> Support</li>
                                        </ul>
                                        {/* Button */}
                                        <Link href="#" className="btn btn-sm btn-tra-grey black-hover">Get Started</Link>
                                    </div>
                                </div>	{/* END STARTER PRICE PLAN */}
                                {/* BASIC PRICE PLAN */}
                                <div className="col-md-4">
                                    <div className="pricing-table highlight">
                                        {/* Icon  */}
                                        <div className="price-icon">
                                            <img className="img-130" src="/images/icons/airship.png" alt="price-icon" />
                                        </div>
                                        {/* Plan Price  */}
                                        <div className="pricing-plan">
                                            <h5 className="h5-md">Basic</h5>
                                            <sup>$</sup>
                                            <span className="price">39</span>
                                            <sup className="validity">/mo</sup>
                                        </div>
                                        {/* Pricing Plan Features  */}
                                        <ul className="features">
                                            <li><strong>50</strong> Users Tasks</li>
                                            <li><strong>50 GB</strong> of Storage</li>
                                            <li><strong>50 mySQL</strong> Database</li>
                                            <li><strong>12/7</strong> Support</li>
                                        </ul>
                                        {/* Button */}
                                        <Link href="#" className="btn btn-sm btn-blue black-hover">Get Started</Link>
                                    </div>
                                </div>	{/*END BASIC PRICE PLAN */}
                                {/* PREMIUM PRICE PLAN */}
                                <div className="col-md-4">
                                    <div className="pricing-table">
                                        {/* Icon  */}
                                        <div className="price-icon">
                                            <img className="img-130" src="/images/icons/flight.png" alt="price-icon" />
                                        </div>
                                        {/* Plan Price  */}
                                        <div className="pricing-plan">
                                            <h5 className="h5-md">Premium</h5>
                                            <sup>$</sup>
                                            <span className="price">99</span>
                                            <sup className="validity">/mo</sup>
                                        </div>
                                        {/* Pricing Plan Features  */}
                                        <ul className="features">
                                            <li><strong>100</strong> Users Tasks</li>
                                            <li><strong>100 GB</strong> of Storage</li>
                                            <li><strong>50 mySQL</strong> Database</li>
                                            <li><strong>24/7</strong> Support</li>
                                        </ul>
                                        {/* Button */}
                                        <Link href="#" className="btn btn-sm btn-tra-grey black-hover">Upgrade to Premium</Link>
                                    </div>
                                </div>	{/* END PREMIUM PRICE PLAN */}
                            </div>	 {/* END PRICING TABLES */}
                            {/* PRICING NOTICE TEXT */}
                            <div className="row">
                                <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                                    <div className="pricing-notice text-center">
                                        <p className="p-md"><span>Note!</span> Prices may vary from location to location due to local
                                            taxation laws and conversion rates from U.S. Dollars.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>	    {/* End container */}
                    </section>	{/* END PRICING-2 */}

                    <Faqs1 />
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