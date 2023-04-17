function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={112} height={133} src="/img/prods/1.jpg" alt="mittens" />
      <p>Мужские варежки Left Right </p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b> 1299 Руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
