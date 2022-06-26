import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header/>
      {contacts.map((value, index) => {
        return <Contact key={index} data={value}/>
      })
      }
    </div>
  );
}

export default App;
