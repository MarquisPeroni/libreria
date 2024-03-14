import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import fantasy from './data/fantasy.json';



function App() {
  return (
    <div>
      <MyNav/>
      <Welcome/>
      <BookList allBooks={fantasy}/>
      <MyFooter/>
    </div>
  );
}

export default App;
