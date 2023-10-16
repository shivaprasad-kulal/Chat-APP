import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Chat = () => {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/");
    }
  }, [usenavigate]);
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/">logout</Link>
      hii from chat
    </div>
  );
};

export default Chat;
