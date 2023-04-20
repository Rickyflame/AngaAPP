const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
            <h1 className=" temperature">25 °C</h1>
            {/* add weather icons here below */}
            <img alt="weather" className="weather-icon" src="" />
            </div>
            <div className="bottom">
						<p className="date">15 April 2022</p>
						<p className="weather-description"></p>
            </div>
        </div>
    );

}

export default CurrentWeather;