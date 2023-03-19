import "./Card.css";

// function Card({ title, p }) {
//   return (
//     <div className="Card">
//       <h6>{title}</h6>
//       <p>{p}</p>
//       <button>Devamı</button>
//     </div>
//   );
// }

// export default Card;
// Aşağıdaki kod ile aynı işlevi görür.

const Card = ({ title, par, lesson }) => {
  return (
    <div className="Card">
      <h6>{title}</h6>
      <p>{par}</p>
      {lesson > 20 && <div>İleri düzey</div>}
      <button>Devamı</button>
    </div>
  );
};

export default Card;
