import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
import tileLayer from "../util/tileLayer";
import "./MapForm.css";

const { BaseLayer, Overlay } = LayersControl;


const cities = [
  { name: "Adana", latitude: 37.0004, longitude: 35.3213 },
  { name: "Adıyaman", latitude: 37.7648, longitude: 38.2763 },
  { name: "Afyonkarahisar", latitude: 38.7507, longitude: 30.5567 },
  { name: "Ağrı", latitude: 39.7217, longitude: 43.0567 },
  { name: "Amasya", latitude: 40.6499, longitude: 35.8353 },
  { name: "Ankara", latitude: 39.9334, longitude: 32.8597 },
  { name: "Antalya", latitude: 36.8969, longitude: 30.7133 },
  { name: "Artvin", latitude: 41.1828, longitude: 41.8183 },
  { name: "Aydın", latitude: 37.8560, longitude: 27.8416 },
  { name: "Balıkesir", latitude: 39.6484, longitude: 27.8826 },
  { name: "Bilecik", latitude: 40.1500, longitude: 29.9833 },
  { name: "Bingöl", latitude: 38.8854, longitude: 40.4980 },
  { name: "Bitlis", latitude: 38.3938, longitude: 42.1231 },
  { name: "Bolu", latitude: 40.7369, longitude: 31.6061 },
  { name: "Burdur", latitude: 37.7264, longitude: 30.2889 },
  { name: "Bursa", latitude: 40.1820, longitude: 29.0678 },
  { name: "Çanakkale", latitude: 40.1553, longitude: 26.4142 },
  { name: "Çankırı", latitude: 40.6013, longitude: 33.6134 },
  { name: "Çorum", latitude: 40.5506, longitude: 34.9556 },
  { name: "Denizli", latitude: 37.7742, longitude: 29.0872 },
  { name: "Diyarbakır", latitude: 37.9204, longitude: 40.2306 },
  { name: "Edirne", latitude: 41.6758, longitude: 26.5587 },
  { name: "Elazığ", latitude: 38.6810, longitude: 39.2264 },
  { name: "Erzincan", latitude: 39.7500, longitude: 39.5000 },
  { name: "Erzurum", latitude: 39.9208, longitude: 41.2745 },
  { name: "Eskişehir", latitude: 39.7667, longitude: 30.5256 },
  { name: "Gaziantep", latitude: 37.0662, longitude: 37.3833 },
  { name: "Giresun", latitude: 40.9128, longitude: 38.3895 },
  { name: "Gümüşhane", latitude: 40.4608, longitude: 39.4810 },
  { name: "Hakkari", latitude: 37.5833, longitude: 43.7333 },
  { name: "Hatay", latitude: 36.2000, longitude: 36.1500 },
  { name: "Isparta", latitude: 37.7667, longitude: 30.5500 },
  { name: "Mersin", latitude: 36.8000, longitude: 34.6333 },
  { name: "İstanbul", latitude: 41.0082, longitude: 28.9784 },
  { name: "İzmir", latitude: 38.4192, longitude: 27.1287 },
  { name: "Kars", latitude: 40.6000, longitude: 43.1000 },
  { name: "Kastamonu", latitude: 41.3887, longitude: 33.7827 },
  { name: "Kayseri", latitude: 38.7369, longitude: 35.4824 },
  { name: "Kırklareli", latitude: 41.7333, longitude: 27.2167 },
  { name: "Kırşehir", latitude: 39.1425, longitude: 34.1709 },
  { name: "Kocaeli", latitude: 40.8533, longitude: 29.8815 },
  { name: "Konya", latitude: 37.8713, longitude: 32.4846 },
  { name: "Kütahya", latitude: 39.4167, longitude: 29.9833 },
  { name: "Malatya", latitude: 38.3552, longitude: 38.3095 },
  { name: "Manisa", latitude: 38.6191, longitude: 27.4289 },
  { name: "Kahramanmaraş", latitude: 37.5858, longitude: 36.9370 },
  { name: "Mardin", latitude: 37.3212, longitude: 40.7245 },
  { name: "Muğla", latitude: 37.2153, longitude: 28.3636 },
  { name: "Muş", latitude: 38.7333, longitude: 41.4833 },
  { name: "Nevşehir", latitude: 38.6250, longitude: 34.7122 },
  { name: "Niğde", latitude: 37.9667, longitude: 34.6833 },
  { name: "Ordu", latitude: 40.9839, longitude: 37.8764 },
  { name: "Rize", latitude: 41.0201, longitude: 40.5234 },
  { name: "Sakarya", latitude: 40.7730, longitude: 30.4027 },
  { name: "Samsun", latitude: 41.2867, longitude: 36.3300 },
  { name: "Siirt", latitude: 37.9333, longitude: 41.9500 },
  { name: "Sinop", latitude: 42.0231, longitude: 35.1531 },
  { name: "Sivas", latitude: 39.7477, longitude: 37.0179 },
  { name: "Tekirdağ", latitude: 40.9839, longitude: 27.5169 }, 
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
                    <p><strong>Toplam Kira:</strong> {neighborhood.aylıkKira * 12}</p>
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
