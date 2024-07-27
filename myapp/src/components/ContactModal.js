const ContactModal = ({open,onClickClose}) =>{
    console.log(open)
    return(
        <dialog open={open} >
            <h1>We are still working on this. thank you in advance</h1>
            <button onClick={()=>onClickClose()}>Close</button>

        </dialog>
    )
}

export default ContactModal