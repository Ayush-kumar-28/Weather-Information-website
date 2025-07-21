
import './App.css';

import WeatherInfo from './WeatherInfo.jsx';
import image1 from './assets/image1.jpg';

function App() {
  return (
    <div className="App"><div
            className="background-image"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <div className="foreground-content">
            <WeatherInfo/>
          </div>
        </div>
  );
}

export default App;
