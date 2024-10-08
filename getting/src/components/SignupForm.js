import React, { useRef } from 'react'

function SignupForm() {

let msgLblRef = useRef();
let stateSelectRef = useRef();
let firstNameInputRef = useRef();
let lastNameInputRef = useRef();
let maleRBRef=useRef();
let femaleRBRef=useRef();
let selectedGender;
let salutation;
let maritalstatus;




let onClickSubmit = ()=>{


  if(selectedGender == "male"){
    salutation ="mr."

  }else{
    if(maritalstatus == "single"){
    salutation ="miss."
    }else{
      salutation = "mrs."
    }
  }
  msgLblRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value}
  ${lastNameInputRef.current.value} from ${stateSelectRef.current.value} 
   ,your account has been created.`;
}



  return (
    <div>
         <h2>SignupForm</h2>
      <form>
       
        <div>
        <label>First Name</label>
        <input ref={firstNameInputRef}></input>
        </div>
        <div>
        <label>Last Name</label>
        <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Gender</label>
          <input type='radio' name= 'gender' ref={maleRBRef} onChange={()=>{
            if(maleRBRef.current.checked == true){
              selectedGender = "male";

            }

          }}></input>
          <label className='innerLabel'>male</label>
          <input type='radio' name= 'gender'ref={femaleRBRef} onChange={()=>{
            if(femaleRBRef.current.checked == true){
              selectedGender = "female"
            }



          }}></input>
          <label  className='innerLabel'>female</label>
        </div>
        <div>
          <label>marital status</label>
          <input type='radio' name= 'ms'onChange={(eventobject)=>{
       if(eventobject.target.checked == true){
            maritalstatus ="single"
          }
           
          }}></input>
          <label className='innerLabel'>single</label>
          <input type='radio' name= 'ms' onChange={(eventobject)=>{
            if(eventobject.target.checked == true){
              maritalstatus ="married"
            }

          }}></input>
          <label className='innerLabel'>married</label>
        </div>
        <div>
        <label>state</label>
        <select ref={stateSelectRef}>
            <option>state select</option>
            <option>Andhra Pradesh</option>
<option>Arunachal Pradesh</option>
<option>Assam</option>
<option>Bihar</option>
<option>Chhattisgarh</option>
<option>Goa</option>
<option>Gujarat</option>
<option>Haryana</option>
<option>Himachal Pradesh</option>
<option>Jharkhand</option>
<option>Karnataka</option>
<option>Kerala</option>
<option>Madhya Pradesh</option>
<option>Maharashtra</option>
<option>Manipur</option>
<option>Meghalaya</option>
<option>Mizoram</option>
<option>Nagaland</option>
<option>Odisha</option>
<option>Punjab</option>
<option>Rajasthan</option>
<option>Sikkim</option>
<option>Tamil Nadu</option>
<option>Telangana</option>
<option>Tripura</option>
<option>Uttar Pradesh</option>
<option>Uttarakhand</option>
<option>West Bengal</option>

        </select>
        </div>
        
        <div>
        <label>Password</label>
        <input></input>
        </div>
        <div>
        <label>Age</label>
        <input></input>
        </div>
        <div>
        <button type='button' onClick={()=>{
          onClickSubmit();
        }}>submit</button>
        </div>
      
       <label ref={msgLblRef} style={{width: "450px"}}></label>
      </form>

    </div>
  )
}

export default SignupForm