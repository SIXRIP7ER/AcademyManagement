import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //   items = [];
  // Use use state to notify react that this variable will change over time and must be updated
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // List Mapping
  const itemList = items.map((item, index) => (
    <li
      className={
        index === selectedIndex ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => {
        setSelectedIndex(index);
        onSelectItem(item);
      }}
    >
      {item}
    </li>
  ));

  return (
    <>
      <h1 onClick={() => setSelectedIndex(-1)}>{heading}</h1>
      {itemList.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">{itemList.length !== 0 && itemList}</ul>
    </>
  );
}

export default ListGroup;
