import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
const AuthContext = createContext()
const initialState = { IsAuth: false, Token: "", TokenExpiry: "",name:"Subtain" }
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { IsAuth: true, Token: "", TokenExpiry: "" }
    case "SET_LOGGED_OUT":
      return initialState
    default:
      return state
  }
}
export default function AuthContextProvider({ children }) {
  const [isAppLoading, setIsAppLoading] = useState(true)
  const [State,dispatch] = useReducer(reducer,initialState)
  useEffect(()=>{
      setInterval(()=>{
          setIsAppLoading(false)
      },2000)
  },[])
  return (
    <AuthContext.Provider value={{  isAppLoading,...State,dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuthContext = () => {
  return useContext(AuthContext)
}
// import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
// const AuthContext = createContext()

// const initialState = { IsAuth: false, Token: "" }
// const reducer = (state, action) => {
//   switch (action.key) {
//     case "SET_LOGGED_IN":
//       return { IsAuth:true, Token: "" }
//     case "SET_LOGGED_OUT":
//       return initialState
//     default:
//       return state
//   }
// }

// export default function AuthContextProvider({ children }) {
//   const [isAppLoading, setIsAppLoading] = useState(true)
//   const [state, dispatch] = useReducer(reducer, initialState)
//   useEffect(()=>{
//     setInterval(()=>{
//    setIsAppLoading(false)
//     },1000)
//   },[])
//   return (
//     <AuthContext.Provider value={{ isAppLoading, ...state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
// export const useAuthContext = () => {
//   return useContext(AuthContext)
// }
