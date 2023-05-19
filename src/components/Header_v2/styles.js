import styled, { css } from 'styled-components';

export const HeaderArea = styled.div`
  .header-desktop {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr;
    background: var(--dark-bg);
    padding: 18px 30px;
    align-items: center;
    gap: 50px;
  }
  .header-mobile {
    display: none;
  }

  .logo img {
    height: auto;
    max-width: 130px;
  }

  .search span,
  .search input {
    background: var(--input-bg);
    border: none;
    padding: 5px;
    color: var(--input-text);
  }

  .search input::placeholder {
    color: var(--input-text);
  }

  .search span svg {
    width: 20px;
    height: auto;
  }

  .menu ul {
    display: flex;
    justify-content: center;
  }

  .menu ul li a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 700;
    padding: 12px 22px;
    border-radius: 5px;
    font-size: 16px;
  }
  .menu ul li a:hover {
    background: var(--menu-hover-color);
  }
  .account-icons ul {
    display: flex;
    gap: 10px;
    color: var(--text-color);
    font-weight: 700;
    justify-content: center;
  }

  .account-icons ul li svg {
    height: auto;
    width: 19px;
  }

  .account-icons ul li a {
    display: flex;
    align-items: center;
    gap: 11px;
  }

  .account-icons .wallet-icon svg {
    background: var(--menu-hover-color);
  }
  .account-icons ul li a {
    padding: 15px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    color: var(--text-color);
  }
  .account-icons ul li.wallet-icon a,
  .account-icons ul li:hover a {
    background: var(--menu-hover-color);
  }

  .account-icons ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 991px) {
    .header-desktop {
      display: none;
    }
    .header-mobile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--dark-bg);
      padding: 15px 30px;
    }

    .header-mobile svg {
      height: auto;
      width: 20px;
      color: var(--text-color);
    }

    .header-mobile-right ul {
      display: flex;
      gap: 10px;
    }

    .header-mobile-right ul li {
      padding: 14px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid transparent;
    }

    .header-mobile-right ul li.active {
      background: var(--menu-hover-color);
    }

    .mobile-search-icon {
      padding: 15px 15px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid var(--menu-hover-color);
    }

    .header-mobile-left {
      display: flex;
      gap: 30px;
    }

    .header-mobile-left img {
      height: auto;
      width: 53px;
    }
  }
`;
export const CusModelArea = styled.div`
  .cus-model-wallet {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 30px 0;
  }

  .model-wallet-left {
    border-right: 1px solid var(--border-color);
    padding-right: 50px;
  }

  .model-wallet-left h2 {
    color: #80828c;
    font-size: 12px;
  }

  .model-wallet-left ul li img {
    height: auto;
    width: 30px;
    border-radius: 5px;
  }

  .model-wallet-left ul li a {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 8px 0;
    color: var(--text-color);
    font-weight: 600;
  }

  .model-wallet-left ul li a:hover {
    background: var(--tab-hover);
  }
  .model-wallet-right ul img {
    height: auto;
    width: 50px;
  }

  .model-wallet-right {
    text-align: center;
    padding: 0 50px;
  }

  .model-wallet-right ul {
    text-align: left;
  }

  .model-wallet-right h2 {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .model-wallet-right ul li {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .model-wallet-right ul li p {
    color: #898b94;
    font-size: 12px;
    font-weight: 300;
  }

  .model-wallet-right ul li p strong {
    color: var(--text-color);
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .model-wallet-right button {
    background: #0ce467;
    border: none;
    display: block;
    margin: 20px auto;
    font-weight: 600;
    font-size: 14px;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .model-wallet-right a {
    color: #0ce467;
    font-weight: 600;
  }

  .model-wallet-right a:hover {
    text-decoration: underline;
  }
  .cus-cart-body-content p {
    text-align: center;
    color: var(--reward-color);
    line-height: 1.9;
    font-size: 14px;
    font-weight: 300;
  }
  @media screen and (max-width: 991px) {
    .menu-footer-area {
      display: grid;
      align-items: flex-end;
    }

    .menu-footer-social-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 150px;
      margin: auto;
      margin-top: 20px;
    }

    .menu-footer-social-area a {
      color: var(--text-color);
    }

    .mobile-side-menus {
      display: grid;
      height: 85vh;
    }
    .mobile-side-menus ul li a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--text-color);
      gap: 10px;
      background: var(--menu-hover-color);
      margin: 10px 0;
      padding: 15px 20px;
      border-radius: 5px;
    }

    .mobile-side-menus ul li a span {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .mobile-side-menus ul li a span svg {
      height: auto;
      width: 20px;
    }

    .mobile-cus-area ul {
      background: center;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    .mobile-cus-area ul img {
      height: auto;
      width: 60px;
      display: block;
      margin: auto;
      margin-bottom: 10px;
      border-radius: 10px;
    }

    .mobile-cus-area ul li a {
      color: var(--text-color);
    }

    .mobile-cus-info h2 {
      margin: 0;
      margin-bottom: 10px;
      color: var(--text-color);
    }

    .mobile-cus-info p {
      margin: 0;
      line-height: 1.6;
    }

    .mobile-cus-info a {
      display: inline-block;
      color: #0ce467;
      border: 1px solid var(--border-color);
      padding: 10px 30px;
      margin: 30px 10px;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
    }
    .mobile-cus-info a:hover {
      background: #0ce467;
      color: #000;
    }
    .mobile-cus-info {
      text-align: center;
      color: var(--reward-color);
    }
  }
`;
