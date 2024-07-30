type CardImageType = {
  path: string
  className: string
}

const CardImage: React.FC<CardImageType> = ({ path, className }) => {
  return <img src={path} className={className} />
}

export default CardImage
