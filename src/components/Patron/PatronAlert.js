import React from "react";

export default function PatronAlert() {
  // Form Change Handler
  const onChange = (e) => {
    setAlert({ ...alert, [e.target.name]: e.target.value });
    console.log(alert);
  };

  return (
    <div>
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
