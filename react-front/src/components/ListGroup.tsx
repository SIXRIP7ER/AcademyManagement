import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  //   items = [];
  //   let selectedIndex = -1;
  // Use use state to notify react that this variable will change over time and must be updated
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (item: string) => console.log(item);

  const items3 = items.map((item, index) => (
    <li
      className={
        index === selectedIndex ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => setSelectedIndex(index)}
    >
      {item}
    </li>
  ));

  return (
    <>
      <h1 onClick={() => setSelectedIndex(-1)}>List:</h1>
      {items3.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">{items3.length !== 0 && items3}</ul>
    </>
  );
}

export default ListGroup;
