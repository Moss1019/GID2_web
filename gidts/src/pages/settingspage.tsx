import React from 'react';
import Header from '../sections/header';
import Footer from '../sections/footer';

function SettingsPage() {
    return (
        <section>
            <Header
                currentPage="settings"
            />
            SETTINGS GO HERE
            <Footer />
        </section>
    );
}

export default SettingsPage;