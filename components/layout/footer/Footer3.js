
export default function Footer3() {
    return (
        <>
            <footer id="footer-3" className="bg-darkviolet wide-70 footer division">
                <div className="container white-color">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* FOOTER LOGO */}
                            {/* For Retina Ready displays take a image, with double the amount of pixels that your image will be displayed (e.g 230 x 230 pixels) */}
                            <img className="footer-logo" src="images/color-logo.png" width={115} height={115} alt="footer-logo" />
                            {/* Title */}
                            <h3 className="h3-xs">Get <span>NextApp</span> for Mac now</h3>
                            <p className="p-lg">An award-winning media app for the Mac</p>
                            {/* Buttons Group */}
                            <div className="footer-btns-group mb-50">
                                {/* Buttons */}
                                <a href="#" className="btn btn-tra-white black-hover mr-10">Download Beta</a>
                                <a href="#" className="store"><img className="mac-appstore" src="images/store_badges/mac-appstore.png" alt="macstore-logo" /></a>
                            </div>
                            {/* FOOTER SOCIAL LINKS */}
                            <div className="footer-socials-links text-center mb-35">
                                <ul className="foo-links text-center clearfix">
                                    <li><a href="#" className="ico-facebook"><i className="fab fa-facebook" /></a></li>
                                    <li><a href="#" className="ico-twitter"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#" className="ico-instagram"><i className="fab fa-instagram" /></a></li>
                                    <li><a href="#" className="ico-dribbble"><i className="fab fa-dribbble" /></a></li>
                               
                                </ul>
                            </div>
                            {/* FOOTER COPYRIGHT */}
                            <div className="footer-copyright">
                                <p className="p-sm">© 2023 NextApp. All Rights Reserved</p>
                            </div>
                            {/* FOOTER LINKS */}
                            <div className="footer-links">
                                <ul className="foo-links clearfix">
                                    <li><p className="p-sm"><a href="#">Privacy Policy</a></p></li>
                                    <li><p className="p-sm"><a href="#">Terms of Service</a></p></li>
                                    <li><p className="p-sm"><a href="#">Contact Us</a></p></li>
                                </ul>
                            </div>
                        </div>
                    </div>     {/* End row */}
                </div>	   {/* End container */}
            </footer>

        </>
    )
}
