import './index.css'

const ShowGreetings = props => {
  const {languageDetails, updateButton, ActiveTab} = props

  const {id, imageUrl, buttonText, imageAltText} = languageDetails
  const activeBtn = ActiveTab ? 'active-btn' : ''

  const sendActiveId = () => {
    updateButton(id, imageUrl, imageAltText)
  }

  return (
    <li className="list-type">
      <button
        type="button"
        className={`button ${activeBtn}`}
        onClick={sendActiveId}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ShowGreetings
