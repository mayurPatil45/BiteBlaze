import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavourites } from '../state/slices/favouriteSlice';

const Favorites = () => {
  const favourites = useSelector((state) => state.favourites.value);

  const dispatch = useDispatch();

  const handleRemoveFavorite = (meal) => {
    console.log('Meal removed from favorite:', meal);
    dispatch(removeFromFavourites(meal));
  };

  return (
    <div>
      <h2 className='text-center mb-4'>My Favourites</h2>
      {favourites && favourites.map((meal) => (
        <div className="card mb-3" key={meal.idMeal}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={meal.strMealThumb} className="img-fluid rounded-start w-50" alt={meal.strMeal} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text">Meal ID: {meal.idMeal}</p>
                <a onClick={() => handleRemoveFavorite(meal)} className="btn btn-danger">Remove Favorite</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      { !favourites.length && <img className='no-data' src='https://shorturl.at/vNOS5' alt='No Data!' /> }
    </div>
  );
};

export default Favorites;