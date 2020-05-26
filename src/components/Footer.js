import React from 'react';

const Footer = () => {
    return (
        <footer className="footer_dark">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="widget">
                            <h6 className="widget_title">Contact info</h6>
                            <ul className="contact_info contact_info_light">
                                <li>
                                    <i className="ti-location-pin"></i>
                                    <p>123 Street, Old Trafford, NewYork, USA</p>
                                </li>
                                <li>
                                    <i className="ti-email"></i>
                                    <a href="mailto:info@sitename.com">info@sitename.com</a>
                                </li>
                                <li>
                                    <i className="ti-mobile"></i>
                                    <p>+ 457 789 789 65</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="widget">
                            <h6 className="widget_title">Useful Links</h6>
                            <ul className="widget_links">
                                <li><a href="#!">About Us</a></li>
                                <li><a href="#!">FAQ</a></li>
                                <li><a href="#!">Location</a></li>
                                <li><a href="#!">Affiliates</a></li>
                                <li><a href="#!">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="widget">
                            <h6 className="widget_title">My Account</h6>
                            <ul className="widget_links">
                                <li><a href="#!">My Account</a></li>
                                <li><a href="#!">Discount</a></li>
                                <li><a href="#!">Returns</a></li>
                                <li><a href="#!">Orders History</a></li>
                                <li><a href="#!">Order Tracking</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="widget">
                            <h6 className="widget_title">Subscribe Our Newsletter</h6>
                            <p>If you want to get an email from us every time we have a new special offer, then sign up here!</p>
                            <div className="newsletter_form rounded_input">
                                <form>
                                    <input type="text" required className="form-control" placeholder="Enter Email Address"/>
                                    <button type="submit" className="btn-send" name="submit" value="Submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom_footer border-top-tran">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12 justify-content-center">
                        <p className="mb-4 text-center text-md-left">© 2020 All Rights Reserved Tu Tienda</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;