function List() {
    const Fruits = [
        {id: 1, name: "Apple", price: 1.00 },
        {id: 2, name: "Banana", price: 0.50 },
        {id: 3, name: "Cherry", price: 1.50 },
        {id: 4, name: "Date", price: 2.00 },
    
    ];
    //Fruits.sort((a,b)=> a.name.localeCompare(b.name)) //Alphabetical order
    //Fruits.sort((a,b)=> b.name.localeCompare(a.name)) //reverse alphabetical
    //Fruits.sort((a,b)=> a.price - b.price) //Price order
    //Fruits.sort((a,b)=> b.price - a.price) //Price order reverse

    const lowPriceFruit = Fruits.filter((fruit)=> fruit.price < 1.00).sort((a,b)=> a.price - b.price);

    const listItems = lowPriceFruit.map((fruit) => <li key = {fruit.id}>
        {fruit.name}: &nbsp; - ${fruit.price}
    </li>);
    return <ol>{listItems}</ol>;
}


export default List;