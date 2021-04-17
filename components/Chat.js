import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getReciepientsEmail from "../utils/getReciepientEmail";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function Chat({ users }) {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const recipientEmail = getReciepientsEmail(users, user);
  return (
    <Container>
      <UserAvatar />
      {recipientEmail}
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
