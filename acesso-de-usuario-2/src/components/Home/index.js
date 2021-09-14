import { Link } from "react-router-dom";

const Home = ({ members }) => {
  const mapMembers = members.map((value) => {
    return (
      <div>
        <Link
          to={
            members.type === "pj"
              ? `/company/${value.id}`
              : `/customer/${value.id}`
          }
        >
            {value.name}
        </Link>
      </div>
    );
  });

  return (mapMembers)
};

export default Home;
