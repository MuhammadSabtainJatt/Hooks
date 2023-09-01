import 'bootstrap/dist/js/bootstrap.bundle'
import './App.scss';
import { useAuthContext } from './Context/AuthContext';
import Routes from './Routes'

function App() {
  const{isAppLoading,IsAuth,dispatch}=useAuthContext()
 console.log('IsAuth', IsAuth)
  const handleLogin=()=>{
    dispatch({type:"SET_LOGGED_IN"})
    console.log('IsAuth', IsAuth)
    console.log('isAppLoading', isAppLoading)
    
  }

  // const handleLogout=()=>{
  //   dispatch({type:"SET_LOGGED_OUT"})
    
  // }
  if (isAppLoading) {
    return(<div className="center">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
  </div>)
  }
  if (!IsAuth){
    return(
      <div>
      <h1>Login page</h1>
      <input type="text" className='w-100' />
      <button onClick={handleLogin} className='btn btn-success' > Login</button>
      </div>
      // <div>
      //   <div className="container">
      //     <div className="row">
      //       <div className="col">
      //         <h1 className='text-center' >Login page</h1>
      //         <input type="text" className='w-100' /><br />
      //         <button className='btn btn-success' onClick={handleLogin}>Login</button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      )

  }
  return (
    <>
    <Routes />
    </>
  )
  }
export default App;
