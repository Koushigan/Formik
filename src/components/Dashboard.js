import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom'

function Dashboard(props) {

    let navigate = useNavigate()
    let handleDelete = (i)=>{
        let newData = [...props.data.users]
        newData.splice(i,1)
        props.data.setUsers(newData)
    }
  return <>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">  
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Student Progress 12th STD</h1>
                        <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                        <div className="row">

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Boys (Present)</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.data.earningsMonthly}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-male fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Girls (Present)</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.data.earningsAnnual}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-female fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Total</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.data.total}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-male fa-2x text-gray-300"></i>
                                                <i className="fas fa-female fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Earnings (Monthly) Card Example --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Attendance
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.data.task}%</div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress progress-sm mr-2">
                                                            <div className="progress-bar bg-info" role="progressbar"
                                                                style={{"width": `${props.data.data.task}%`,"ariaValuenow":props.data.data.task,"ariaValuemin":"0",
                                                                "ariaValuemax?":"100"}}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-list fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Pending Requests Card Example --> */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    Absentees</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.data.pendingRequest}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-clipboard fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Batch</th>
                        <th>Registration Number</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.users.map((user,i) => {
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.batch}</td>
                                    <td>{user.reg}</td>
                                    <td>
                                        <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}> <EditIcon/>Edit</Button>
                                        &nbsp;
                                        <Button variant='danger' onClick={()=>handleDelete(i)}><DeleteIcon/>Delete</Button>
                                    </td>
                                </tr>
                            })
                        }
                        
                    </tbody>
                </Table>
            </div>
        </div>
    </>
}

export default Dashboard