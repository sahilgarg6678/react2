import React, { useState } from 'react'

const MultipleInputs = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")

    const [allentry, setallentry] = useState([])

    const submittheform =  (e) =>{
        e.preventDefault();
        const newentry = {username : username ,email : email, phone : phone, password:password}
        setallentry([...allentry,newentry])
    }

  return (
    <>
        <form action='' onSubmit={submittheform}>
            <div>
                <label htmlFor='username'>Full_name : </label>
                <input type="text" id='username' name='username'
                    value ={username}
                    onChange = {(e) => setusername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='email'>E_mail : </label>
                <input type="text" id='email' name='email'
                    value = {email}
                    onChange = {(e) => setemail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='phone'>Phone_No : </label>
                <input type="text" id='phone' name='phone'
                value = {phone} 
                onChange = {(e) => setphone(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor='password'>Password : </label>
                <input type="password" id='password' name='password'
                    value = {password}
                    onChange = {(e) => setpassword(e.target.value)}
                />
            </div>

            <button type='submit' id='btn1'>Submit</button>

        </form>
        <div>
            {
                allentry.map((curelement)=>{
                    return(
                        <div className='outputstyle'>
                            <p>{curelement.username}</p>
                            <p>{curelement.email}</p>
                            <p>{curelement.phone}</p>
                            <p>{curelement.password}</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default MultipleInputs