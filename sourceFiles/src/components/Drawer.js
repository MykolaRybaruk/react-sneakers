function Drawer({ onClose, onRemove, items = [] }) {
  let price = items
    .map((item) => item.price)
    .reduce((acc, num) => acc + num, 0);
  let tax = price * 0.05;
  let sum = price + tax;

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/remove-btn.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    ket={obj.id}
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>${obj.price}</b>
                  </div>

                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/remove-btn.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Price:</span>
                  <div></div>
                  <b>${price}</b>
                </li>

                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>${tax.toFixed(2)}</b>
                </li>

                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>${sum.toFixed(2)}</b>
                </li>
              </ul>

              <button className="greenButton">
                Make an order <img src="/img/rightArrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Your cart is empty...</h2>
            <p className="opacity-6">
              Add the sneakers to your cart to make an order
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/leftArrow.svg" alt="arrow" />
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
