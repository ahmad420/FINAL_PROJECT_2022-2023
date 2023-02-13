import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import "../../style/Profile.css";
import { db, fs } from "../../utils/firebaseConfig";
import { useProductsArr } from "../../contexts/ProudctsContext";

export default function Items() {
  useEffect(() => {
    db.collection("warehouse").onSnapshot((querySnapshot) => {
      var p = [];
      querySnapshot.forEach((doc) => {
        p.push(doc.data());
        products.map((i) => {
          if (i.id == doc.data().id) {
            i.warehouse = true;
          }
        });
      });

      setwarehouse(p);
    });
  }, []);

  const [warehouse, setwarehouse] = useState([]);
  const warehoseProducts = useProductsArr();
  const [products, setProducts] = useState(warehoseProducts);

  function removetowarehouse(item) {
    products.map((i) => {
      if (i.id == item.id) {
        i.warehouse = false;
      }
    });
    db.collection("warehouse").doc(`${item.id}`).delete();
  }
  function increase(item) {
    db.collection("warehouse")
      .doc(`${item.id}`)
      .update("quantity", fs.firestore.FieldValue.increment(1));
  }
  function decrease(item) {
    db.collection("warehouse")
      .doc(`${item.id}`)
      .update("quantity", fs.firestore.FieldValue.increment(-1));
  }
  function total() {
    let x = 0;
    warehouse.map((i) => {
      x += i.price * i.quantity;
    });
    return x;
  }
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [url, setUrl] = useState("");
  const [warhouse, setWarhouse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newElement = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      url: url,
      warehouse: warhouse,
    };
    setProducts((oldArray) => [...oldArray, newElement]);
  };

  return (
    <div className="Profile">
      <Aside />
      <div className="right-profile">
        <div className="addQuantity">
          <h2 className="text-center quantity h2">Items </h2>

          <div className="row mt-3">
            <table className="table  text-center">
              <thead>
                <tr className="quantity">
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Img</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Remove From Warehouse</th>
                </tr>
              </thead>
              <tbody className="quantity">
                {warehouse.map((i, index) => (
                  <tr key={i.id}>
                    <th scope="row">{index + 1}</th>
                    <th scope="row">
                      <img src={i.url} style={{ width: "4rem" }} />
                    </th>
                    <td>{i.name}</td>
                    <td>{i.price} ₪</td>
                    <td>
                      <div>
                        <button
                          onClick={() => decrease(i)}
                          className="btn btn-primary btn-sm"
                        >
                          -
                        </button>

                        <span id="quantity">{i.quantity}</span>

                        <button
                          onClick={() => increase(i)}
                          className="btn btn-primary btn-sm"
                          size="sm"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>
                      <button
                        onClick={() => removetowarehouse(i)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row  quantity">
            <div className="col text-center">
              <h4>TOTAL: {total()}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
