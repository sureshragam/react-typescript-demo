import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Article from './components/Article';
import ContactModal from './components/ContactModal';
import { useState } from 'react';

function App() {
  const [openModal,setOpenModal]=useState(false);
  const onClickClose = () =>{
    setOpenModal(false)
  }
  const onClickContact = () =>{
    setOpenModal(true)
  }

  return (
    <div className="App">
      <Header onClickContact={onClickContact}/>
      <ContactModal open={openModal} onClickClose={onClickClose}/>
      <div className='contentContainer'>
        <Aside className="aside">
          <h1>sidebar</h1>
        </Aside>
        <div className='articlesContainer'>
          <Article>
            <h1>Article 1</h1>
          </Article>
          <Article>
          <h1>Article 2</h1>
          </Article>
          <Article>
          <h1>Article 3</h1>
          </Article>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
