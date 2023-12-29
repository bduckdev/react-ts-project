export type Image = {
  source: string;
  title: string;
  isLiked: boolean;
};

export default function ImageCard(props: {
  image: Image;
  setIsLiked: (val: boolean) => void;
}) {
  return (
    <div>
      <img src={props.image.source} />
      <div className="mt-4 flex items-center justify-between">
        <h4 className="text-lg">{props.image.title}</h4>
        <button onClick={() => props.setIsLiked(!props.image.isLiked)}>
          {props.image.isLiked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
}
