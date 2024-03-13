import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import Booklist from './components/BookList';
import fantasy from './data/fantasy.json';



function App() {
  return (
    <div>
      <MyNav/>
      <Welcome/>
      <Booklist allBooks={fantasy}/>
      <MyFooter/>
    </div>
  );
}

export default App;
