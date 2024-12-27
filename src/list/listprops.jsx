import PropTypes from 'prop-types'
function List(props) {
  const { category, items } = props;

  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; - ${item.price}
    </li>
  ));

  return (
    <>
      <h3 className="category">{category}</h3>
      <ol className="listItems">{listItems}</ol>
    </>
  );
}
List.propTypes ={
    category:PropTypes.string.isRequired,
    items:PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          price: PropTypes.number
    }))
}
List.defaultProps={
    category:'Category',
    items:[],
}

export default List;