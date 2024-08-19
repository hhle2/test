
export default function Footer5() {
    return (
        <>
            <footer id="footer-5" className="wide-50 footer division">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER INFO */}
                        <div className="col-md-4 col-lg-3">
                            <div className="footer-info mb-40">
                                {/* Footer Logo */}
                                {/* For Retina Ready displays take a image, with double the amount of pixels that your image will be displayed (e.g 330 x 80 pixels) */}
                                <img className="footer-logo" src="images/footer-logo.png" width={160} height={40} alt="footer-logo" />
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-md-3 col-lg-3 offset-lg-1">
                            <div className="footer-links">
                                {/* Title */}
                                <h5 className="h5-sm">Product</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li><p><a href="#">How It Works?</a></p></li>
                                    <li><p><a href="#">Privacy Policy</a></p></li>
                                    <li><p><a href="#">Terms of Service</a></p></li>
                                    <li><p><a href="#">Site Map</a></p></li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-md-2 col-lg-3">
                            <div className="footer-links">
                                {/* Title */}
                                <h5 className="h5-sm">Connect</h5>
                                {/* Footer Links */}
                                <ul className="foo-links clearfix">
                                    <li><p><a href="#">FAQs</a></p></li>
                                    <li><p><a href="#">Editor Help</a></p></li>
                                    <li><p><a href="#">Life Chatting</a></p></li>
                                    <li><p><a href="#">Contact Us</a></p></li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER SOCIAL LINKS */}
                        <div className="col-md-3 col-lg-2">
                            <div className="footer-socials-links text-right mb-25">
                                {/* Social Links */}
                                <h5 className="h5-sm"><a href="#" className="foo-facebook">Facebook</a></h5>
                                <h5 className="h5-sm"><a href="#" className="foo-twitter">Twitter</a></h5>
                                <h5 className="h5-sm"><a href="#" className="foo-instagram">Instagram</a></h5>
                                <h5 className="h5-sm"><a href="#" className="foo-dribbble">Dribbble</a></h5>
                            
                            </div>
                        </div>
                    </div>	 {/* END FOOTER CONTENT */}
                    {/* BOTTOM FOOTER */}
                    <div className="bottom-footer">
                        <div className="row">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col-md-12">
                                <div className="footer-copyright">
                                    <p className="p-sm">© 2023 NextApp. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>	{/* END BOTTOM FOOTER */}
                </div>	    {/* End container */}
            </footer>

        </>
    )
}
