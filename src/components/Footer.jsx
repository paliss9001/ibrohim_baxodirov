import github from '/assets/icons/github.svg'
import email from '/assets/icons/email.svg'
import telegram from '/assets/icons/tg.svg'
import medium from '/assets/icons/medium.svg'
import linkedin from '/assets/icons/linkedin.svg'

export default function Footer() {
  return (
    <section className="footer" id="contacts">
      <div className="footer__body container">
        <h2 className="footer__title">
          Wanna ask something?
        </h2>
        <span className="footer_contact-text">
          Contact me. I will reply as quickly as I can.
          <p>Ibrohim Baxodirov</p>
        </span>
      </div>
      <div className="footer__links">
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <a className="footer__link" href='https://github.com/paliss9001'>
              <img width={20} height={20} src={github}></img>
            </a>
          </li>
          <li className="footer__links-item">
            <a className="footer__link" href='https://t.me/deemirel'>
              <img width={20} height={20} src={telegram}></img>
            </a>
          </li>
          <li className="footer__links-item">
            <a className="footer__link" href="mailto:ibrohimbahodirov90@gmail.com">
              <img width={20} height={20} src={email}></img>
            </a>
          </li>
          <li className="footer__links-item">
            <a className="footer__link" href='https://medium.com/@ibrohimbahodirov90'>
              <img width={20} height={20} src={medium}></img>
            </a>
          </li>
          <li className="footer__links-item" >
            <a className="footer__link" href="https://www.linkedin.com/in/ibrohim-baxodirov-a142632b1/">
              <img width={20} height={20} src={linkedin}></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}