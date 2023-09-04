import "./card.styles.css";

const Card = ({ monster }) => {

    const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set1&size=150x150`}
        alt="monsters"
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
