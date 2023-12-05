function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  //   items = [];
  let selectedIndex = -1;

  const items3 = items.map((item, index) => (
    <li
      className={
        index === selectedIndex ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => (selectedIndex = index)}
    >
      {item}
    </li>
  ));

  return (
    <>
      <h1>List:</h1>
      {items3.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">{items3.length !== 0 && items3}</ul>
    </>
  );
}

export default ListGroup;
