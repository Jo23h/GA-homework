import { useParams } from "react-router-dom";

function MailboxDetails({mailboxes}) {

    // useParams() extracts variables from the URL and returns them as an object
    // Route is "/mailboxes/:mailboxId" and URL is "/mailboxes/1"
    // useParams() return { mailboxId: "1" } 
    // {mailboxId} destructuring extracts: mailboxId = "1" from the object
    // vs. const mailboxId = useParams().mailboxId
    const {mailboxId} = useParams();

    // Function to search through mailboxes array to find the specific mailbox
    const selectedBox = mailboxes.find(
    // Number converts "1" in mailboxId: "1" into 1 (string to numebr)
    (mailbox) => mailbox._id === Number(mailboxId)
    );

    // if there is no _id match with mailboxes array and selectedBox
    if (!selectedBox){
        return <div>Mailbox not found</div>
    }

  return (
    <div>
        <h3>Details</h3>
        <p>Boxholder: {selectedBox.name}</p>
        <p>Box Size: {selectedBox.box}</p>
    </div>
  )
}

export default MailboxDetails