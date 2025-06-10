import React from 'react';

const Footer = () => {
    return (
        <div id="faqs" className="md:pt-8 md:pb-6 py-4 border-t">
            <p className="text-center">
                © Hustlin' Hardos {new Date().getFullYear()}
            </p>
        </div>
    );
};

export default Footer;
