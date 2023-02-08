import logo from './logo.svg';
import { BrowserRouter, Route, Switch, NavLink, useSearchParams } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Component, useEffect, useState, View, text } from 'react';
import { variables } from './Variables';
import './App.css';
import image from './image/cooking.gif';
import { Login } from './Login';

function Dashboard(){
  const [preparing,setpreparing]=useState('');
  const [complete,setcomplete]=useState('');
  const rowCountP=false;
  const [CusId,setCusId]=useState('');
  const [BusId,setBusId]=useState('');
  const[searchparams]=useSearchParams();

  const refreshList_Preparing=()=>{
    fetch(variables.API_URL_PREPARING+"CusId="+searchparams.get("cusId")+"&BusId="+searchparams.get("busId"),{
      'mode':'cors'
    })
      .then(response => response.json())
      .then(data => {
        console.log(variables.API_URL_PREPARING+"CusId="+searchparams.get("cusId")+"&BusId="+searchparams.get("busId"))
        console.log("Data");
        setpreparing(data );
        if (preparing.length > 5) {
          // rowCountP: 2 ;
        }
      });
  }

  const refreshList_Complete=() =>{
    fetch(variables.API_URL_COMPLETE+"CusId="+searchparams.get("cusId")+"&BusId="+searchparams.get("busId"),{
      'mode':'cors'
    })
      .then(response => response.json())
      .then(completedata => {
        setcomplete(completedata);
      });
  }

  useEffect(()=>{
    const intervalCall=setInterval(() => {
      refreshList_Preparing();
      refreshList_Complete();
    },1000);
    return()=>{
      clearInterval(intervalCall);
    }
  },[])

  return(
    <div className='tableM'>
    <div className='split left'>
      <text className='tblH'>Preparing...</text>
      {preparing.length > 0 && (
        <ul className='list-group'>
          {preparing.map((pre,index )=> (
            <li className='list-group-item' to={pre.BillNo} key={index}>{pre.BillNo}</ li>
          ))}
        </ul>
      )}
      {preparing.length==0 &&(
        <ul>
          <img className='imgBox' alt='pre' src={require('./image/cooking.gif')}/>
        </ul>
      )}
    </div>
    <div className='split right'>
      <text className='tblH'>Ready to Collect</text>
      {complete.length > 0 && (
        <ul className='list-group'>
          {complete.map((com,indexc )=> (
            <li className='list-group-item' to={com.BillNo} key={indexc}>{com.BillNo}</li>
          ))}
        </ul>
      )}
      {complete.length == 0 && (
        <ul>
          <img className='imgBox' alt='com' src={require('./image/ready.gif')}/>
        </ul>

      )}
    </div>
  </div>
  )
}

// export class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       preparing: [],
//       complete: [],
//       rowCountP: [],
//       CusId:[],
//       BusId:[]
//     }
//   }

//   refreshList_Preparing() {
//     //console.log(this.props.location.state.id);
//     fetch(variables.API_URL_PREPARING_TEST+"CusId="+100237+"&BusId="+200796,{
//       'mode':'cors'
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(variables.API_URL_PREPARING_TEST+"CusId="+100237+"&BusId="+200796)
//         console.log("Data");
//         this.setState({ preparing: data });
//         if (this.state.preparing.length > 5) {
//           this.setState({ rowCountP: 2 });
//         }
//       });
//   }

//   refreshList_Complete() {
//     fetch(variables.API_URL_COMPLETE_TEST+"CusId="+100237+"&BusId="+200796,{
//       'mode':'cors'
//     })
//       .then(response => response.json())
//       .then(completedata => {
//         this.setState({ complete: completedata });
//       });
//   }

//   componentDidMount() {
//     console.log('Customer');
//     this.interval = setInterval(() => this.setState(this.refreshList_Preparing()), 1000);
//     this.interval = setInterval(() => this.setState(this.refreshList_Complete()), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     const {
//       preparing,
//       complete
//     } = this.state;

//     return (
//       // <div className='LogoContainer'>
//       //   <div className='container'>
//       //     <Login />
//       //     <ul>
//       //       <img className='logoimgBox' alt='pre' src={require('./image/techcube.png')}/>
//       //      </ul>
//       //   </div>
         
//       // </div>
//       <div className='tableM'>
//         <div className='split left'>
//           <text className='tblH'>Preparing...</text>
//           {preparing.length > 0 && (
//             <ul className='list-group'>
//               {preparing.map(user => (
//                 <li className='list-group-item' key={user.BillNo}>{user.BillNo}</ li>
//               ))}
//             </ul>
//           )}
//           {preparing.length==0 &&(
//             <ul>
//               <img className='imgBox' alt='pre' src={require('./image/cooking.gif')}/>
//             </ul>
//           )}
//         </div>
//         <div className='split right'>
//           <text className='tblH'>Ready to Collect</text>
//           {complete.length > 0 && (
//             <ul className='list-group'>
//               {complete.map(com => (
//                 <li className='list-group-item' key={com.BillNo}>{com.BillNo}</li>
//               ))}
//             </ul>
//           )}
//           {complete.length == 0 && (
//             <ul>
//               <img className='imgBox' alt='com' src={require('./image/ready.gif')}/>
//             </ul>

//           )}
//         </div>
//       </div>
//       // <Card style={{ width: "18rem" }}>
//       //   <Card.Body>
//       //     <Card.Title>
//       //       {preparing.map(order=>(order.BillNo))}
//       //     </Card.Title>

//       //   </Card.Body>
//       // </Card>
//       // <div className='tableM'>
//       //   <table className="table table-striped">
//       //     <thead>
//       //       <tr>
//       //         <th className='tblH'>
//       //           Preparing...
//       //         </th>
//       //       </tr>
//       //     </thead>
//       //     <tbody className='tableP'>
//       //       {preparing.map(order =>
//       //         <tr className='rowFn' key={order.BillNo}>
//       //           <td> {order.BillNo}</td>
//       //         </tr>
//       //       )}
//       //     </tbody>
//       //   </table>
//       //   <table className='table table-striped'>
//       //     <thead>
//       //       <tr>
//       //         <th className='tblH'>
//       //           Ready to Collect
//       //         </th>
//       //       </tr>
//       //     </thead>
//       //     <tbody className='tableC'>
//       //       {complete.map(order =>
//       //         <tr className='rowFn' key={order.BillNo}>
//       //           <td>{order.BillNo}</td>
//       //         </tr>)}
//       //     </tbody>
//       //   </table>
//       // </div>
//     )
//   }
//   // return (
//   //   <BrowserRouter>
//   //   <div className="App container">
//   //    <h3 className='d-flex justify-content-center m-3'>
//   //     Collection Screen
//   //    </h3>
//   //    <nav className="navbar navbar-expand-sm bg-light navbar-dark">
//   //     <ul className="navbar-nav">
//   //     <li className="nav-item- m-1">
//   //      <NavLink className="btn btn-light btn-outline-primary" to="/preparing">
//   //       Preparing
//   //      </NavLink>
//   //     </li>
//   //     </ul>
//   //    </nav>
//   //    {/* <Switch>
//   //     <Route path='/Preparing' component={Preparing}/>
//   //    </Switch> */}
//   //   </div>
//   //   </BrowserRouter>
//   // );
// }
export default Dashboard;
