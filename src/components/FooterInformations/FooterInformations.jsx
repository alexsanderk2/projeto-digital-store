import { Link } from 'react-router-dom';
import './FooterInformations.css';

const FooterInformations = ({ title, informations = [] }) => {
  return (
    <div className="footer-info">
      <h4 className="footer-info__title">{title}</h4>
      <ul className="footer-info__list">
        {informations.map((info) => (
          <li key={info.text}>
            <Link to={info.link}>{info.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInformations;
