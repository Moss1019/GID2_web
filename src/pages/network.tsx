import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import GenerateCollabKey from '../containers/generatecollabkey';
import LinkCollabKey from '../containers/linkcollabkey';
import CollaboratorList from '../sections/collaboratorlist';
import Footer from '../sections/footer';
import Header from '../sections/header';
import CurrentUser from '../services/currentuser';

function Network() {
  const history = useHistory();
  const currentUser = new CurrentUser();

  useEffect(() => {
    if(!currentUser.hasUserId()) {
      history.replace('/login');
    }
  }, []);

  return (
    <section>
      <Header 
        currentPage="network"
      />

      <section className="app-body container-fluid">
        <Grid container>
          <Grid item md={6} xs={12}>
            <CollaboratorList
              userId={currentUser.getUserId()}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <GenerateCollabKey
              
            />

            <LinkCollabKey

            />
          </Grid>
        </Grid>
      </section>

      <Footer />
    </section>
  );
}

export default Network;
