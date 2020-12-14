import React, {
  List,
  Component,
  useState,
  setState,
  useEffect,
  setData,
} from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
import { Button, Label, Input, FormGroup } from "reactstrap";
import axios from "axios";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "./chooseregister.css";

const ChooseRegister = () => {
  return (
    <>
      <div className='cdiv'>
        <Link className='clink' to='/Register'>
          Register as a business owner
        </Link>
      </div>
      <div className='cdiv'>
        <Link className='clink' to='/PatronRegister'>
          Register as a patron
        </Link>
      </div>
    </>
  );
};

export default ChooseRegister;
