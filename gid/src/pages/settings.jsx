import { UserRoutes } from "../services/routes";
import Header from "../sections/header";
import Footer from "../sections/footer";


function Settings() {
    return (
        <section>
            <Header 
                currentRoute={UserRoutes.SETTINGS}
            />

            
            
            <Footer />
        </section>
    );
}

export default Settings;