import { useEffect } from 'react';
import Header from '../sections/header';
import Footer from '../sections/footer';
import ListsBody from '../sections/listsbody';
import CurrentUser from '../services/currentuser';
import { useHistory } from 'react-router';

function Lists() {
  const history = useHistory();
  const currentUser = new CurrentUser();

  useEffect(() => {
    if(!currentUser.hasUserId()) {
      history.replace('/login');
    }
  }, [])

  return (
    <section>
      <Header 
        currentPage="lists"
      />

      <ListsBody 
        userId={currentUser.getUserId()}
      />

      <Footer />
    </section>
  );
}

export default Lists;
