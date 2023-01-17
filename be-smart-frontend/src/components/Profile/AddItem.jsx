import React from 'react'
import Aside from './Aside'
import "../../style/Profile.css"
import { useEffect, useState } from "react";
import { db, fs } from '../../utils/firebaseConfig'
import "./AddItem.css"
import { Table } from 'react-bootstrap';

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
      const [products, setProducts] = useState([
            {
                  id: 1,
                  name: "BLEU DE CHANEL",
                  price: 534,
                  url:
                        "https://www.dutylemon.com/warehouse/dynamic/209060.jpg",
                  warehouse: false,
                  quantity: 1,
            },
            {
                  id: 2,
                  name: "Dior SAUVAGE",
                  price: 349,
                  url:
                        "https://d3m9l0v76dty0.cloudfront.net/system/photos/6348704/large/8224590fed493faa39179a2343778163.jpg",
                  warehouse: false,
                  quantity: 1,
            },
            {
                  id: 3,
                  name: "Gucci INTENSE OUD",
                  price: 340,
                  url:
                        "https://d3m9l0v76dty0.cloudfront.net/system/photos/5537818/large/89ff7ab2f227c6acf6a5397e9128f9d4.jpg",
                  warehouse: false,
                  quantity: 1,
            },
            {
                  id: 4,
                  name: "Jean Paul GAULTIER",
                  price: 350,
                  url:
                        "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/RYP48_Z_P_8435415012690_1.png",
                  warehouse: false,
                  quantity: 1,
            },
            {
                  id: 5,
                  name: "TOM FORD ",
                  price: 449,
                  url:
                        "https://fraguru.com/mdimg/perfume/375x500.1018.jpg",
                  warehouse: false,
                  quantity: 1,
            }, {
                  id: 6,
                  name: "COCO Chanel ",
                  price: 649,
                  url:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Lg7aU1leUTGXG47dTSGDekQCUbk7kkBvcPI5IRlYbbv6I38wpVmlgevJPlDYcZ9rCYk&usqp=CAU",
                  warehouse: false,
                  quantity: 1,
            },
      ])
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

                                    <h2 className='text-center quantity h2'>Add Quantity</h2>

                                    <div className='row mt-3'>
                                          <table className="table  text-center">
                                                <thead>
                                                      <tr className='quantity'>
                                                            <th scope="col">Product Id</th>
                                                            <th scope="col">Product Img</th>
                                                            <th scope="col">Product Name</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Remove From Warehouse</th>
                                                      </tr>
                                                </thead>
                                                <tbody className='quantity'>
                                                      {
                                                            warehouse.map((i, index) => (

                                                                  < tr key={i.id}>
                                                                        <th scope="row">{index + 1}</th>
                                                                        <th scope="row">
                                                                              <img src={i.url} style={{ width: '4rem' }} />
                                                                        </th>
                                                                        <td>{i.name}</td>
                                                                        <td>
                                                                              {i.price}
                                                                        </td>
                                                                        <td>
                                                                              <button
                                                                                    onClick={() => decrease(i)}
                                                                                    className="btn btn-primary btn-sm"
                                                                              >
                                                                                    -
                                                                              </button>
                                                                              {i.quantity}
                                                                              <button
                                                                                    onClick={() => increase(i)}
                                                                                    className="btn btn-primary btn-sm"
                                                                                    size="sm"
                                                                              >
                                                                                    +
                                                                              </button>
                                                                        </td>

                                                                        <td>
                                                                              <button onClick={() => removetowarehouse(i)} className="btn btn-danger">
                                                                                    Remove
                                                                              </button>
                                                                        </td >
                                                                  </tr >
                                                            ))
                                                      }
                                                </tbody>
                                          </table>
                                    </div>
                                    <div className="row  quantity">
                                          <div className="col text-center">
                                                <h4>TOTAL: {total()}</h4>
                                          </div>
                                    </div>

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

                                                            <td> <input   name="id" type="text" onChange={e => setId(e.target.value)} /></td>
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
