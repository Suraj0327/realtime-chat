import React from "react";
import "./EmptyChatRoom.css";
import image from "../Components/Images/chat.png";

function EmptyChatRoom() {
  return (
    // <div>
    //   <div className="EmptyChatroom">
    //     <img className="emptychatroom-img"
    //       src="assets/home.png"
    //       alt=""
    //     ></img>
    //     <p className="empty-chatroom-mainhead">Start Chatting with Your Amigo🤝</p>
    //     {/* <p className="empty-chatroom-subhead">
    //       Select an Amigo from the Sidebar and Start conversation.Add Amigos by
    //       username from the option in the top right corner of the page
    //     </p> */}
    //   </div>
    // </div>


    <div>
      <div className="EmptyChatroom">
        <img src={image} alt="" className="img" />
        <div className="empty-chatroom">
          <p className="empty-chatroom-mainhead">Start Chatting with Your Amigo🤝</p>
          {/* <p className="empty-chatroom-subhead">
          Select an Amigo from the Sidebar and Start conversation.Add Amigos by
          username from the option in the top right corner of the page
        </p> */}
        </div>
      </div>
    </div>
  );
}

export default EmptyChatRoom;
