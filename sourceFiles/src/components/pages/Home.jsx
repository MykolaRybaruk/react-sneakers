import Card from "../Card";

function Home({cartItems, searchValue, onChangeSearchInput, setSearchValue, items, addToFavourites, onAddToCart}) {
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue ? `Search by: "${searchValue}"` : "All Sneakers"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/glass.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="/img/remove-btn.svg"
                alt="Clear"
              />
            )}
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavourite={(obj) => addToFavourites(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
            />
          ))}
        </div>
        </div>
    );
}

export default Home;