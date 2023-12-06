import './App.css';
import CountryCapitalGame from './Components/CountryCapitalGame';

function App() {
    return (
        <div className="container">
            <CountryCapitalGame
                data={{
                    Germany: 'Berlin',
                    Azerbaijan: 'Baku',
                    France: 'Paris',
                    Italy: 'Rome',
                    Japan: 'Tokyo',
                    Canada: 'Ottawa',
                    Australia: 'Canberra',
                    Brazil: 'Brasilia',
                    SouthAfrica: 'Pretoria',
                    India: 'New Delhi',
                    China: 'Beijing',
                    Russia: 'Moscow',
                }}
            ></CountryCapitalGame>
        </div>
    );
}

export default App;
