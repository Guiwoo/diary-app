import React, { useContext } from "react";

export const DBContext = React.createContext<Realm>();

export const useDB = () => {
    return useContext(DBContext);
};