const DemoReview = dynamic(() => import('@/components/elements/DemoReview'), {
    ssr: false,
})

import Layout from "@/components/layout/Layout"

import dynamic from 'next/dynamic'
import Link from 'next/link'
export default function Home1() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={6}>
            <div id="page" className="page-wrapper">
                <section id="hero" className="hero-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="hero-txt wow fadeInUp" data-wow-delay="0.3s">
                                    <span className="vs">HTML</span>
                                    <img className="img-fluid title-img" src="/images/demo/title.png" alt="title-image" />
                                    <h3>Premium HTML5 App Landing Pages Pack</h3>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section>
                <section id="demos" className="bg-fixed select-section division">
                    <div className="container-fluid">
                        <div className="st-content">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title text-center">
                                    <h2 className="hero-txt wow fadeInUp" data-wow-delay="0.1s">20 Stunning Pre-Made Demos</h2>
                                    <p className="hero-txt wow fadeInUp" data-wow-delay="0.3s">Choose the one you like best and start customize it to your website</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-1.jpg" alt="layout-1-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-1">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#1</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-2.jpg" alt="layout-2-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-2">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#2</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-3.jpg" alt="layout-3-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-3">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#3</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-4.jpg" alt="layout-4-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-4">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#4</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-5.jpg" alt="layout-5-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-5">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#5</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-6.jpg" alt="layout-6-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-6">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#6</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-7.jpg" alt="layout-7-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-7">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#7</span></h4>
                                </div>
                                {/* LAYOUT-8 */}
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-8.jpg" alt="layout-8-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-8">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#8</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-9.jpg" alt="layout-9-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-9">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#9</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-10.jpg" alt="layout-10-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-10">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#10</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-11.jpg" alt="layout-11-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-11">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#11</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-12.jpg" alt="layout-12-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-12">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#12</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-13.jpg" alt="layout-13-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-13">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#13</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-14.jpg" alt="layout-14-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-14">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#14</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-15.jpg" alt="layout-15-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-15">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#15</span></h4>
                                </div>
                                {/* LAYOUT-16 */}
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-16.jpg" alt="layout-16-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-16">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#16</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-17.jpg" alt="layout-17-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-17">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#17</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-18.jpg" alt="layout-18-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-18">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#18</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-19.jpg" alt="layout-19-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-19">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#19</span></h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/layout-20.jpg" alt="layout-20-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/demo-20">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Layout <span>#20</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="features division">
                    <div className="container-fluid">
                        <div className="st-content">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title text-center">
                                    <h2>NextApp Core Features</h2>
                                    <p>Just few reasons why you should choose NextApp</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.3s">
                                        <img src="/images/demo/icons/trophy.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">20 Pre-made Demos</h5>
                                            <p>Choose among many ready-made solutions to get your business running in time!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.5s">
                                        <img src="/images/demo/icons/browser.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Based on Bootstrap Framework</h5>
                                            <p>The world’s most popular framework for building responsive websites</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.7s">
                                        <img src="/images/demo/icons/responsive.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Fully Responsive</h5>
                                            <p>Attention to details is what makes the NextApp fully functional on all devices</p>
                                        </div>
                                    </div>
                                </div>
                                {/* FEATURE BOX #4 */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.3s">
                                        <img src="/images/demo/icons/retina.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Retina Ready</h5>
                                            <p>Your website will always be beautiful on the high resolutions screens</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.5s">
                                        <img src="/images/demo/icons/cross-browser.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Cross Browser Compatbility</h5>
                                            <p>NextApp looks excellent in the most of the commonly used browsers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.7s">
                                        <img src="/images/demo/icons/stopwatch.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">High-Speed Performance</h5>
                                            <p>Well-organized hierarchy offers an incredibly fast page loading time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.3s">
                                        <img src="/images/demo/icons/settings.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Powerful Options</h5>
                                            <p>Use our unique pre-made NextApp elements to make your site stand out</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.5s">
                                        <img src="/images/demo/icons/letter.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Advanced Typography</h5>
                                            <p>Feature your web project by choosing from 800+ Google Fonts that suits it the most</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.7s">
                                        <img src="/images/demo/icons/click.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Search Engine Optimized</h5>
                                            <p>Get discovered by search engines. NextApp is optimized for search engines requirements</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.3s">
                                        <img src="/images/demo/icons/cog.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Easy Customizable</h5>
                                            <p>Well structured and easy to understand code. Spend less time for the customization</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.5s">
                                        <img src="/images/demo/icons/help.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Extensive Documentation</h5>
                                            <p>Check out our detailed help file to find out more about what you can do with NextApp</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <div className="fbox box-icon wow fadeInUp" data-wow-delay="0.7s">
                                        <img src="/images/demo/icons/support.png" alt="feature-icon" />
                                        <div className="fbox-txt">
                                            <h5 className="h5-sm">Dedicated Support</h5>
                                            <p>Our support staff is ready to answer all your questions 7 days a week</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="banner-1" className="bg-scroll banner-1 division">
                    <div className="container-fluid">
                        <div className="st-content white-color">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6">
                                    <div className="banner-1-txt">
                                        <h3 className="wow fadeInUp"  data-wow-delay="0.2s"> Promote your <span>App, Startup</span> or <span>Business Project</span>
                                            beautifully and in simple way
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner-1-img text-center">
                                        <img className="img-fluid wow fadeIn" src="/images/demo/banner-1-img.png" alt="banner-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="i-pages" className="bg-fixed inner-pages division">
                    <div className="container-fluid">
                        <div className="st-content">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title text-center">
                                    <h2>Gorgeous Inner Pages</h2>
                                    <p>8 inner pages carefully crafted to suit your needs. Showcase your App, Startup or
                                        Project with flexible and pre-made concepts
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/pricing.jpg" alt="pricing-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/pricing">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Pricing Page</h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/reviews.jpg" alt="reviews-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/reviews">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Reviews Page</h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/faqs.jpg" alt="faqs-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/faqs">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>FAQs Page</h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/download.jpg" alt="download-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/download">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Download Page</h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/blog-listing.jpg" alt="blog-listing-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/blog-listing">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Blog Listing</h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/single-post.jpg" alt="single-post-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/single-post">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Single Post</h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/contacts.jpg" alt="contacts-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/contacts">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3 select_link wow fadeInUp" data-wow-delay="0.9s">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/demo/terms.jpg" alt="terms-preview" />
                                        <div className="item-overlay"><div className="overlay-content">
                                            <Link className="btn" href="/terms">Launch Demo</Link>
                                        </div></div>
                                    </div>
                                    <h4>Terms &amp; Privacy</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="reviews" className="reviews division">
                    <div className="container-fluid">
                        <div className="st-content">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title text-center">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.1s">Our Customers Reviews</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">Want to hear what our customers have said about us? Here’s are only some of the
                                        recent reviews that they have left on about our templates
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 reviews-grid">
                                    <DemoReview />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="banner-2" className="bg-scroll banner-1 division">
                    <div className="container-fluid">
                        <div className="st-content white-color">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6 col-xl-7">
                                    <div className="banner-2-img text-center">
                                        <img className="img-fluid wow fadeIn" src="/images/demo/banner-2-img.png" alt="banner-image" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-5">
                                    <div className="banner-2-txt">
                                        <h3 className="wow fadeInUp">Create your awesome website with NextApp</h3>
                                        <p className="wow fadeInUp">Mix and match from over <span>60 exclusive section UI blocks</span>. All blocks are fully
                                            customizable. Create something unique &amp; beautifully tailored to your needs in
                                            only a few minutes
                                        </p>
                                        <Link href="#" className="btn btn-md btn-green wow fadeInUp">Purchase Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            </Layout>
        </>
    )
}