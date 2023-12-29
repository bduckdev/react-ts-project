import Header from './Header';
import './App.css';
import ImageCard, { Image } from './ImageCard';
// import Gallery from './Gallery';
import { useEffect, useState } from 'react';
import images from './images.json';
import Gallery from './Gallery';

function App() {
  const [images, setImages] = useState<Image[]>([]);

  return (
    <main>
      <Gallery images={images} />
    </main>
  );
}

export default App;
