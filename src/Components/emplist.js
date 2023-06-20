import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUserList,Removeuser} from "../Redux/Action";
<<<<<<< HEAD
// import { useNavigate } from "react-router-dom";
=======

>>>>>>> ea388cb5026232e2984baef8884465dc81465c26

const Userlisting = (props) => {

    useEffect(() => {
        props.loaduser();
    }, [])

    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
             props.removeuser(code);
             toast.success('Employee removed successfully.')
             props.loaduser();
             
        }
<<<<<<< HEAD
    };
=======
    }
    
>>>>>>> ea388cb5026232e2984baef8884465dc81465c26
    
    return (
        props.user.loading ? <div><h2>Loading...</h2></div> :
            props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :

                <div>
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

                    <div className="card-1">
                        <div className="card-header" >
                            <Link to={'/user/add'} className="btn btn-success" style={{marginBottom: "10px",marginRight:"140px"}}>Add Employee</Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Sex</td>
                                        <td>DOB</td>
                                        <td>Salary</td>
                                        <td>Department</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.user.userlist && props.user.userlist.map((item, index)=>
                                            <tr key={index}>
                                                <td>{index +1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.sex}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.salary}</td>
                                                <td>{item.department}</td>
                                                <td>
                                                    <Link to={'/user/edit/' + item.id} className="btn btn-primary">Edit</Link> |
                                                    <button onClick={() => {handledelete(item.id)}} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
<<<<<<< HEAD
                           
=======
                            <div>
             
            </div>
>>>>>>> ea388cb5026232e2984baef8884465dc81465c26
                        </div>

                    </div>
                </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser:(code)=>dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);