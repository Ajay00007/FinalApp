import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";
import './edit.css';


const Adduser = () => {
    const [name, namechange] = useState('');
    const [sex, sexchange] = useState('');
    const [dob, dobchange] = useState('');
    const [salary, salarychange] = useState('');
    const [department, departmentchange] = useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { name, sex, dob, salary, department };
        dispatch(FunctionAddUser(userobj));
        navigate('/user');
    }

    return (
        <div className="form-1">

<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"Teal",fontFamily:"serif",fontSize:"25px"}}>
          <Link to={'/'} style={{marginLeft:"100px"}}>Home</Link>
          &nbsp;
          <Link to={'/user'}>Employees</Link>
          &nbsp;
          <Link to={'/user/add'}>AddEmployee</Link>
          &nbsp;
          <Link to={'/'}>Logout</Link>
          &nbsp;
        </nav>

            <form onSubmit={handlesubmit}>
                <div className="card" >
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add Employee</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-8" >
                                <div className="form-group" >
                                    <label>Name</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control" ></input>
                                </div>
                            </div>
                            
                <div className="col-lg-12">
                    <div className="form-group radio-div">
                      <label>Sex: </label> 
                      <input
                        required
                        value="M"
                        type="radio"
                        onChange={e => sexchange(e.target.value)}
                        name="gender"
                        className="radio-btn"
                      />
                      Male 
                      <input
                        required
                        value="F"
                        type="radio"
                        onChange={e => sexchange(e.target.value)}
                        name="gender"
                        className="radio-btn"
                      />
                      Female
                    </div>
                  </div>
                            
                <div className="col-lg-8">
                    <div className="form-group">
                      <label>DOB</label>
                      <input
                        type="date"
                        required
                        value={dob}
                        onChange={e => dobchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>Salary</label>
                                    <input value={salary} onChange={e => salarychange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>Department</label>
                                    <select value={department} onChange={e => departmentchange(e.target.value)} className="form-control">
                                        <option value="Sales">Sales</option>
                                        <option value="HR">HR</option>
                                        <option value="Accounts">Accounts</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/user'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Adduser;