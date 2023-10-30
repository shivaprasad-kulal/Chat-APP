import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Chat = () => {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/");
    }
  }, [usenavigate]);
  //==============================================================================
  //new1
  function UserList({ users, setSelectedUser }) {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setSelectedUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  }

  // ChatWindow component
  function ChatWindow({ selectedUser, messages }) {
    return (
      <div>
        <h2>Chat with {selectedUser.name}</h2>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
      </div>
    );
  }

  //new
  const [selectedUser, setSelectedUser] = useState(null);
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    // ... add more users
  ];
  const messages = [
    // messages for selected user
  ];

  return (
    <div>
      <UserList users={users} setSelectedUser={setSelectedUser} />
      {selectedUser && (
        <ChatWindow selectedUser={selectedUser} messages={messages} />
      )}
    </div>
  );

  /*return (
    <div>
      <Link to="/">home</Link>
      <Link to="/">logout</Link>
      hii from chat
    </div>
  );*/
};

export default Chat;
