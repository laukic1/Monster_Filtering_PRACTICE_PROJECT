import "./card.styles.css";

const Card = ({ monster }) => {

    const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set1&size=200x200`}
        alt="monsters"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
