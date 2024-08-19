import Link from "next/link"


export default function Newsletter2({ style }) {
    return (
        <>
            <section id="newsletter-2" className="bg-lightgrey wide-80 newsletter-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 section-title">
                            <h3 className="h3-lg">Stay up to date with our news, ideas and updates</h3>
                        </div>
                    </div>
                    {/* NEWSLETTER FORM */}
                    <div className="row">
                        <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                            <div className="newsletter-txt text-center">
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Your email address" required id="s-email" />
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-blue black-hover">Sign Up</button>
                                        </span>
                                    </div>
                                    {/* Small Text */}
                                    <p className="p-sm">We don’t share your personal information with anyone. Check out our
                                        <Link href="#">Privacy Policy</Link> for more information
                                    </p>
                                    {/* Newsletter Form Notification */}
                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
                            </div>
                        </div>
                    </div> {/* END NEWSLETTER FORM */}
                </div> {/* End container */}
            </section>
        </>
    )
}
