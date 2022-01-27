import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export default function Counter() {
    const dispatch=useDispatch();
    const counter=useSelector((state)=> state.count)
    return (
        <div align="center">
            <h3 className="text-primary text-center">Increament Decreament Operation Using Redux Saga</h3>
            <h2 className="mt-4">{counter}</h2>
            <button className="btn btn-success" onClick={()=>dispatch({type:'INCASYNC'})}>Increament</button>
            <button className="btn btn-danger ml-4" onClick={()=>dispatch({type:'DECASYNC'})}>Decreament</button>


        </div>
    )
}
