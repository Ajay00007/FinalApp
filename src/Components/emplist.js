import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUserList,Removeuser} from "../Redux/Action";

const Userlisting = (props) => {
    useEffect(() => {
        props.loaduser();
    }, [])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
             props.removeuser(code);
             props.loaduser();
             toast.success('User removed successfully.')
        }
    }
    return (
        // props.user.loading ? <div><h2>Loading...</h2></div> :
        //     props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :

                <div>
                    <div className="card-1">
                        <div className="card-header" >
                            <Link to={'/user/add'} className="btn btn-success">Add User</Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>sex</td>
                                        <td>dob</td>
                                        <td>salary</td>
                                        <td>department</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.user.userlist && props.user.userlist.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.sex}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.salary}</td>
                                                <td>{item.department}</td>
                                                <td>
                                                    <Link to={'/user/edit/' + item.id} className="btn btn-primary">Edit</Link> |
                                                    <button onClick={() => { handledelete(item.id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>

                            </table>
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