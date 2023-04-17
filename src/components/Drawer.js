function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between ">
          Корзина
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={90}
              height={90}
              src="/img/prods/1.jpg"
              alt="mittens"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские варежки Left Right</p>
              <b>1299 Руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={90}
              height={90}
              src="/img/prods/3.jpg"
              alt="mittens"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские варежки Left Right</p>
              <b>1299 Руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={90}
              height={90}
              src="/img/prods/8.jpg"
              alt="mittens"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские варежки Left Right</p>
              <b>1299 Руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого</span>
              <div></div>
              <b>21498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
