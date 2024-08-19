import Slider from "react-slick"
const settings = {
    centerMode: true,
    autoplay: true,
    centerPadding: '0px',
    speed: 800,
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 648,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]

}

export default function Reviews1({ style, cls }) {
    return (
        <>
            <section id="reviews-1" className={`${cls ? cls : "bg-lightgrey"} wide-100  reviews-section division`}>
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
                    {/* TESTIMONIALS CAROUSEL */}
                    <div className="reviews-carousel">
                        <Slider {...settings} className="center slider">
                            {/* TESTIMONIAL #1 */}
                            <div className="review-1">
                                {/* Testimonial Text */}
                                <div className="review-1-txt">
                                    {/* Title */}
                                    <h5 className="h5-md">Super Support!</h5>
                                    {/* Text */}
                                    <p>Etiam sapien sem at sagittis congue augue massa varius egestas magna suscipit magna
                                        tempus aliquet porta rutrum sodales auctor integer risus auctor rutrum
                                    </p>
                                </div>
                                {/* Testimonial Author Avatar */}
                                <div className="testimonial-avatar text-center">
                                    <img src="/images/review-author-1.jpg" alt="review-author-avatar" />
                                    <p>pebz13</p>
                                </div>
                                {/* App Rating */}
                                <div className="app-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div> {/* END TESTIMONIAL #1 */}
                            {/* TESTIMONIAL #2 */}
                            <div className="review-1">
                                {/* Testimonial Text */}
                                <div className="review-1-txt">
                                    {/* Title */}
                                    <h5 className="h5-md">Simple and Useful!</h5>
                                    {/* Text */}
                                    <p>At sagittis congue augue egestas egestas magna ipsum vitae purus ipsum primis in
                                        cubilia
                                        laoreet augue egestas luctus donec diam ociis ultrice ligula magna suscipit lectus
                                        gestas
                                        augue in cubilia laoreet
                                    </p>
                                </div>
                                {/* Testimonial Author Avatar */}
                                <div className="testimonial-avatar clearfix">
                                    <img src="/images/review-author-2.jpg" alt="review-author-avatar" />
                                    <p>Evelyn Martinez</p>
                                </div>
                                {/* App Rating */}
                                <div className="app-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                </div>
                            </div> {/* END TESTIMONIAL #2 */}
                            {/* TESTIMONIAL #3 */}
                            <div className="review-1">
                                {/* Testimonial Text */}
                                <div className="review-1-txt">
                                    {/* Title */}
                                    <h5 className="h5-md">Great Flexibility!</h5>
                                    {/* Text */}
                                    <p>Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue augue egestas
                                        et ultrice ligula egestas magna suscipit lectus gestas magna suscipit luctus undo
                                        volutpat
                                    </p>
                                </div>
                                {/* Testimonial Author Avatar */}
                                <div className="testimonial-avatar clearfix">
                                    <img src="/images/review-author-3.jpg" alt="review-author-avatar" />
                                    <p>Robert Peterson</p>
                                </div>
                                {/* App Rating */}
                                <div className="app-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div> {/* END TESTIMONIAL #3 */}
                            {/* TESTIMONIAL #4 */}
                            <div className="review-1">
                                {/* Testimonial Text */}
                                <div className="review-1-txt">
                                    {/* Title */}
                                    <h5 className="h5-md">I love this App!</h5>
                                    {/* Text */}
                                    <p>An augue in cubilia laoreet magna suscipit egestas magna ipsum vitae purus ipsum
                                        primis in cubilia laoreet augue ultrice ligula egestas magna suscipit lectus gestas
                                        magna viverra dolor neque est gravida
                                    </p>
                                </div>
                                {/* Testimonial Author Avatar */}
                                <div className="testimonial-avatar clearfix">
                                    <img src="/images/review-author-4.jpg" alt="review-author-avatar" />
                                    <p>Leslie Serpas</p>
                                </div>
                                {/* App Rating */}
                                <div className="app-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div> {/* END TESTIMONIAL #4 */}
                            {/* TESTIMONIAL #5 */}
                            <div className="review-1">
                                {/* Testimonial Text */}
                                <div className="review-1-txt">
                                    {/* Title */}
                                    <h5 className="h5-md">Best App for Around!</h5>
                                    {/* Text */}
                                    <p>Egestas egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet
                                        augue egestas luctus donec augue in cubilia laoreet ociis vitae purus diam
                                    </p>
                                </div>
                                {/* Testimonial Author Avatar */}
                                <div className="testimonial-avatar clearfix">
                                    <img src="/images/review-author-5.jpg" alt="review-author-avatar" />
                                    <p>Marisol19</p>
                                </div>
                                {/* App Rating */}
                                <div className="app-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star-half-alt" />
                                </div>
                            </div> {/* END TESTIMONIAL #5 */}
                            {/* TESTIMONIAL #6 */}
                            <div className="review-1">
                                {/* Testimonial Text */}
                                <div className="review-1-txt">
                                    {/* Title */}
                                    <h5 className="h5-md">Minimalistic  Beautiful!</h5>
                                    {/* Text */}
                                    <p>Augue egestas volutpat egestas et augue in cubilia laoreet magna suscipit luctus
                                        undo blandit vitae purus non diam tempus aliquet porta rutrum gestas neque est
                                        gravida
                                    </p>
                                </div>
                                {/* Testimonial Author Avatar */}
                                <div className="testimonial-avatar clearfix">
                                    <img src="/images/review-author-6.jpg" alt="review-author-avatar" />
                                    <p>Dan Hodges</p>
                                </div>
                                {/* App Rating */}
                                <div className="app-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div> {/* END TESTIMONIAL #6 */}
                            {/* TESTIMONIAL #7 */}
                            <div className="review-1">
                                {/* Testimonial Text */}
                                <div className="review-1-txt">
                                    {/* Title */}
                                    <h5 className="h5-md">Awesome Design!</h5>
                                    {/* Text */}
                                    <p>Egestas et lobortis magna suscipit luctus undo blandit vitae purus lobortis non diam
                                        tempus aliquet porta rutrum arcu aenean primis in augue in cubilia laoreet
                                    </p>
                                </div>
                                {/* Testimonial Author Avatar */}
                                <div className="testimonial-avatar clearfix">
                                    <img src="/images/review-author-4.jpg" alt="review-author-avatar" />
                                    <p>Amelie Peterson</p>
                                </div>
                                {/* App Rating */}
                                <div className="app-rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div> {/* END TESTIMONIAL #7 */}
                        </Slider>
                    </div> {/* TESTIMONIALS CAROUSEL */}
                </div> {/* End container */}
            </section>
        </>
    )
}
