import './index.css'

const UserHistory = props => {
  const {userCheck, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl} = userCheck

  return (
    <li className="user-card-container">
      <div>
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="cross" />
        <p className="name">{title}</p>
        <p className="website">{domainUrl}</p>
      </div>
    </li>
  )
}

export default UserHistory
