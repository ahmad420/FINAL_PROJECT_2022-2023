import React, { useContext } from 'react'
import Aside from './Aside'
import "../../style/Profile.css"
import { useEffect, useState } from "react";
import { db, fs } from '../../utils/firebaseConfig'
import "./AddItem.css"
import { Table } from 'react-bootstrap';
import ProudctsContext, { useProductsArr } from '../../contexts/ProudctsContext';
import { useAuth } from '../../contexts/AuthContext';

export default function AddItem() {

      useEffect(() => {
            db.collection("warehouse")
                  .onSnapshot((querySnapshot) => {
                        var p = [];
                        querySnapshot.forEach((doc) => {
                              p.push(doc.data());
                              products.map((i) => {
                                    if (i.id == doc.data().id) {
                                          i.warehouse = true
                                    }
                              })
                        });

                        setwarehouse(p)
                  });

      }, []);

      const [warehouse, setwarehouse] = useState([])
      const warehoseProducts = useProductsArr()
      const [products, setProducts] = useState(warehoseProducts)
      function addtowarehouse(item) {


            products.map((i) => {
                  if (i.id == item.id) {
                        i.warehouse = true
                  }
            })

            db.collection('warehouse').doc(`${item.id}`).set(item, { merge: true })

      }
      function removetowarehouse(item) {

            products.map((i) => {
                  if (i.id == item.id) {
                        i.warehouse = false
                  }
            })
            db.collection('warehouse').doc(`${item.id}`).delete()

      }
      function increase(item) {
            db.collection('warehouse').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1))

      }
      function decrease(item) {
            db.collection('warehouse').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1))
      }
      function total() {
            let x = 0
            warehouse.map((i) => {
                  x += i.price * i.quantity

            })
            return x
      }
      const [id, setId] = useState("")
      const [name, setName] = useState("")
      const [price, setPrice] = useState("")
      const [quantity, setQuantity] = useState("")
      const [url, setUrl] = useState("")
      const [warhouse, setWarhouse] = useState("")


      const handleSubmit = (e) => {
            e.preventDefault();
            const newElement = { id: id, name: name, price: price, quantity: quantity, url: url, warehouse: warhouse }
            setProducts(oldArray => [...oldArray, newElement]);
      }


      return (
            <div className='Profile'>
                  <Aside />

                  <div className="right-profile">

                        <div className='container mt-2'>

                              <div className='row justify-content-center productCards'>
                                    {products.map((item) => (
                                          <div className='col-3' key={item.id}>
                                                <div className="card proudctCard "  >
                                                      <img src={item.url} className="card-img-top" />
                                                      <div className="card-body">
                                                            <h6 className="card-title">
                                                                  {item.name} - ₪ {item.price}
                                                            </h6>
                                                            {
                                                                  item.warehouse == false
                                                                  &&
                                                                  <button className='btn btn-primary' onClick={() => addtowarehouse(item)}>
                                                                        Add to warehouse
                                                                  </button>
                                                            }
                                                            {
                                                                  item.warehouse == true
                                                                  &&
                                                                  <button className='btn btn-success' onClick={() => addtowarehouse(item)}>
                                                                        Added
                                                                  </button>
                                                            }
                                                      </div>
                                                </div>
                                          </div>

                                    ))}

                              </div>
                              <div className='addQuantity' >

                                    <h2 className='text-center quantity h2'>Add Item To the Wareouse</h2>

                                    

                                    <div className=''>

                                          <Table stripped bordered hover size="sm">
                                                <thead className='thead-light'>
                                                      <tr>
                                                            <td scope="col">Id</td>
                                                            <td scope="col">Name</td>
                                                            <td scope="col">Price</td>
                                                            <td scope="col">Quantity</td>
                                                            <td scope="col">Url</td>
                                                            <td scope="col">Avilabilty</td>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr>

                                                            <td> <input name="id" type="text" onChange={e => setId(e.target.value)} /></td>
                                                            <td><input name="name" type="text" onChange={e => setName(e.target.value)} /></td>
                                                            <td><input name="price" type="number" onChange={e => setPrice(e.target.value)} /></td>
                                                            <td> <input name="quantity" type="number" onChange={e => setQuantity(e.target.value)} /></td>
                                                            <td> <input name="url" type="url" onChange={e => setUrl(e.target.value)} />
                                                                  <select name="warehose" onChange={e => setWarhouse(e.target.value)}>
                                                                        <option value="true">true</option>
                                                                        <option value="false">false</option>
                                                                  </select>
                                                            </td>


                                                            <td><input type="submit" value="submit" onClick={handleSubmit} /></td>

                                                      </tr>
                                                </tbody>
                                          </Table>








                                    </div>
                              </div>
                        </div >
                  </div>
            </div>
      )
}
