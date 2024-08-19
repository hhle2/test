import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function BlogListing() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
                <div>
                    <section id="blog-page" className="wide-100 blog-page-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    {/* BLOG POST #1 */}
                                    <div className="blog-post">
                                        <div className="row">
                                            {/* BLOG POST IMAGE */}
                                            <div className="col-lg-8 blog-post-img">
                                                <img className="img-fluid" src="/images/blog/post-6-img.jpeg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="col-lg-4 blog-post-txt">
                                                {/* Post Link */}
                                                <h4 className="h4-xs"><Link href="/single-post">Tempor sapien donec gravida ipsum,
                                                    porta at justo vitae auctor</Link></h4>
                                                {/* Post Text */}
                                                <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo...</p>
                                                {/* Post Data */}
                                                <div className="single-post-data clearfix">
                                                    {/* Author Avatar */}
                                                    <div className="post-avatar">
                                                        <img src="/images/review-author-4.jpg" alt="author-avatar" />
                                                    </div>
                                                    {/* Author Data */}
                                                    <div className="post-author">
                                                        <p>Posted by Jeremy Harville</p>
                                                        <span>February 2, 2023</span>
                                                    </div>
                                                </div> {/* End Post Author */}
                                            </div> {/* END BLOG POST TEXT */}
                                        </div> {/* End row */}
                                    </div> {/* END BLOG POST #1 */}
                                    {/* BLOG POSTS CATEGORY */}
                                    <h5 className="h5-sm posts-category">Latest Articles</h5>
                                    {/* BLOG POST #2 */}
                                    <div className="blog-post latest-post b-bottom">
                                        <div className="row">
                                            {/* BLOG POST TEXT */}
                                            <div className="col-lg-7 blog-post-txt">
                                                {/* Post Link */}
                                                <h4 className="h4-xs">
                                                    <Link href="/single-post">Tempor sapien donec gravida ipsum, porta at justo
                                                        vitae auctor</Link>
                                                </h4>
                                                {/* Post Text */}
                                                <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo. Velna
                                                    vitae auctor a congue magna tempor sapien eget gravida...
                                                </p>
                                                {/* Post Data */}
                                                <div className="single-post-data clearfix">
                                                    {/* Author Avatar */}
                                                    <div className="post-avatar">
                                                        <img src="/images/review-author-3.jpg" alt="author-avatar" />
                                                    </div>
                                                    {/* Author Data */}
                                                    <div className="post-author">
                                                        <p>Posted by Michael Scanlon</p>
                                                        <span>January 28, 2023</span>
                                                    </div>
                                                </div> {/* End Post Author */}
                                            </div> {/* END BLOG POST TEXT */}
                                            {/* BLOG POST IMAGE */}
                                            <div className="col-lg-5 blog-post-img">
                                                <img className="img-fluid" src="/images/blog/post-1-img.jpg" alt="blog-post-image" />
                                            </div>
                                        </div> {/* End row */}
                                    </div> {/* END BLOG POST #2 */}
                                    {/* BLOG POST #3 */}
                                    <div className="blog-post latest-post">
                                        <div className="row">
                                            {/* BLOG POST TEXT */}
                                            <div className="col-lg-7 blog-post-txt">
                                                {/* Post Link */}
                                                <h4 className="h4-xs">
                                                    <Link href="/single-post">A ligula tempus at auctor ipsum and mauris lectus
                                                        gravida donec ipsum, at porta justo velna vitae
                                                    </Link>
                                                </h4>
                                                {/* Post Text */}
                                                <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo. Velna
                                                    vitae auctor a congue magna tempor sapien eget gravida...
                                                </p>
                                                {/* Post Data */}
                                                <div className="single-post-data clearfix">
                                                    {/* Author Avatar */}
                                                    <div className="post-avatar">
                                                        <img src="/images/review-author-6.jpg" alt="author-avatar" />
                                                    </div>
                                                    {/* Author Data */}
                                                    <div className="post-author">
                                                        <p>Posted by Scott Boxer</p>
                                                        <span>January 21, 2023</span>
                                                    </div>
                                                </div> {/* End Post Author */}
                                            </div> {/* END BLOG POST TEXT */}
                                            {/* BLOG POST IMAGE */}
                                            <div className="col-lg-5 blog-post-img">
                                                <img className="img-fluid" src="/images/blog/post-9-img.jpg" alt="blog-post-image" />
                                            </div>
                                        </div> {/* End row */}
                                    </div> {/* END BLOG POST #3 */}
                                    {/* BLOG POSTS CATEGORY */}
                                    <h5 className="h5-sm posts-category">Most Read Articles</h5>
                                    {/* POPULAR BLOG POSTS */}
                                    <div className="popular-posts mb-80">
                                        <div className="row">
                                            {/* BLOG POST #4 */}
                                            <div className="col-lg-4">
                                                <div className="popular-post">
                                                    <Link href="/single-post">A ligula tempus at auctor ipsum and mauris lectus
                                                        gravida donec ipsum, at porta
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* BLOG POST #5 */}
                                            <div className="col-lg-4">
                                                <div className="popular-post">
                                                    <Link href="/single-post">At auctor ipsum and mauris lectus enim ipsum nihil
                                                        impedit tempor lacus a cursus gravida
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* BLOG POST #6 */}
                                            <div className="col-lg-4">
                                                <div className="popular-post">
                                                    <Link href="/single-post">Mullam blandit tempor sapien gravida donec ipsum,
                                                        at porta justo in lacus cursus
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* END POPULAR BLOG POSTS */}
                                    {/* BLOG POST #7 */}
                                    <div className="blog-post b-bottom">
                                        <div className="row">
                                            {/* BLOG POST IMAGE */}
                                            <div className="col-lg-8 blog-post-img">
                                                <div className="video-preview text-center">
                                                    {/* Change the link HERE!!! */}
                                                    <VideoPopup style={7} />
                                                </div>
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="col-lg-4 blog-post-txt">
                                                {/* Post Link */}
                                                <h4 className="h4-xs"><Link href="/single-post">At ultrice ligula tempus auctor ipsum
                                                    mauris</Link></h4>
                                                {/* Post Text */}
                                                <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo sapien
                                                    gravida donec ipsum...</p>
                                                {/* Post Data */}
                                                <div className="single-post-data clearfix">
                                                    {/* Author Avatar */}
                                                    <div className="post-avatar">
                                                        <img src="/images/review-author-6.jpg" alt="author-avatar" />
                                                    </div>
                                                    {/* Author Data */}
                                                    <div className="post-author">
                                                        <p>Posted by Scott Boxer</p>
                                                        <span>January 12, 2023</span>
                                                    </div>
                                                </div> {/* End Post Author */}
                                            </div> {/* END BLOG POST TEXT */}
                                        </div> {/* End row */}
                                    </div> {/* END BLOG POST #7 */}
                                    {/* BLOG POST #8 */}
                                    <div className="blog-post">
                                        <div className="row">
                                            {/* BLOG POST IMAGE */}
                                            <div className="col-lg-8 blog-post-img">
                                                <img className="img-fluid" src="/images/blog/post-8-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="col-lg-4 blog-post-txt">
                                                {/* Post Link */}
                                                <h4 className="h4-xs"><Link href="/single-post">Donec ipsum, at porta justo velna vitae
                                                    auctor aliqum mullam</Link></h4>
                                                {/* Post Text */}
                                                <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo...</p>
                                                {/* Post Data */}
                                                <div className="single-post-data clearfix">
                                                    {/* Author Avatar */}
                                                    <div className="post-avatar">
                                                        <img src="/images/review-author-7.jpg" alt="author-avatar" />
                                                    </div>
                                                    {/* Author Data */}
                                                    <div className="post-author">
                                                        <p>Posted by Janette Green</p>
                                                        <span>January 9, 2023</span>
                                                    </div>
                                                </div> {/* End Post Author */}
                                            </div> {/* END BLOG POST TEXT */}
                                        </div> {/* End row */}
                                    </div> {/* END BLOG POST #8 */}
                                    {/* PAGE PAGINATION */}
                                    <div className="page-pagination mt-80">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled"><Link className="page-link" href="#" tabIndex={-1}>Previous</Link></li>
                                                <li className="page-item active"><Link className="page-link" href="#">1 <span className="sr-only">(current)</span></Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">2</Link> </li>
                                                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#">Last</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div> {/* End row */}
                        </div> {/* End container */}
                    </section> {/* END BLOG POSTS LISTING */}
                    {/* NEWSLETTER-2
			============================================= */}
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
                </div>

            </Layout>
        </>
    )
}