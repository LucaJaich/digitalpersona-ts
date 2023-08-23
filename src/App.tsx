import { FingerprintReader, SampleFormat } from '@digitalpersona/devices';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const reader: FingerprintReader = new FingerprintReader();
  reader.onDeviceConnected = (device) => console.log("Device connected", device.deviceId);
  reader.onSamplesAcquired = async (samples) => {
    console.log(samples);
    console.log(typeof samples.samples[0]);
    let image: string = samples.samples[0].toString();
    image = image.replace(/_/g, '/').replace(/-/g, '+'); // invalid chars
    axios.post('http://localhost:5000/register', { data: image })
    .then((res) => console.log(res))
    .catch((err) => console.log("ERROR:",err));
    setSample(image);
  }

  const startCapture = () => {
    reader.startAcquisition(SampleFormat.PngImage, "79393E80-F896-A041-9CAD-FE9C993552F2")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
  }

  const [sample, setSample] = useState('');

  return (
    <div className="App">
      <button onClick={startCapture}>Capture</button>
      <img src={sample} alt="fingerprint" />
      <p>hola</p>
    </div>
  );
}

export default App;
