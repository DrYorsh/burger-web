import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullBurger: React.FC = () => {
  const [burger, setBurger] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchBurger() {
      try {
        const { data } = await axios.get(
          "https://626d16545267c14d5677d9c2.mockapi.io/items/" + id
        );
        setBurger(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchBurger();
  }, []);

  if (!burger) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={burger.imageUrl} />
      <h2>{burger.title}</h2>
      <h4>{burger.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullBurger;
