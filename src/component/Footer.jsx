import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SocialContainer = styled.h1`
  display: flex;
`;
const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  &:hover {
    color: teal;
    cursor: pointer;
  }
`;
const Right = styled.div`
  flex: 1;
  padding-right: 20px;
  padding-top: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 60%;
  border-radius: 70%;
  padding-left: 20%;
  padding-top: 0px;
`;

const Footer = () => {
  const socialIcons = [
    { color: "3B5999", icon: <Facebook /> },
    { color: "E4405F", icon: <Instagram /> },
    { color: "55ACEE", icon: <Twitter /> },
  ];
  const listItem = [
    { list: "Home" },
    { list: "Cart" },
    { list: "Man Fashion" },
    { list: "Woman Fashion" },
    { list: "Accessories" },
    { list: "My Account" },
    { list: "WishList" },
    { list: "Term" },
    { list: "Order Tracking" },
    { list: "Wish List" },
  ];
  return (
    <Container>
      <Left>
        <Payment src="/images/logotag.jfif" />
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          {listItem.map((item) => {
            return <ListItem>{item.list}</ListItem>;
          })}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Pakistan zindabad,Lahore, Islamabad
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 92 34567 6768234
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@gmail400.com
        </ContactItem>
        <SocialContainer>
          {socialIcons.map((item) => {
            return <SocialIcon color={item.color}>{item.icon}</SocialIcon>;
          })}
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;
