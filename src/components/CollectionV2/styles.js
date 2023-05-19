import styled, { css } from 'styled-components';

export const CollectionMain = styled.div`
  .collection-header {
    background-image: var(--apy-bg-gradient);
    padding: 60px 30px;
  }
  .collection-header h2 {
    margin: 0;
    color: var(--text-color);
    font-size: 60px;
  }
  .tab-content .ant-tabs-nav:before {
    border-bottom: none;
  }

  .tab-content .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: var(--text-color);
  }

  .tab-content .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
    background: #0ce467;
  }

  .tab-content .ant-tabs-tab .ant-tabs-tab-btn {
    color: #8a8c95;
    font-size: 16px;
  }

  .tab-content .ant-tabs-nav-wrap {
    background: var(--collection-bg);
    padding: 0 30px;
  }

  .tab-content .ant-tabs-content {
    background: var(--dark-bg);
    padding: 0 30px;
  }
  .tab-content .ant-tabs-nav {
    margin: 0;
  }

  .collection-area-header {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px 0;
  }

  .collection-area-header button {
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    color: var(--text-color);
    background: var(--input-bg);
    border: none;
    gap: 10px;
    min-width: fit-content;
    cursor: pointer;
  }
  .collection-area-header .ant-dropdown-trigger {
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    color: var(--text-color);
    background: var(--input-bg);
    border: none;
    gap: 10px;
    min-width: fit-content;
    cursor: pointer;
  }

  .collection-area-header button svg {
    height: auto;
    width: 20px;
  }

  .collection-area-header span.ant-input-affix-wrapper input {
    padding: 3px;
    background: var(--input-bg);
  }

  .collection-area-header span.ant-input-affix-wrapper svg {
    color: #8a8c95;
  }

  .collection-area-header span.ant-input-affix-wrapper {
    background: var(--input-bg);
  }

  .collection-area-header ul {
    display: flex;
    color: var(--text-color);
    font-weight: 600;
  }

  .collection-area-header ul li {
    border-right: 1px solid var(--border-color);
    background: var(--dark-bg);
    padding: 10px 15px;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    min-width: 60px;
    text-align: center;
    cursor: pointer;
  }
  .collection-area-header ul li:hover {
    background: var(--menu-hover-color);
  }
  .collection-area-header ul li:first-child {
    border-left: 1px solid var(--border-color);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: var(--border-color);
    color: #0ce467;
  }

  .collection-area-header ul li:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .collection-area-body table {
    width: 100%;
    color: var(--text-color);
    border-collapse: collapse;
    text-align: left;
    font-weight: 700;
  }

  .collection-area-body table thead th {
    color: var(--button-hover-bg);
    font-weight: 400;
    height: 50px;
  }

  .collection-area-body tbody td {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 20px 0;
  }

  .collection-area-body table tbody td span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .collection-area-body table tbody td span svg {
    height: auto;
    width: 10px;
  }

  .collection-area-body tbody strong {
    font-weight: 400;
    font-size: 12px;
  }
  .collection-area-body tbody strong.red {
    color: #e64951;
  }
  .collection-area-body tbody strong.green {
    color: #0bb04f;
  }
  .collection-area-body tbody strong.ash {
    color: #8a8c95;
  }
  .collection-area-body tbody tr td:nth-child(2) span svg {
    width: 18px;
    color: #4589ff;
  }

  .collection-area-body tbody tr td:nth-child(2) {
    max-width: 130px;
  }
  .collection-area-body tbody tr td img {
    height: auto;
    width: 40px;
    border-radius: 50px;
  }
  .collection-area-body tbody tr {
    transition: 0.3s;
  }
  .collection-area-body tbody tr:hover {
    background: var(--tab-hover);
    cursor: pointer;
  }
  .collection-area-body-desktop {
    display: block;
  }

  .collection-area-body-mobile {
    display: none;
  }

  @media screen and (max-width: 991px) {
    .collection-area-body-desktop {
      display: none;
    }
    .collection-area-body-mobile {
      display: block;
    }
    .collection-area-header {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
    .collection-area-header .ant-dropdown-trigger {
      min-width: max-content;
    }
  }
`;

export const LoadingScreen = styled.div`    
position: absolute;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;`
