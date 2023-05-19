import styled, { css } from 'styled-components';

export const FooterArea = styled.div`
  background-image: var(--apy-bg-gradient);
  padding: 50px 30px 40px;

  .social-links ul {
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  .social-links ul li svg {
    height: 24px;
    color: var(--text-color);
    width: 24px;
  }

  .footer-menus {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .footer-logo {
    display: flex;
    align-items: flex-start;
    justify-content: end;
  }

  .footer-logo img {
    height: auto;
    max-width: 200px;
  }

  .footer-menu-item h2 {
    color: var(--text-color);
    font-size: 16px;
    margin: 0;
  }

  .footer-menu-item ul li a {
    color: var(--text-color);
    text-decoration: none;
    display: block;
    margin-top: 18px;
    font-size: 16px;
  }
  .footer-menu-item ul li a:hover {
    text-decoration: underline;
  }
  .footer-menu-item ul li.footer-links a {
    color: #13c85d;
  }
  .footer-info {
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-color);
  }

  .footer-info a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 700;
  }

  .footer-info-menus ul {
    display: flex;
    gap: 20px;
  }

  .footer-info-menus {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .footer-info-menus li a {
    display: flex;
  }

  .footer-info-menus ul button {
    background: var(--button-bg);
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;
    padding: 12px 20px;
    border-radius: 50px;
    cursor: pointer;
  }
  .footer-info-menus ul button a {
    color: var(--button-text);
  }
  .footer-info-menus ul button svg {
    width: 20px;
    height: auto;
  }

  @media screen and (max-width: 991px) {
    .footer-menus {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .footer-area-inner {
      grid-template-columns: 1fr;
    }

    .footer-logo {
      justify-content: inherit;
    }

    .footer-info {
      display: grid;
      text-align: center;
      justify-content: center;
    }

    .footer-info-menus {
      display: grid;
      justify-content: center;
    }

    .footer-info-menus ul {
      justify-content: center;
    }
  }
`;
