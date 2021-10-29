import './CustomCard.css';

type Props = {
  _id: string;
  imgName: string;
  title: string;
  type: string;
  category: string;
};

export function CustomCard({ title, imgName }: Props) {
  return (
    <div>
      <img
        className="img"
        src={process.env.PUBLIC_URL + '/img/' + imgName + '.png'}
        alt={title}
      />
      <h4>{title}</h4>
    </div>
  );
}
