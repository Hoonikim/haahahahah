import styled from 'styled-components';
import { StackOverlogo } from '../../assets/Login_assets/Logos';
const FooterStyle = styled.footer`
  background-color: hsl(210deg 8% 15%);
  color: hsl(210deg 8% 90%);
  .footer-logo {
    margin-top: 30px;
    margin-left: 50px;
  }
  .footer-container {
    display: grid;
    grid-template-columns: 0.1fr 0.7fr 0.2fr;
    height: 322px;
    width: 100%;
    .footer-nav {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-start: 2;
    }
  }
  .footer-right {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
  }
  .footer-right__top > ul > li {
    margin-top: 30px;
    float: left;
    margin-left: 1.3rem;
    color: hsl(210deg 8% 65%);
  }
  .footer-right__bottom {
    display: grid;
    align-items: end;
    margin-left: 1.3rem;
    margin-bottom: 50px;
    color: hsl(210deg 8% 65%);
    white-space: pre-line;
  }
  a {
    color: hsl(210deg 8% 65%);
  }
  .footer-nav__cols {
    h5 {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  li {
    margin-top: 12px;
  }
`;

const Footer = () => {
  const footerLinks = [
    {
      title: 'STACK OVERFLOW',
      links: [
        { label: 'Questions', href: '/' },
        { label: 'Help', href: '/' }
      ]
    },
    {
      title: 'PRODUTS',
      links: [
        { label: 'Teams', href: '/' },
        { label: 'Advertising', href: '/' },
        { label: 'Collectives', href: '/' },
        { label: 'Talent', href: '/' }
      ]
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About', href: '/' },
        { label: 'Press', href: '/' },
        { label: 'Work Here', href: '/' },
        { label: 'Legal', href: '/' },
        { label: 'Privacy Policy', href: '/' },
        { label: 'Terms of Service', href: '/' },
        { label: 'Contact Us', href: '/' },
        { label: 'Cookie Settings', href: '/' },
        { label: 'Cookie Policy', href: '/' }
      ]
    },
    {
      title: 'STACK EXCHANGE NETWORK',
      links: [
        { label: 'Technology', href: '/' },
        { label: 'Culture & recreation', href: '/' },
        { label: 'Life & arts', href: '/' },
        { label: 'Science', href: '/' },
        { label: 'Professional', href: '/' },
        { label: 'Business', href: '/' },
        { label: 'API', href: '/' },
        { label: 'Data', href: '/' }
      ]
    }
  ];
  return (
    <>
      <FooterStyle>
        <footer>
          <div className='footer-container'>
            <div className='footer-logo'>
              <StackOverlogo />
            </div>
            <nav className='footer-nav'>
              {footerLinks.map(({ title, links }) => (
                <div key={title} className='footer-nav__cols'>
                  <h5>{title}</h5>
                  <ul>
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <a href={href}>{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            <div className='footer-right'>
              <div className='footer-right__top'>
                <ul>
                  <li>Blog</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
              <div className='footer-right__bottom'>
                Site design / logo © 2023 Stack Exchange Inc; user contributions
                licensed under CC BY-SA. rev 2023.2.17.43248
              </div>
            </div>
          </div>
        </footer>
      </FooterStyle>
    </>
  );
};
export default Footer;
// 미완성