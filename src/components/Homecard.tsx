interface IHomecard {
  title: string;
  img: string;
  content: string;
}

const Homecard = ({ title, img, content }: IHomecard) => {
  return (
    <div className=" h-full m-2 p-2">
      <h1>{title}</h1>
      <div className="container h-1/2 overflow-hidden">
        <img src={img} alt="txt" width = "100%"  className="object-fill" />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Homecard;
