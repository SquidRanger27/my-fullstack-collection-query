import { getAllGames } from "../apis/games";
import { useQuery } from "@tanstack/react-query";
import GameListItem from "./GameListItem";

export function GameList(){
    
    const {data: games, isLoading, isError} = 
    useQuery({queryKey: ['games'], queryFn: () => getAllGames()})
    if (isError){
        return <p>broken</p>
    }
    if (isLoading){
        return <p>Generating games list!</p>
    }   
    
    return (
        <div>
            <h1>GAME LIST!!!</h1>
        <li>{games?.map((a) => (
            <GameListItem title={a.title} releaseDate={a.releaseDate} hoursPlayed={a.hoursPlayed} rating={a.rating} />
        ))}</li>
        </div>
        )
    




}