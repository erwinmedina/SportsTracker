import LeagueScores from "../Components/LeagueScores";
import LeagueTable from "../Components/LeagueTable";
import Navbar from "../Components/Navbar";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="pagewide">
                <Navbar/>
                <LeagueScores/>
                <LeagueTable/>

            </div>
        </div>
    )
}