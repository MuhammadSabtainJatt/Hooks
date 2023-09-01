import React, { useEffect, useRef, useState } from 'react'
import Tone from "../../Assets/Audio/Tone.mpeg"

export default function Contact() {



  const [users, setusers] = useState([])
  const [count, setCount] = useState(0)
  const [counter,setCounter] =useState(0)

  // ...................................................................//
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setusers(json))
  }, [])
  // let map=users.map((user,id)=>{
  //   return user.id<5 
  // })
  // console.log(map)
  // console.log(users.id<5)
    useEffect(() => {
      let counter=0
      setInterval(() => {
        counter++
        setCounter(counter)
      }, 1000)
      // return()=>{                   //Ja code tab chalta hay jab ap page say exit ho rahy hons
      //   alert("Exit")
      // }
  }, [])
  // ............................................................................//
  const handleIncrement = () => {
    setCount(c=>count + 1)
  }
  const handleDecrement = () => {
    count > 0 && setCount(count - 1)
  }

  // ...............................................................................//
  const audioPlayer=useRef(null)

  const playAudio=()=>{
    audioPlayer.current.play()
  }
  
  
  return (
    <main>
      <div className="container">
        <div className="row mt-5">
          <div className="col text-warning">
            <h1>This Is a Contact Page {counter} </h1><sub>[  You can Contact with Our team  ]</sub>
            <hr />
          </div>
        </div>
        <div className="card p-5 mx-5">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <input type="text" className='form-control mb-2' placeholder='FullName' name="fullname" />
            </div>
            <div className="col-12 col-md-6 ">
              <input type="email" className='form-control mb-2' placeholder='Email' name="email" />
            </div>
            <div className="col-12 col-md-6 ">
              <input type="number" className='form-control mb-2' placeholder='Phone' name="phone" />
            </div>
            <div className="col-12 col-md-6 ">
              <input type="text" className='form-control mb-2' placeholder='City' name="city" />
            </div>
            <div className="col-12 ">
              <textarea name="message" type='text' placeholder='Your Message/ questions / query' className='form-control mb-2 w-100' ></textarea>
            </div>
            <div className="col-12 text-center ">
              <button className='btn btn-success w-50' type='submit'> Submit</button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h1 className='mb-5 text-warning'>UseEffect</h1>
            <div className='table-responsive'>
              <table className="table table-light table-hover text-warning">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone #</th>
                    <th scope="col">Site</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((users, id) => {
                    return <tr key={id}>
                      <th scope="row">{users.id}</th>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.phone}</td>
                      <td>{users.website}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="row my-5">
          <div className="col text-warning">
            <h1 className='text-warning'>Use State</h1>
            <button className='btn btn-success m-2' onClick={handleIncrement}>Increment</button>
            <h3>{count}</h3>
            <button className='btn btn-success m-2' onClick={handleDecrement}>Decrement</button>
            <h1 >Time You Spend on this website in second</h1>
            <h1 >{counter}</h1>

          </div>
        </div>
        <hr />
        <div className="row my-5">
          <div className="col text-warning">
            <h1 className='text-warning'>Use Ref</h1>
            <button className='btn btn-danger' onClick={playAudio}>Play Tone</button>
            <audio ref={audioPlayer} src={Tone} ></audio>

          </div>
        </div>

      </div>
    </main>
  )
}
