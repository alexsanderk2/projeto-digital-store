import { Link } from 'react-router-dom';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

const Logo = ({ variant = 'default' }) => {
  const src = variant === 'white' ? logoFooter : logoHeader;

  return (
    <Link to="/" aria-label="Digital Store - página inicial">
      <img src={src} alt="Digital Store" width={253} height={44} />
    </Link>
  );
};

export default Logo;
