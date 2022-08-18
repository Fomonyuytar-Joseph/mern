import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()


//proviode context to apllication tree and wrap the rest of our application

export const WorkoutsContextProvider= ({children})=>{

    const [state ,dispatch]=useReducer(workoutsReducer ,{
        workouts:null
    })

    dispatch({type:"C"})

    return(
        //value prop as state for the app
        <WorkoutsContext.Provider value={{workouts:[]}}>
         
                 {children }

        </WorkoutsContext.Provider>

        )
}
