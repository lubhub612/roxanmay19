import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
  Tabs,
  Input,
  Dropdown,
  Collapse,
  Switch,
  InputNumber,
  Checkbox,
} from 'antd';
import CollImg from '../../assets/images/coll-img.avif';
import CollImgItem from '../../assets/images/sample-item.avif';
import { CollectionMain } from './styles';
const { Panel } = Collapse;
export default function CollectionV2Details() {
  const TabOne = () => {
    const options = [
      {
        key: '11',
        label: <a href="#">Price Low to High</a>,
      },
      {
        key: '22',
        label: <a href="#">Price High to Low</a>,
      },
      {
        key: '33',
        label: <a href="#">Rank: Rare to Common</a>,
      },
      {
        key: '44',
        label: <a href="#">Rank: Common to Rare</a>,
      },
      {
        key: '55',
        label: <a href="#">Recent Activity</a>,
      },
    ];
    return (
      <div className="collection-area">
        <div className="collection-area-header">
          <button>
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              className="chakra-icon css-1sdtgly"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 28H14C12.8954 28 12 27.1046 12 26V18.41L4.59 11C4.21441 10.6266 4.00223 10.1196 4 9.59V6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V9.59C27.9978 10.1196 27.7856 10.6266 27.41 11L20 18.41V26C20 27.1046 19.1046 28 18 28ZM6 6V9.59L14 17.59V26H18V17.59L26 9.59V6H6Z"
                fill="currentColor"
              ></path>
            </svg>{' '}
          </button>
          <Input
            size="large"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
          <Dropdown
            menu={{
              items: options,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              Price Low to High
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </Dropdown>
          <ul>
            <li>
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                className="chakra-icon css-1sdtgly"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 6H28V8H10V6ZM10 24H28V26H10V24ZM10 15H28V17H10V15ZM4 15H6V17H4V15ZM4 6H6V8H4V6ZM4 24H6V26H4V24Z"
                  fill="currentColor"
                ></path>
              </svg>
            </li>
            <li>
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                className="chakra-icon css-1sdtgly"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5C3 3.89543 3.89543 3 5 3H27C28.1046 3 29 3.89543 29 5V27C29 28.1046 28.1046 29 27 29H5C3.89543 29 3 28.1046 3 27V5ZM27 5L17 5V15H27V5ZM27 17H17V27H27V17ZM15 15V5L5 5V15H15ZM5 17H15V27H5V17Z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="collection-area-body">
          <div className="collection-details-filter">
            <div className="collection-details-filter-inner">
              <div className="collection-filter-buy-now">
                <h2>Buy Now</h2>
                <Switch />
              </div>
              <div className="collection-filter-price-range">
                <h3>Price Range (ETH)</h3>
                <div className="collection-filter-price-range-input">
                  <InputNumber placeholder="Min" />
                  <InputNumber placeholder="Max" />
                </div>
              </div>
              <Collapse defaultActiveKey={['1']} expandIconPosition="end">
                <Panel header="Rarity Rank" key="1">
                  <Input
                    size="large"
                    placeholder="Filter properties"
                    prefix={<SearchOutlined />}
                  />
                </Panel>
                <Panel header="Background" key="2">
                  <Input
                    size="large"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                  />
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                </Panel>
                <Panel header="Clothes" key="3">
                  <Input
                    size="large"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                  />
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                </Panel>
                <Panel header="Earring" key="4">
                  <Input
                    size="large"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                  />
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                </Panel>
                <Panel header="Eyes" key="5">
                  <Input
                    size="large"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                  />
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                  <div className="collection-panel-list">
                    <div className="collection-panel-list-left">
                      <Checkbox />
                      <strong>
                        Purple <span>51.49 floor</span>
                      </strong>
                    </div>
                    <div className="collection-panel-list-right">
                      <strong>
                        1,291 <span>(12.91%)</span>
                      </strong>
                    </div>
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
          <div className="collection-details-items-list">
            <div className="collection-details-item">
              <div className="collection-details-item-img">
                <img src={CollImgItem} alt="item" />
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    className="chakra-icon css-zbxbij"
                  >
                    <path
                      d="M31 20.825V19.2575C31 19.1125 30.8647 19.0075 30.7318 19.0475L23.576 21.1875C23.5374 21.1975 23.5035 21.22 23.4769 21.25C22.7105 22.1258 22.0592 22.7135 21.8867 22.8692L21.8747 22.88C21.43 23.27 20.879 23.4825 20.299 23.4825H17.7083V20.75H19.7673C19.8205 20.75 19.8713 20.73 19.9099 20.695L20.1757 20.4425C20.2893 20.335 20.4247 20.205 20.5866 20.0375C20.6003 20.0232 20.6143 20.0089 20.6284 19.9943C20.7135 19.9066 20.8044 19.8129 20.8935 19.71C20.9999 19.6025 21.1038 19.4825 21.2004 19.365C21.3623 19.185 21.517 18.9975 21.6789 18.8C21.7949 18.67 21.9013 18.5225 22.0052 18.375C22.1212 18.235 22.2348 18.0775 22.3411 17.9275C22.3807 17.8674 22.4228 17.8065 22.4658 17.7444C22.5068 17.6852 22.5487 17.6247 22.59 17.5625C22.6673 17.4425 22.7447 17.315 22.8099 17.195C23.0129 16.87 23.1845 16.5225 23.3295 16.175C23.3961 16.0262 23.4493 15.8694 23.501 15.7171C23.5075 15.698 23.514 15.679 23.5204 15.66C23.5784 15.4825 23.6267 15.315 23.663 15.1375C23.75 14.72 23.7693 14.305 23.7307 13.89C23.721 13.76 23.7113 13.6325 23.6824 13.5125V13.4925C23.6727 13.4075 23.6533 13.3125 23.6267 13.225C23.5398 12.82 23.4044 12.415 23.2328 12.0175C23.1748 11.87 23.1072 11.72 23.0419 11.5825C22.8873 11.285 22.7253 10.9875 22.5417 10.7C22.5048 10.6393 22.4641 10.5778 22.4235 10.5164C22.3922 10.4691 22.3609 10.4218 22.3314 10.375C22.2151 10.1894 22.0843 10.0105 21.9574 9.83688C21.9288 9.79766 21.9003 9.75871 21.8722 9.72001C21.7973 9.61826 21.7153 9.51653 21.6328 9.41412C21.5876 9.35798 21.5422 9.30164 21.4977 9.24498C21.372 9.0875 21.2488 8.93751 21.1231 8.79C20.6736 8.26499 20.2024 7.79001 19.7818 7.38501C19.7045 7.305 19.6199 7.225 19.5329 7.14752C19.2067 6.84 18.9094 6.57248 18.6605 6.36502C18.5857 6.30549 18.5186 6.24685 18.4562 6.19226C18.4137 6.15514 18.3734 6.11989 18.3342 6.08752C18.2588 6.02935 18.1933 5.97776 18.1384 5.93445C18.1035 5.90699 18.0729 5.88286 18.0467 5.86249C18.0273 5.8475 18.0056 5.83752 17.9839 5.82998L17.7083 5.75002V3.39C17.7083 3.00501 17.5585 2.66001 17.3193 2.40748C17.08 2.155 16.7465 2 16.3792 2C15.6445 2 15.05 2.62249 15.05 3.39V4.97998L14.9123 4.94002L14.5377 4.82999L14.1969 4.73251L14.1937 4.73157C14.1937 4.73157 14.1901 4.72998 14.1873 4.72998H14.18L11.5942 4.005C11.4806 3.97249 11.3839 4.09999 11.4419 4.2075L11.8552 4.9975C11.8786 5.05821 11.9084 5.11893 11.9389 5.18132C11.9587 5.2217 11.9788 5.26278 11.9977 5.30502C12.0654 5.44498 12.1331 5.59249 12.1983 5.74C12.2563 5.86998 12.3144 5.99749 12.382 6.1375C12.4104 6.20333 12.4395 6.26995 12.4689 6.33753C12.5769 6.58564 12.6905 6.84654 12.8025 7.12752C12.8992 7.36501 12.9958 7.6025 13.0804 7.85002C13.3124 8.4725 13.5323 9.13748 13.7233 9.82002C13.7708 9.97277 13.8088 10.1206 13.8473 10.2704C13.8636 10.3339 13.88 10.3978 13.8972 10.4625L13.9238 10.5825C14.0012 10.9 14.0689 11.215 14.1172 11.5325C14.1558 11.75 14.1921 11.9575 14.2114 12.1675C14.2404 12.405 14.2694 12.6425 14.2791 12.88C14.2984 13.0975 14.3081 13.325 14.3081 13.5425C14.3081 14.0975 14.2598 14.6325 14.1462 15.1375C14.139 15.1646 14.1319 15.1921 14.1248 15.2198C14.0929 15.3427 14.06 15.4701 14.0205 15.5925C13.9848 15.7236 13.9386 15.8547 13.8905 15.9908C13.8735 16.039 13.8563 16.0878 13.8392 16.1375C13.8361 16.1463 13.8329 16.1552 13.8297 16.1641C13.7941 16.2631 13.758 16.3639 13.7136 16.4625C13.4743 17.0575 13.1771 17.65 12.8702 18.205C12.4207 19.0275 11.9688 19.75 11.6522 20.215C11.6328 20.2451 11.6139 20.2736 11.5957 20.3012C11.573 20.3354 11.5514 20.3681 11.5314 20.4C11.4323 20.545 11.5338 20.75 11.7053 20.75H15.05V23.4825H11.6667C10.758 23.4825 9.91699 22.95 9.511 22.0975C9.30076 21.67 9.21858 21.2 9.26694 20.74C9.27898 20.6025 9.1799 20.4725 9.0446 20.4725H2.21024C2.09423 20.4725 2 20.57 2 20.69V20.835C2 25.345 5.5211 29 9.86623 29H22.126C24.4241 29 25.729 26.8336 27.0116 24.7043C27.3691 24.1108 27.7249 23.5201 28.1 22.98C28.7743 22.01 30.3959 21.24 30.8695 21.03C30.9468 20.995 31 20.915 31 20.825Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4.13152 16.5262L4.03272 16.6834C3.94565 16.8191 4.04211 17 4.20682 17H10.3339C10.4021 17 10.4656 16.9667 10.5033 16.9095C10.5833 16.7857 10.6586 16.6572 10.7268 16.5262C11.2563 15.6262 11.7268 14.6524 11.8986 13.9334C12.3009 12.1858 11.4421 9.37873 10.4468 7.12164C10.3809 6.97166 10.1763 6.95739 10.0892 7.09546L4.13152 16.5262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <strong>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </strong>
              </div>
              <h3>BoredApeYachtClub #1786</h3>
              <h4>
                <span>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-1bftssy"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  50.49
                </span>{' '}
                <strong>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-1gpu3vi"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      focusable="false"
                      className="chakra-icon css-brr9t8"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 7C11.8954 7 11 7.89543 11 9V14H5C3.89543 14 3 14.8954 3 16V23C3 24.1046 3.89543 25 5 25H7H11H13H19H21H25H27C28.1046 25 29 24.1046 29 23V19C29 17.8954 28.1046 17 27 17H21V9C21 7.89543 20.1046 7 19 7H13ZM25 23H27V19H21V23H25ZM19 23V19V9H13V16V23H19ZM11 23V16H5V23H7H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>{' '}
                  6,098
                </strong>
              </h4>
              <h6>
                Offer{' '}
                <svg
                  viewBox="0 0 48 96"
                  focusable="false"
                  className="chakra-icon css-1ijxv3w"
                >
                  <path
                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                    fill="#CF373E"
                  ></path>
                  <path
                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                    fill="#DF5960"
                  ></path>
                </svg>{' '}
                <strong>42</strong>
              </h6>
              <a href="#">
                Connect{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-1sdtgly"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 1V10.1715L20.585 6.58655L21.9992 8.00076L16 13.9999V14L16 14L16 14V13.9999L10.0008 8.00076L11.415 6.58655L15 10.1715V1H17ZM28 6.99996H27.3095L26 12.5L25.9745 12.5007L25.1997 16H7.61969L7.01959 12.9995L7 13L5 3C4.90353 2.52688 4.48276 1.99023 4 1.99996H0V3.99996H3.18L7 23.2C7.09647 23.6731 7.51724 24.0097 8 24H26V22H8.82L8 18H26C26.4767 18.0116 26.8952 17.6851 27 17.22L29 8.21996C29.0679 7.9193 28.9934 7.60412 28.798 7.36573C28.6026 7.12734 28.3081 6.99239 28 6.99996ZM12 27.9999C12 29.1045 11.1046 29.9999 10 29.9999C8.89543 29.9999 8 29.1045 8 27.9999C8 26.8954 8.89543 25.9999 10 25.9999C11.1046 25.9999 12 26.8954 12 27.9999ZM26 27.9999C26 29.1045 25.1046 29.9999 24 29.9999C22.8954 29.9999 22 29.1045 22 27.9999C22 26.8954 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 26.8954 26 27.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="collection-details-item">
              <div className="collection-details-item-img">
                <img src={CollImgItem} alt="item" />
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    className="chakra-icon css-zbxbij"
                  >
                    <path
                      d="M31 20.825V19.2575C31 19.1125 30.8647 19.0075 30.7318 19.0475L23.576 21.1875C23.5374 21.1975 23.5035 21.22 23.4769 21.25C22.7105 22.1258 22.0592 22.7135 21.8867 22.8692L21.8747 22.88C21.43 23.27 20.879 23.4825 20.299 23.4825H17.7083V20.75H19.7673C19.8205 20.75 19.8713 20.73 19.9099 20.695L20.1757 20.4425C20.2893 20.335 20.4247 20.205 20.5866 20.0375C20.6003 20.0232 20.6143 20.0089 20.6284 19.9943C20.7135 19.9066 20.8044 19.8129 20.8935 19.71C20.9999 19.6025 21.1038 19.4825 21.2004 19.365C21.3623 19.185 21.517 18.9975 21.6789 18.8C21.7949 18.67 21.9013 18.5225 22.0052 18.375C22.1212 18.235 22.2348 18.0775 22.3411 17.9275C22.3807 17.8674 22.4228 17.8065 22.4658 17.7444C22.5068 17.6852 22.5487 17.6247 22.59 17.5625C22.6673 17.4425 22.7447 17.315 22.8099 17.195C23.0129 16.87 23.1845 16.5225 23.3295 16.175C23.3961 16.0262 23.4493 15.8694 23.501 15.7171C23.5075 15.698 23.514 15.679 23.5204 15.66C23.5784 15.4825 23.6267 15.315 23.663 15.1375C23.75 14.72 23.7693 14.305 23.7307 13.89C23.721 13.76 23.7113 13.6325 23.6824 13.5125V13.4925C23.6727 13.4075 23.6533 13.3125 23.6267 13.225C23.5398 12.82 23.4044 12.415 23.2328 12.0175C23.1748 11.87 23.1072 11.72 23.0419 11.5825C22.8873 11.285 22.7253 10.9875 22.5417 10.7C22.5048 10.6393 22.4641 10.5778 22.4235 10.5164C22.3922 10.4691 22.3609 10.4218 22.3314 10.375C22.2151 10.1894 22.0843 10.0105 21.9574 9.83688C21.9288 9.79766 21.9003 9.75871 21.8722 9.72001C21.7973 9.61826 21.7153 9.51653 21.6328 9.41412C21.5876 9.35798 21.5422 9.30164 21.4977 9.24498C21.372 9.0875 21.2488 8.93751 21.1231 8.79C20.6736 8.26499 20.2024 7.79001 19.7818 7.38501C19.7045 7.305 19.6199 7.225 19.5329 7.14752C19.2067 6.84 18.9094 6.57248 18.6605 6.36502C18.5857 6.30549 18.5186 6.24685 18.4562 6.19226C18.4137 6.15514 18.3734 6.11989 18.3342 6.08752C18.2588 6.02935 18.1933 5.97776 18.1384 5.93445C18.1035 5.90699 18.0729 5.88286 18.0467 5.86249C18.0273 5.8475 18.0056 5.83752 17.9839 5.82998L17.7083 5.75002V3.39C17.7083 3.00501 17.5585 2.66001 17.3193 2.40748C17.08 2.155 16.7465 2 16.3792 2C15.6445 2 15.05 2.62249 15.05 3.39V4.97998L14.9123 4.94002L14.5377 4.82999L14.1969 4.73251L14.1937 4.73157C14.1937 4.73157 14.1901 4.72998 14.1873 4.72998H14.18L11.5942 4.005C11.4806 3.97249 11.3839 4.09999 11.4419 4.2075L11.8552 4.9975C11.8786 5.05821 11.9084 5.11893 11.9389 5.18132C11.9587 5.2217 11.9788 5.26278 11.9977 5.30502C12.0654 5.44498 12.1331 5.59249 12.1983 5.74C12.2563 5.86998 12.3144 5.99749 12.382 6.1375C12.4104 6.20333 12.4395 6.26995 12.4689 6.33753C12.5769 6.58564 12.6905 6.84654 12.8025 7.12752C12.8992 7.36501 12.9958 7.6025 13.0804 7.85002C13.3124 8.4725 13.5323 9.13748 13.7233 9.82002C13.7708 9.97277 13.8088 10.1206 13.8473 10.2704C13.8636 10.3339 13.88 10.3978 13.8972 10.4625L13.9238 10.5825C14.0012 10.9 14.0689 11.215 14.1172 11.5325C14.1558 11.75 14.1921 11.9575 14.2114 12.1675C14.2404 12.405 14.2694 12.6425 14.2791 12.88C14.2984 13.0975 14.3081 13.325 14.3081 13.5425C14.3081 14.0975 14.2598 14.6325 14.1462 15.1375C14.139 15.1646 14.1319 15.1921 14.1248 15.2198C14.0929 15.3427 14.06 15.4701 14.0205 15.5925C13.9848 15.7236 13.9386 15.8547 13.8905 15.9908C13.8735 16.039 13.8563 16.0878 13.8392 16.1375C13.8361 16.1463 13.8329 16.1552 13.8297 16.1641C13.7941 16.2631 13.758 16.3639 13.7136 16.4625C13.4743 17.0575 13.1771 17.65 12.8702 18.205C12.4207 19.0275 11.9688 19.75 11.6522 20.215C11.6328 20.2451 11.6139 20.2736 11.5957 20.3012C11.573 20.3354 11.5514 20.3681 11.5314 20.4C11.4323 20.545 11.5338 20.75 11.7053 20.75H15.05V23.4825H11.6667C10.758 23.4825 9.91699 22.95 9.511 22.0975C9.30076 21.67 9.21858 21.2 9.26694 20.74C9.27898 20.6025 9.1799 20.4725 9.0446 20.4725H2.21024C2.09423 20.4725 2 20.57 2 20.69V20.835C2 25.345 5.5211 29 9.86623 29H22.126C24.4241 29 25.729 26.8336 27.0116 24.7043C27.3691 24.1108 27.7249 23.5201 28.1 22.98C28.7743 22.01 30.3959 21.24 30.8695 21.03C30.9468 20.995 31 20.915 31 20.825Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4.13152 16.5262L4.03272 16.6834C3.94565 16.8191 4.04211 17 4.20682 17H10.3339C10.4021 17 10.4656 16.9667 10.5033 16.9095C10.5833 16.7857 10.6586 16.6572 10.7268 16.5262C11.2563 15.6262 11.7268 14.6524 11.8986 13.9334C12.3009 12.1858 11.4421 9.37873 10.4468 7.12164C10.3809 6.97166 10.1763 6.95739 10.0892 7.09546L4.13152 16.5262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <strong>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </strong>
              </div>
              <h3>BoredApeYachtClub #1786</h3>
              <h4>
                <span>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-1bftssy"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  50.49
                </span>{' '}
                <strong>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-1gpu3vi"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      focusable="false"
                      className="chakra-icon css-brr9t8"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 7C11.8954 7 11 7.89543 11 9V14H5C3.89543 14 3 14.8954 3 16V23C3 24.1046 3.89543 25 5 25H7H11H13H19H21H25H27C28.1046 25 29 24.1046 29 23V19C29 17.8954 28.1046 17 27 17H21V9C21 7.89543 20.1046 7 19 7H13ZM25 23H27V19H21V23H25ZM19 23V19V9H13V16V23H19ZM11 23V16H5V23H7H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>{' '}
                  6,098
                </strong>
              </h4>
              <h6>
                Offer{' '}
                <svg
                  viewBox="0 0 48 96"
                  focusable="false"
                  className="chakra-icon css-1ijxv3w"
                >
                  <path
                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                    fill="#CF373E"
                  ></path>
                  <path
                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                    fill="#DF5960"
                  ></path>
                </svg>{' '}
                <strong>42</strong>
              </h6>
              <a href="#">
                Connect{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-1sdtgly"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 1V10.1715L20.585 6.58655L21.9992 8.00076L16 13.9999V14L16 14L16 14V13.9999L10.0008 8.00076L11.415 6.58655L15 10.1715V1H17ZM28 6.99996H27.3095L26 12.5L25.9745 12.5007L25.1997 16H7.61969L7.01959 12.9995L7 13L5 3C4.90353 2.52688 4.48276 1.99023 4 1.99996H0V3.99996H3.18L7 23.2C7.09647 23.6731 7.51724 24.0097 8 24H26V22H8.82L8 18H26C26.4767 18.0116 26.8952 17.6851 27 17.22L29 8.21996C29.0679 7.9193 28.9934 7.60412 28.798 7.36573C28.6026 7.12734 28.3081 6.99239 28 6.99996ZM12 27.9999C12 29.1045 11.1046 29.9999 10 29.9999C8.89543 29.9999 8 29.1045 8 27.9999C8 26.8954 8.89543 25.9999 10 25.9999C11.1046 25.9999 12 26.8954 12 27.9999ZM26 27.9999C26 29.1045 25.1046 29.9999 24 29.9999C22.8954 29.9999 22 29.1045 22 27.9999C22 26.8954 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 26.8954 26 27.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="collection-details-item">
              <div className="collection-details-item-img">
                <img src={CollImgItem} alt="item" />
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    className="chakra-icon css-zbxbij"
                  >
                    <path
                      d="M31 20.825V19.2575C31 19.1125 30.8647 19.0075 30.7318 19.0475L23.576 21.1875C23.5374 21.1975 23.5035 21.22 23.4769 21.25C22.7105 22.1258 22.0592 22.7135 21.8867 22.8692L21.8747 22.88C21.43 23.27 20.879 23.4825 20.299 23.4825H17.7083V20.75H19.7673C19.8205 20.75 19.8713 20.73 19.9099 20.695L20.1757 20.4425C20.2893 20.335 20.4247 20.205 20.5866 20.0375C20.6003 20.0232 20.6143 20.0089 20.6284 19.9943C20.7135 19.9066 20.8044 19.8129 20.8935 19.71C20.9999 19.6025 21.1038 19.4825 21.2004 19.365C21.3623 19.185 21.517 18.9975 21.6789 18.8C21.7949 18.67 21.9013 18.5225 22.0052 18.375C22.1212 18.235 22.2348 18.0775 22.3411 17.9275C22.3807 17.8674 22.4228 17.8065 22.4658 17.7444C22.5068 17.6852 22.5487 17.6247 22.59 17.5625C22.6673 17.4425 22.7447 17.315 22.8099 17.195C23.0129 16.87 23.1845 16.5225 23.3295 16.175C23.3961 16.0262 23.4493 15.8694 23.501 15.7171C23.5075 15.698 23.514 15.679 23.5204 15.66C23.5784 15.4825 23.6267 15.315 23.663 15.1375C23.75 14.72 23.7693 14.305 23.7307 13.89C23.721 13.76 23.7113 13.6325 23.6824 13.5125V13.4925C23.6727 13.4075 23.6533 13.3125 23.6267 13.225C23.5398 12.82 23.4044 12.415 23.2328 12.0175C23.1748 11.87 23.1072 11.72 23.0419 11.5825C22.8873 11.285 22.7253 10.9875 22.5417 10.7C22.5048 10.6393 22.4641 10.5778 22.4235 10.5164C22.3922 10.4691 22.3609 10.4218 22.3314 10.375C22.2151 10.1894 22.0843 10.0105 21.9574 9.83688C21.9288 9.79766 21.9003 9.75871 21.8722 9.72001C21.7973 9.61826 21.7153 9.51653 21.6328 9.41412C21.5876 9.35798 21.5422 9.30164 21.4977 9.24498C21.372 9.0875 21.2488 8.93751 21.1231 8.79C20.6736 8.26499 20.2024 7.79001 19.7818 7.38501C19.7045 7.305 19.6199 7.225 19.5329 7.14752C19.2067 6.84 18.9094 6.57248 18.6605 6.36502C18.5857 6.30549 18.5186 6.24685 18.4562 6.19226C18.4137 6.15514 18.3734 6.11989 18.3342 6.08752C18.2588 6.02935 18.1933 5.97776 18.1384 5.93445C18.1035 5.90699 18.0729 5.88286 18.0467 5.86249C18.0273 5.8475 18.0056 5.83752 17.9839 5.82998L17.7083 5.75002V3.39C17.7083 3.00501 17.5585 2.66001 17.3193 2.40748C17.08 2.155 16.7465 2 16.3792 2C15.6445 2 15.05 2.62249 15.05 3.39V4.97998L14.9123 4.94002L14.5377 4.82999L14.1969 4.73251L14.1937 4.73157C14.1937 4.73157 14.1901 4.72998 14.1873 4.72998H14.18L11.5942 4.005C11.4806 3.97249 11.3839 4.09999 11.4419 4.2075L11.8552 4.9975C11.8786 5.05821 11.9084 5.11893 11.9389 5.18132C11.9587 5.2217 11.9788 5.26278 11.9977 5.30502C12.0654 5.44498 12.1331 5.59249 12.1983 5.74C12.2563 5.86998 12.3144 5.99749 12.382 6.1375C12.4104 6.20333 12.4395 6.26995 12.4689 6.33753C12.5769 6.58564 12.6905 6.84654 12.8025 7.12752C12.8992 7.36501 12.9958 7.6025 13.0804 7.85002C13.3124 8.4725 13.5323 9.13748 13.7233 9.82002C13.7708 9.97277 13.8088 10.1206 13.8473 10.2704C13.8636 10.3339 13.88 10.3978 13.8972 10.4625L13.9238 10.5825C14.0012 10.9 14.0689 11.215 14.1172 11.5325C14.1558 11.75 14.1921 11.9575 14.2114 12.1675C14.2404 12.405 14.2694 12.6425 14.2791 12.88C14.2984 13.0975 14.3081 13.325 14.3081 13.5425C14.3081 14.0975 14.2598 14.6325 14.1462 15.1375C14.139 15.1646 14.1319 15.1921 14.1248 15.2198C14.0929 15.3427 14.06 15.4701 14.0205 15.5925C13.9848 15.7236 13.9386 15.8547 13.8905 15.9908C13.8735 16.039 13.8563 16.0878 13.8392 16.1375C13.8361 16.1463 13.8329 16.1552 13.8297 16.1641C13.7941 16.2631 13.758 16.3639 13.7136 16.4625C13.4743 17.0575 13.1771 17.65 12.8702 18.205C12.4207 19.0275 11.9688 19.75 11.6522 20.215C11.6328 20.2451 11.6139 20.2736 11.5957 20.3012C11.573 20.3354 11.5514 20.3681 11.5314 20.4C11.4323 20.545 11.5338 20.75 11.7053 20.75H15.05V23.4825H11.6667C10.758 23.4825 9.91699 22.95 9.511 22.0975C9.30076 21.67 9.21858 21.2 9.26694 20.74C9.27898 20.6025 9.1799 20.4725 9.0446 20.4725H2.21024C2.09423 20.4725 2 20.57 2 20.69V20.835C2 25.345 5.5211 29 9.86623 29H22.126C24.4241 29 25.729 26.8336 27.0116 24.7043C27.3691 24.1108 27.7249 23.5201 28.1 22.98C28.7743 22.01 30.3959 21.24 30.8695 21.03C30.9468 20.995 31 20.915 31 20.825Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4.13152 16.5262L4.03272 16.6834C3.94565 16.8191 4.04211 17 4.20682 17H10.3339C10.4021 17 10.4656 16.9667 10.5033 16.9095C10.5833 16.7857 10.6586 16.6572 10.7268 16.5262C11.2563 15.6262 11.7268 14.6524 11.8986 13.9334C12.3009 12.1858 11.4421 9.37873 10.4468 7.12164C10.3809 6.97166 10.1763 6.95739 10.0892 7.09546L4.13152 16.5262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <strong>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </strong>
              </div>
              <h3>BoredApeYachtClub #1786</h3>
              <h4>
                <span>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-1bftssy"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  50.49
                </span>{' '}
                <strong>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-1gpu3vi"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      focusable="false"
                      className="chakra-icon css-brr9t8"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 7C11.8954 7 11 7.89543 11 9V14H5C3.89543 14 3 14.8954 3 16V23C3 24.1046 3.89543 25 5 25H7H11H13H19H21H25H27C28.1046 25 29 24.1046 29 23V19C29 17.8954 28.1046 17 27 17H21V9C21 7.89543 20.1046 7 19 7H13ZM25 23H27V19H21V23H25ZM19 23V19V9H13V16V23H19ZM11 23V16H5V23H7H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>{' '}
                  6,098
                </strong>
              </h4>
              <h6>
                Offer{' '}
                <svg
                  viewBox="0 0 48 96"
                  focusable="false"
                  className="chakra-icon css-1ijxv3w"
                >
                  <path
                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                    fill="#CF373E"
                  ></path>
                  <path
                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                    fill="#DF5960"
                  ></path>
                </svg>{' '}
                <strong>42</strong>
              </h6>
              <a href="#">
                Connect{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-1sdtgly"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 1V10.1715L20.585 6.58655L21.9992 8.00076L16 13.9999V14L16 14L16 14V13.9999L10.0008 8.00076L11.415 6.58655L15 10.1715V1H17ZM28 6.99996H27.3095L26 12.5L25.9745 12.5007L25.1997 16H7.61969L7.01959 12.9995L7 13L5 3C4.90353 2.52688 4.48276 1.99023 4 1.99996H0V3.99996H3.18L7 23.2C7.09647 23.6731 7.51724 24.0097 8 24H26V22H8.82L8 18H26C26.4767 18.0116 26.8952 17.6851 27 17.22L29 8.21996C29.0679 7.9193 28.9934 7.60412 28.798 7.36573C28.6026 7.12734 28.3081 6.99239 28 6.99996ZM12 27.9999C12 29.1045 11.1046 29.9999 10 29.9999C8.89543 29.9999 8 29.1045 8 27.9999C8 26.8954 8.89543 25.9999 10 25.9999C11.1046 25.9999 12 26.8954 12 27.9999ZM26 27.9999C26 29.1045 25.1046 29.9999 24 29.9999C22.8954 29.9999 22 29.1045 22 27.9999C22 26.8954 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 26.8954 26 27.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="collection-details-item">
              <div className="collection-details-item-img">
                <img src={CollImgItem} alt="item" />
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    className="chakra-icon css-zbxbij"
                  >
                    <path
                      d="M31 20.825V19.2575C31 19.1125 30.8647 19.0075 30.7318 19.0475L23.576 21.1875C23.5374 21.1975 23.5035 21.22 23.4769 21.25C22.7105 22.1258 22.0592 22.7135 21.8867 22.8692L21.8747 22.88C21.43 23.27 20.879 23.4825 20.299 23.4825H17.7083V20.75H19.7673C19.8205 20.75 19.8713 20.73 19.9099 20.695L20.1757 20.4425C20.2893 20.335 20.4247 20.205 20.5866 20.0375C20.6003 20.0232 20.6143 20.0089 20.6284 19.9943C20.7135 19.9066 20.8044 19.8129 20.8935 19.71C20.9999 19.6025 21.1038 19.4825 21.2004 19.365C21.3623 19.185 21.517 18.9975 21.6789 18.8C21.7949 18.67 21.9013 18.5225 22.0052 18.375C22.1212 18.235 22.2348 18.0775 22.3411 17.9275C22.3807 17.8674 22.4228 17.8065 22.4658 17.7444C22.5068 17.6852 22.5487 17.6247 22.59 17.5625C22.6673 17.4425 22.7447 17.315 22.8099 17.195C23.0129 16.87 23.1845 16.5225 23.3295 16.175C23.3961 16.0262 23.4493 15.8694 23.501 15.7171C23.5075 15.698 23.514 15.679 23.5204 15.66C23.5784 15.4825 23.6267 15.315 23.663 15.1375C23.75 14.72 23.7693 14.305 23.7307 13.89C23.721 13.76 23.7113 13.6325 23.6824 13.5125V13.4925C23.6727 13.4075 23.6533 13.3125 23.6267 13.225C23.5398 12.82 23.4044 12.415 23.2328 12.0175C23.1748 11.87 23.1072 11.72 23.0419 11.5825C22.8873 11.285 22.7253 10.9875 22.5417 10.7C22.5048 10.6393 22.4641 10.5778 22.4235 10.5164C22.3922 10.4691 22.3609 10.4218 22.3314 10.375C22.2151 10.1894 22.0843 10.0105 21.9574 9.83688C21.9288 9.79766 21.9003 9.75871 21.8722 9.72001C21.7973 9.61826 21.7153 9.51653 21.6328 9.41412C21.5876 9.35798 21.5422 9.30164 21.4977 9.24498C21.372 9.0875 21.2488 8.93751 21.1231 8.79C20.6736 8.26499 20.2024 7.79001 19.7818 7.38501C19.7045 7.305 19.6199 7.225 19.5329 7.14752C19.2067 6.84 18.9094 6.57248 18.6605 6.36502C18.5857 6.30549 18.5186 6.24685 18.4562 6.19226C18.4137 6.15514 18.3734 6.11989 18.3342 6.08752C18.2588 6.02935 18.1933 5.97776 18.1384 5.93445C18.1035 5.90699 18.0729 5.88286 18.0467 5.86249C18.0273 5.8475 18.0056 5.83752 17.9839 5.82998L17.7083 5.75002V3.39C17.7083 3.00501 17.5585 2.66001 17.3193 2.40748C17.08 2.155 16.7465 2 16.3792 2C15.6445 2 15.05 2.62249 15.05 3.39V4.97998L14.9123 4.94002L14.5377 4.82999L14.1969 4.73251L14.1937 4.73157C14.1937 4.73157 14.1901 4.72998 14.1873 4.72998H14.18L11.5942 4.005C11.4806 3.97249 11.3839 4.09999 11.4419 4.2075L11.8552 4.9975C11.8786 5.05821 11.9084 5.11893 11.9389 5.18132C11.9587 5.2217 11.9788 5.26278 11.9977 5.30502C12.0654 5.44498 12.1331 5.59249 12.1983 5.74C12.2563 5.86998 12.3144 5.99749 12.382 6.1375C12.4104 6.20333 12.4395 6.26995 12.4689 6.33753C12.5769 6.58564 12.6905 6.84654 12.8025 7.12752C12.8992 7.36501 12.9958 7.6025 13.0804 7.85002C13.3124 8.4725 13.5323 9.13748 13.7233 9.82002C13.7708 9.97277 13.8088 10.1206 13.8473 10.2704C13.8636 10.3339 13.88 10.3978 13.8972 10.4625L13.9238 10.5825C14.0012 10.9 14.0689 11.215 14.1172 11.5325C14.1558 11.75 14.1921 11.9575 14.2114 12.1675C14.2404 12.405 14.2694 12.6425 14.2791 12.88C14.2984 13.0975 14.3081 13.325 14.3081 13.5425C14.3081 14.0975 14.2598 14.6325 14.1462 15.1375C14.139 15.1646 14.1319 15.1921 14.1248 15.2198C14.0929 15.3427 14.06 15.4701 14.0205 15.5925C13.9848 15.7236 13.9386 15.8547 13.8905 15.9908C13.8735 16.039 13.8563 16.0878 13.8392 16.1375C13.8361 16.1463 13.8329 16.1552 13.8297 16.1641C13.7941 16.2631 13.758 16.3639 13.7136 16.4625C13.4743 17.0575 13.1771 17.65 12.8702 18.205C12.4207 19.0275 11.9688 19.75 11.6522 20.215C11.6328 20.2451 11.6139 20.2736 11.5957 20.3012C11.573 20.3354 11.5514 20.3681 11.5314 20.4C11.4323 20.545 11.5338 20.75 11.7053 20.75H15.05V23.4825H11.6667C10.758 23.4825 9.91699 22.95 9.511 22.0975C9.30076 21.67 9.21858 21.2 9.26694 20.74C9.27898 20.6025 9.1799 20.4725 9.0446 20.4725H2.21024C2.09423 20.4725 2 20.57 2 20.69V20.835C2 25.345 5.5211 29 9.86623 29H22.126C24.4241 29 25.729 26.8336 27.0116 24.7043C27.3691 24.1108 27.7249 23.5201 28.1 22.98C28.7743 22.01 30.3959 21.24 30.8695 21.03C30.9468 20.995 31 20.915 31 20.825Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4.13152 16.5262L4.03272 16.6834C3.94565 16.8191 4.04211 17 4.20682 17H10.3339C10.4021 17 10.4656 16.9667 10.5033 16.9095C10.5833 16.7857 10.6586 16.6572 10.7268 16.5262C11.2563 15.6262 11.7268 14.6524 11.8986 13.9334C12.3009 12.1858 11.4421 9.37873 10.4468 7.12164C10.3809 6.97166 10.1763 6.95739 10.0892 7.09546L4.13152 16.5262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <strong>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </strong>
              </div>
              <h3>BoredApeYachtClub #1786</h3>
              <h4>
                <span>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-1bftssy"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  50.49
                </span>{' '}
                <strong>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-1gpu3vi"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      focusable="false"
                      className="chakra-icon css-brr9t8"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 7C11.8954 7 11 7.89543 11 9V14H5C3.89543 14 3 14.8954 3 16V23C3 24.1046 3.89543 25 5 25H7H11H13H19H21H25H27C28.1046 25 29 24.1046 29 23V19C29 17.8954 28.1046 17 27 17H21V9C21 7.89543 20.1046 7 19 7H13ZM25 23H27V19H21V23H25ZM19 23V19V9H13V16V23H19ZM11 23V16H5V23H7H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>{' '}
                  6,098
                </strong>
              </h4>
              <h6>
                Offer{' '}
                <svg
                  viewBox="0 0 48 96"
                  focusable="false"
                  className="chakra-icon css-1ijxv3w"
                >
                  <path
                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                    fill="#CF373E"
                  ></path>
                  <path
                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                    fill="#DF5960"
                  ></path>
                </svg>{' '}
                <strong>42</strong>
              </h6>
              <a href="#">
                Connect{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-1sdtgly"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 1V10.1715L20.585 6.58655L21.9992 8.00076L16 13.9999V14L16 14L16 14V13.9999L10.0008 8.00076L11.415 6.58655L15 10.1715V1H17ZM28 6.99996H27.3095L26 12.5L25.9745 12.5007L25.1997 16H7.61969L7.01959 12.9995L7 13L5 3C4.90353 2.52688 4.48276 1.99023 4 1.99996H0V3.99996H3.18L7 23.2C7.09647 23.6731 7.51724 24.0097 8 24H26V22H8.82L8 18H26C26.4767 18.0116 26.8952 17.6851 27 17.22L29 8.21996C29.0679 7.9193 28.9934 7.60412 28.798 7.36573C28.6026 7.12734 28.3081 6.99239 28 6.99996ZM12 27.9999C12 29.1045 11.1046 29.9999 10 29.9999C8.89543 29.9999 8 29.1045 8 27.9999C8 26.8954 8.89543 25.9999 10 25.9999C11.1046 25.9999 12 26.8954 12 27.9999ZM26 27.9999C26 29.1045 25.1046 29.9999 24 29.9999C22.8954 29.9999 22 29.1045 22 27.9999C22 26.8954 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 26.8954 26 27.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="collection-details-item">
              <div className="collection-details-item-img">
                <img src={CollImgItem} alt="item" />
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    className="chakra-icon css-zbxbij"
                  >
                    <path
                      d="M31 20.825V19.2575C31 19.1125 30.8647 19.0075 30.7318 19.0475L23.576 21.1875C23.5374 21.1975 23.5035 21.22 23.4769 21.25C22.7105 22.1258 22.0592 22.7135 21.8867 22.8692L21.8747 22.88C21.43 23.27 20.879 23.4825 20.299 23.4825H17.7083V20.75H19.7673C19.8205 20.75 19.8713 20.73 19.9099 20.695L20.1757 20.4425C20.2893 20.335 20.4247 20.205 20.5866 20.0375C20.6003 20.0232 20.6143 20.0089 20.6284 19.9943C20.7135 19.9066 20.8044 19.8129 20.8935 19.71C20.9999 19.6025 21.1038 19.4825 21.2004 19.365C21.3623 19.185 21.517 18.9975 21.6789 18.8C21.7949 18.67 21.9013 18.5225 22.0052 18.375C22.1212 18.235 22.2348 18.0775 22.3411 17.9275C22.3807 17.8674 22.4228 17.8065 22.4658 17.7444C22.5068 17.6852 22.5487 17.6247 22.59 17.5625C22.6673 17.4425 22.7447 17.315 22.8099 17.195C23.0129 16.87 23.1845 16.5225 23.3295 16.175C23.3961 16.0262 23.4493 15.8694 23.501 15.7171C23.5075 15.698 23.514 15.679 23.5204 15.66C23.5784 15.4825 23.6267 15.315 23.663 15.1375C23.75 14.72 23.7693 14.305 23.7307 13.89C23.721 13.76 23.7113 13.6325 23.6824 13.5125V13.4925C23.6727 13.4075 23.6533 13.3125 23.6267 13.225C23.5398 12.82 23.4044 12.415 23.2328 12.0175C23.1748 11.87 23.1072 11.72 23.0419 11.5825C22.8873 11.285 22.7253 10.9875 22.5417 10.7C22.5048 10.6393 22.4641 10.5778 22.4235 10.5164C22.3922 10.4691 22.3609 10.4218 22.3314 10.375C22.2151 10.1894 22.0843 10.0105 21.9574 9.83688C21.9288 9.79766 21.9003 9.75871 21.8722 9.72001C21.7973 9.61826 21.7153 9.51653 21.6328 9.41412C21.5876 9.35798 21.5422 9.30164 21.4977 9.24498C21.372 9.0875 21.2488 8.93751 21.1231 8.79C20.6736 8.26499 20.2024 7.79001 19.7818 7.38501C19.7045 7.305 19.6199 7.225 19.5329 7.14752C19.2067 6.84 18.9094 6.57248 18.6605 6.36502C18.5857 6.30549 18.5186 6.24685 18.4562 6.19226C18.4137 6.15514 18.3734 6.11989 18.3342 6.08752C18.2588 6.02935 18.1933 5.97776 18.1384 5.93445C18.1035 5.90699 18.0729 5.88286 18.0467 5.86249C18.0273 5.8475 18.0056 5.83752 17.9839 5.82998L17.7083 5.75002V3.39C17.7083 3.00501 17.5585 2.66001 17.3193 2.40748C17.08 2.155 16.7465 2 16.3792 2C15.6445 2 15.05 2.62249 15.05 3.39V4.97998L14.9123 4.94002L14.5377 4.82999L14.1969 4.73251L14.1937 4.73157C14.1937 4.73157 14.1901 4.72998 14.1873 4.72998H14.18L11.5942 4.005C11.4806 3.97249 11.3839 4.09999 11.4419 4.2075L11.8552 4.9975C11.8786 5.05821 11.9084 5.11893 11.9389 5.18132C11.9587 5.2217 11.9788 5.26278 11.9977 5.30502C12.0654 5.44498 12.1331 5.59249 12.1983 5.74C12.2563 5.86998 12.3144 5.99749 12.382 6.1375C12.4104 6.20333 12.4395 6.26995 12.4689 6.33753C12.5769 6.58564 12.6905 6.84654 12.8025 7.12752C12.8992 7.36501 12.9958 7.6025 13.0804 7.85002C13.3124 8.4725 13.5323 9.13748 13.7233 9.82002C13.7708 9.97277 13.8088 10.1206 13.8473 10.2704C13.8636 10.3339 13.88 10.3978 13.8972 10.4625L13.9238 10.5825C14.0012 10.9 14.0689 11.215 14.1172 11.5325C14.1558 11.75 14.1921 11.9575 14.2114 12.1675C14.2404 12.405 14.2694 12.6425 14.2791 12.88C14.2984 13.0975 14.3081 13.325 14.3081 13.5425C14.3081 14.0975 14.2598 14.6325 14.1462 15.1375C14.139 15.1646 14.1319 15.1921 14.1248 15.2198C14.0929 15.3427 14.06 15.4701 14.0205 15.5925C13.9848 15.7236 13.9386 15.8547 13.8905 15.9908C13.8735 16.039 13.8563 16.0878 13.8392 16.1375C13.8361 16.1463 13.8329 16.1552 13.8297 16.1641C13.7941 16.2631 13.758 16.3639 13.7136 16.4625C13.4743 17.0575 13.1771 17.65 12.8702 18.205C12.4207 19.0275 11.9688 19.75 11.6522 20.215C11.6328 20.2451 11.6139 20.2736 11.5957 20.3012C11.573 20.3354 11.5514 20.3681 11.5314 20.4C11.4323 20.545 11.5338 20.75 11.7053 20.75H15.05V23.4825H11.6667C10.758 23.4825 9.91699 22.95 9.511 22.0975C9.30076 21.67 9.21858 21.2 9.26694 20.74C9.27898 20.6025 9.1799 20.4725 9.0446 20.4725H2.21024C2.09423 20.4725 2 20.57 2 20.69V20.835C2 25.345 5.5211 29 9.86623 29H22.126C24.4241 29 25.729 26.8336 27.0116 24.7043C27.3691 24.1108 27.7249 23.5201 28.1 22.98C28.7743 22.01 30.3959 21.24 30.8695 21.03C30.9468 20.995 31 20.915 31 20.825Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4.13152 16.5262L4.03272 16.6834C3.94565 16.8191 4.04211 17 4.20682 17H10.3339C10.4021 17 10.4656 16.9667 10.5033 16.9095C10.5833 16.7857 10.6586 16.6572 10.7268 16.5262C11.2563 15.6262 11.7268 14.6524 11.8986 13.9334C12.3009 12.1858 11.4421 9.37873 10.4468 7.12164C10.3809 6.97166 10.1763 6.95739 10.0892 7.09546L4.13152 16.5262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <strong>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </strong>
              </div>
              <h3>BoredApeYachtClub #1786</h3>
              <h4>
                <span>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-1bftssy"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  50.49
                </span>{' '}
                <strong>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-1gpu3vi"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      focusable="false"
                      className="chakra-icon css-brr9t8"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 7C11.8954 7 11 7.89543 11 9V14H5C3.89543 14 3 14.8954 3 16V23C3 24.1046 3.89543 25 5 25H7H11H13H19H21H25H27C28.1046 25 29 24.1046 29 23V19C29 17.8954 28.1046 17 27 17H21V9C21 7.89543 20.1046 7 19 7H13ZM25 23H27V19H21V23H25ZM19 23V19V9H13V16V23H19ZM11 23V16H5V23H7H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>{' '}
                  6,098
                </strong>
              </h4>
              <h6>
                Offer{' '}
                <svg
                  viewBox="0 0 48 96"
                  focusable="false"
                  className="chakra-icon css-1ijxv3w"
                >
                  <path
                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                    fill="#CF373E"
                  ></path>
                  <path
                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                    fill="#DF5960"
                  ></path>
                </svg>{' '}
                <strong>42</strong>
              </h6>
              <a href="#">
                Connect{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-1sdtgly"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 1V10.1715L20.585 6.58655L21.9992 8.00076L16 13.9999V14L16 14L16 14V13.9999L10.0008 8.00076L11.415 6.58655L15 10.1715V1H17ZM28 6.99996H27.3095L26 12.5L25.9745 12.5007L25.1997 16H7.61969L7.01959 12.9995L7 13L5 3C4.90353 2.52688 4.48276 1.99023 4 1.99996H0V3.99996H3.18L7 23.2C7.09647 23.6731 7.51724 24.0097 8 24H26V22H8.82L8 18H26C26.4767 18.0116 26.8952 17.6851 27 17.22L29 8.21996C29.0679 7.9193 28.9934 7.60412 28.798 7.36573C28.6026 7.12734 28.3081 6.99239 28 6.99996ZM12 27.9999C12 29.1045 11.1046 29.9999 10 29.9999C8.89543 29.9999 8 29.1045 8 27.9999C8 26.8954 8.89543 25.9999 10 25.9999C11.1046 25.9999 12 26.8954 12 27.9999ZM26 27.9999C26 29.1045 25.1046 29.9999 24 29.9999C22.8954 29.9999 22 29.1045 22 27.9999C22 26.8954 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 26.8954 26 27.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="collection-details-item">
              <div className="collection-details-item-img">
                <img src={CollImgItem} alt="item" />
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    className="chakra-icon css-zbxbij"
                  >
                    <path
                      d="M31 20.825V19.2575C31 19.1125 30.8647 19.0075 30.7318 19.0475L23.576 21.1875C23.5374 21.1975 23.5035 21.22 23.4769 21.25C22.7105 22.1258 22.0592 22.7135 21.8867 22.8692L21.8747 22.88C21.43 23.27 20.879 23.4825 20.299 23.4825H17.7083V20.75H19.7673C19.8205 20.75 19.8713 20.73 19.9099 20.695L20.1757 20.4425C20.2893 20.335 20.4247 20.205 20.5866 20.0375C20.6003 20.0232 20.6143 20.0089 20.6284 19.9943C20.7135 19.9066 20.8044 19.8129 20.8935 19.71C20.9999 19.6025 21.1038 19.4825 21.2004 19.365C21.3623 19.185 21.517 18.9975 21.6789 18.8C21.7949 18.67 21.9013 18.5225 22.0052 18.375C22.1212 18.235 22.2348 18.0775 22.3411 17.9275C22.3807 17.8674 22.4228 17.8065 22.4658 17.7444C22.5068 17.6852 22.5487 17.6247 22.59 17.5625C22.6673 17.4425 22.7447 17.315 22.8099 17.195C23.0129 16.87 23.1845 16.5225 23.3295 16.175C23.3961 16.0262 23.4493 15.8694 23.501 15.7171C23.5075 15.698 23.514 15.679 23.5204 15.66C23.5784 15.4825 23.6267 15.315 23.663 15.1375C23.75 14.72 23.7693 14.305 23.7307 13.89C23.721 13.76 23.7113 13.6325 23.6824 13.5125V13.4925C23.6727 13.4075 23.6533 13.3125 23.6267 13.225C23.5398 12.82 23.4044 12.415 23.2328 12.0175C23.1748 11.87 23.1072 11.72 23.0419 11.5825C22.8873 11.285 22.7253 10.9875 22.5417 10.7C22.5048 10.6393 22.4641 10.5778 22.4235 10.5164C22.3922 10.4691 22.3609 10.4218 22.3314 10.375C22.2151 10.1894 22.0843 10.0105 21.9574 9.83688C21.9288 9.79766 21.9003 9.75871 21.8722 9.72001C21.7973 9.61826 21.7153 9.51653 21.6328 9.41412C21.5876 9.35798 21.5422 9.30164 21.4977 9.24498C21.372 9.0875 21.2488 8.93751 21.1231 8.79C20.6736 8.26499 20.2024 7.79001 19.7818 7.38501C19.7045 7.305 19.6199 7.225 19.5329 7.14752C19.2067 6.84 18.9094 6.57248 18.6605 6.36502C18.5857 6.30549 18.5186 6.24685 18.4562 6.19226C18.4137 6.15514 18.3734 6.11989 18.3342 6.08752C18.2588 6.02935 18.1933 5.97776 18.1384 5.93445C18.1035 5.90699 18.0729 5.88286 18.0467 5.86249C18.0273 5.8475 18.0056 5.83752 17.9839 5.82998L17.7083 5.75002V3.39C17.7083 3.00501 17.5585 2.66001 17.3193 2.40748C17.08 2.155 16.7465 2 16.3792 2C15.6445 2 15.05 2.62249 15.05 3.39V4.97998L14.9123 4.94002L14.5377 4.82999L14.1969 4.73251L14.1937 4.73157C14.1937 4.73157 14.1901 4.72998 14.1873 4.72998H14.18L11.5942 4.005C11.4806 3.97249 11.3839 4.09999 11.4419 4.2075L11.8552 4.9975C11.8786 5.05821 11.9084 5.11893 11.9389 5.18132C11.9587 5.2217 11.9788 5.26278 11.9977 5.30502C12.0654 5.44498 12.1331 5.59249 12.1983 5.74C12.2563 5.86998 12.3144 5.99749 12.382 6.1375C12.4104 6.20333 12.4395 6.26995 12.4689 6.33753C12.5769 6.58564 12.6905 6.84654 12.8025 7.12752C12.8992 7.36501 12.9958 7.6025 13.0804 7.85002C13.3124 8.4725 13.5323 9.13748 13.7233 9.82002C13.7708 9.97277 13.8088 10.1206 13.8473 10.2704C13.8636 10.3339 13.88 10.3978 13.8972 10.4625L13.9238 10.5825C14.0012 10.9 14.0689 11.215 14.1172 11.5325C14.1558 11.75 14.1921 11.9575 14.2114 12.1675C14.2404 12.405 14.2694 12.6425 14.2791 12.88C14.2984 13.0975 14.3081 13.325 14.3081 13.5425C14.3081 14.0975 14.2598 14.6325 14.1462 15.1375C14.139 15.1646 14.1319 15.1921 14.1248 15.2198C14.0929 15.3427 14.06 15.4701 14.0205 15.5925C13.9848 15.7236 13.9386 15.8547 13.8905 15.9908C13.8735 16.039 13.8563 16.0878 13.8392 16.1375C13.8361 16.1463 13.8329 16.1552 13.8297 16.1641C13.7941 16.2631 13.758 16.3639 13.7136 16.4625C13.4743 17.0575 13.1771 17.65 12.8702 18.205C12.4207 19.0275 11.9688 19.75 11.6522 20.215C11.6328 20.2451 11.6139 20.2736 11.5957 20.3012C11.573 20.3354 11.5514 20.3681 11.5314 20.4C11.4323 20.545 11.5338 20.75 11.7053 20.75H15.05V23.4825H11.6667C10.758 23.4825 9.91699 22.95 9.511 22.0975C9.30076 21.67 9.21858 21.2 9.26694 20.74C9.27898 20.6025 9.1799 20.4725 9.0446 20.4725H2.21024C2.09423 20.4725 2 20.57 2 20.69V20.835C2 25.345 5.5211 29 9.86623 29H22.126C24.4241 29 25.729 26.8336 27.0116 24.7043C27.3691 24.1108 27.7249 23.5201 28.1 22.98C28.7743 22.01 30.3959 21.24 30.8695 21.03C30.9468 20.995 31 20.915 31 20.825Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4.13152 16.5262L4.03272 16.6834C3.94565 16.8191 4.04211 17 4.20682 17H10.3339C10.4021 17 10.4656 16.9667 10.5033 16.9095C10.5833 16.7857 10.6586 16.6572 10.7268 16.5262C11.2563 15.6262 11.7268 14.6524 11.8986 13.9334C12.3009 12.1858 11.4421 9.37873 10.4468 7.12164C10.3809 6.97166 10.1763 6.95739 10.0892 7.09546L4.13152 16.5262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <strong>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </strong>
              </div>
              <h3>BoredApeYachtClub #1786</h3>
              <h4>
                <span>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-1bftssy"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  50.49
                </span>{' '}
                <strong>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-1gpu3vi"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      focusable="false"
                      className="chakra-icon css-brr9t8"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 7C11.8954 7 11 7.89543 11 9V14H5C3.89543 14 3 14.8954 3 16V23C3 24.1046 3.89543 25 5 25H7H11H13H19H21H25H27C28.1046 25 29 24.1046 29 23V19C29 17.8954 28.1046 17 27 17H21V9C21 7.89543 20.1046 7 19 7H13ZM25 23H27V19H21V23H25ZM19 23V19V9H13V16V23H19ZM11 23V16H5V23H7H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>{' '}
                  6,098
                </strong>
              </h4>
              <h6>
                Offer{' '}
                <svg
                  viewBox="0 0 48 96"
                  focusable="false"
                  className="chakra-icon css-1ijxv3w"
                >
                  <path
                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                    fill="#CF373E"
                  ></path>
                  <path
                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                    fill="#DF5960"
                  ></path>
                </svg>{' '}
                <strong>42</strong>
              </h6>
              <a href="#">
                Connect{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-1sdtgly"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 1V10.1715L20.585 6.58655L21.9992 8.00076L16 13.9999V14L16 14L16 14V13.9999L10.0008 8.00076L11.415 6.58655L15 10.1715V1H17ZM28 6.99996H27.3095L26 12.5L25.9745 12.5007L25.1997 16H7.61969L7.01959 12.9995L7 13L5 3C4.90353 2.52688 4.48276 1.99023 4 1.99996H0V3.99996H3.18L7 23.2C7.09647 23.6731 7.51724 24.0097 8 24H26V22H8.82L8 18H26C26.4767 18.0116 26.8952 17.6851 27 17.22L29 8.21996C29.0679 7.9193 28.9934 7.60412 28.798 7.36573C28.6026 7.12734 28.3081 6.99239 28 6.99996ZM12 27.9999C12 29.1045 11.1046 29.9999 10 29.9999C8.89543 29.9999 8 29.1045 8 27.9999C8 26.8954 8.89543 25.9999 10 25.9999C11.1046 25.9999 12 26.8954 12 27.9999ZM26 27.9999C26 29.1045 25.1046 29.9999 24 29.9999C22.8954 29.9999 22 29.1045 22 27.9999C22 26.8954 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 26.8954 26 27.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="collection-details-item">
              <div className="collection-details-item-img">
                <img src={CollImgItem} alt="item" />
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    className="chakra-icon css-zbxbij"
                  >
                    <path
                      d="M31 20.825V19.2575C31 19.1125 30.8647 19.0075 30.7318 19.0475L23.576 21.1875C23.5374 21.1975 23.5035 21.22 23.4769 21.25C22.7105 22.1258 22.0592 22.7135 21.8867 22.8692L21.8747 22.88C21.43 23.27 20.879 23.4825 20.299 23.4825H17.7083V20.75H19.7673C19.8205 20.75 19.8713 20.73 19.9099 20.695L20.1757 20.4425C20.2893 20.335 20.4247 20.205 20.5866 20.0375C20.6003 20.0232 20.6143 20.0089 20.6284 19.9943C20.7135 19.9066 20.8044 19.8129 20.8935 19.71C20.9999 19.6025 21.1038 19.4825 21.2004 19.365C21.3623 19.185 21.517 18.9975 21.6789 18.8C21.7949 18.67 21.9013 18.5225 22.0052 18.375C22.1212 18.235 22.2348 18.0775 22.3411 17.9275C22.3807 17.8674 22.4228 17.8065 22.4658 17.7444C22.5068 17.6852 22.5487 17.6247 22.59 17.5625C22.6673 17.4425 22.7447 17.315 22.8099 17.195C23.0129 16.87 23.1845 16.5225 23.3295 16.175C23.3961 16.0262 23.4493 15.8694 23.501 15.7171C23.5075 15.698 23.514 15.679 23.5204 15.66C23.5784 15.4825 23.6267 15.315 23.663 15.1375C23.75 14.72 23.7693 14.305 23.7307 13.89C23.721 13.76 23.7113 13.6325 23.6824 13.5125V13.4925C23.6727 13.4075 23.6533 13.3125 23.6267 13.225C23.5398 12.82 23.4044 12.415 23.2328 12.0175C23.1748 11.87 23.1072 11.72 23.0419 11.5825C22.8873 11.285 22.7253 10.9875 22.5417 10.7C22.5048 10.6393 22.4641 10.5778 22.4235 10.5164C22.3922 10.4691 22.3609 10.4218 22.3314 10.375C22.2151 10.1894 22.0843 10.0105 21.9574 9.83688C21.9288 9.79766 21.9003 9.75871 21.8722 9.72001C21.7973 9.61826 21.7153 9.51653 21.6328 9.41412C21.5876 9.35798 21.5422 9.30164 21.4977 9.24498C21.372 9.0875 21.2488 8.93751 21.1231 8.79C20.6736 8.26499 20.2024 7.79001 19.7818 7.38501C19.7045 7.305 19.6199 7.225 19.5329 7.14752C19.2067 6.84 18.9094 6.57248 18.6605 6.36502C18.5857 6.30549 18.5186 6.24685 18.4562 6.19226C18.4137 6.15514 18.3734 6.11989 18.3342 6.08752C18.2588 6.02935 18.1933 5.97776 18.1384 5.93445C18.1035 5.90699 18.0729 5.88286 18.0467 5.86249C18.0273 5.8475 18.0056 5.83752 17.9839 5.82998L17.7083 5.75002V3.39C17.7083 3.00501 17.5585 2.66001 17.3193 2.40748C17.08 2.155 16.7465 2 16.3792 2C15.6445 2 15.05 2.62249 15.05 3.39V4.97998L14.9123 4.94002L14.5377 4.82999L14.1969 4.73251L14.1937 4.73157C14.1937 4.73157 14.1901 4.72998 14.1873 4.72998H14.18L11.5942 4.005C11.4806 3.97249 11.3839 4.09999 11.4419 4.2075L11.8552 4.9975C11.8786 5.05821 11.9084 5.11893 11.9389 5.18132C11.9587 5.2217 11.9788 5.26278 11.9977 5.30502C12.0654 5.44498 12.1331 5.59249 12.1983 5.74C12.2563 5.86998 12.3144 5.99749 12.382 6.1375C12.4104 6.20333 12.4395 6.26995 12.4689 6.33753C12.5769 6.58564 12.6905 6.84654 12.8025 7.12752C12.8992 7.36501 12.9958 7.6025 13.0804 7.85002C13.3124 8.4725 13.5323 9.13748 13.7233 9.82002C13.7708 9.97277 13.8088 10.1206 13.8473 10.2704C13.8636 10.3339 13.88 10.3978 13.8972 10.4625L13.9238 10.5825C14.0012 10.9 14.0689 11.215 14.1172 11.5325C14.1558 11.75 14.1921 11.9575 14.2114 12.1675C14.2404 12.405 14.2694 12.6425 14.2791 12.88C14.2984 13.0975 14.3081 13.325 14.3081 13.5425C14.3081 14.0975 14.2598 14.6325 14.1462 15.1375C14.139 15.1646 14.1319 15.1921 14.1248 15.2198C14.0929 15.3427 14.06 15.4701 14.0205 15.5925C13.9848 15.7236 13.9386 15.8547 13.8905 15.9908C13.8735 16.039 13.8563 16.0878 13.8392 16.1375C13.8361 16.1463 13.8329 16.1552 13.8297 16.1641C13.7941 16.2631 13.758 16.3639 13.7136 16.4625C13.4743 17.0575 13.1771 17.65 12.8702 18.205C12.4207 19.0275 11.9688 19.75 11.6522 20.215C11.6328 20.2451 11.6139 20.2736 11.5957 20.3012C11.573 20.3354 11.5514 20.3681 11.5314 20.4C11.4323 20.545 11.5338 20.75 11.7053 20.75H15.05V23.4825H11.6667C10.758 23.4825 9.91699 22.95 9.511 22.0975C9.30076 21.67 9.21858 21.2 9.26694 20.74C9.27898 20.6025 9.1799 20.4725 9.0446 20.4725H2.21024C2.09423 20.4725 2 20.57 2 20.69V20.835C2 25.345 5.5211 29 9.86623 29H22.126C24.4241 29 25.729 26.8336 27.0116 24.7043C27.3691 24.1108 27.7249 23.5201 28.1 22.98C28.7743 22.01 30.3959 21.24 30.8695 21.03C30.9468 20.995 31 20.915 31 20.825Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4.13152 16.5262L4.03272 16.6834C3.94565 16.8191 4.04211 17 4.20682 17H10.3339C10.4021 17 10.4656 16.9667 10.5033 16.9095C10.5833 16.7857 10.6586 16.6572 10.7268 16.5262C11.2563 15.6262 11.7268 14.6524 11.8986 13.9334C12.3009 12.1858 11.4421 9.37873 10.4468 7.12164C10.3809 6.97166 10.1763 6.95739 10.0892 7.09546L4.13152 16.5262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <strong>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </strong>
              </div>
              <h3>BoredApeYachtClub #1786</h3>
              <h4>
                <span>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-1bftssy"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  50.49
                </span>{' '}
                <strong>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-1gpu3vi"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      focusable="false"
                      className="chakra-icon css-brr9t8"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 7C11.8954 7 11 7.89543 11 9V14H5C3.89543 14 3 14.8954 3 16V23C3 24.1046 3.89543 25 5 25H7H11H13H19H21H25H27C28.1046 25 29 24.1046 29 23V19C29 17.8954 28.1046 17 27 17H21V9C21 7.89543 20.1046 7 19 7H13ZM25 23H27V19H21V23H25ZM19 23V19V9H13V16V23H19ZM11 23V16H5V23H7H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>{' '}
                  6,098
                </strong>
              </h4>
              <h6>
                Offer{' '}
                <svg
                  viewBox="0 0 48 96"
                  focusable="false"
                  className="chakra-icon css-1ijxv3w"
                >
                  <path
                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                    fill="#CF373E"
                  ></path>
                  <path
                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                    fill="#DF5960"
                  ></path>
                </svg>{' '}
                <strong>42</strong>
              </h6>
              <a href="#">
                Connect{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-1sdtgly"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 1V10.1715L20.585 6.58655L21.9992 8.00076L16 13.9999V14L16 14L16 14V13.9999L10.0008 8.00076L11.415 6.58655L15 10.1715V1H17ZM28 6.99996H27.3095L26 12.5L25.9745 12.5007L25.1997 16H7.61969L7.01959 12.9995L7 13L5 3C4.90353 2.52688 4.48276 1.99023 4 1.99996H0V3.99996H3.18L7 23.2C7.09647 23.6731 7.51724 24.0097 8 24H26V22H8.82L8 18H26C26.4767 18.0116 26.8952 17.6851 27 17.22L29 8.21996C29.0679 7.9193 28.9934 7.60412 28.798 7.36573C28.6026 7.12734 28.3081 6.99239 28 6.99996ZM12 27.9999C12 29.1045 11.1046 29.9999 10 29.9999C8.89543 29.9999 8 29.1045 8 27.9999C8 26.8954 8.89543 25.9999 10 25.9999C11.1046 25.9999 12 26.8954 12 27.9999ZM26 27.9999C26 29.1045 25.1046 29.9999 24 29.9999C22.8954 29.9999 22 29.1045 22 27.9999C22 26.8954 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 26.8954 26 27.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="collection-details-item">
              <div className="collection-details-item-img">
                <img src={CollImgItem} alt="item" />
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    focusable="false"
                    className="chakra-icon css-zbxbij"
                  >
                    <path
                      d="M31 20.825V19.2575C31 19.1125 30.8647 19.0075 30.7318 19.0475L23.576 21.1875C23.5374 21.1975 23.5035 21.22 23.4769 21.25C22.7105 22.1258 22.0592 22.7135 21.8867 22.8692L21.8747 22.88C21.43 23.27 20.879 23.4825 20.299 23.4825H17.7083V20.75H19.7673C19.8205 20.75 19.8713 20.73 19.9099 20.695L20.1757 20.4425C20.2893 20.335 20.4247 20.205 20.5866 20.0375C20.6003 20.0232 20.6143 20.0089 20.6284 19.9943C20.7135 19.9066 20.8044 19.8129 20.8935 19.71C20.9999 19.6025 21.1038 19.4825 21.2004 19.365C21.3623 19.185 21.517 18.9975 21.6789 18.8C21.7949 18.67 21.9013 18.5225 22.0052 18.375C22.1212 18.235 22.2348 18.0775 22.3411 17.9275C22.3807 17.8674 22.4228 17.8065 22.4658 17.7444C22.5068 17.6852 22.5487 17.6247 22.59 17.5625C22.6673 17.4425 22.7447 17.315 22.8099 17.195C23.0129 16.87 23.1845 16.5225 23.3295 16.175C23.3961 16.0262 23.4493 15.8694 23.501 15.7171C23.5075 15.698 23.514 15.679 23.5204 15.66C23.5784 15.4825 23.6267 15.315 23.663 15.1375C23.75 14.72 23.7693 14.305 23.7307 13.89C23.721 13.76 23.7113 13.6325 23.6824 13.5125V13.4925C23.6727 13.4075 23.6533 13.3125 23.6267 13.225C23.5398 12.82 23.4044 12.415 23.2328 12.0175C23.1748 11.87 23.1072 11.72 23.0419 11.5825C22.8873 11.285 22.7253 10.9875 22.5417 10.7C22.5048 10.6393 22.4641 10.5778 22.4235 10.5164C22.3922 10.4691 22.3609 10.4218 22.3314 10.375C22.2151 10.1894 22.0843 10.0105 21.9574 9.83688C21.9288 9.79766 21.9003 9.75871 21.8722 9.72001C21.7973 9.61826 21.7153 9.51653 21.6328 9.41412C21.5876 9.35798 21.5422 9.30164 21.4977 9.24498C21.372 9.0875 21.2488 8.93751 21.1231 8.79C20.6736 8.26499 20.2024 7.79001 19.7818 7.38501C19.7045 7.305 19.6199 7.225 19.5329 7.14752C19.2067 6.84 18.9094 6.57248 18.6605 6.36502C18.5857 6.30549 18.5186 6.24685 18.4562 6.19226C18.4137 6.15514 18.3734 6.11989 18.3342 6.08752C18.2588 6.02935 18.1933 5.97776 18.1384 5.93445C18.1035 5.90699 18.0729 5.88286 18.0467 5.86249C18.0273 5.8475 18.0056 5.83752 17.9839 5.82998L17.7083 5.75002V3.39C17.7083 3.00501 17.5585 2.66001 17.3193 2.40748C17.08 2.155 16.7465 2 16.3792 2C15.6445 2 15.05 2.62249 15.05 3.39V4.97998L14.9123 4.94002L14.5377 4.82999L14.1969 4.73251L14.1937 4.73157C14.1937 4.73157 14.1901 4.72998 14.1873 4.72998H14.18L11.5942 4.005C11.4806 3.97249 11.3839 4.09999 11.4419 4.2075L11.8552 4.9975C11.8786 5.05821 11.9084 5.11893 11.9389 5.18132C11.9587 5.2217 11.9788 5.26278 11.9977 5.30502C12.0654 5.44498 12.1331 5.59249 12.1983 5.74C12.2563 5.86998 12.3144 5.99749 12.382 6.1375C12.4104 6.20333 12.4395 6.26995 12.4689 6.33753C12.5769 6.58564 12.6905 6.84654 12.8025 7.12752C12.8992 7.36501 12.9958 7.6025 13.0804 7.85002C13.3124 8.4725 13.5323 9.13748 13.7233 9.82002C13.7708 9.97277 13.8088 10.1206 13.8473 10.2704C13.8636 10.3339 13.88 10.3978 13.8972 10.4625L13.9238 10.5825C14.0012 10.9 14.0689 11.215 14.1172 11.5325C14.1558 11.75 14.1921 11.9575 14.2114 12.1675C14.2404 12.405 14.2694 12.6425 14.2791 12.88C14.2984 13.0975 14.3081 13.325 14.3081 13.5425C14.3081 14.0975 14.2598 14.6325 14.1462 15.1375C14.139 15.1646 14.1319 15.1921 14.1248 15.2198C14.0929 15.3427 14.06 15.4701 14.0205 15.5925C13.9848 15.7236 13.9386 15.8547 13.8905 15.9908C13.8735 16.039 13.8563 16.0878 13.8392 16.1375C13.8361 16.1463 13.8329 16.1552 13.8297 16.1641C13.7941 16.2631 13.758 16.3639 13.7136 16.4625C13.4743 17.0575 13.1771 17.65 12.8702 18.205C12.4207 19.0275 11.9688 19.75 11.6522 20.215C11.6328 20.2451 11.6139 20.2736 11.5957 20.3012C11.573 20.3354 11.5514 20.3681 11.5314 20.4C11.4323 20.545 11.5338 20.75 11.7053 20.75H15.05V23.4825H11.6667C10.758 23.4825 9.91699 22.95 9.511 22.0975C9.30076 21.67 9.21858 21.2 9.26694 20.74C9.27898 20.6025 9.1799 20.4725 9.0446 20.4725H2.21024C2.09423 20.4725 2 20.57 2 20.69V20.835C2 25.345 5.5211 29 9.86623 29H22.126C24.4241 29 25.729 26.8336 27.0116 24.7043C27.3691 24.1108 27.7249 23.5201 28.1 22.98C28.7743 22.01 30.3959 21.24 30.8695 21.03C30.9468 20.995 31 20.915 31 20.825Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4.13152 16.5262L4.03272 16.6834C3.94565 16.8191 4.04211 17 4.20682 17H10.3339C10.4021 17 10.4656 16.9667 10.5033 16.9095C10.5833 16.7857 10.6586 16.6572 10.7268 16.5262C11.2563 15.6262 11.7268 14.6524 11.8986 13.9334C12.3009 12.1858 11.4421 9.37873 10.4468 7.12164C10.3809 6.97166 10.1763 6.95739 10.0892 7.09546L4.13152 16.5262Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <strong>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>
                </strong>
              </div>
              <h3>BoredApeYachtClub #1786</h3>
              <h4>
                <span>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-1bftssy"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  50.49
                </span>{' '}
                <strong>
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-1gpu3vi"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      focusable="false"
                      className="chakra-icon css-brr9t8"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 7C11.8954 7 11 7.89543 11 9V14H5C3.89543 14 3 14.8954 3 16V23C3 24.1046 3.89543 25 5 25H7H11H13H19H21H25H27C28.1046 25 29 24.1046 29 23V19C29 17.8954 28.1046 17 27 17H21V9C21 7.89543 20.1046 7 19 7H13ZM25 23H27V19H21V23H25ZM19 23V19V9H13V16V23H19ZM11 23V16H5V23H7H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>{' '}
                  6,098
                </strong>
              </h4>
              <h6>
                Offer{' '}
                <svg
                  viewBox="0 0 48 96"
                  focusable="false"
                  className="chakra-icon css-1ijxv3w"
                >
                  <path
                    d="M23.9913 8.91397L23.4668 10.6955V62.3857L23.9913 62.909L47.9848 48.7262L23.9913 8.91397Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9942 8.91397L0 48.7262L23.9942 62.909V37.82V8.91397Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9909 67.4524L23.6953 67.8128V86.2252L23.9909 87.0881L47.9985 53.2773L23.9909 67.4524Z"
                    fill="#DF5960"
                  ></path>
                  <path
                    d="M23.9935 87.0879V67.4522L0 53.2772L23.9935 87.0879Z"
                    fill="#EE9398"
                  ></path>
                  <path
                    d="M23.9941 62.9063L47.987 48.7239L23.9941 37.818V62.9063Z"
                    fill="#CF373E"
                  ></path>
                  <path
                    d="M0 48.7242L23.9935 62.9066V37.8183L0 48.7242Z"
                    fill="#DF5960"
                  ></path>
                </svg>{' '}
                <strong>42</strong>
              </h6>
              <a href="#">
                Connect{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-1sdtgly"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 1V10.1715L20.585 6.58655L21.9992 8.00076L16 13.9999V14L16 14L16 14V13.9999L10.0008 8.00076L11.415 6.58655L15 10.1715V1H17ZM28 6.99996H27.3095L26 12.5L25.9745 12.5007L25.1997 16H7.61969L7.01959 12.9995L7 13L5 3C4.90353 2.52688 4.48276 1.99023 4 1.99996H0V3.99996H3.18L7 23.2C7.09647 23.6731 7.51724 24.0097 8 24H26V22H8.82L8 18H26C26.4767 18.0116 26.8952 17.6851 27 17.22L29 8.21996C29.0679 7.9193 28.9934 7.60412 28.798 7.36573C28.6026 7.12734 28.3081 6.99239 28 6.99996ZM12 27.9999C12 29.1045 11.1046 29.9999 10 29.9999C8.89543 29.9999 8 29.1045 8 27.9999C8 26.8954 8.89543 25.9999 10 25.9999C11.1046 25.9999 12 26.8954 12 27.9999ZM26 27.9999C26 29.1045 25.1046 29.9999 24 29.9999C22.8954 29.9999 22 29.1045 22 27.9999C22 26.8954 22.8954 25.9999 24 25.9999C25.1046 25.9999 26 26.8954 26 27.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const items = [
    {
      key: '1',
      label: `NFTs`,
      children: <TabOne />,
    },
    {
      key: '2',
      label: `Analytics`,
      children: <TabOne />,
    },
    {
      key: '3',
      label: `Activity`,
      children: <TabOne />,
    },
  ];
  return (
    <CollectionMain>
      <div className="collection-details-area">
        <div className="collection-area-bg">
          <img src={CollImg} alt="img" />
        </div>
        <div className="collection-details-area-inner">
          <div className="collection-details-left">
            <div className="collection-details-avatar">
              <img src={CollImg} alt="img" />
              <h2>
                Bored Ape Yacht Club{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                </svg>{' '}
                <svg
                  viewBox="0 0 32 32"
                  focusable="false"
                  className="chakra-icon css-9aq5xt"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0002 6.52L18.7602 12.1L19.2202 13.1L20.2202 13.25L26.3802 14.14L22.0002 18.44L21.2502 19.17L21.4302 20.17L22.4802 26.3L16.9702 23.41L16.0002 23L15.0702 23.49L9.56017 26.34L10.5602 20.21L10.7402 19.21L10.0002 18.44L5.58017 14.09L11.7402 13.2L12.7402 13.05L13.2002 12.05L16.0002 6.52ZM16.0003 2L11.4503 11.22L1.2803 12.69L8.64031 19.87L6.9003 30L16.0003 25.22L25.1003 30L23.3603 19.87L30.7203 12.7L20.5503 11.22L16.0003 2Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <strong>
                  10k <span>NFTs</span>
                </strong>
              </h2>
            </div>
            <p>
              The Bored Ape Yacht Club is a collection of 10,000 unique Bored
              Ape NFTs— unique digital collectibles living on the Ethereum
              blockchain. Your Bored Ape doubles as your Yacht Club membership
              card, and grants access to members-only benefits.
            </p>
            <div className="collection-avatar-list">
              <div className="collection-avatar-item">
                <strong>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-anc12x"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  10,73
                </strong>
                <span>Floor 0%</span>
              </div>
              <div className="collection-avatar-item">
                <strong>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-anc12x"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  10,73
                </strong>
                <span>Floor 0%</span>
              </div>
              <div className="collection-avatar-item">
                <strong>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-anc12x"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  10,73
                </strong>
                <span>Floor 0%</span>
              </div>
              <div className="collection-avatar-item">
                <strong>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-anc12x"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  10,73
                </strong>
                <span>Floor 0%</span>
              </div>
              <div className="collection-avatar-item">
                <strong>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-anc12x"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  10,73
                </strong>
                <span>Floor 0%</span>
              </div>
              <div className="collection-avatar-item">
                <strong>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-anc12x"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  10,73
                </strong>
                <span>Floor 0%</span>
              </div>
              <div className="collection-avatar-item">
                <strong>
                  <svg
                    viewBox="0 0 48 96"
                    focusable="false"
                    className="chakra-icon css-anc12x"
                  >
                    <path
                      d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
                      fill="#767676"
                    ></path>
                    <path
                      d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
                      fill="#8E8E8E"
                    ></path>
                    <path
                      d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
                      fill="#5F5F5F"
                    ></path>
                    <path
                      d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
                      fill="#767676"
                    ></path>
                  </svg>{' '}
                  10,73
                </strong>
                <span>Floor 0%</span>
              </div>
            </div>
          </div>
          <div className="collection-details-right">
            <a href="#">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                className="chakra-icon css-xjky65"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28 4H4C2.89543 4 2 4.89543 2 6V26C2 27.1046 2.89543 28 4 28H28C29.1046 28 30 27.1046 30 26V6C30 4.89543 29.1046 4 28 4ZM28 6V8H4V6H28ZM4 10V26H28V10H4ZM8 14H19V16H8V14ZM21 19H8V21H21V19Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                className="chakra-icon css-xjky65"
                aria-hidden="true"
              >
                <path
                  d="M25.2405 6.65646C23.5408 5.87659 21.7182 5.30202 19.8126 4.97294C19.7779 4.96659 19.7432 4.98246 19.7253 5.0142C19.4909 5.43111 19.2313 5.975 19.0495 6.40249C16.9998 6.09563 14.9607 6.09563 12.953 6.40249C12.7712 5.96549 12.5021 5.43111 12.2667 5.0142C12.2488 4.98352 12.2141 4.96765 12.1794 4.97294C10.2748 5.30097 8.45219 5.87554 6.7515 6.65646C6.73678 6.66281 6.72416 6.6734 6.71578 6.68715C3.25867 11.852 2.31163 16.8899 2.77622 21.8653C2.77832 21.8897 2.79198 21.913 2.8109 21.9277C5.0918 23.6028 7.30125 24.6197 9.46966 25.2937C9.50436 25.3043 9.54113 25.2916 9.56322 25.263C10.0762 24.5626 10.5334 23.824 10.9254 23.0473C10.9486 23.0018 10.9265 22.9478 10.8792 22.9298C10.1539 22.6547 9.46335 22.3193 8.79905 21.9383C8.7465 21.9077 8.7423 21.8325 8.79064 21.7965C8.93043 21.6918 9.07026 21.5828 9.20374 21.4727C9.22789 21.4526 9.26155 21.4484 9.28994 21.4611C13.6541 23.4536 18.3788 23.4536 22.6915 21.4611C22.7199 21.4473 22.7536 21.4516 22.7788 21.4717C22.9123 21.5817 23.0521 21.6918 23.1929 21.7965C23.2413 21.8325 23.2381 21.9077 23.1856 21.9383C22.5213 22.3267 21.8307 22.6547 21.1044 22.9288C21.0571 22.9468 21.036 23.0018 21.0592 23.0473C21.4596 23.8229 21.9169 24.5615 22.4203 25.262C22.4414 25.2916 22.4792 25.3043 22.5139 25.2937C24.6928 24.6197 26.9023 23.6028 29.1832 21.9277C29.2031 21.913 29.2158 21.8907 29.2179 21.8664C29.7739 16.1142 28.2866 11.1176 25.2751 6.6882C25.2678 6.6734 25.2552 6.66281 25.2405 6.65646ZM11.5772 18.8358C10.2632 18.8358 9.18061 17.6295 9.18061 16.1481C9.18061 14.6667 10.2422 13.4604 11.5772 13.4604C12.9225 13.4604 13.9947 14.6773 13.9737 16.1481C13.9737 17.6295 12.912 18.8358 11.5772 18.8358ZM20.438 18.8358C19.1241 18.8358 18.0415 17.6295 18.0415 16.1481C18.0415 14.6667 19.103 13.4604 20.438 13.4604C21.7834 13.4604 22.8555 14.6773 22.8345 16.1481C22.8345 17.6295 21.7834 18.8358 20.438 18.8358Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                className="chakra-icon css-xjky65"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5491 25.7525C15.2712 25.7759 18.8476 24.3077 21.4796 21.6757C24.1115 19.0438 25.5798 15.4673 25.5564 11.7453V11.1016C26.5116 10.4018 27.3383 9.54181 28 8.5598C27.1006 8.95318 26.1488 9.21407 25.1745 9.33435C26.2075 8.71884 26.9826 7.74999 27.3564 6.60708C26.3937 7.18465 25.338 7.59068 24.2364 7.80708C22.7111 6.18187 20.2853 5.7819 18.319 6.83143C16.3527 7.88095 15.335 10.119 15.8364 12.2907C11.8783 12.0964 8.18962 10.2283 5.69091 7.15253C4.39814 9.39629 5.06589 12.2581 7.21818 13.698C6.45303 13.6685 5.70558 13.4592 5.03636 13.0871V13.1416C5.02235 15.4701 6.63569 17.4925 8.90909 17.9962C8.19742 18.1876 7.45196 18.2174 6.72727 18.0834C7.38175 20.0581 9.20747 21.4078 11.2873 21.4543C9.55187 22.8513 7.39501 23.6202 5.16727 23.6362C4.77668 23.6249 4.387 23.5921 4 23.538C6.25486 24.9746 8.8755 25.732 11.5491 25.7198"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                className="chakra-icon css-xjky65"
                aria-hidden="true"
              >
                <path
                  d="M16 6.163C19.204 6.163 19.584 6.175 20.85 6.233C24.102 6.381 25.621 7.924 25.769 11.152C25.827 12.417 25.838 12.797 25.838 16.001C25.838 19.206 25.826 19.585 25.769 20.85C25.62 24.075 24.105 25.621 20.85 25.769C19.584 25.827 19.206 25.839 16 25.839C12.796 25.839 12.416 25.827 11.151 25.769C7.891 25.62 6.38 24.07 6.232 20.849C6.174 19.584 6.162 19.205 6.162 16C6.162 12.796 6.175 12.417 6.232 11.151C6.381 7.924 7.896 6.38 11.151 6.232C12.417 6.175 12.796 6.163 16 6.163ZM16 4C12.741 4 12.333 4.014 11.053 4.072C6.695 4.272 4.273 6.69 4.073 11.052C4.014 12.333 4 12.741 4 16C4 19.259 4.014 19.668 4.072 20.948C4.272 25.306 6.69 27.728 11.052 27.928C12.333 27.986 12.741 28 16 28C19.259 28 19.668 27.986 20.948 27.928C25.302 27.728 27.73 25.31 27.927 20.948C27.986 19.668 28 19.259 28 16C28 12.741 27.986 12.333 27.928 11.053C27.732 6.699 25.311 4.273 20.949 4.073C19.668 4.014 19.259 4 16 4V4ZM16 9.838C12.597 9.838 9.838 12.597 9.838 16C9.838 19.403 12.597 22.163 16 22.163C19.403 22.163 22.162 19.404 22.162 16C22.162 12.597 19.403 9.838 16 9.838ZM16 20C13.791 20 12 18.21 12 16C12 13.791 13.791 12 16 12C18.209 12 20 13.791 20 16C20 18.21 18.209 20 16 20ZM22.406 8.155C21.61 8.155 20.965 8.8 20.965 9.595C20.965 10.39 21.61 11.035 22.406 11.035C23.201 11.035 23.845 10.39 23.845 9.595C23.845 8.8 23.201 8.155 22.406 8.155Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                className="chakra-icon css-1sdtgly"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.29427 14.9202C8.23713 15.0578 8.2077 15.2053 8.20767 15.3542H8.20745V22.4261C8.20724 22.6575 8.12207 22.8808 7.96813 23.0534C7.8142 23.226 7.60224 23.336 7.37256 23.3625C6.84438 23.4245 6.40013 23.4689 6.04332 23.5004C5.72393 23.529 5.40302 23.4657 5.11829 23.3181C4.83356 23.1704 4.59684 22.9445 4.43594 22.6669C3.5124 21.0575 2.93471 19.2729 2.73981 17.4272C2.54491 15.5815 2.73711 13.7154 3.3041 11.9483C3.87109 10.1812 4.80039 8.55204 6.03253 7.16507C7.26467 5.7781 8.77252 4.66385 10.4596 3.89362C12.1466 3.1234 13.9758 2.71416 15.8299 2.6921C17.6841 2.67004 19.5224 3.03565 21.2273 3.76552C22.9322 4.49539 24.466 5.57345 25.7308 6.93071C26.9955 8.28798 27.9632 9.89456 28.572 11.6477C28.6739 11.9444 28.7009 12.2619 28.6504 12.5716C28.6 12.8813 28.4737 13.1738 28.2829 13.4228C26.9677 15.1383 25.3104 16.5651 23.6752 17.7513V9.69882C23.6752 9.39858 23.5561 9.11063 23.3441 8.89823C23.1321 8.68583 22.8445 8.56635 22.5445 8.56606H20.6583C20.3582 8.56612 20.0704 8.68549 19.8582 8.89792C19.646 9.11034 19.5268 9.39843 19.5268 9.69882V19.4773C19.5267 19.663 19.4719 19.8446 19.3694 19.9993C19.2668 20.1541 19.121 20.2752 18.9501 20.3475C18.4902 20.5419 18.0179 20.7332 18.0179 20.7332V12.5306C18.0178 12.2302 17.8986 11.9421 17.6863 11.7297C17.4741 11.5173 17.1863 11.3979 16.8862 11.3978H14.998C14.6978 11.3979 14.41 11.5173 14.1977 11.7298C13.9855 11.9422 13.8663 12.2304 13.8663 12.5308V21.3683C13.8662 21.581 13.7944 21.7875 13.6624 21.9542C13.5305 22.121 13.3461 22.2382 13.1392 22.2869C12.8407 22.3573 12.5693 22.4243 12.3573 22.4872V15.3622C12.3573 15.0617 12.2381 14.7736 12.0258 14.5612C11.8136 14.3487 11.5257 14.2294 11.2256 14.2294L9.34313 14.2232C9.19429 14.2225 9.04677 14.2513 8.90906 14.3078C8.77134 14.3643 8.64614 14.4475 8.54064 14.5526C8.43513 14.6577 8.35141 14.7826 8.29427 14.9202ZM14.9547 29.2918C12.5037 29.0977 10.1541 28.2287 8.16595 26.781C15.4374 25.7463 24.4283 22.3481 29.2977 15.0789C29.3182 15.3811 29.3325 15.6841 29.3325 15.992C29.3329 18.4529 28.6532 20.866 27.3685 22.9642C26.0839 25.0624 24.2443 26.7641 22.0534 27.8808C19.8625 28.9976 17.4057 29.4859 14.9547 29.2918Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                className="chakra-icon css-1sdtgly"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26 23V27H6V23H4V27C4 28.1046 4.89543 29 6 29H26C27.1046 29 28 28.1046 28 27V23H26ZM8 10L9.41 11.4L15 5.83V24H17V5.83L22.59 11.4L24 10L16 2L8 10ZM4 17C4 15.8954 4.89543 15 6 15H11V17H6V23H4V17ZM28 17C28 15.8954 27.1046 15 26 15H21V17H26V23H28V17Z"
                  fill="currentColor"
                ></path>
              </svg>{' '}
              Share
            </a>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </CollectionMain>
  );
}
