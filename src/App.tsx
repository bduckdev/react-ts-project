import Header from './Header';
import './App.css';
import ImageCard, { Image } from './ImageCard';
import Gallery from './Gallery';
import { useState } from 'react';
import images from './images.json';

function App() {
  const [isLiked, setIsLiked] = useState(images[0].isLiked);

  // const image: Image = {
  //   source: 'https://picsum.photos/200/300',
  //   title: 'My image',
  //   isLiked: isLiked,
  // };

  const image: Image = {
    ...images[0],
    isLiked: isLiked,
  };

  return (
    <div>
      <Header text="Images" />

      {/* <Gallery images={images} /> */}

      <ImageCard image={image} setIsLiked={setIsLiked} />
    </div>
  );
}

export default App;
