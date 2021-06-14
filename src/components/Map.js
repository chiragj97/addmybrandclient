import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { searchNearby } from '../apihelper';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const [result, setResult] = useState([]);
  const [center, setCenter] = useState({
    lat: 13.019379442678726,
    lng: 76.19933202808154,
  });
  const [show, setShow] = useState(false);
  const [zoom, setZoom] = useState(6);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const _onClick = async ({ x, y, lat, lng, event }) => {
    handleShow();
    console.log(x, y, lat, lng, event);
    searchNearby(lat, lng).then(({ data }) => setResult(data.result));
  };

  return (
    console.log(result),
    (
      <div className="container mt-1 text-center">
        <h3>Click on the map to see nearby Food Trucks</h3>
        <div className="mt-1" style={{ height: '90vh', width: '100%' }}>
          <GoogleMapReact
            onClick={_onClick}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
          >
            {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
          </GoogleMapReact>
        </div>
        {/* <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nearby Trucks</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {result.map((truck) => (
              <>
                <div>
                  {truck.Applicant} | {truck.Address} |{' '}
                  {truck.FoodItems.split(':').map((food) => food + ',')} <br />
                </div>
                <hr />
              </>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  );
};

export default Map;
