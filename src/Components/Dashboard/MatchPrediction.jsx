import React from 'react';
import '../../assets/public/css/app.min.css'; // Ensure this path matches your project structure
import '../../assets/public/css/custom.css'; // Ensure this path matches your project structure


const MatchPrediction = () => {
    return (
        <section className="nt-content mt-3">
            <div className="container">
                <div className="row">
                    <div className="container">
                        <div className="row flex-md-row-reverse">
                            <div className="col-lg-9">
                                <ul className="nav nav-pills nav-justified mb-3 nt-hitandwin-tabs-nav" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-today-tab" data-toggle="pill" data-target="#pills-today" type="button" role="tab" aria-controls="pills-today" aria-selected="true">Today</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-slips-tab" data-toggle="pill" data-target="#pills-slips" type="button" role="tab" aria-controls="pills-slips" aria-selected="false">Slips</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-today" role="tabpanel" aria-labelledby="pills-today-tab">
                                        <form className="nt-vs-list">
                                            {/* Match Item Component */}
                                            {renderMatchItem("21:00", "FC Botosani", "public/img/logos/2581.webp", "U Cluj", "public/img/logos/2599.webp", [
                                                { value: "1", odds: 3.3 },
                                                { value: "X", odds: 3.1 },
                                                { value: "2", odds: 2.28 }
                                            ])}
                                            {renderMatchItem("22:00", "UCD", "public/img/logos/3844.webp", "Bray W", "public/img/logos/3847.webp", [
                                                { value: "1", odds: 2.25 },
                                                { value: "X", odds: 3.32 },
                                                { value: "2", odds: 3.02 }
                                            ])}
                                            {renderMatchItem("23:00", "Maccabi N", "public/img/logos/4505.webp", "Hapoel H", "public/img/logos/2253.webp", [
                                                { value: "1", odds: 2.15 },
                                                { value: "X", odds: 3.48 },
                                                { value: "2", odds: 3.2 }
                                            ])}
                                            {/* Add more matches as needed */}
                                            <div className="nt-list-submit text-center">
                                                <button className="btn btn-primary" id="matchSubmit" value="submit" name="submit" disabled type="submit">Submit</button>
                                                <p className="text-white text-center" style={{ opacity: 0.25, fontSize: '11px' }}>
                                                    By submitting your slip, you agree our
                                                    <a href="terms-and-conditions.html">Terms and Conditions.</a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="pills-slips" role="tabpanel" aria-labelledby="pills-slips-tab">
                                        <p className="text-white text-center mt-3">To access slips please login first.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMatchItem = (time, team1Name, team1Logo, team2Name, team2Logo, odds) => {
    return (
        <div className="nt-item">
            <div className="nt-item-inner">
                <div className="nt-date">{time}</div>
                <div className="nt-team">
                    <div>
                        <img className="img-fluid lazy" width="22" height="22" src={team1Logo} alt={team1Name} />
                        <span className="nt-team-name">{team1Name}</span>
                    </div>
                    <div>
                        <img className="img-fluid lazy" width="22" height="22" src={team2Logo} alt={ team2Name} />
                        <span className="nt-team-name">{team2Name}</span>
                    </div>
                </div>
                <div className="nt-point row">
                    {odds.map((odd, index) => (
                        <div className="col" key={index}>
                            <div className="nt-point-item">
                                <input type="radio" data-login="yes" required id={`match-tips-${odd.value}-${index}`} value={odd.value} name={`match-tips[${index}]`} />
                                <label htmlFor={`match-tips-${odd.value}-${index}`}>
                                    <div className="nt-point-word">{odd.value}</div>
                                    <div className="nt-point-number">{odd.odds}</div>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MatchPrediction;
