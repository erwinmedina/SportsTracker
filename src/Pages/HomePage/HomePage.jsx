import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="sidebarNav">
                <p>SportsTracker</p>
                <div className="sport-select">
                    <select className="form-select" name="sports" id="sports">
                        <option value="Soccer">⚽ Soccer</option>
                        <option value="Football">🏈 Football</option>
                    </select>
                </div>
            </div>
        </div>
    )
}