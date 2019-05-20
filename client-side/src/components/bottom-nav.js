import React, { useState, useEffect } from "react";
import {
  Button,
  DashContainer,
  BtmNav,
  Navigation,
  Input
} from "./styled-components";
import { Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Notifications from "./notifications";


const BottomNav = () => {
  const [showUpload, showUploadMod] = useState(false);
  const [viewNotifications, showNotifications] = useState(false);
  return (
    <React.Fragment>
      <BtmNav>
        <Link style={{ paddingTop: "0.5rem" }} to="/chat">
          <i class="far fa-comment" />
        </Link>
        <Link style={{ paddingTop: "0.5rem" }} to="/upload">
          <i class="fas fa-upload" />
        </Link>
        <i class="fas fa-bell" />
        <i class="far fa-question-circle" />
      </BtmNav>

      {/* <Modal
        show={showUpload}
        onHide={() => showUploadMod(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
      
         <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Upload Content
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ "margin-top": "-13rem" }}>
          <Upload />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button>
        </Modal.Footer>  
      </Modal> */}

      <Link style={{ paddingTop: "0.5rem" }} to="/upload" />

      <Modal
        show={viewNotifications}
        onHide={() => showNotifications(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "black" }}
            id="example-custom-modal-styling-title"
          >
            Notifications
          </Modal.Title>
        </Modal.Header>
        <Modal.Body />
        <Modal.Footer>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
export default BottomNav;
