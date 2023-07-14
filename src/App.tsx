import { FingerprintReader, SampleFormat } from '@digitalpersona/devices';
import { useEffect, useState } from 'react';

function App() {
  const reader: FingerprintReader = new FingerprintReader();
  const [capture, setCapture] = useState(false);
  const [sample, setSample] = useState('');

  useEffect(() => {
    if (!capture)
      return;
    console.log('hey');
    reader.onDeviceConnected = (device) => console.log("Device connected", device.deviceId);
    reader.onSamplesAcquired = async (samples) => {
      console.log(samples);
      let image: string = samples.samples[0] as unknown as string;
      image = image.replace(/_/g, '/').replace(/-/g, '+');
      setSample(image);
  }

    reader.startAcquisition(SampleFormat.PngImage, "79393E80-F896-A041-9CAD-FE9C993552F2")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));

  }, [capture]);

  return (
    <div className="App">
      <button onClick={() => setCapture(true)}>Capture</button>
      <img src={`data:image/png;base64,${sample}`} alt="fingerprint" />
      <p>hola</p>
    </div>
  );
}

export default App;
