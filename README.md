# A simple & lightweight method of displaying modal windows with React

## Installation 

In the project directory, you can run:

### `npm i modal-react-library`


## Import

You have to import Modal component in your application
### `import { Modal } from "modal-react-library"`

## Initialization
Use the modal like a React component

You have to initialize the Modal with useState
### `const [modalIsActive, setModalIsActive] = useState(false)`

## Render
You can render the modal in your component with
### `{modalIsActive && (<Modal buttonType="submit" buttonText="SUBMIT" htmlTextModal="bonjour" modalIsActive={modalIsActive} handleActiveModal={setModalIsActive} /> )}`

## Params
    buttonType: "button" | "submit" | "reset"
    buttonText: string of the text on the button
    htmlTextModal: string of the text on the modal
    modalIsActive: boolean
    handleActiveModal: useState function
