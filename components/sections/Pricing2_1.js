

export default function Pricing2_1({ style }) {
    return (
        <>
            <section id="pricing-2" className="bg-deepviolet wide-100 pricing-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title white-color">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Our Pricing Plans &amp; Packages</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>	{/* END SECTION TITLE */}
                    {/* PRICING TABLES	*/}
                    <div className="row pricing-row">
                        {/* STARTED PRICE PLAN */}
                        <div className="col-md-4">
                            <div className="pricing-table white-color">
                                {/* Icon  */}
                                <div className="price-icon">
                                    <img className="img-130" src="images/icons/scooter.png" alt="price-icon" />
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
                                <a href="#" className="btn btn-sm btn-tra-white black-hover">Get Started</a>
                            </div>
                        </div>	{/* END STARTER PRICE PLAN */}
                        {/* BASIC PRICE PLAN */}
                        <div className="col-md-4">
                            <div className="pricing-table highlight">
                                {/* Icon  */}
                                <div className="price-icon">
                                    <img className="img-130" src="images/icons/airship.png" alt="price-icon" />
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
                                <a href="#" className="btn btn-sm btn-green black-hover">Get Started</a>
                            </div>
                        </div>	{/*END BASIC PRICE PLAN */}
                        {/* PREMIUM PRICE PLAN */}
                        <div className="col-md-4">
                            <div className="pricing-table white-color">
                                {/* Icon  */}
                                <div className="price-icon">
                                    <img className="img-130" src="images/icons/flight.png" alt="price-icon" />
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
                                <a href="#" className="btn btn-sm btn-tra-white black-hover">Upgrade to Premium</a>
                            </div>
                        </div>	{/* END PREMIUM PRICE PLAN */}
                    </div>	 {/* END PRICING TABLES */}
                    {/* PRICING NOTICE TEXT */}
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                            <div className="pricing-notice text-center white-color">
                                <p className="p-md"><span>Note!</span> Prices may vary from location to location due to local
                                    taxation laws and conversion rates from U.S. Dollars.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>	    {/* End container */}
            </section>

        </>
    )
}
