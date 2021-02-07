import { UserRoutes } from "../services/routes";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function getRoutes(toExlude) {
    const routes = Object.values(UserRoutes).filter(v => v.path != toExlude);
    return routes.map((r, i) => {
        return (
            <Fragment key={i}>
                <Link to={r.path}>{r.display}</Link>
            </Fragment>
        );
    })
}

function Header(currentRoute) {
    return (
        <section className="header container-fluid">
            <div className="row">
                <div>
                    Get It Done
                </div>
                <div>
                    {getRoutes(currentRoute.currentRoute.path)}
                </div>
            </div>
        </section>
    );
}

export default Header;