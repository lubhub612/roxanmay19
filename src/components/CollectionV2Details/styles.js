import styled, { css } from 'styled-components';

export const CollectionMain = styled.div`
  .collection-details-area {
    overflow: hidden;
    position: relative;
    padding: 100px 0 80px;
  }
  .collection-area-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    transform: scale(1.1);
    filter: blur(8px);
    pointer-events: none;
    webkit-mask: linear-gradient(#121619, transparent 95%);
    mask: linear-gradient(#121619, transparent 95%);
  }

  .collection-area-bg img {
    width: 100%;
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
  }

  .collection-area-header ul li:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: var(--menu-hover-color);
    color: #0ce467;
  }
  .collection-area-header ul li svg {
    vertical-align: middle;
    height: auto;
    width: 25px;
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
  .collection-details-area-inner {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr;
    margin: 0 30px;
    align-items: flex-start;
  }

  .collection-details-avatar {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .collection-details-avatar img {
    border-radius: 50px;
    width: 100px;
    height: 100px;
  }

  .collection-details-avatar h2 svg {
    height: auto;
    width: 25px;
    color: var(--text-color);
    vertical-align: middle;
    margin-left: 8px;
    cursor: pointer;
  }

  .collection-details-avatar h2 {
    color: var(--text-color);
    font-weight: 700;
    font-size: 40px;
  }

  .collection-details-avatar h2 strong {
    display: block;
    font-size: 20px;
  }

  .collection-details-avatar h2 svg:first-child {
    color: #4589ff;
  }

  .collection-details-avatar h2 strong span {
    color: #7f818a;
    font-weight: 400;
  }

  .collection-details-left p {
    color: #8a8c95;
    font-size: 16px;
    margin: 10px 0;
    line-height: 1.5;
  }

  .collection-avatar-list {
    display: flex;
    gap: 50px;
    align-items: center;
    margin-top: 30px;
  }

  .collection-avatar-item svg {
    height: auto;
    width: 18px;
  }

  .collection-avatar-item strong {
    display: flex;
    color: var(--text-color);
    gap: 10px;
    font-size: 30px;
  }

  .collection-avatar-item span {
    color: #696c74;
    margin-top: 5px;
    display: block;
    font-size: 18px;
  }

  .collection-area-body {
    display: flex;
    gap: 30px;
    margin-top: 20px;
    padding-bottom: 100px;
  }

  .collection-filter-buy-now {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 20px;
  }

  .collection-filter-buy-now h2 {
    margin: 0;
    color: var(--text-color);
    font-size: 16px;
  }

  .collection-filter-buy-now button .ant-switch-inner {
    background: var(--menu-hover-color);
  }

  .collection-filter-buy-now button.ant-switch-checked .ant-switch-inner {
    background: #109b48;
  }

  .collection-filter-price-range h3 {
    font-size: 12px;
    color: var(--text-color);
    font-weight: 400;
    margin: 15px 0 10px;
  }

  .collection-filter-price-range-input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .collection-filter-price-range-input .ant-input-number {
    width: 100%;
    background: var(--input-bg);
    border: transparent;
    padding: 5px;
    color: var(--text-color);
  }

  .collection-filter-price-range-input .ant-input-number input::placeholder {
    color: #676e75;
  }

  .collection-details-filter {
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 20px;
    height: 100vh;
    padding-bottom: 50px;
  }
  .collection-details-items-list {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .collection-filter-price-range .ant-input-number-handler-wrap {
    display: none !important;
  }

  .collection-filter-price-range .ant-input-number-handler svg {
    color: var(--text-color);
  }

  .collection-filter-price-range-input input {
    color: var(--text-color) !important;
  }

  .collection-filter-price-range {
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .collection-details-filter .ant-collapse-item {
    border-color: transparent;
    margin-bottom: 20px;
  }

  .collection-details-filter .ant-collapse-header-text {
    color: var(--text-color);
  }

  .collection-details-filter svg {
    color: var(--text-color);
  }
  .collection-details-filter .ant-collapse {
    border: none;
  }

  .collection-details-filter .ant-collapse-header {
    padding: 0;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .collection-details-filter .anticon-search svg,
  .collection-details-filter .ant-collapse-arrow svg {
    color: #8a8c95;
  }

  .collection-details-filter .ant-collapse-content {
    background: transparent;
    border-color: var(--border-color);
  }

  .collection-details-filter .ant-collapse-content-box {
    padding: 0;
    margin-top: 20px;
  }
  .collection-panel-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-color);
    margin: 20px 0;
  }

  .collection-panel-list-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .collection-panel-list-left .ant-checkbox-inner {
    background: transparent;
    border-color: var(--border-color);
    border-radius: 0;
    width: 20px;
    height: 20px;
  }

  .collection-panel-list-left .ant-checkbox-checked .ant-checkbox-inner {
    background: var(--text-color);
  }

  .collection-panel-list-left .ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: var(--border-color) !important;
  }

  .collection-panel-list-left strong span {
    display: block;
    font-weight: 400;
    font-size: 12px;
    color: #7c7d86;
  }

  .collection-panel-list-left strong {
    color: var(--reward-color);
    font-weight: 400;
  }

  .collection-panel-list-right strong {
    color: var(--reward-color);
    font-weight: 400;
    text-align: right;
    display: block;
  }

  .collection-panel-list-right strong span {
    display: block;
    font-size: 12px;
    font-weight: 300;
  }
  .collection-details-item-img {
    position: relative;
  }

  .collection-details-item-img img {
    width: 100%;
  }

  .collection-details-item-img span {
    position: absolute;
    top: 10px;
    left: 8px;
  }

  .collection-details-item-img strong {
    position: absolute;
    right: 10px;
    top: 10px;
    display: grid;
    gap: 10px;
    display: none;
  }
  .collection-details-item:hover .collection-details-item-img strong {
    display: grid;
  }
  .collection-details-item-img span svg {
    height: auto;
    width: 35px;
    color: #fff;
    background: var(--token-coin-bg);
    border-radius: 50px;
    padding: 5px;
  }

  .collection-details-item-img strong button {
    background: var(--token-coin-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    color: #fff;
    cursor: pointer;
  }
  .collection-details-item h3 {
    font-size: 14px;
    color: #c6c6cb;
    margin: 15px 15px 10px;
  }

  .collection-details-item {
    border: 1px solid var(--border-color);
    border-radius: 10px;
    position: relative;
    padding-bottom: 20px;
  }

  .collection-details-item h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 15px 30px;
  }

  .collection-details-item h4 span svg {
    height: auto;
    width: 10px;
  }

  .collection-details-item h4 span {
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .collection-details-item h4 strong svg {
    height: auto;
    width: 15px;
  }

  .collection-details-item h4 strong {
    display: flex;
    align-items: center;
    gap: 3px;
    color: #05cd59;
    font-weight: 400;
    font-size: 12px;
    border: 1px solid #0c5c2c;
    border-radius: 8px;
    padding: 3px 10px;
  }

  .collection-details-item h6 {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #777a82;
    margin: 0 15px;
  }

  .collection-details-item h6 svg {
    height: auto;
    width: 12px;
  }

  .collection-details-item h6 strong {
    color: var(--text-color);
  }

  .collection-details-item a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    font-weight: 700;
    background: var(--tab-hover);
    color: #0ce467;
    position: absolute;
    width: 100%;
    bottom: 0;
    display: none;
  }
  .collection-details-item:hover a {
    display: flex;
  }
  .collection-details-item a svg {
    height: auto;
    width: 20px;
  }
  .collection-details-right {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
  }

  .collection-details-right a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 10px;
    border-radius: 8px;
    text-decoration: none;
  }

  .collection-details-right a svg {
    height: auto;
    width: 22px;
  }

  .collection-details-right a:hover {
    background: var(--menu-hover-color);
  }
  @media screen and (max-width: 1300px) {
    .collection-details-items-list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 991px) {
    .collection-details-right {
      justify-content: flex-start;
      margin: 20px 0;
    }
    .collection-details-filter {
      display: none;
    }
    .collection-area-header .ant-dropdown-trigger,
    .collection-area-header ul {
      display: none;
    }
    .collection-details-items-list {
      grid-template-columns: 1fr 1fr;
    }
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

    .collection-area-bg {
      position: unset;
      opacity: unset;
      transform: unset;
      filter: unset;
      height: 160px;
      -webkit-mask: unset;
    }

    .collection-details-area {
      padding: 0;
      overflow: unset;
    }

    .collection-area-bg img {
      height: 150px;
      object-fit: cover;
    }

    .collection-details-avatar {
      display: grid;
      gap: 0;
      margin-top: -60px;
    }

    .collection-details-avatar h2 {
      font-size: 25px;
      margin-top: 40px;
    }

    .collection-details-left p {
    }

    .collection-avatar-list {
      flex-wrap: wrap;
      gap: 30px;
    }

    .collection-details-area-inner {
      grid-template-columns: 1fr;
    }

    .collection-avatar-item strong {
      font-size: 19px;
      align-items: center;
    }

    .collection-avatar-item span {
      font-size: 14px;
      margin: 0;
    }

    .collection-avatar-item svg {
      width: 10px;
    }
  }
`;
