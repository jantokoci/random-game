import {useEffect, useState} from 'react';

function GamesApiCall() {
    const [gamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    //const [count, setCount] = useState(0);
    /*useEffect(() => {
        fetchGames();
    }, [])*/

    async function fetchGames(){
        try {
            setLoading(true);
            const response = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`);
            const result = await response.json();

            if(result.count > 0){
                setGamesData(result.results);
                setLoading(false);}
        } catch(e) {
            console.log(e);
            setLoading(false);
        }
    }
    console.log(gamesData);
    console.log(loading);


    function handleClick(){
        fetchGames();
        setShow(true);
    }



    return (
        <div>
            {<button onClick={handleClick}>GameData</button>}
            {show && gamesData && gamesData.length ? gamesData.map((game, index) => 
                (<>
                    <div key={game.id}>{game.name}: 
                        {game.ratings.map((rating) => (<div key={rating.id}>{rating.title}:
                    {rating.percent}</div>))}
                    </div>
                    <div key={index}>------------------------</div></>))
                : null}
        </div>
    );
}

export default GamesApiCall;