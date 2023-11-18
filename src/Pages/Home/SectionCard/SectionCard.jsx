import { useEffect, useState } from "react";

const SectionCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/section.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  console.log(card);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-10 gap-5  items-center mx-2">
      {card.slice(0, 6).map((item, index) => (
        <div key={index} className="card   shadow-xl">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.subtitle}</p>
            <div className="card-actions flex justify-between items-center ">
              <button className="btn bg-[#ca841a] hover:bg-orange-400  text-white font-medium">
                Add To Card
              </button>
              <button className="btn bg-orange-400 hover:bg-orange-500 text-white font-medium">
                Quick Shop
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionCard;
