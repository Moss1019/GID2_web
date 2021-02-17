import React from 'react';
import routes, { RouteInfo } from '../util/routes';
import { Link } from 'react-router-dom';

export interface HeaderProps {
    currentPage: string
}

function Header({
    currentPage
}: HeaderProps) {
    const rs = routes.filter((r: RouteInfo) => r.display !== currentPage).map((r: RouteInfo, i: number) => {
        return (
            <Link key={i} to={r.path}>{r.display}</Link>
        )
    })
    return (
        <section className="header">
            {rs}
        </section>
    );
}

export default Header;
