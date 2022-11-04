import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img src="https://i.ibb.co/1KfN9Py/2.jpg" className="website-logo" />
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
