import React from 'react';
import { Tabs, Collapse } from 'antd';
import { AiSubArea, PriceListContent } from './styles';
const { Panel } = Collapse;
const TabOne = () => {
  return (
    <PriceListContent>
      <div className="price-list-item">
        <div className="price-list-item-top">
          <h2>Basic Plan</h2>
          <h3>
            $8 <span> / month</span>
          </h3>
          <h4>Billed yearly</h4>
          <button>Subscribe</button>
          <a href="#">
            Save with annual billing{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              height="12"
              className="opacity-80"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="price-list-item-bottom">
          <ul>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Limited generations (~200 / month)
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Limited generations (~200 / month)
            </li>
          </ul>
        </div>
      </div>
      <div className="price-list-item">
        <div className="price-list-item-top">
          <h2>Standard Plan</h2>
          <h3>
            $24 <span> / month</span>
          </h3>
          <h4>Billed yearly</h4>
          <button>Subscribe</button>
          <a href="#">
            15h Fast generations
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              height="12"
              className="opacity-80"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="price-list-item-bottom">
          <ul>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Unlimited Relaxed generations
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Limited generations (~200 / month)
            </li>
          </ul>
        </div>
      </div>
      <div className="price-list-item">
        <div className="price-list-item-top">
          <h2>Pro Plan</h2>
          <h3>
            $48 <span> / month</span>
          </h3>
          <h4>Billed yearly</h4>
          <button>Subscribe</button>
          <a href="#">
            Save with annual billing{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              height="12"
              className="opacity-80"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="price-list-item-bottom">
          <ul>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              30h Fast generations
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Unlimited Relaxed generations
            </li>
          </ul>
        </div>
      </div>
    </PriceListContent>
  );
};
const TabTwo = () => {
  return (
    <PriceListContent>
      <div className="price-list-item">
        <div className="price-list-item-top">
          <h2>Basic Plan</h2>
          <h3>
            $10 <span> / month</span>
          </h3>
          <h4>Billed monthly</h4>
          <button>Subscribe</button>
          <a href="#">
            Save with annual billing (20% off){' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              height="12"
              className="opacity-80"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="price-list-item-bottom">
          <ul>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Limited generations (~200 / month)
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Limited generations (~200 / month)
            </li>
          </ul>
        </div>
      </div>
      <div className="price-list-item">
        <div className="price-list-item-top">
          <h2>Standard Plan</h2>
          <h3>
            $30 <span> / month</span>
          </h3>
          <h4>Billed monthly</h4>
          <button>Subscribe</button>
          <a href="#">
            Save with annual billing (20% off){' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              height="12"
              className="opacity-80"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="price-list-item-bottom">
          <ul>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Unlimited Relaxed generations
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Limited generations (~200 / month)
            </li>
          </ul>
        </div>
      </div>
      <div className="price-list-item">
        <div className="price-list-item-top">
          <h2>Pro Plan</h2>
          <h3>
            $60 <span> / month</span>
          </h3>
          <h4>Billed monthly</h4>
          <button>Subscribe</button>
          <a href="#">
            Save with annual billing (20% off){' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              height="12"
              className="opacity-80"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="price-list-item-bottom">
          <ul>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              30h Fast generations
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="18"
                  className=" text-emerald-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>{' '}
              Unlimited Relaxed generations
            </li>
          </ul>
        </div>
      </div>
    </PriceListContent>
  );
};
const items = [
  {
    key: '1',
    label: `Yearly Billing`,
    children: <TabOne />,
  },
  {
    key: '2',
    label: `Monthly Billing`,
    children: <TabTwo />,
  },
];
export default function AiSubscriptionArea() {
  return (
    <AiSubArea>
      <h2>Purchase a subscription</h2>
      <p>
        Choose the plan that works for you.
        <Tabs defaultActiveKey="1" items={items} type="card" />
      </p>

      <div className="faq-area">
        <h2>Frequently Asked Questions</h2>
        <p>
          Can't find the answer you're looking for? Read the{' '}
          <a href="#">Quick Start Guide</a> or visit the{' '}
          <a href="#">#member-support</a> channel to ask for help. What are
          "Fast Hours"?
        </p>
        <Collapse defaultActiveKey={['1']} expandIconPosition="end">
          <Panel header='What are "Fast Hours"?' key="1">
            <p>
              We have two modes for image generation, “fast” and “relax”. Fast
              tries to give you a GPU instantly. It's our highest priority
              processing tier, and it's kinda expensive. Relax puts you in a
              queue behind others based on how much you've used the system in
              relax mode. The basic plan comes with 200 fast GPU-minutes/mo,
              standard with 15 fast gpu-hours/mo, and pro with 30 gpu-hours/mo.
              One hour is roughly 60 image generation or upscale commands and
              roughly 200 image variation commands. These numbers are
              experimental and may change at any time.
            </p>
          </Panel>
          <Panel header="What is unlimited relaxed generation?" key="2">
            <p>
              The standard and pro plans include relax mode, which can be
              enabled with the command `/relax` and disabled with `/fast`. In
              relax mode, your image generations do not consume fast time.
              Please note: The Basic Plan does not include relax mode and 'Max
              Upscale' is not available in relax mode.
            </p>
          </Panel>
        </Collapse>
      </div>
    </AiSubArea>
  );
}
