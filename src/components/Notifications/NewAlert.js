import React, { useEffect, useState } from "react";
import { AvForm, AvField, AvCheckbox } from "availity-reactstrap-validation";
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Business/business.css";

export default function NewAlert() {
  // Get Patron Data for Dropdown Menu
  let url = "/react-backend/business/displayCheckIn.php";
  let sendURL = "/react-backend/business/sendemail/alert.php";

  // Modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // Store into list
  const [patrons, setPatrons] = useState([]);

  // Store Final Alert as a Const
  const [alert, setAlert] = useState({
    start_date: "",
    end_date: "",
    message: "",
  });

  // Register Handler Runs On Valid Submit
  const registerHandler = () => {
    let FormData2 = new FormData();
    FormData2.append("start_date", alert.start_date);
    FormData2.append("end_date", alert.end_date);
    FormData2.append("message", alert.message);

    axios.post(sendURL, FormData2).then((res) => {
      console.log(FormData2);
      console.log(res);
    });
  };
  // Runs on Page Load
  useEffect(() => {
    axios.get(url).then((json) => {
      setPatrons(json.data);
      console.log(json.data);
    });
  }, []);

  // Form Change Handler
  const onChange = (e) => {
    setAlert({ ...alert, [e.target.name]: e.target.value });
    console.log(alert);
  };

  return (
    <div>
      <p></p>
      <h1>REPORT CASE</h1>
      <h3>ALL CUSTOMERS IN SELECTED DATE RANGE WILL BE NOTIFIED</h3>

      <Button color='secondary' onClick={toggle}>
        <i class='fas fa-question-circle'></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Report New Case</ModalHeader>
        <ModalBody>
          To protect the privacy of the patient, COVID cases are to be reported
          anonymously. Simply select a date range. Any customers who were
          checked-in on those dates will be notified of the positive case.
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>

      <AvForm className='form' onValidSubmit={registerHandler}>
        <FormGroup>
          <AvField
            label='Start'
            type='date'
            name='start_date'
            onChange={(e) => {
              onChange(e);
            }}
          />
          <AvField
            label='End'
            type='date'
            name='end_date'
            onChange={(e) => {
              onChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <AvField
            label='Message (Optional)'
            type='textarea'
            name='message'
            onChange={(e) => {
              onChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Button color='danger'>
            <i style={{ color: "white" }} class='fas fa-exclamation-triangle' />{" "}
            Report
          </Button>
          <Button tag={Link} to='/BusinessMain'>
            Back
          </Button>{" "}
        </FormGroup>
      </AvForm>
    </div>
  );
}
