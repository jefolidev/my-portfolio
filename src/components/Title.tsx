type TitleType = {
  children: string
  classNameBehind: string
  classNameFront: string
}

const Title: React.FC<TitleType> = ({
  children,
  classNameBehind,
  classNameFront,
}) => {
  return (
    <div
      className={` ${classNameBehind}
        font-lexend text-white/10 font-bold relative invisible
        `}
    >
      <strong
        className={`${classNameFront}
          font-lexend text-white relative z-10 visible`}
      >
        {children}
      </strong>
      {children}
    </div>
  )
}

export default Title
