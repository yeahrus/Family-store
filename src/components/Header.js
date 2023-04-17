function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="HeaderLeft d-flex align-center">
        <img width={90} height={90} src="/img/1.png" alt="" />
        <div>
          <h3 className="text-uppercase">Семейный Store</h3>
          <p className="opacity-5">Магазин мягких вещей</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={30} height={30} src="/img/cart.svg" alt="" />
          <span> 1299 руб.</span>
        </li>
        <li>
          <img width={30} height={30} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
