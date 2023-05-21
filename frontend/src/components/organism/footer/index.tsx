import './index.scss';

import React from 'react';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = () => (
  <footer className="o-footer">
    <div className="o-footer__copyright">&copy; Bapy. All Rights Reserved.</div>
  </footer>
);

export default Footer;
