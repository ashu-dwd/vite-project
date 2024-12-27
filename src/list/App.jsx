import List from "./listprops";

function App5() {
  const fruits = [
    { id: 1, name: "Apple", price: 1.00 },
    { id: 2, name: "Banana", price: 0.50 },
    { id: 3, name: "Cherry", price: 1.50 },
    { id: 4, name: "Date", price: 2.00 },
  ];

  const vegetables = [
    { id: 1, name: "Carrot", price: 0.80 },
    { id: 2, name: "Broccoli", price: 1.20 },
    { id: 3, name: "Cauliflower", price: 1.00 },
    { id: 4, name: "Potato", price: 0.60 },
  ];

  return (
    <>
     {fruits.length>0? <List items={fruits} category="Fruits" />: null}
     {vegetables.length>0? <List items={vegetables} category="Vegetables" />:null}
      
    </>
  );
}

export default App5;