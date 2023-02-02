import React from 'react';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { variables } from './Variables';

function Login() {
    const [cusId, setcusId] = useState('');
    const [busId, setbusId] = useState('');
    const navigate = useNavigate();

    function handleClick() {
        console.log('Clicked');
        doLogin(cusId, busId);
       
        // navigate('./Dashboard');
    }

    const doLogin = async (cusId, busId) => {
        const response = await fetch(variables.API_URL_LOGIN + "cusId=" + cusId + "&busId=" + busId,+
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests'/>+ {
            'mode': 'cors',
            'referrerPolicy':"unsafe-url",
            'method':'GET'
            
        }).then(res => res.json())
            .then(data => {
                console.log(data.message);
                if (data.message === "Success") {
                    console.log("Business Access");
                    navigate('./Dashboard',{state:{id:1,name:'kandu'}});
                } else {
                    console.log("Faild");
                }
            }).catch(e=>console.error(e));
    }
    return (
        <div>
            <div className='auth-form-container'>
                <form className='login-form'>
                    <h1>Techcube Business Access</h1>
                    <label>Customer ID</label>
                    <input value={cusId} onChange={(e) => setcusId(e.target.value)} type="custId" placeholder="Customer ID" />
                    <label>Business ID</label>
                    <input value={busId} onChange={(e) => setbusId(e.target.value)} type="busId" placeholder="Business ID" />

                </form>
                <button onClick={handleClick}>Click Me</button>
                <ul>
                    <img className='logoimgBox' alt='pre' src={require('./image/techcube.png')} />
                </ul>

            </div>
        </div>
    )
}

// const URL = "http://office.techcube.co.uk/Mobile_Login_API/Api/CSBusiness?";

// // const doLogin = async (cusId, busId) => {
// //   const response = await fetch(URL + "cusId=" + cusId + "&busId=" + busId, {
// //     mode: 'cors'
// //   }).then(res => res.json())
// //     .then(data => {
// //       console.log(data.message);
// //       if (data.message === "Success") {
// //         console.log("Business Access");

// //       } else {
// //         console.log("Faild");
// //       }
// //     })
// // }
// function Login() {
//     const [cusId, setcusId] = useState('');
//     const [busId, setbusId] = useState('');
//     const [bus, setbus] = false;
//     const navigate=useNavigate();

// //     const handleClick = () => {
// //       setbus(false);
// //       doLogin(cusId, busId);
// //       if(setbus){
// //   navigate(Dashboard);
// //       }
// //     }

//     return (
//         <div className='App'>
//             <h1>Login</h1>
//       {/* <div className='auth-form-container'>
//         <form className='login-form'>
//           <h1>Business Access</h1>
//           <label>Customer ID</label>
//           <input value={cusId} onChange={(e) => setcusId(e.target.value)} type="custId" placeholder="Customer ID" />
//           <label>Business ID</label>
//           <input value={busId} onChange={(e) => setbusId(e.target.value)} type="busId" placeholder="Business ID" />

//         </form>
//         <button onClick={handleClick}>Click Me</button>
//         <ul>
//           <img className='logoimgBox' alt='pre' src={require('./image/techcube.png')} />
//         </ul>

//       </div> */}
//     </div>
//     );
// }

export default Login;