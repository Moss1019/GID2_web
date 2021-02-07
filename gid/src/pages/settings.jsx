import { UserRoutes } from "../services/routes";
import Header from "../sections/header";
import Footer from "../sections/footer";


function Settings() {
    return (
        <section>
            <Header 
                currentRoute={UserRoutes.SETTINGS}
            />

            SETTINGS PAGE
            
            <Footer />
        </section>
    );
}

export default Settings;