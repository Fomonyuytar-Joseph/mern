import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = ()=>{

    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error("useworkout context must be used inside context provider")
    }

    return context
}