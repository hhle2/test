import Link from "next/link"


export default function Pricing1({ style }) {
    return (
        <>
            <section id="pricing-1" className="bg-lightgrey wide-100 pricing-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Unlock Full Power Of The NextApp</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div> {/* END SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                            <div className="row">
                                {/* PRICE PLAN FREE */}
                                <div className="col-md-6">
                                    <div className="pricing-table wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                        {/* Icon  */}
                                        <div className="price-icon">
                                            <img className="img-130" src="/images/icons/scooter-grey.png" alt="price-icon" />
                                        </div>
                                        {/* Plan Price  */}
                                        <div className="pricing-plan mb-10">
                                            <h5 className="h5-lg">NextApp <span>Free</span></h5>
                                            <sup>$</sup>
                                            <span className="price">0</span>
                                            <sup className="validity">/mo</sup>
                                        </div>
                                        {/* Pricing Plan Features  */}
                                        <ul className="features">
                                            <li>20 Users Tasks</li>
                                            <li>5 GB of Storage</li>
                                            <li className="disabled-option">Theme Customization</li>
                                            <li className="disabled-option">Free Email Support</li>
                                            <li className="disabled-option">Security Suite</li>
                                        </ul>
                                        {/* Pricing Table Button  */}
                                        <Link href="#" className="btn btn-tra-black black-hover">Get Started</Link>
                                    </div>
                                </div> {/* END PRICE PLAN FREE */}
                                {/* PRICE PLAN PRO */}
                                <div className="col-md-6">
                                    <div className="pricing-table wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                        {/* Icon  */}
                                        <div className="price-icon">
                                            <img className="img-130" src="/images/icons/airship-grey.png" alt="price-icon" />
                                        </div>
                                        {/* Plan Price  */}
                                        <div className="pricing-plan mb-10">
                                            <h5 className="h5-lg">NextApp <span>Pro</span></h5>
                                            <sup>$</sup>
                                            <span className="price">2.39</span>
                                            <sup className="validity">/mo</sup>
                                        </div>
                                        {/* Pricing Plan Features  */}
                                        <ul className="features">
                                            <li>Unlimited Tasks</li>
                                            <li>10 GB of Storage</li>
                                            <li>Theme Customization</li>
                                            <li>Free Email Support</li>
                                            <li>Security Suite</li>
                                        </ul>
                                        {/* Pricing Table Button  */}
                                        <Link href="#" className="btn btn-green black-hover">Upgrade to PRO</Link>
                                    </div>
                                </div> {/* END PRICE PLAN PRO */}
                            </div> {/* End row */}
                            {/* PRICING NOTICE TEXT */}
                            <div className="pricing-notice text-center">
                                <p className="p-md"><span>Note!</span> Prices may vary from location to location due to local
                                    taxation laws and conversion rates from U.S. Dollars.
                                </p>
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>

        </>
    )
}
