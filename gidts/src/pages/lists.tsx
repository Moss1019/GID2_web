import React from 'react';
import Header from '../sections/header';
import Footer from '../sections/footer';
import ListsBody from '../sections/listsbody';

function Lists() {
  return (
    <section>
      <Header 
        currentPage="lists"
      />

      <ListsBody />

      <Footer />
    </section>
  );
}

export default Lists;
