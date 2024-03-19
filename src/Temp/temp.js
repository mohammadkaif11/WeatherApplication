const [CardData, SetCardData] = useState([]);
const [UserTemplateData, setUserTemplateData] = useState([]);
const [CityKey, setCityKey] = useState("");
const [City, setCity] = useState("");
const [CCtemp, setCCtemp] = useState([]);

useEffect(() => {}, []);

//get UserLocation Data
const GetLocationData = () => {
  fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Mohalikey}?apikey=${apiKey}`
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      ChangeFtoCelcius(data.DailyForecasts);
    });
};

const GetCurrentTemprature = () => {
  fetch(
    `http://dataservice.accuweather.com/forecasts/v1/currentconditions/${Mohalikey}?apikey=${apiKey}`
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
    });
};

//Change to F to C
const ChangeFtoCelcius = (DailyForecasts) => {
  DailyForecasts.forEach(function (element) {
    element.Temperature.Minimum.Value =
      (element.Temperature.Minimum.Value - 32) * (5 / 9);
    element.Temperature.Maximum.Value =
      (element.Temperature.Maximum.Value - 32) * (5 / 9);
    element.Temperature.Minimum.Unit = "C";
    element.Temperature.Maximum.Unit = "C";
    const d = new Date(element.Date);
    element.day = d.getDay();
  });
  setUserTemplateData(DailyForecasts);
};
