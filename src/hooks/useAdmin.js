import { useContext } from "react";
import { AdminContext } from "../contexts/AdminContext";


export const useStock = () => useContext(AdminContext);