import Link from "next/link"


export default function Reviews2({ style }) {
    return (
        <>
            <div id="reviews-2" className="bg-fixed bg-map bg-lightgrey wide-100 reviews-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">10k+ Customers Love NextApp</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            {/* TESTIMONIAL #1 */}
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className="review-2 mb-50 wow fadeInUp" data-wow-delay="0.3s">
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img src="/images/review-author-3.jpg" alt="testimonial-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>Egestas egestas magna and vitae purus efficitur ipsum in primis cubilia a laoreet
                                            augue
                                            congue vitae lobortis magna
                                        </p>
                                        {/* Author Data */}
                                        <Link href="#">@p_paterson</Link>
                                    </div>
                                </div>
                            </div> {/* END TESTIMONIAL #1 */}
                            <div className="row">
                                {/* TESTIMONIAL #2 */}
                                <div className="col-md-6">
                                    <div className="review-2 wow fadeInUp" data-wow-delay="0.5s">
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img src="/images/review-author-6.jpg" alt="testimonial-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>Mauris donec ociis et magnis sapien etiam sapien sagittis congue augue an orci
                                            nullam
                                            tempor sapien
                                        </p>
                                        {/* Author Data */}
                                        <Link href="#">@AliThemes</Link>
                                    </div>
                                </div> {/* END TESTIMONIAL #2 */}
                                {/* TESTIMONIAL #3 */}
                                <div className="col-md-6">
                                    <div className="review-2 mt-60 wow fadeInUp" data-wow-delay="0.7s">
                                        {/* Author Avatar */}
                                        <div className="testimonial-avatar">
                                            <img src="/images/review-author-7.jpg" alt="testimonial-avatar" />
                                        </div>
                                        {/* Testimonial Text */}
                                        <p>An orci nullam tempor sapien gravida an eget donec auctor ipsum a porta integer
                                            justo at
                                            odio velna auctor
                                        </p>
                                        {/* Author Data */}
                                        <Link href="#">@lesserpas</Link>
                                    </div>
                                </div> {/* END TESTIMONIAL #3 */}
                            </div> {/* End row */}
                        </div>
                    </div> {/* End row */}
                    {/* ALL REVIEWS LINK */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-reviews text-center wow fadeInUp" data-wow-delay="0.9s">
                                <h5 className="h5-xs"><Link href="/reviews">See what <span>more people</span> are saying about
                                    NextApp</Link></h5>
                            </div>
                        </div>
                    </div>
                </div> {/* End container */}
            </div>
        </>
    )
}
