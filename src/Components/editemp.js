import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";
import './edit.css';

const Updateuser = () => {
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [gender, genderchange] = useState('');
    const [salary, salarychange] = useState('');
    const [department, departmentchange] = useState('staff');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const userobj=useSelector((state)=>state.user.userobj)


    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { id, name, gender, salary, department };
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
            genderchange(userobj.gender);
            salarychange(userobj.salary);
            departmentchange(userobj.department);
        }
    }, [userobj])

    return (
        <div className="form-1">
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add User</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input value={id || ''} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name || ''} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>gender</label>
                                    <input value={gender || ''} onChange={e => genderchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>salary</label>
                                    <input value={salary || ''} onChange={e => salarychange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label>department</label>
                                    <select value={department || ''} onChange={e => departmentchange(e.target.value)} className="form-control">
                                        <option value="sales">Sales</option>
                                        <option value="hr">HR</option>
                                        <option value="accounts">Accounts</option>
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