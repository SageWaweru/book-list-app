import './App.css';
import Item from './Components/Item';
import book1 from './images/book1.png';
import book2 from './images/book2.jpeg';
import book3 from './images/book3.jpg';
import book4 from './images/book4.jpg';
import book5 from './images/book5.jpg';
import book6 from './images/book6.jpg';
import book7 from './images/book7.jpg';
import book8 from './images/book8.jpg';
import book9 from './images/book9.jpg';




const books=[
    {
        id:1,
        image:{src:book1},
        title:"Carrie Anne's World",
        author:"Mark Whiteway"
    },
    {
        id:2,
        image:{src:book2},
        title:"Fotress of Blood",
        author:"L.D.Goffigan"
    },
    {
        id:3,
        image:{src:book3},
        title:"The Last Apple Tree",
        author:"Claudia Mills"
    },
    {
        id:4,
        image:{src:book4},
        title:"The Cherry Tree Café",
        author:"Heidi Swain"
    },
    {
        id:5,
        image:{src:book5},
        title:" Magnus Chase and the Gods of Asgard: The Sword of Summer",
        author:"Rick Riordan"
    },
    {
        id:6,
        image:{src:book6},
        title:" The Rise and Fall of Mount Majestic",
        author:"Jennifer Trafton"
    },
    {
        id:7,
        image:{src:book7},
        title:"Kalki:Avatar of Vishnu",
        author:"Kevin Missal"
    },
    {
        id:8,
        image:{src:book8},
        title:"The Jasmine Throne",
        author:"Tasha Suri"
    },
    {
        id:9,
        image:{src:book9},
        title:"Gdeon the Ninth",
        author:"Tamsyn Muir"
    }
]

function App() {
  return (
    <div className="App">
     <h1>Book List</h1>
        <div>
            {books.map((book)=>(
                <Item key={book.id}
                data={book}/>
            ))}
        </div>
    </div>
  );
}

export default App;
