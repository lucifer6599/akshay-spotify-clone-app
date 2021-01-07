import React, { createContext, useContext, useReducer } from "react";

//prepare the data layer
export const DataLayerContext = createContext();

//create the data layer

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
