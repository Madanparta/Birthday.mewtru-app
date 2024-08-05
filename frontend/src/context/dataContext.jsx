import React, { createContext, useContext, useState } from 'react';

const createContextApi = createContext();

const DataContext = ({children}) => {
    const [wishesSubmit,setWishesSubmit]=useState(false);
    const [data,setData]=useState(null);
    const [specialPersonData,setSpecialPersonData]=useState(null);


    const value = {
      wishesSubmit,setWishesSubmit,
      data,setData,
      specialPersonData,setSpecialPersonData
    }
  return<createContextApi.Provider value={value}>{children}</createContextApi.Provider>
}

export const dataTrans = () =>  useContext(createContextApi);

export default DataContext
