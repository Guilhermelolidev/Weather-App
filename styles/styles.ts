import { css } from "@emotion/react";

const main = css`
  min-height: 90vh;
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

  @media (max-width: 600px) {
    span {
      width: 100%;
      text-align: center;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
      display: none;
    }
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

const refreshButtonStyle = css`
  margin-bottom: 5px;
  height: 40px;
  width: 150px;

  @media (max-width: 600px) {
    width: 60px;
  }
`;

const countrySelectStyle = css`
  width: 55%;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const barChartWrapperStyle = css`
  background: rgba(252, 252, 252, 0.55);
  height: 50vh;
`;

const controlsGridStyle = css`
  height: 10vh;
`;

const controlsWrapperStyle = css`
  display: flex;
  width: 75%;

  @media (max-width: 900px) {
    width: 100%;

    label,
    button {
      margin: 0 20px;
    }
  }
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

const rowRadioUnitsStyle = css`
  margin: 40px 20px 0;

  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
  }
`;

/* *****************************************  LIBRARIES OVERRIDES  ***************************************** */

const carouselStyle = css`
  align-items: center;
  display: inline-grid;
  text-align: center;
  width: 100%;
`;

export {
  aditionalContentWeatherBoxStyle,
  barChartWrapperStyle,
  carouselStyle,
  controlsGridStyle,
  controlsWrapperStyle,
  countrySelectStyle,
  cityInputStyle,
  dailyWeatherBoxStyle,
  mainContentWeatherBoxStyle,
  refreshButtonStyle,
  rowRadioUnitsStyle,
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
