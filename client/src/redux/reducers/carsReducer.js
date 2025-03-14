import Teslaimg from '../../assets/Teslaimg1.jpeg';
import Fordimg from '../../assets/fordimg.png';
import Bmwimg from '../../assets/Bmwimg.png';
import Audiimg from '../../assets/Audiimg.webp';
import Mercedesimg from '../../assets/Mercedesimg.jpg';
import Hondaimg from '../../assets/Hondaimg.webp';
import Toyotaimg from '../../assets/Toyotaimg.jpg';
import Chevroletimg from '../../assets/Chevroletimg.jpg';
import Nissanimg from '../../assets/Nissanimg.jpg';
import Hyundaiimg from '../../assets/Hyundaiimg.jpg';
const initialData = {
    cars: [
        { 
            name: 'Tesla Model S', 
            brand: 'Tesla', 
            year: 2022, 
            price: 79999, 
            available: true, 
            image: Teslaimg 
        },
        { 
            name: 'Ford Mustang', 
            brand: 'Ford', 
            year: 2021, 
            price: 55999, 
            available: true, 
            image: Fordimg
        },
        { 
            name: 'BMW M3', 
            brand: 'BMW', 
            year: 2023, 
            price: 69999, 
            available: true, 
            image: Bmwimg
        },
        { 
            name: 'Audi A4', 
            brand: 'Audi', 
            year: 2020, 
            price: 44999, 
            available: false, 
            image: Audiimg
        },
        { 
            name: 'Mercedes C-Class', 
            brand: 'Mercedes-Benz', 
            year: 2021, 
            price: 52999, 
            available: true, 
            image: Mercedesimg 
        },
        { 
            name: 'Honda Civic', 
            brand: 'Honda', 
            year: 2019, 
            price: 22999, 
            available: true, 
            image: Hondaimg 
        },
        { 
            name: 'Toyota Corolla', 
            brand: 'Toyota', 
            year: 2022, 
            price: 24999, 
            available: false, 
            image: Toyotaimg 
        },
        { 
            name: 'Chevrolet Camaro', 
            brand: 'Chevrolet', 
            year: 2021, 
            price: 42999, 
            available: true, 
            image: Chevroletimg 
        },
        { 
            name: 'Nissan Altima', 
            brand: 'Nissan', 
            year: 2020, 
            price: 27999, 
            available: true, 
            image: Nissanimg 
        },
        { 
            name: 'Hyundai Elantra', 
            brand: 'Hyundai', 
            year: 2023, 
            price: 23999, 
            available: false, 
            image: Hyundaiimg 
        }
    ]
};

export const carsReducer = (state=initialData , action)=>{
    switch(action.type)
    {
        case 'GET_ALL_CARS':{
            return{
                ...state,
                cars :action.payload
            }
        }
        default :return state
    }
}

        