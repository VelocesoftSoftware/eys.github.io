import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import tileLayer from "../util/tileLayer";
import "./MapForm.css";

const { BaseLayer, Overlay } = LayersControl;

const cities = [
  { name: "Ankara", latitude: 39.9334, longitude: 32.8597 },
  { name: "İstanbul", latitude: 41.0082, longitude: 28.9784 },
  { name: "İzmir", latitude: 38.4192, longitude: 27.1287 },
  { name: "Bursa", latitude: 40.1820, longitude: 29.0678 }
];

const MapWrapper = () => {
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);
  const [formData, setFormData] = useState({
    city: "",
    name: "",
    type: "",
    GGKP: "",
    aylıkKira: "",
    toplamKira: "",
    işletmeci: "",
    tarifeDurumu: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCity = cities.find(city => city.name === formData.city);
    if (selectedCity) {
      const newNeighborhood = { 
        city: selectedCity.name, 
        name: formData.name, 
        type: formData.type, 
        latitude: selectedCity.latitude, 
        longitude: selectedCity.longitude,
        GGKP: formData.GGKP,
        aylıkKira: formData.aylıkKira,
        toplamKira: formData.toplamKira,
        işletmeci: formData.işletmeci,
        tarifeDurumu: formData.tarifeDurumu
      };
      setNeighborhoods([...neighborhoods, newNeighborhood]);
    } else {
      console.error("Seçilen şehir bulunamadı.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>
            Şehir:
            <select name="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })}>
              <option value="">Şehir Seçin</option>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>{city.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="type">İşletmeci:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="">İşletmeci Seçin</option>
            <option value="DHMI">DHMI</option>
            <option value="IGA">IGA</option>
            <option value="FRAPORT TAV">FRAPORT TAV</option>
            <option value="ISG SABIHA GOKÇEN">ISG SABIHA GOKÇEN</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Mahal Kodu:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="GGKP">GGKP:</label>
          <input
            type="text"
            id="GGKP"
            name="GGKP"
            value={formData.GGKP}
            onChange={(e) => setFormData({ ...formData, GGKP: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aylıkKira">Aylık Kira:</label>
          <input
            type="text"
            id="aylıkKira"
            name="aylıkKira"
            value={formData.aylıkKira}
            onChange={(e) => setFormData({ ...formData, aylıkKira: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="toplamKira">Toplam Kira:</label>
          <input
            type="text"
            id="toplamKira"
            name="toplamKira"
            value={formData.toplamKira}
            onChange={(e) => setFormData({ ...formData, toplamKira: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="işletmeci">Müdürlük:</label>
          <input
            type="text"
            id="işletmeci"
            name="işletmeci"
            value={formData.işletmeci}
            onChange={(e) => setFormData({ ...formData, işletmeci: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tarifeDurumu">Tarife Durumu:</label>
          <input
            type="text"
            id="tarifeDurumu"
            name="tarifeDurumu"
            value={formData.tarifeDurumu}
            onChange={(e) => setFormData({ ...formData, tarifeDurumu: e.target.value })}
          />
        </div>
        <div className="form-group">
          <button type="submit">Ekle</button>
        </div>
      </form>

      <MapContainer center={[39.9334, 32.8597]} zoom={6} scrollWheelZoom={true}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer {...tileLayer} />
          </BaseLayer>
          <Overlay checked name="Mahaller">
            {neighborhoods.map((neighborhood, index) => (
              <Marker key={index} position={[neighborhood.latitude, neighborhood.longitude]}>
                <Popup>
                  <div>
                    <h3>{neighborhood.name}</h3>
                    <p><strong>İşletmeci:</strong> {neighborhood.type}</p>
                    <p><strong>GGKP:</strong> {neighborhood.GGKP}</p>
                    <p><strong>Aylık Kira:</strong> {neighborhood.aylıkKira}</p>
                    <p><strong>Toplam Kira:</strong> {neighborhood.toplamKira}</p>
                    <p><strong>Müdürlük:</strong> {neighborhood.işletmeci}</p>
                    <p><strong>Tarife Durumu:</strong> {neighborhood.tarifeDurumu}</p> 
                  </div>
                </Popup>
              </Marker>
            ))}
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
