//importing redux toolkit and the necessary imports
import{configureStore} from "@reduxjs/toolkit";
import products from "../reducers/index";

const store = configureStore({
        reducer: {
            app:products,
        },
});


export default store;