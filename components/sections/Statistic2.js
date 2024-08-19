

export default function Statistic2({ style }) {
    return (
        <>
            <div id="statistic-2" className="bg-lightgrey statistic-section division">
                <div className="container">
                    <div className="row">
                        {/* STATISTIC BLOCK #1 */}
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block icon-xs wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                {/* Icon  */}
                                <span className="flaticon-040-puzzle" />
                                {/* Text */}
                                <h5 className="statistic-number">9,<span className="count-element">632</span></h5>
                                <p className="txt-400">Download App</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #2 */}
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block icon-xs wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                {/* Icon  */}
                                <span className="flaticon-096-like" />
                                {/* Text */}
                                <h5 className="statistic-number">5,<span className="count-element">281</span></h5>
                                <p className="txt-400">Happy Customers</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #3 */}
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block icon-xs wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
                                {/* Icon  */}
                                <span className="flaticon-064-menu" />
                                {/* Text */}
                                <h5 className="statistic-number">6,<span className="count-element">179</span></h5>
                                <p className="txt-400">Active Accounts</p>
                            </div>
                        </div>
                        {/* STATISTIC BLOCK #4 */}
                        <div className="col-sm-6 col-md-3">
                            <div className="statistic-block icon-xs wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
                                {/* Icon  */}
                                <span className="flaticon-026-star" />
                                {/* Text */}
                                <h5 className="statistic-number">1,<span className="count-element">473</span></h5>
                                <p className="txt-400">Total App Rates</p>
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </div>
        </>
    )
}
