import React from 'react';
import './Users.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash,  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <>
    <div className="admin_heading">All Users</div>
    <div className="admin_table">
        <div className="res">
        <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>54ci87#%*8M89B765</td>
            <td>User@gmail.com</td>
            <td>Sachin Kumar</td>
            <td>User</td>
            <td><FontAwesomeIcon icon={faTrash} className="list_icon" /></td>
          </tr>
        </tbody>

      </table>
        </div>
      

     </div>
    </>
  )
}

export default Users;
