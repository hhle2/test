import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function SinglePost() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="A partnership for the...">
                <div>
                    {/* SINGLE POST
			============================================= */}
                    <section id="single-post" className="wide-100 single-post-section division">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    {/* SINGLE POST TITLE */}
                                    <div className="single-post-title mb-40">
                                        {/* Post Title */}
                                        <h3 className="h3-lg">A partnership for the future of mobile-based AI capabilities</h3>
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
                                        </div>	{/* End Post Author */}
                                    </div>	{/* END SINGLE POST TITLE */}
                                    {/* BLOG POST TEXT */}
                                    <div className="single-post-txt mb-45">
                                        {/* Post Text */}
                                        <p className="p-md">Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue
                                            tempor a gravida donec ipsum porta justo integer at odio velna. Maecenas gravida
                                            porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis. Urna
                                            augue, viverra a augue eget, dictum tempor diam. Sed pulvinar donec ociis et magnis
                                            sapien imperdiet dui varius viverra. Pellentesque ac massa lorem.
                                        </p>
                                    </div>
                                    {/* BLOG MAIN POST IMAGE */}
                                    <div className="blog-post-img mb-40">
                                        <img className="img-fluid" src="/images/blog/post-4-img.jpg" alt="blog-post-image" />
                                    </div>
                                    {/* BLOG POST TEXT */}
                                    <div className="single-post-txt">
                                        {/* Post Text */}
                                        <p>Aliqum  mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae
                                            auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam
                                            sapien sem sagittis congue tempor gravida donec enim ipsum porta justo integer at odio
                                            velna. Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel
                                            laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                                            consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce
                                            eu <Link href="#">cursus fusce non nulla</Link> vitae massa
                                        </p>
                                        {/* Post Text */}
                                        <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae
                                            purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur
                                            ac dapibus libero. Mauris donec ociis a neque. Phasellus blandit tristique justo ut aliquam.
                                            Aliquam vitae molestie nunc sapien justo, aliquet non molestie augue, venenatis nec purus.
                                            Aliquam eget lacinia elit. Augue tincidunt tincidunt massa, et porttitor justo blandit.
                                        </p>
                                        {/* Post Text */}
                                        <p className="p-md">Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna
                                            purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur
                                            ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo.
                                        </p>
                                        {/* Post Text */}
                                        <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                            turpis urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh,
                                            vel imperdiet dui varius viverra. Sapien justo massa lorem. Fusce eu cursus non nulla vitae
                                            massa placerat purus. Sagittis congue augue egestas volutpat egestas magna suscipit egestas
                                            magna ipsum vitae purus <Link href="#">efficitur ipsum primis</Link> in cubilia laoreet augue egestas luctus donec
                                            diam. Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique
                                            justo ut aliquam.
                                        </p>
                                        {/* Small Title */}
                                        <h5 className="h5-sm">Vitae massa placerat vulputate</h5>
                                        {/* Post Text */}
                                        <p>Nullam non scelerisque lectus. In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                                            ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio.
                                            Ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus
                                            Aliqum  mullam blandit tempor sapien gravida donec
                                        </p>
                                        {/* INNER IMAGE */}
                                        <div className="post-inner-img">
                                            <div className="video-preview text-center">
                                                <VideoPopup style={5}/>
                                            </div>
                                        </div>
                                        {/* Small Title */}
                                        <h5 className="h5-sm">Semper lacus cursus porta, feugiat primis</h5>
                                        {/* Post Text */}
                                        <p>Curabitur ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo
                                            ut aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie sed,
                                            venenatis nec purus. Aliquam eget lacinia tincidunt tincidunt massa, et porttitor justo.
                                            Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar
                                            consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu
                                            cursus est. Fusce non nulla vitae massa placerat bulum tincidunt tincidunt massa, et porttitor justo
                                        </p>
                                        {/* Post Text */}
                                        <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae
                                            purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam.	Curabitur
                                            ac dapibus libero. Quisque eu tristique neque. Phasellus blandit tristique justo ut aliquam.
                                            Aliquam vitae <Link href="#">molestie nunc sapien justo</Link>, aliquet non molestie sed, venenatis nec purus.
                                            Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor justo.
                                        </p>
                                        {/* Small Title */}
                                        <h5 className="h5-sm">Cubilia laoreet augue egestas luctus</h5>
                                        {/* Post Text */}
                                        <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
                                            turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur
                                            nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem. Fusce eu cursus est.
                                            Fusce non nulla vitae massa placerat vulputate vel a purus
                                        </p>
                                        {/* Text List */}
                                        <ul className="txt-list">
                                            <li>Vitae auctor integer congue magna at pretium cubilia laoreet augue egestas luctus
                                                donec diam. Curabitur ac dapibus libero. Quisque eu tristique neque ipsum porta
                                                cubilia laoreet augue egestas
                                            </li>
                                            <li>Integer congue magna at pretium purus pretium ligula rutrum luctus risus eros
                                                dolor auctor ipsum blandit purus
                                            </li>
                                            <li>Sagittis congue augue egestas volutpat egestas magna vitae auctor eros congue magna
                                                nihil impedit ligula risus. Mauris donec ociis et magnis sapien an sapien congue
                                                tempor gravida enim ipsum porta cubilia laoreet augue egestas luctus egestas volutpat
                                                egestas magna suscipit egestas magna
                                            </li>
                                        </ul>
                                        {/* Post Text */}
                                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore. incididunt ut labore et dolore. Neque turpis vitae eros praesent varius. Egestas
                                            pellentesque urna blandit, sed ac leo ut mi, nam wisi, <Link href="#">laborum donec erat diam ociis</Link> ultrice
                                            ligula magna suscipit lectus gestas  egestas magna ipsum vitae purus ipsum
                                        </p>
                                        {/* BLOG POST SHARE LINKS */}
                                        <div className="post-share-links">
                                            {/* POST TAGS */}
                                            <div className="post-tags-list">
                                                <span><Link href="#">jquery</Link></span>
                                                <span><Link href="#">html5</Link></span>
                                                <span><Link href="#">responsive</Link></span>
                                                <span><Link href="#">bootstrap</Link></span>
                                            </div>
                                            {/* POST SHARE ICONS */}
                                            <div className="post-share-list">
                                                <ul className="share-social-icons clearfix">
                                                    <li><Link href="#" className="share-ico ico-like"><i className="far fa-thumbs-up" /> Like</Link></li>
                                                    <li><Link href="#" className="share-ico ico-facebook"><i className="fab fa-facebook-f" /> Share</Link></li>
                                                    <li><Link href="#" className="share-ico ico-twitter"><i className="fab fa-twitter" /> Tweet</Link></li>
                                                    <li><Link href="#" className="share-ico ico-google-plus"><i className="fab fa-google-plus-g" /> Share</Link></li>
                                                </ul>
                                            </div>
                                        </div>	{/* END BLOG POST SHARE */}
                                    </div>	{/* END BLOG POST TEXT */}
                                    {/* ABOUT POST AUTHOR */}
                                    <div className="author-senoff">
                                        {/* Avatar */}
                                        <img src="/images/review-author-4.jpg" alt="author-avatar" />
                                        {/* Text */}
                                        <div className="author-senoff-txt">
                                            {/* Title */}
                                            <h5 className="h5-sm">Published by Jeremy Harville</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incidide ut
                                                labore dolore. incididunt ut labore et dolore. Neque turpis vitae eros praesent
                                                varius. Egestas a congue augue egestas volutpat egestas magna suscipit egestas magna
                                                ipsum vitae urna blandit vitae massa placerat vulputate et magnis sapien
                                            </p>
                                        </div>
                                    </div>	{/* END ABOUT POST AUTHOR */}
                                    {/* POST COMMENTS */}
                                    <div className="single-post-comments">
                                        {/* Title */}
                                        <h5 className="h5-xl mb-40">4 Comments</h5>
                                        {/* COMMENT #1 */}
                                        <div className="media mt-50">
                                            {/* Comment-1 Avatar */}
                                            <img className="mr-3" src="/images/post-author-1.jpg" alt="comment-avatar" />
                                            <div className="media-body">
                                                {/* Comment-1 Meta */}
                                                <div className="comment-meta">
                                                    <h5 className="h5-xs mt-0">Jeffrey</h5>
                                                    <span className="comment-date">July 08, 2018 at 7:14 pm - </span>
                                                    <span className="btn-reply"><Link href="#leave-comment" className="internal-link">reply</Link></span>
                                                </div>
                                                {/* Comment-1 Text */}
                                                <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra
                                                    suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean primis
                                                    in augue luctus neque purus ipsum neque dolor primis
                                                </p>
                                                <hr />
                                                {/* COMMENT #2 */}
                                                <div className="media mt-3">
                                                    {/* Comment-2 Avatar */}
                                                    <Link href="#" className="pr-3">
                                                        <img src="/images/post-author-2.jpg" alt="comment-avatar" />
                                                    </Link>
                                                    <div className="media-body">
                                                        {/* Comment-2 Meta */}
                                                        <div className="comment-meta">
                                                            <h5 className="h5-xs mt-0">Jeremy</h5>
                                                            <span className="comment-date">July 28, 2018 at 11:35 pm - </span>
                                                            <span className="btn-reply"><Link href="#leave-comment" className="internal-link">reply</Link></span>
                                                        </div>
                                                        {/* Comment-2 Text */}
                                                        <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra suscipit
                                                            porta ratione, mollis risus lectus porta
                                                        </p>
                                                    </div>
                                                </div>	{/* END COMMENT #2 */}
                                            </div>
                                        </div>	{/* END COMMENT #1 */}
                                        <hr />
                                        {/* COMMENT #3 */}
                                        <div className="media mt-40">
                                            {/* Comment-4 Avatar */}
                                            <img className="mr-3" src="/images/post-author-3.jpg" alt="comment-avatar" />
                                            <div className="media-body">
                                                {/* Comment-4 Meta */}
                                                <div className="comment-meta">
                                                    <h5 className="h5-xs mt-0">Samantha</h5>
                                                    <span className="comment-date">June 29, 2018 at 5:41 pm - </span>
                                                    <span className="btn-reply"><Link href="#leave-comment" className="internal-link">reply</Link></span>
                                                </div>
                                                {/* Comment-4 Text */}
                                                <p>Porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue luctus
                                                    neque purus ipsum neque dolor primis libero tempus, tempor posuere ligula varius
                                                    impedit enim tempor vitae pulvinar congue augue egestas
                                                </p>
                                            </div>
                                        </div>	{/* END COMMENT #3 */}
                                        {/* COMMENT #4 */}
                                        <div className="media mt-40">
                                            {/* Comment-4 Avatar */}
                                            <img className="mr-3" src="/images/post-author-4.jpg" alt="comment-avatar" />
                                            <div className="media-body">
                                                {/* Comment-4 Meta */}
                                                <div className="comment-meta">
                                                    <h5 className="h5-xs mt-0">Robert Peterson</h5>
                                                    <span className="comment-date">June 11, 2018 at 11:19 am - </span>
                                                    <span className="btn-reply"><Link href="#leave-comment" className="internal-link">reply</Link></span>
                                                </div>
                                                {/* Comment-4 Text */}
                                                <p>Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque id viverra
                                                    suscipit egestas magna porta ratione, mollis risus lectus porta rutrum arcu aenean
                                                    primis in augue auctor integer congue
                                                </p>
                                            </div>
                                        </div>	{/* END COMMENT #4 */}
                                    </div>	 {/* END POST COMMENTS */}
                                    {/* COMMENT FORM */}
                                    <div id="leave-comment" className="mt-80">
                                        {/* Title */}
                                        <h5 className="h5-xl">Leave a Comment</h5>
                                        {/* Text */}
                                        <p className="grey-color">Your email address will not be published. Required fields are marked *</p>
                                        {/* Comment Form Inputs */}
                                        <form name="commentform" className="comment-form row mt-40">
                                            {/* Contact Form Input */}
                                            <div id="post-message" className="col-md-12">
                                                <p>Add Comment *</p>
                                                <textarea className="form-control comment" name="message" rows={6} placeholder="Enter your comment here ..." />
                                            </div>
                                            <div id="post-name" className="col-md-12">
                                                <p>Name*</p>
                                                <input type="text" name="name" className="form-control name" placeholder="Your Name" />
                                            </div>
                                            <div id="post-email" className="col-md-12">
                                                <p>Email*</p>
                                                <input type="text" name="email" className="form-control email" placeholder="Email Address" />
                                            </div>
                                            {/* Comment Form Button */}
                                            <div className="col-md-12 comment-form-btn mt-20 text-right">
                                                <button type="submit" className="btn btn-blue black-hover submit">Post Comment</button>
                                            </div>
                                            {/* Comment Form Message */}
                                            <div className="col-md-12 comment-form-msg">
                                                <span className="loading" />
                                            </div>
                                        </form>
                                    </div>	{/* END COMMENT FORM */}
                                </div>
                            </div>    {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END SINGLE POST */}
                    {/* RELATED POSTS
			============================================= */}
                    <section id="related-posts" className="bg-lightgrey wide-60 posts-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 section-title">
                                    <h3 className="h3-sm">Keep Reading: Related Posts</h3>
                                </div>
                            </div>
                            {/* BLOG POSTS */}
                            <div className="row">
                                {/* BLOG POST #1 */}
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-post wow fadeInUp" data-wow-delay="0.3s">
                                        {/* BLOG POST IMAGE */}
                                        <div className="blog-post-img mb-25">
                                            <img className="img-fluid" src="/images/blog/post-1-img.jpg" alt="blog-post-image" />
                                        </div>
                                        {/* BLOG POST TEXT */}
                                        <div className="blog-post-txt">
                                            {/* Post Data */}
                                            <p className="post-meta">Posted by J.Barnes on February 2, 2023</p>
                                            {/* Post Link */}
                                            <h5 className="h5-sm"><Link href="/single-post">A partnership for the future of mobile-based AI capabilities</Link></h5>
                                            {/* Post Text */}
                                            <p>Aliqum  mullam blandit tempor sapien and gravida donec ipsum at justo. Velna vitae
                                                auctor a congue magna tempor sapien eget gravida donec...
                                            </p>
                                        </div>
                                    </div>
                                </div>	{/* END  BLOG POST #1 */}
                                {/* BLOG POST #2 */}
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-post wow fadeInUp" data-wow-delay="0.5s">
                                        {/* BLOG POST IMAGE */}
                                        <div className="blog-post-img mb-25">
                                            <img className="img-fluid" src="/images/blog/post-2-img.jpg" alt="blog-post-image" />
                                        </div>
                                        {/* BLOG POST TEXT */}
                                        <div className="blog-post-txt">
                                            {/* Post Data */}
                                            <p className="post-meta">Posted by AliThemes on January 30, 2023</p>
                                            {/* Post Link */}
                                            <h5 className="h5-sm"><Link href="/single-post">NextApp is hiring! Help us with customer service</Link></h5>
                                            {/* Post Text */}
                                            <p>Aliqum  mullam blandit tempor sapien and gravida donec ipsum at justo. Velna vitae
                                                auctor a congue magna tempor sapien eget gravida donec...
                                            </p>
                                        </div>
                                    </div>
                                </div>	{/* END  BLOG POST #2 */}
                                {/* BLOG POST #3 */}
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-post wow fadeInUp" data-wow-delay="0.7s">
                                        {/* BLOG POST IMAGE */}
                                        <div className="blog-post-img mb-25">
                                            <img className="img-fluid" src="/images/blog/post-3-img.jpg" alt="blog-post-image" />
                                        </div>
                                        {/* BLOG POST TEXT */}
                                        <div className="blog-post-txt">
                                            {/* Post Data */}
                                            <p className="post-meta">Posted by J.Barnes on January 22, 2023</p>
                                            {/* Post Link */}
                                            <h5 className="h5-sm"><Link href="/single-post">Why you should be using video in prospecting?</Link></h5>
                                            {/* Post Text */}
                                            <p>Aliqum mullam blandit tempor sapien and gravida donec ipsum at justo. Velna vitae
                                                auctor a congue magna tempor sapien eget gravida donec...
                                            </p>
                                        </div>
                                    </div>
                                </div>	{/* END  BLOG POST #3 */}
                            </div>    {/* END BLOG POSTS */}
                        </div>     {/* End container */}
                    </section>	{/* END RELATED POSTS */}
                    {/* NEWSLETTER-2
			============================================= */}
                    <section id="newsletter-2" className="bg-lightgrey1 wide-80 newsletter-section division">
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
                            </div>	  {/* END NEWSLETTER FORM */}
                        </div>	   {/* End container */}
                    </section>	{/* END NEWSLETTER-2 */}
                    {/* HORIZONTAL GREY LINE
			============================================= */}
                    <div className="grey-border">
                        <div className="container"><div className="row"><div className="col b-bottom" /></div></div>
                    </div>
                </div>

            </Layout>
        </>
    )
}