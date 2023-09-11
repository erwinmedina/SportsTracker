import "./LeagueScores.css"

export default function LeagueScores() {
    return (
        <div className="leagueScores">
                    <div className="leagueScoresHeader">
                        <select className="form-select" name="matchday" id="matchday">
                            <option value="matchday1">Matchday 1</option>
                            <option value="matchday2">Matchday 2</option>
                        </select>
                    </div>
                    <div className="leagueScoresGame">
                        <div className="leagueScoresGameHomeTeam">
                            <img src="https://upload.wikimedia.org/wikipedia/hif/f/ff/Manchester_United_FC_crest.png" alt="" />
                        </div>
                        <div className="leagueScoresGameScore">
                            <div className="fullTime">
                                0 - 7
                            </div>
                            <div className="halfTime">
                                Half: 0 - 4
                            </div>
                        </div>
                        <div className="leagueScoresGameAwayTeam">
                            <img src="https://toppng.com/uploads/preview/liverpool-fc-logo-football-club-11536021912p7paob6jdx.png" alt="" />   
                        </div>
                    </div>
                </div>
    )
}
