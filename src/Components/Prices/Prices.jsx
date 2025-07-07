import Price from "../Price/Price";

const Prices = () => {
  const Price = [
    {
      id: 1,
      name: "Basic",
      Facilities: ["access", "basic-training", "diet-chart"],
      Price: 80,
    },
    {
      id: 2,
      name: "Basic",
      Facilities: [
        "access",
        "basic-training",
        "diet-chart",
        "Extended Gym Hours",
      ],
      Price: 180,
    },
    {
      id: 3,
      name: "Advanced",
      Facilities: [
        "access",
        "basic-training",
        "diet-chart",
        "One-to-One Session",
        "24/7 Gym access",
      ],
      Price: 280,
    },
  ];
  return (
    <div>
      <h2>Best Price in Town</h2>
      <div>
        {Price.map((priced) => {
          return <Price key={priced.id} price={priced}></Price>;
        })}
      </div>
    </div>
  );
};

export default Prices;
