import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {

  return (


    <div className="App">

        <div>

            <div className='header'>
              <h1>  Random Gif Generator </h1>
            </div>

            

            <div className='inner-div'>

                <Random/>
                <Tag/>

            </div>

        </div>

    </div>


  );


}

export default App;
