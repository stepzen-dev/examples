import { useReducer, useContext, createContext } from "react";
import person from "../../pages/api/person";
import { Person } from "../lib/types";

const AppContext = createContext();
const DispatchContext = createContext();

export const initialState = {
  person: Person,
  fullName: "",
  emailAddress: "",
  userID: "",
  processed: false,
  loaded: false,
};

const reducer = (state, action) => {
  //console.log("Inside Reducer ", action);
  //console.log("Inside Reducer State", state);
  switch (action.type) {
    case "PROCESS":
      return {
        ...state,
        person: action.person,
        // fullName: action.fullName,
        // emailAddress: action.emailAddress,
        //  userID: action.userID,
        processed: true,

        //PhoneNumber where to send the SMS Confirmation
      };

    case "FILL_SEARCH":
      return {
        ...state,
        person: action.person,
        totalPeople: action.totalPeople,
        loaded: true,
      };
    case "CLEAN_USER":
      return {
        ...state,
        userID: "",
        date: "",

        loaded: false,
      };

    case "OVERWRITE":
      return {
        ...state,
        person: action.person,
      };

    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export const useDispatchContext = () => useContext(DispatchContext);
