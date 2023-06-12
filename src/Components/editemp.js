import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";
import './edit.css';

const Updateuser = () => {
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [sex, sexchange] = useState('');
    const [dob, dobchange] = useState('');
    const [salary, salarychange] = useState('');
    const [department, departmentchange] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const userobj=useSelector((state)=>state.user.userobj)


    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { id, name, sex, dob, salary, department };
        dispatch(FunctionUpdateUser(userobj,id));
        navigate('/user');
    }

    useEffect(() => {
        dispatch(FetchUserObj(code));
    }, [])

    useEffect(() => {
        if(userobj){
            idchange(userobj.id);
            namechange(userobj.name);
            sexchange(userobj.sex);
            sexchange(userobj.dob);
            salarychange(userobj.salary);
            departmentchange(userobj.department);
        }
    }, [userobj])

    return (
        <div className="form-1">
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Edit Employee</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input value={id || ''}
                                     disabled="disabled" 
                                     className="form-control">
                                     </input>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name || ''}
                                    onChange={e => namechange(e.target.value)} 
                                    className="form-control"
                                    required>
                                    </input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                    <div className="form-group radio-div">
                      <label>Sex: </label>
                      <input
                        required
                        value={"M" || ''}
                        type="radio"
                        onChange={e => sexchange(e.target.value)}
                        name="gender"
                        className="radio-btn"
                      />
                      Male 
                      <input
                        required
                        value={"F" || ''}
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
                        value={dob || ''}
                        onChange={e => dobchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                </div>  
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>Salary</label>
                                    <input required value={salary || ''} onChange={e => salarychange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>department</label>
                                    <select required value={department || ''} onChange={e => departmentchange(e.target.value)} className="form-control">
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

export default Updateuser;