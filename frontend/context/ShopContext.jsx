import { createContext } from 'react';
import {products} from '../src/assets/assets'

export const ShopContext = createContext(); /*ShopContext Variable */

/*ShopContextProvider function */
const ShopContextProvider = (props) => {
    
    const currency = '$';
    const delivery_fee = 10;

    /*value variable */
    const value = { 
        products,
        currency,
        delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;