import React from 'react';
import routes, { RouteInfo } from '../util/routes';
import { Link } from 'react-router-dom';
  import { 
  AppBar, 
  Typography, 
  Toolbar 
} from '@material-ui/core';

export interface HeaderProps {
  currentPage: string
}

function Header({
  currentPage
}: HeaderProps) {
  const rs = routes.filter((r: RouteInfo) => r.display !== currentPage).map((r: RouteInfo, i: number) => {
    return (
      <Link key={i} to={r.path} className="mr-4 nav-link">{r.display}</Link>
    )
  })
  return (
    <section className="header">
      <AppBar position="fixed">
        <Toolbar>
          <Typography className="title">g.i.d {currentPage}</Typography>
          {rs}
        </Toolbar>
       </AppBar>
    </section>
  );
}

export default Header;
