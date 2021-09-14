import { useParams, Link } from "react-router-dom";

const Company = ({ members }) => {
  const { id } = useParams();

  const member = members.find((value) => value.id === id)

  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Company;
