import { Container, Title } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <Title>
        Your phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
};

export default Home;