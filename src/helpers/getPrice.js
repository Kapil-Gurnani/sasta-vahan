// import dotenv from 'react-dotenv';

export const getPrice = (price) => {
    // console.log(price, price*10, process.env)
    return price-price*5/100;
}