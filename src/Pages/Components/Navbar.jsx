import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="sidebarNav">
            <p className="homepageName">SportsTracker</p>
            <div className="sportSelect">
                <select className="form-select" name="sports" id="sports">
                    <option value="Soccer">⚽ Soccer</option>
                    <option value="Football">🏈 Football</option>
                </select>
            </div>
        </div>
    )
}