import React from "react";
import dp from "../../assets/dp.jpg"; // Assuming dp is the image file path
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/modalSlice";
import "./online.css";

const Online = () => {
  const { usersOnline, users } = useSelector((state) => state.users); // Corrected destructure

  const dispatch = useDispatch();

  const allUsers = () => {
    return users.map((user) => (
      <Link
        to={`/user/${user._id}`}
        key={user._id}
        onClick={() => dispatch(toggleSidebar(false))}
      >
        <div className="user" key={user._id}>
          <div>
            <img
              src={user.profileImage || dp}
              loading="lazy"
              alt={user.name + " image"}
              className="roundimage"
            />
          </div>
          <h3>{user.name}</h3>
        </div>
      </Link>
    ));
  };

  const onlineUsers = () => {
    const _usersOnline = users.filter((user) =>
      usersOnline.some((u) => u.id === user._id)
    ); // Corrected filtering
    return _usersOnline.map((user) => (
      <Link
        to={`/user/${user._id}`}
        key={user._id}
        onClick={() => dispatch(toggleSidebar(false))}
      >
        <div className="user" title={user.name} key={user._id}>
          <div className="green">
            <img
              src={user.profileImage || dp}
              alt={user.name + " image"}
              className="roundimage"
            />
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <section className="online">
      <h2>Users Online - {usersOnline.length}</h2>
      <div className="online-users">{onlineUsers()}</div>
      <h2>All Users - {users.length}</h2>
      {allUsers()}
    </section>
  );
};

export default Online;
