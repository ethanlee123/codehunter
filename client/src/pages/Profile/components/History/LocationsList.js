import { ListStyled, HistoryListStyled } from "./LocationsListStyled";

function LocationsList() {
    return (
        <>
            <HistoryListStyled>
                <h1>History</h1>
                <ListStyled className="locationList">
                    <div>
                        <p>
                            <span className="location-name">place</span>
                            <span className="location-date">date</span>
                            <span className="location-points">points</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="location-name">place</span>
                            <span className="location-date">date</span>
                            <span className="location-points">points</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="location-name">place</span>
                            <span className="location-date">date</span>
                            <span className="location-points">points</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="location-name">place</span>
                            <span className="location-date">date</span>
                            <span className="location-points">points</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="location-name">place</span>
                            <span className="location-date">date</span>
                            <span className="location-points">points</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="location-name">place</span>
                            <span className="location-date">date</span>
                            <span className="location-points">points</span>
                        </p>
                    </div>
                </ListStyled>
            </HistoryListStyled>
        </>
    );
}

export default LocationsList;
