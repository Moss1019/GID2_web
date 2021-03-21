import React from 'react';
import { 
  Paper,
  Grid 
} from '@material-ui/core';

function Footer() {
  return (
    <section className="footer">
      <Grid container className="h-100">
        <Grid item xs={6} className="flex-midpoint">
          Some copyright info
        </Grid>
        <Grid item xs={6} className="flex-midpoint">
          some version info
        </Grid>
      </Grid>
    </section>
  );
}

export default Footer;