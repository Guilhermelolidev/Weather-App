import { css } from "@emotion/react";

const main = css`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const footer = css`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const title = css`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const titleLink = css`
  color: #0070f3;
  text-decoration: none;

  &:hover,
  :focus,
  :active {
    text-decoration: underline;
  }
`;

const description = css`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

const grid = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 300px;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const logo = css`
  height: 1em;
  margin-left: 0.5rem;
`;

/* *****************************************  CUSTOM COMPONENTS ***************************************** */

const fullWidthSmallDevicesStyle = css`
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const cityInputStyle = css`
  width: 45%;
`;

const countrySelectStyle = css`
  width: 55%;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const barChartWrapperStyle = css`
  background: #d3e351;
  height: 50vh;
`;

const controlsWrapperStyle = css`
  background: green;
  height: 10vh;
`;

const weatherSliderWrapperStyle = css`
  height: 40vh;
`;

const dailyWeatherBoxStyle = css`
  border: 1px solid #ccc;
  display: inline-grid;
  font-size: 20px;
  font-weight: 300;
  padding: 20px;
  width: 200px;
`;

const mainContentWeatherBoxStyle = css`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const aditionalContentWeatherBoxStyle = css`
  display: flex;
  justify-content: center;
`;

export {
  aditionalContentWeatherBoxStyle,
  barChartWrapperStyle,
  controlsWrapperStyle,
  countrySelectStyle,
  cityInputStyle,
  dailyWeatherBoxStyle,
  mainContentWeatherBoxStyle,
  main,
  footer,
  title,
  titleLink,
  description,
  grid,
  logo,
  fullWidthSmallDevicesStyle,
  weatherSliderWrapperStyle,
};
