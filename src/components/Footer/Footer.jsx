import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black pb-5">
            <div className="container text-white pt-5">
                <div className="row mt-3 px-4 px-md-0">
                    <div className="col-12 col-md-3">
                        <img src="images/logo.png" className="" alt="" />
                        <p className="mt-3">Justice, in its broadest sense, is the principle that people receive that which they
                            deserve, with the interpretation of what then constitutes "deserving" being impacted upon by
                            numerous fields, with many differing viewpoints.</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h2 className="mb-4 ms-md-4">Useful Links</h2>
                        <ul className="list-unstyled ms-md-4">
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Career</li>
                            <li>Help</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <h2 className="mb-4">Contact Now</h2>
                        <p>555 4th 5t NW, Washington <br />
                            DC 20530, United States</p>
                        <p>
                            +88 01750 000 000<br />
                            +88 01750 000 000
                        </p>
                        <p>
                            info@b7lawfirm.com<br />
                            support@b7lawfirm.com
                        </p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h2 className="mb-4">Subscribe</h2>
                        <p>Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
                        <form className="d-flex " role="search">

                            <button className="btn b7-button" type="submit"><i className="fa-solid fa-arrow-pointer"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;