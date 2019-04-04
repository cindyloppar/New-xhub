import React, { useState, useEffect } from "react";
import { DashContainer, BtmNav, Navigation, Input } from "./styled-components";
import { Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Upload from "./upload";
import Notifications from "./notifications";

const BottomNav = () => {
  const [showUpload, showUploadMod] = useState(false);
  const [viewNotifications, showNotifications] = useState(false);
  return (
    <React.Fragment>
      <BtmNav>

<<<<<<< HEAD
        <i class="far fa-comment" />
        <i onClick={() => showUploadMod(true)} class="fas fa-upload" />
        <i onClick={() => showNotifications(true)} class="fas fa-bell" />
        {/* <i class="far fa-question-circle" /> */}
=======
       <Link style={{paddingTop:"0.5rem"}} to="/chat">
          <i class="far fa-comment" />
        </Link>
        <i class="fas fa-upload" />
        <i class="fas fa-bell" />
        <i class="far fa-question-circle" />
>>>>>>> 5a2de647da7994e502b45f247081d8d1060e0904
      </BtmNav>
      ;
      <Modal
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
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
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
