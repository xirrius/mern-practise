import { useReducer } from "react"

const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      UseReducer</div>
  )
}

export default UseReducer


// state management library - Redux
// store - state { user, islogin }
// har component isko access
// actions - decide krte h kese state change hoga { login, logout, addCart }
// logic - login kiya toh user state update kese krna