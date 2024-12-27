function Button() {
//   const handleClick = () => {
//     console.log("Button clicked");
//   }
  let count = 0;
  const handleClick = (name) =>{
 if(count<3){
    count++ ;
    console.log(name + " clicked");
 }else{
    handleClick2(name)
 }
  }
  const handleClick2 = (name)=> console.log(`${name} stop clicking me!`)
const handleClick3 = (e)=> e.target.textContent = "Ouch ! 😒"
  return (
    <button type="button" onClick={(e)=>handleClick3(e)}>Click Me!😍</button>
  )
}

export default Button;