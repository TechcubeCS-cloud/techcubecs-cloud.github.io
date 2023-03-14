import React from 'react';
import './App.css';
import { useState } from 'react';
import { useNavigate, createSearchParams, json } from 'react-router-dom';
import Dashboard from './Dashboard';
import { variables } from './Variables';
import { type } from '@testing-library/user-event/dist/type';
import Test from './Test';
import { Helmet } from 'react-helmet';

function Login() {
    const [cusId, setcusId] = useState('');
    const [busId, setbusId] = useState('');
    const navigate = useNavigate();
    const [logData, setlogData] = useState('');
    const [success, setsuccess] = useState(false);

    function handleClick() {
        console.log('Clicked');
        doLogin(cusId, busId);
    }

    const requestint = {
        mode: 'cors'
    }
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Accept': 'application/json',
    }

    const doLogin = async (cusId, busId) => {
        console.log(cusId,busId);
        const response = await fetch(variables.API_URL_LOGIN + "cusId=" + cusId + "&busId=" + busId
        // const response = await fetch("http://office.techcube.co.uk/CollectionScreen_API/api/Preparing?CusId="+100237+"&BusId="+200796,
            // {
            //     'mode': 'cors'
            // }
        ).then(res => res.json())
            .then(data => {
                console.log(data.message);
                console.log(data.Data[0].BusID);
                console.log(busId);
                setlogData(data.Data[0]);
                if (data.Data[0].BusID == busId) {
                    console.log("Customers Business Login");
                    // navigate('./Dashboard', { state: { id: 1, name: 'kandu' } });
                    navigate({
                        pathname: './Dashboard',
                        search: createSearchParams({
                            cusId: cusId,
                            busId: busId
                        }).toString()
                    });
                } else {
                    console.log("Faild");
                    setsuccess(true);
                }
            }).catch(e => console.error(e));

        if (typeof logData != "undefined" && logData != null && logData.length != null) {

        }

    }
    return (
        <div>
            {/* <Helmet>
                <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests'/>
                </Helmet> */}
            <div className='auth-form-container'>
                <form className='login-form'>
                    <h1>Business Access</h1>
                    <label>Customer ID</label>
                    <input value={cusId} onChange={(e) => setcusId(e.target.value)} type="custId" placeholder="Customer ID" />
                    <label>Business ID</label>
                    <input value={busId} onChange={(e) => setbusId(e.target.value)} type="busId" placeholder="Business ID" />
                </form>
                <button onClick={handleClick}>Click Me</button>
                {success &&
                    <label>Business not found</label>
                }
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