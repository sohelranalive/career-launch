import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-black pb-5">
            <div class="container text-white pt-5">
                <div class="row mt-3 px-4 px-md-0">
                    <div class="col-12 col-md-3">
                        <img src="images/logo.png" class="" alt="" />
                        <p class="mt-3">Justice, in its broadest sense, is the principle that people receive that which they
                            deserve, with the interpretation of what then constitutes "deserving" being impacted upon by
                            numerous fields, with many differing viewpoints.</p>
                    </div>
                    <div class="col-12 col-md-3">
                        <h2 class="mb-4 ms-md-4">Useful Links</h2>
                        <ul class="list-unstyled ms-md-4">
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Career</li>
                            <li>Help</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3">
                        <h2 class="mb-4">Contact Now</h2>
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
                    <div class="col-12 col-md-3">
                        <h2 class="mb-4">Subscribe</h2>
                        <p>Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
                        <form class="d-flex " role="search">

                            <button class="btn b7-button" type="submit"><i class="fa-solid fa-arrow-pointer"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;