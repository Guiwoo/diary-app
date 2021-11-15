import React, { useContext } from "react";
import Realm from "realm";

export const DBContext = React.createContext<Realm>();

export const useDB = () => {
    return useContext(DBContext);
};