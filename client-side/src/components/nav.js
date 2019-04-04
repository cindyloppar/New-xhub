import React, { useState, useEffect } from "react";
import { DashContainer, BtmNav, Navigation, Input } from "./styled-components";
import { Dropdown, Modal } from "react-bootstrap";

const Nav = () => {
  const [showCapabilities, addCapabilities] = useState(false);
  const [preferences, addPreferences] = useState(false);
  const [bookmarks, addBookmarks] = useState(false);
  const [faq, addFaq] = useState(false);
  const [x, addX] = useState(false);
  return (
    <React.Fragment>
      <Navigation>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <i class="fas fa-bars bar" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => addCapabilities(true)}>
              X-Capabilities
            </Dropdown.Item>
            <Dropdown.Item onClick={() => addPreferences(true)}>
              Preferences
            </Dropdown.Item>
            <Dropdown.Item onClick={() => addBookmarks(true)}>
              Bookmarks
            </Dropdown.Item>
            <Dropdown.Item onClick={() => addFaq(true)}>FAQ</Dropdown.Item>
            <Dropdown.Item onClick={() => addX(true)}>What is X</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <img src="https://github.com/moralss/x-hub/blob/master/client-side/src/components/X.png?raw=true" />
        <Input placeholder="search" />
      </Navigation>
      <Modal
        show={showCapabilities}
        onHide={() => addCapabilities(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "black" }}
            id="example-custom-modal-styling-title"
          >
            Capabilities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body />
        <Modal.Footer>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
      <Modal
        show={preferences}
        onHide={() => addPreferences(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "black" }}
            id="example-custom-modal-styling-title"
          >
            Capabilities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body />
        <Modal.Footer>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
      <Modal
        show={x}
        onHide={() => addX(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "black" }}
            id="example-custom-modal-styling-title"
          />
        </Modal.Header>
        <Modal.Body>
          <div className="x">
            <div className="d">xflix</div>
            <div className="d">Itergrated flight plan</div>
            <div className="d">X-capabilites</div>
            <div className="d">FAQs</div>
            <div className="d">X-talks</div>
            <div className="d">X-blog</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
      <Modal
        show={faq}
        onHide={() => addFaq(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "black" }}
            id="example-custom-modal-styling-title"
          >
            Capabilities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body />
        <Modal.Footer>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
      <Modal
        show={preferences}
        onHide={() => addPreferences(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "black" }}
            id="example-custom-modal-styling-title"
          >
            Capabilities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body />
        <Modal.Footer>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal>
      <Modal
        show={bookmarks}
        onHide={() => addBookmarks(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "black" }}
            id="example-custom-modal-styling-title"
          >
            Capabilities
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
export default Nav;
