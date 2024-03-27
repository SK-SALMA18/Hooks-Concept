import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const CustomExample = () => {
  const [data] =useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};
export default CustomExample;
