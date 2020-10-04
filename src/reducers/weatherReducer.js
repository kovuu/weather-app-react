const initialState = {
    city: 'Krasnodar',
    temp: 27,
    humidity: 80,
    wind: 45,
    pressure: 1000
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default weatherReducer;
