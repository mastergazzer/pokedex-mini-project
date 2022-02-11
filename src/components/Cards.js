import styled from "@emotion/styled";
const MoveCard = styled.div`
  width: 50%;
  display: block;
  background: #eee;
  padding: 0.6em 1em 0.6em 0.6em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 6px 10px;
  border: solid 1px #ccc;
  h3 {
    margin: 0;
    font-size: 1em;
    text-transform: uppercase;
  }
`;
const Image = styled.div`
  min-width: 80px;
  height: 80px;
  border-radius: 0.3em;

  opacity: 0.7;
  margin: 0 0.6em 0.6em 0;
  border: solid 1px firebrick;
`;
const CatchButton = styled.div`
  min-width: 80px;
  height: 80px;
  border-radius: 0.3em;

  opacity: 0.7;
  margin: 0 0.6em 0.6em 0;
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
`;
const Content = styled.div`
  display: flex;
  text-transform: capitalize;
  p {
    margin: 0;
    font-size: 0.7em;
    color: #222;
  }
`;

const MovesLayout = styled.div`
  text-align: center;
  margin-top: 0.7em;
  text-transform: capitalize;
  font-size: 17px;
`;
const Button = styled.button`
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Cards = (props) => {
  return (
    <div>
      <Image>
        <img src={props.image} alt="aa"></img>
      </Image>
      <Content>
        <h3>{props.name} |</h3>
        {props.type}
      </Content>
      <MovesLayout>{props.moves}</MovesLayout>
      <Button onClick={props.buttonHandler}>Catch!</Button>
    </div>
  );
};
export default Cards;
