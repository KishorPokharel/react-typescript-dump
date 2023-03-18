// import ListGroup from "./components/ListGroup";

import { useEffect, useState } from "react";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableItem from "./components/ExpandableItem";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ProductList from "./components/ProductList";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";

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
// const App = () => {
//   return <Form></Form>;
// };

// Expense tracker
// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "Item 1", amount: 10, category: "Groceries" },
//     { id: 2, description: "Item 2", amount: 14, category: "Groceries" },
//     { id: 3, description: "Item 3", amount: 20, category: "Entertainment" },
//   ]);

//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(expense) =>
//             setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
//       />
//     </>
//   );
// };

// const App = () => {
//   const [category, setCategory] = useState("");
//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(e) => setCategory(e.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category} />
//     </div>
//   );
// };

// Cleanup
// const connect = () => console.log("Connecting");
// const disconnect = () => console.log("disconnecting");

// const App = () => {
//   useEffect(() => {
//     connect();
//     return () => {
//       disconnect();
//     };
//   });
// };

// const App = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get<User[]>(
//           "https://jsonplaceholder.typicode.com/xusers"
//         );
//         setUsers(res.data);
//       } catch (err) {
//         setError((err as AxiosError).message);
//       }
//     };
//     fetchUsers();
//   }, []);
//   return (
//     <>
//       <p className="text-danger">{error}</p>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// cancelling request
// const App = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);
//   return (
//     <>
//       <p className="text-danger">{error}</p>
//       {isLoading && <div className="spinner-border"></div>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// loaders and http
// const App = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const { request, cancel } = userService.getAllUsers();
//     request
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => cancel();
//   }, []);

//   const deleteUser = (user: User) => {
//     const originalUsers = [...users];
//     setUsers(users.filter((u) => u.id !== user.id));
//     userService.deleteUser(user.id).catch((err) => {
//       setError(err.message);
//       setUsers(originalUsers);
//     });
//   };

//   const addUser = () => {
//     const originalUsers = [...users];
//     const newUser = { id: 0, name: "Kishor" };
//     setUsers([newUser, ...users]);

//     userService
//       .createUser(newUser)
//       .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
//       .catch((err) => {
//         setError(err.message);
//         setUsers(originalUsers);
//       });
//   };

//   const updateUser = (user: User) => {
//     const originalUsers = [...users];
//     const updatedUser = { ...user, name: user.name + "!" };
//     setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
//     userService.updateUser(updatedUser).catch((err) => {
//       setError(err.message);
//       setUsers(originalUsers);
//     });
//   };

//   return (
//     <>
//       <p className="text-danger">{error}</p>
//       {isLoading && <div className="spinner-border"></div>}
//       <button className="btn btn-primary mb-3" onClick={addUser}>
//         Add User
//       </button>
//       <ul className="list-group">
//         {users.map((user) => (
//           <li
//             className="list-group-item d-flex justify-content-between"
//             key={user.id}
//           >
//             {user.name}{" "}
//             <div>
//               <button
//                 className="btn btn-outline-secondary mx-1"
//                 onClick={() => updateUser(user)}
//               >
//                 Update
//               </button>
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => deleteUser(user)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Kishor" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <p className="text-danger">{error}</p>
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
