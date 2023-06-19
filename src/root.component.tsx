import ListComponent from "./components/list.component";
import { storeInstance } from "./store/store";
import { Provider } from "react-redux";
import GEDContext from "./store/GEDContext";
export default function Root(props) {
  if (props.globalEventDistributor) {
    props.globalEventDistributor.registerStore(storeInstance);
  }

  return (
    <section className="section">
      <h1>List MicroFrontend</h1>
      <Provider store={storeInstance}>
        <ListComponent></ListComponent>
      </Provider>
    </section>
  );
}
