import React from "react";
import Aside from "./Aside";
import "../../style/Profile.css";
import { MDBCard, MDBFile } from "mdb-react-ui-kit";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
export default function AddItem() {
  return (
    <div className="Profile">
      <Aside />

      <div className="right-profile">
        <MDBCard className="p-4  ">
          <form>
         

            <MDBInput
              wrapperClass="mb-4"
              id="form6Example3"
              label="Company name"
            />
            <MDBInput wrapperClass="mb-4" id="form6Example4" label="Address" />
            <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example5"
              label="Email"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="number"
              id="form6Example6"
              label="number"
            />

            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form6Example7"
              rows={4}
              label="Additional information"
            />

            <MDBFile
              className="mb-4"
              label="Small file input example"
              size="sm"
              id="formFileSm"
            />
            <MDBBtn className="mb-4" type="submit" block>
              Add Item
            </MDBBtn>
          </form>
        </MDBCard>
      </div>
    </div>
  );
}
