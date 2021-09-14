import { useParams, Link } from "react-router-dom";

const Customer = ({ members }) => {
  let { id } = useParams();

  const member = members.find((value) => value.id === id);
  console.log(member)
  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
