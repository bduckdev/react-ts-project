import ImageCard, { Image } from './ImageCard';

export default function Gallery(props: { images: Image[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {props.images.map((image) => (
        <ImageCard image={image} key={image.source} />
      ))}
    </div>
  );
}
