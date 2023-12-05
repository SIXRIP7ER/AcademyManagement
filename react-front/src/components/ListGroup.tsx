// function printList(items: any) {
//     if(items.length ==)
// }

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Paris"];
  //   items = [];
  const items3 = items.map((item) => <li key={item}>{item}</li>);

  const returnList = () => {
    return items.length === 0 ? <p>No Item Found</p> : items3;
  };

  const returnListIf = () => {
    if (items.length === 0) {
      return <p>No Item Found</p>;
    } else {
      return items3;
    }
  };

  return (
    <>
      <h1>List:</h1>
      {returnList()}
      {returnListIf()}
    </>
  );
}

export default ListGroup;
