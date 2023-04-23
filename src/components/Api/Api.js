import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents
} from 'react-leaflet';
import { Icon } from 'leaflet';

export default function Api() {
  const [weather, setWeather] = useState(
    <div>Select latitude and longitude</div>
  );

  const getData = () => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    ).then((response) => {
      response.json().then((data) => {
        setWeather(
          <div>
            Obecna temperatura wynosi: {data.current_weather.temperature}, a
            prędkość wiatru wynosi {data.current_weather.windspeed} km/h
          </div>
        );
      });
    });
  };

  const [latitude, setLatitude] = useState(50.29874392643405);
  const [longitude, setLongitude] = useState(18.694894909858707);

  function handleForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    setLatitude(formJson.latitude);
    setLongitude(formJson.longitude);
  }

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
      }
    });
    // setLatitude(position);
    // setLongitude(position);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <>
      <form onSubmit={handleForm}>
        Latitude
        <input name="latitude" type="text" />
        Longitude
        <input name="longitude" type="text" />
        <button type="submit">Submit</button>
      </form>
      <input
        type="button"
        value="Check weather for selected location"
        onClick={getData}
      ></input>
      {weather}
      <h1>My Map</h1>
      <h6>Click on the map to get your location</h6>
      <MapContainer
        center={[latitude, longitude]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            Selected Location
            <br />
            Latitude: {latitude}
            <br />
            Longitude: {longitude}
            <br />
          </Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
    </>
  );
}
