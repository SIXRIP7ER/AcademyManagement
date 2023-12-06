import { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "./components/ListGroup";

function App() {
  // Get Items from database
  let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  let items3: any = [];
  const [academyItems, setAcademyItems] = useState([]);

  const getItems = async () => {
    axios
      .get("http://192.168.0.137:80/playerslist")
      .then((response) => {
        setAcademyItems(response.data.players);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={academyItems}
        heading="Cities:"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
