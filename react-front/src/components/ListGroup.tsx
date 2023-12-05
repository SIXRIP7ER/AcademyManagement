// function printList(items: any) {
//     if(items.length ==)
// }

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  //   items = [];
  const items3 = items.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h1>List:</h1>
      {items3.length === 0 && <p>No Item Found</p>}
      {items3.length !== 0 && items3}
    </>
  );
}

export default ListGroup;
