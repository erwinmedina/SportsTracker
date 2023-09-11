import LeagueScores from "../Components/LeagueScores";
import LeagueTable from "../Components/LeagueTable";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="pagewide">
                <div className="sidebarNav">
                    <p className="homepageName">SportsTracker</p>
                    <div className="sportSelect">
                        <select className="form-select" name="sports" id="sports">
                            <option value="Soccer">⚽ Soccer</option>
                            <option value="Football">🏈 Football</option>
                        </select>
                    </div>
                </div>
                <LeagueScores/>
                <LeagueTable/>

            </div>
        </div>
    )
}