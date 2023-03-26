import { useState } from 'react'
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    }
    const actionBar = <div>
            <Button primary onClick={handleClose}>I Accept</Button>
        </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}> 
        <p>
            Here is an important agreement for you to accept.
        </p>
    </Modal>

    return (
        <div>
            <Button primary onClick={handleClick}> Open Modal</Button>
            {showModal && modal}
            <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum neque auctor congue luctus. Nullam ut ante condimentum, porta lorem vel, pulvinar ipsum. Cras efficitur quam at metus varius tincidunt. Nullam ac mauris id sapien elementum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis consequat justo, sed iaculis augue sodales ut. Aenean eleifend ligula eget rutrum faucibus. Sed eu odio mollis turpis tincidunt malesuada. Curabitur laoreet mattis justo, sed elementum ante pharetra vitae. Integer ornare ipsum est, vel dapibus arcu sollicitudin id. Morbi molestie maximus massa eget convallis. Duis fermentum auctor justo. In fringilla metus urna, eget interdum orci laoreet sit amet.
        </p>
        </div>
    )
}

export default ModalPage;