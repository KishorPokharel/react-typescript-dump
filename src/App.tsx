// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableItem from "./components/ExpandableItem";
import Form from "./components/Form";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//     </div>
//   );
// }

// const App = () => {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisibility(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// };

// const App = () => {
//   return <Like onClick={() => console.log("toggled")}></Like>;
// };

// const App = () => {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, price: drink.price + 1 });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>
//         {drink.title} {drink.price}
//       </button>
//     </div>
//   );
// };

// const App = () => {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "San Francisco",
//       zipCode: 94111,
//     },
//   });

//   const handleClick = () => {
//     const newAddress = { ...customer.address, zipCode: 38382 };
//     setCustomer({ ...customer, address: newAddress });
//   };

//   return (
//     <>
//       Name: {customer.name}
//       <br></br>
//       City: {customer.address.city}
//       <br></br>
//       ZipCode: {customer.address.zipCode}
//       <br></br>
//       <button onClick={handleClick}>Update</button>
//     </>
//   );
// };

// const App = () => {
//   const [tags, setTags] = useState(["happy", "cheerful"]);
//   const handleClick = () => {
//     // add
//     setTags([...tags, "exciting"]);

//     // remove
//     setTags(tags.filter((tag) => tag !== "happy"));

//     // update
//     // setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
//   };
//   return (
//     <div>
//       {tags.map((tag) => (
//         <p>{tag}</p>
//       ))}
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// };

// const App = () => {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug1", fixed: false },
//     { id: 2, title: "Bug2", fixed: false },
//   ]);

//   const handleClick = () => {
//     // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) {
//           bug.fixed = true;
//         }
//       })
//     );
//   };
//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// };

// const App = () => {
//   const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length}></NavBar>
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <ExpandableItem maxChars={10}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nostrum
//       vero itaque distinctio nulla magnam enim culpa aliquam laboriosam
//       provident officia nihil ipsum accusamus repellat minima modi delectus
//       blanditiis. Explicabo!
//     </ExpandableItem>
//   );
// };
const App = () => {
  return <Form></Form>;
};

export default App;
