import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import "./preloader.css";
const Creating = ({ logo, message }) => {
  return (
    <>
      <div
        className={`flex items-center justify-center h-full w-full flex-col bg-opacity-100 z-20 absolute top-0 bottom-0 right-0 left-0 bg-white`}>
        <svg
          role="img"
          aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00"
          className="smiley "
          viewBox="0 0 128 128"
          width="128px"
          height="128px">
          <defs>
            <clipPath id="smiley-eyes">
              <circle
                className="smiley__eye1"
                cx="64"
                cy="64"
                r="8"
                transform="rotate(-40,64,64) translate(0,-56)"
              />
              <circle
                className="smiley__eye2"
                cx="64"
                cy="64"
                r="8"
                transform="rotate(40,64,64) translate(0,-56)"
              />
            </clipPath>
            <linearGradient
              id="smiley-grad"
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop
                offset="0%"
                stopColor="#000"
              />
              <stop
                offset="100%"
                stopColor="#fff"
              />
            </linearGradient>
            <mask id="smiley-mask">
              <rect
                x="0"
                y="0"
                width="128"
                height="128"
                fill="url(#smiley-grad)"
              />
            </mask>
          </defs>
          <g
            strokeLinecap="round"
            strokeWidth="12"
            strokeDasharray="175.93 351.86">
            <g>
              <rect
                fill="#fe3c72"
                width="128"
                height="64"
                clipPath="url(#smiley-eyes)"
              />
              <g
                fill="none"
                stroke="#fe3c72">
                <circle
                  className="smiley__mouth1"
                  cx="64"
                  cy="64"
                  r="56"
                  transform="rotate(180,64,64)"
                />
                <circle
                  className="smiley__mouth2"
                  cx="64"
                  cy="64"
                  r="56"
                  transform="rotate(0,64,64)"
                />
              </g>
            </g>
            <g mask="url(#smiley-mask)">
              <rect
                fill="#fd297b"
                width="128"
                height="64"
                clipPath="url(#smiley-eyes)"
              />
              <g
                fill="none"
                stroke="#fd297b">
                <circle
                  className="smiley__mouth1"
                  cx="64"
                  cy="64"
                  r="56"
                  transform="rotate(180,64,64)"
                />
                <circle
                  className="smiley__mouth2"
                  cx="64"
                  cy="64"
                  r="56"
                  transform="rotate(0,64,64)"
                />
              </g>
            </g>
          </g>
        </svg>

        <h1 className="mt-10 text-xl text-gray-600 font-light px-10 text-center">
          {message}
        </h1>
      </div>
    </>
  );
};

Creating.propTypes = {
  logo: PropTypes.string,
  message: PropTypes.string,
};
Creating.defaultProps = {
  logo: logo,
};

export default Creating;
