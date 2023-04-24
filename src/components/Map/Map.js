import { useState } from 'react';
import Users from '../../data/Users';
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

export default function Map() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  let user;
  if (JSON.parse(localStorage.getItem('loggedUser')) != null) {
    user = JSON.parse(localStorage.getItem('loggedUser'));
  } else {
    user = 0;
  }
  const [UserLocations, setUserLocations] = useState(Users[user].locations);

  const [map, setMap] = useState(null);

  const FindLocation = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        setLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
      }
    });
    return null;
  };

  function handleForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const FormJson = Object.fromEntries(formData.entries());
    const locationU = {
      id: UserLocations.length,
      name: FormJson.name,
      lat: location.lat,
      lng: location.lng
    };

    setUserLocations([...UserLocations, locationU]);
    console.log(UserLocations);

    Users[user].locations.push({
      id: UserLocations.length,
      name: FormJson.name,
      lat: location.lat,
      lng: location.lng
    });
  }

  const displayLocations = () => {
    console.log(UserLocations);
    UserLocations.map((e) => {
      return <p>{e.name}</p>;
    });
  };

  const deleteLocation = (id) => {
    setUserLocations(
      UserLocations.filter((e) => {
        return e.id !== id;
      })
    );
  };

  return (
    <>
      <h1>Select location</h1>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={true}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            Selected Location
            <br />
            Latitude: {location.lat}
            <br />
            Longitude: {location.lng}
            <br />
          </Popup>
        </Marker>
        <FindLocation />
      </MapContainer>
      <h2>Add selected location to your checkpoints</h2>
      <form className="LoginForm" onSubmit={handleForm}>
        Name
        <input className="LoginText" name="name" type="text" />
        Latitude:
        <input
          className="LoginText"
          name="lat"
          type="text"
          value={location.lat}
          disabled
        />
        Longitude:
        <input className="LoginText" type="lng" value={location.lng} disabled />
        <button className="RegisterBtn" type="submit">
          Add checkpoint
        </button>
      </form>
      <h2>Your checkpoints</h2>
      {UserLocations.map((e) => {
        return (
          <p className="Name">
            {e.name}
            <input
              className="LoginBtn"
              type="button"
              value="Show Chekpoint"
              onClick={() => setLocation({ lat: e.lat, lng: e.lng })}
              onClickCapture={() => map.flyTo([e.lat, e.lng], map.getZoom())}
            />
            <input
              className="LoginBtn"
              type="button"
              value="Delete Chekpoint"
              onClick={() => {
                deleteLocation(e.id);
              }}
            />
          </p>
        );
      })}
    </>
  );
}
