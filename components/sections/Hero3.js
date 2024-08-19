import Link from "next/link"


export default function Hero3({ style }) {
    return (
        <>
            <section id="hero-3" className="bg-fixed hero-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6 col-xl-6">
                            <div className="hero-txt mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                {/* Hero App Data */}
                                <div className="hero-app-data">
                                    <h4 className="h4-xs">NextApp 14.0.2</h4>
                                    <span className="app-version">New</span>
                                </div>
                                {/* Title */}
                                <h3 className="h3-xl">Learn anytime and everywhere you want with NextApp®</h3>
                                {/* Text */}
                                <p>Feugiat primis ligula risus auctor augue egestas and mauris viverra tortor in iaculis
                                    magna feugiat mauris undo ipsum in placerat viverra tortor
                                </p>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO REGISTER FORM */}
                        <div className="col-md-6 col-xl-5 offset-xl-1">
                            <div className="hero-form text-center mb-40 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <form name="registerForm" className="row register-form">
                                    {/* Form Title */}
                                    <div className="col-md-12">
                                        <h4 className="h4-sm">Get started for FREE!</h4>
                                        <p>Fill all fields so we can get some info about you. We'll never send you spam</p>
                                    </div>
                                    {/* Form Input */}
                                    <div id="input-name" className="col-md-12">
                                        <input className="form-control name" type="text" name="name" placeholder="Your Name" />
                                    </div>
                                    {/* Form Input */}
                                    <div id="input-email" className="col-md-12">
                                        <input className="form-control email" type="text" name="email" placeholder="Your Email" />
                                    </div>
                                    {/* Form Input */}
                                    <div id="input-phone" className="col-md-12">
                                        <input className="form-control phone" type="text" name="phone" placeholder="Your Phone Number" />
                                    </div>
                                    {/* Form Submit Button */}
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-md btn-blue black-hover submit">Sign Up Now</button>
                                        <p className="p-sm">By signing up, you accept our <Link href="#">Terms</Link>  <Link href="#">Privacy Policy</Link></p>
                                    </div>
                                    {/* Form Message */}
                                    <div className="register-form-msg text-center">
                                        <div className="sending-msg"><span className="loading" /></div>
                                    </div>
                                </form>
                            </div>
                        </div>	{/* END HERO REGISTER FORM */}
                    </div>	   {/* End row */}
                </div>     {/* End container */}
                {/* Bottom Inclined Line */}
                <div className="bg-fixed right-incline" />
            </section>

        </>
    )
}
