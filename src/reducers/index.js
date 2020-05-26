import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

export const initialState = [
    { 
        "additionalPrice": 0, 
        "car": { 
            "price": 26395, 
            "name": "2019 Ford Mustang", 
            "image": "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg", 
            "miles": 68543, 
            "type": "Hardcoded for MVP Tasks", 
            "features": [] 
        }, 
        "additionalFeatures": [
            { 
                "id": 1, 
                "name": "V-6 engine", 
                "price": 1500 
            }, 
            { 
                "id": 2, 
                "name": "Racing detail package", 
                "price": 1500 
            }, 
            { 
                "id": 3, 
                "name": "Premium sound system", 
                "price": 500 
            }, 
            { 
                "id": 4, 
                "name": "Rear spoiler", 
                "price": 250 
            }
        ] 
    }, 
    /* { 
        "additionalPrice": 0, 
        "car": { 
            "price": 29450, 
            "name": "2020 Nissan Rogue SV", 
            "image": "https://vimg.remorainc.com/xk7/jn8at2mt5lw004806/2020-nissan-rogue-sv-pearl-white-tricoat-0.jpg", 
            "miles": 3, 
            "type": "SUV", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    { 
        "additionalPrice": 0, 
        "car": { 
            "price": 7900,
            "name": 
            "2005 Cadillac CTS", 
            "image": "https://imagescdn.dealercarsearch.com/Media/12362/13827860/637151153776673709.jpg", 
            "miles": 113567,
            "type": "Sedan", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    { 
        "additionalPrice": 0, 
        "car": {
            "price": 11900, 
            "name": "2012 Chrysler 200 Touring", 
            "image": "https://imagescdn.dealercarsearch.com/Media/12362/12762093/637218758789531357.jpg", 
            "miles": 137500, 
            "type": "Convertible", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    { 
        "additionalPrice": 0, 
        "car": { 
            "price": 17900, 
            "name": "2008 Ford F-150 XL", 
            "image": "https://imagescdn.dealercarsearch.com/Media/12362/13856619/637157137049166927.jpg", 
            "miles": 94504,
            "type": "Pickup", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    { 
        "additionalPrice": 0, 
        "car": { 
            "price": 15900, 
            "name": "2006 Toyota Tundra SR5", 
            "image": "https://imagescdn.dealercarsearch.com/Media/12362/13170017/637022417923607757.jpg", 
            "miles": 114400, 
            "type": "Pickup", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    {
        "additionalPrice": 0, 
        "car": { 
            "price": 14900, 
            "name": "2006 Toyota Tundra SR5", 
            "image": "https://imagescdn.dealercarsearch.com/Media/12362/10345671/636487566494010475.jpg", 
            "miles": 139084, 
            "type": "Pickup", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    { 
        "additionalPrice": 0, 
        "car": { 
            "price": 13900, 
            "name": "2010 Cadillac SRX", 
            "image": "https://imagescdn.dealercarsearch.com/Media/12362/13084097/636999902407987874.jpg", 
            "miles": 83566,
            "type": "SUV", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    { 
        "additionalPrice": 0, 
        "car": { 
            "price": 13900, 
            "name": "2008 Cadillac CTS", 
            "image": "https://imagescdn.dealercarsearch.com/Media/12362/13422229/637063857123744464.jpg", 
            "miles": 102498,
            "type": "Sedan", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    { 
        "additionalPrice": 0, 
        "car": { 
            "price": 34595, 
            "name": "2020 Nissan NV2500 HD S", 
            "image": "https://vimg.remorainc.com/xk7/1n6bf0ly7ln805572/2020-nissan-nv2500-hd-s-glacier-white-0.jpg", 
            "miles": 50, 
            "type": "Cargo Van", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    }, 
    { 
        "additionalPrice": 0, 
        "car": { 
            "price": 16900, 
            "name": "2012 GMC Sierra 1500", 
            "image": "https://imagescdn.dealercarsearch.com/Media/12362/9618735/636649332917511528.jpg", 
            "miles": 74238,
            "type": "Pickup", 
            "features": [] 
        }, 
        "additionalFeatures": [] 
    } */
];


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FEATURE:
            return state.map((carState) => {
                if (carState === state[action.payload.index]) {
                    return {
                        ...carState,
                        car: {
                            ...carState.car,
                            features: [...carState.car.features, action.payload.feature]
                        },
                        additionalPrice: carState.additionalPrice + action.payload.feature.price,
                        additionalFeatures: carState.additionalFeatures.filter(feature => feature !== action.payload.feature)
                    }
                }
                return carState;
            });
        case REMOVE_FEATURE:
            return state.map((carState) => {
                if (carState === state[action.payload.index]) {
                    return {
                        ...carState,
                        car: {
                            ...carState.car,
                            features: carState.car.features.filter(feature => feature !== action.payload.feature)
                        },
                        additionalPrice: carState.additionalPrice - action.payload.feature.price,
                        additionalFeatures: [...carState.additionalFeatures, action.payload.feature]
                    }
                }
                return carState;
            });
        case "ADD_CARS_DATA":
            return [...state, action.payload];
        case "SEARCH_FILTER":
            return initialState.filter(carState => carState.car.name.toLowerCase().includes(action.payload.toLowerCase()) || carState.car.price.toString().includes(action.payload) || carState.car.miles.toString().includes(action.payload) || carState.car.type.toLowerCase().includes(action.payload.toLowerCase()));
        default:
            return state;
    }

}