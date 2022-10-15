import Card from "../Card";

function Favourites({ items, onAddToCart, addToFavourites }) {
    return (
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            Favourites
          </h1>
        </div>

        {items.length === 0 ?
          "You have no favourited items" : <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              favourited={true}
              addToFavourites={addToFavourites}
            />
          ))}
        </div>}
          
      </div>
    );
  
  
}

export default Favourites;