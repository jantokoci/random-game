import {useEffect, useState} from 'react';

function GamesApiCall() {
    const [gamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => { //fetching the products when the count has changed(button clicked)
        fetchGames();
    }, [])

    if (loading)
    {
        return <div>Loading Games data...</div>
    }

    return (
        <div>

        </div>
    );
}

export default GamesApiCall;