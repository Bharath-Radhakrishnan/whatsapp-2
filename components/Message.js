import { ModeComment } from "@material-ui/icons";
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeofMessage = user === userLoggedIn.email ? Sender : Reciever;
  return (
    <Container>
      <TypeofMessage>
        <MessageElement>
          {message.message}
          {message.timestamp ? moment(message.timestamp).format("LT") : ""}
        </MessageElement>
      </TypeofMessage>
    </Container>
  );
}

export default Message;
const Container = styled.div``;
const MessageElement = styled.p`
  width: "fit-content";
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;
const Sender = styled.div`
  margin-left: auto;
  background-color: #dcf8c6;
`;
const Reciever = styled.div`
  background-color: whitesmoke;
  text-align: left;
`;
