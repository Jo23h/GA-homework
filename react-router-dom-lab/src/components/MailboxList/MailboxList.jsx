import { useNavigate, Link, useParams } from 'react-router-dom'

function MailboxList({mailboxes}) {
  return (
    <>
        <h2>Mailbox List</h2>
        <ul>
       {mailboxes.map(mailbox => (
        <li key={mailbox._id}>
        <Link to={`/mailboxes/${mailbox._id}`}>
            Mailbox {mailbox._id}
        </Link>
        {/* <h3>Details</h3>
        <p>Boxholder: {mailbox.name}</p>
        <p>Box Size: {mailbox.box}</p> */}
        </li>
       ))}
    </ul>
    </>
    
  )
}

export default MailboxList