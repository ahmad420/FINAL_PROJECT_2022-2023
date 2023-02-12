import firebase from 'firebase';
import React, { useContext, useEffect, useState } from 'react'

const AuthContext = React.createContext();
export function useProductsArr() {
      return useContext(AuthContext);
    }


export default function ProudctsContext({ children }) {
      const [data,setdata]=useState([])
   
      useEffect(() => {
            const db = firebase.firestore();
            const collectionRef = db.collection("warehouse");
        
            collectionRef.get().then((querySnapshot) => {
              const data = [];
              querySnapshot.forEach((doc) => {
                data.push(doc.data());
              });
              setdata(data)
              console.log(data)
             
            });
          }, []); 

     
       
        

      return (
            <AuthContext.Provider value={data}>
                  {children}
            </AuthContext.Provider>
      )
}
