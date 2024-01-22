import React, { useEffect } from "react";
import AdminNav from "./subComponents/AdminNav";

function AdminUsers() {
  const [data, setData] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [update, setUpdate] = React.useState(false);

  function getUsers() {
    fetch("http://159.65.21.42:9000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  // Edit User
  const editUser = (id) => {
    fetch("http://159.65.21.42:9000/users/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }).then(() => {
      alert("User Editing Sucessful");
      const newUser = data.filter((user) => {
        return user.id !== id;
      });
      setData(newUser);
    });
  };

  // Delete User

  const fetchUsers = async () => {
    const resp = await fetch(`http://159.65.21.42:9000/user`);
    const data = await resp.json();
    setData({ data });
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this User?"))
      fetch(`http://159.65.21.42:9000/user/${id}`, {
        method: "DELETE",
      })
        .then((resp) => {
          resp.json();
        })
        .then((data) => {
          alert("User Deleted");
          setData({ data });
        });
  };

  useEffect(() => {
    if (update) {
    }
    fetchUsers();
    getUsers();
  }, []);

  return (
    <div>
      <AdminNav />
      <div className="admin-container">
        <header className="admin-nav">
          <i>Users List</i>
        </header>

        <div className="App">
          <table>
            <tr>
              <th>Names</th>
              <th>Phone No's</th>
              <th>Emails</th>
              <th>Passwords</th>
              <th>Action</th>
              <th>Action</th>
            </tr>

            {data.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button
                      onClick={() => editUser(user._id)}
                      style={{
                        color: "white",
                        background: "green",
                        width: "70px",
                        fontSize: "20px",
                        border: "none",
                      }}
                    >
                      Edit
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => deleteUser(user._id)}
                      style={{
                        color: "white",
                        background: "red",
                        width: "70px",
                        fontSize: "20px",
                        border: "none",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
