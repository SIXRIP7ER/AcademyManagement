function returnList(items3: any) {
  if (items3.length === 0) {
    return <p>No Item Found</p>;
  } else {
    return <ul className="list-group">{items3}</ul>;
  }
}

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  //   items = [];
  const items3 = items.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h1>List:</h1>
      {returnList(items3)}
    </>
  );
}

export default ListGroup;
