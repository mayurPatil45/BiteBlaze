import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../core/config.jsx';
import { useDispatch } from 'react-redux';
import { addToFavourites } from '../state/slices/favouriteSlice.jsx';

const MealGenerator = () => {
    const [meal, setMeal] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRandomMeal = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/1/random.php`);
                setMeal(response.data.meals[0]);
            } catch (error) {
                console.error('Error fetching random meal:', error);
            }
        };

        fetchRandomMeal();
    }, []);

    const handleFavorite = () => {
        console.log('Meal marked as favorite:', meal);
        dispatch(addToFavourites(meal));
    };

    return (
        <div>
            <h1 className='text-center'>Random Meal Generator</h1>

            {meal && (
                <div className="card mt-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{meal.strMeal}</h5>
                                <p className="card-text">{meal.strInstructions}</p>
                                <button onClick={handleFavorite} className="btn btn-primary">Mark as Favorite</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MealGenerator;