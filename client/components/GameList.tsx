import { getAllGames } from "../apis/games";


export function GameList(){

const {data: games, isLoading, isError} = 
    useQuery({queryKey: ['games'], queryFn: getAllGames})

    if (isError){
        return <p>broken</p>
    }




}