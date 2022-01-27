import React,{useState,useRef} from 'react'
import { useDispatch } from 'react-redux';

const regForName = RegExp(/[A-Z][a-z]*.{3,}/);
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForAge= RegExp(/^\S[0-9]{0,3}$/)
const regForCity= RegExp(/^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$/);
export default function Details() {
    
    const dispatch=useDispatch();
    const [selected,setSelected]=useState();
    const nameInput = useRef(null)
    const emailInput = useRef(null)
    const ageInput = useRef(null)
    const cityInput = useRef(null)
    const genderInput=useRef(null)

    // //validation
    // const [nameErr,setNameErr]=useState(false)
    // const [emailErr,setEmailErr]=useState(false)
    // const [ageErr,setAgeErr]=useState(false)
    // const [cityErr,setCityErr]=useState(false)

    const onChangeUser=()=>
    {
        
    }

   
   

    const handle=(e)=>
    {
        setSelected(e.target.id)
    }

    const submit=(event)=>
    {
        event.preventDefault();
        let formDetails={name:nameInput.current.value,email:emailInput.current.value,age:ageInput.current.value,
            city:cityInput.current.value,gender:selected}
            console.log(formDetails)
            dispatch({type:'ADD',payload:formDetails})
            alert("data post")
    }
    return (
        <div className="container">
            <h1 className="text-center font-weight-bold">Details</h1>
            <form onSubmit={submit}>
                <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" ref={nameInput} onChange={onChangeUser}/>
                <span className="text-danger font-weight-bold" ></span>
                </div>

                <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email"  ref={emailInput} onChange={onChangeUser}/>
                </div>

                <div className="form-group">
                <label>Age</label>
                <input type="text" className="form-control" name="age"  ref={ageInput} onChange={onChangeUser}/>
                </div>

                <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" name="city"  ref={cityInput} onChange={onChangeUser}/>
                </div>

                <div className="form-group">
                <label>Gender</label>
                <input type="radio" className="ml-2" name="gender" id="male" value="male" ref={genderInput} onClick={handle}/> Male
                <input type="radio" className="ml-2" name="gender" id="female" value="female"  ref={genderInput} onClick={handle}/> Female
                </div>

                
                <div>
                <button className="btn btn-primary from-control">Submit</button>
                </div>



            </form>
        </div>
    )
}
