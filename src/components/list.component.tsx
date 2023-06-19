import { useSelector } from "react-redux";

const ListComponent = (props) => {
  //const list = [{ name: "Do single-spa" }, { name: "Get Webpack Running" }];
  const list = useSelector((state: { todos: [{ name: any }] }) => state);
  console.log(list);
  return (
    <section>
      <div>
        <ul>
          {list.todos.map((todo) => (
            <li>{todo.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ListComponent;
