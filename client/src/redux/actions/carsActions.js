import axios from 'axios';

export const getAllCars = () => async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true });

    try {
        const response = await axios.get('http://localhost:5000/api/cars');
        dispatch({ type: 'GET_ALL_CARS', payload: response.data });
    } catch (error) {
        console.error("Error fetching cars:", error);
        dispatch({ type: 'ERROR', payload: error.message });
    } finally {
        dispatch({ type: 'LOADING', payload: false });
    }
};
