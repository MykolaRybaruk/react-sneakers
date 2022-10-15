import React from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  imageUrl,
  onFavourite,
  onPlus,
  favourited = false,
  added = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(favourited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavourite = () => {
    onFavourite({ title, imageUrl, price });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onFavourite}>
        <img
          onClick={onClickFavourite}
          src={isFavourite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Green Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${price}</b>
        </div>

        <button>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="Plus Icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
