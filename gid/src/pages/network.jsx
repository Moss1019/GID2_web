import Header from "../sections/header";
import Footer from "../sections/footer";
import { UserRoutes } from "../services/routes";


function Network() {
    return (
        <section>
            <Header
                currentRoute={UserRoutes.NETWORK}
            />

            NETWORK PAGE
            
            <Footer />
        </section>
    );
}

export default Network