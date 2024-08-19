import Slider from "react-slick"
const settings = {
    infinite: true,
    autoplay: true,
    centerMode: true,
    dots: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    // rows: 0,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                slidesToShow: 1,
                variableWidth: false,
                fade: true,
                cssEase: 'linear'
            }
        }
    ]

}

export default function Screens1({ style }) {
    return (
        <>
            <section id="screens-1" className="bg-lightgrey wide-100 screens-section division">
                {/* SECTION TITLE */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            {/* Title 	*/}
                            <h3 className="h3-lg">Simple  Beautiful User Interface</h3>
                            {/* Text */}
                            <p className="p-md">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
                                libero tempus, blandit posuere ligula varius magna congue cursus porta
                            </p>
                        </div>
                    </div>
                </div> {/* END SECTION TITLE */}
                <div className="screenshots-wrap">
                    <Slider {...settings} className="screens-carousel">
                        <div className="carousel-item">
                            <img src="/images/screens/screen-1.jpg" alt="screenshot" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/screens/screen-2.jpg" alt="screenshot" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/screens/screen-3.jpg" alt="screenshot" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/screens/screen-4.jpg" alt="screenshot" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/screens/screen-5.jpg" alt="screenshot" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/screens/screen-6.jpg" alt="screenshot" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/screens/screen-7.jpg" alt="screenshot" />
                        </div>
                        <div className="carousel-item">
                            <img src="/images/screens/screen-8.jpg" alt="screenshot" />
                        </div>
                    </Slider>
                </div> {/* END SCREENSHOTS CAROUSEL */}
            </section>

        </>
    )
}
