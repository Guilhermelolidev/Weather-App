import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "@mui/material/Container";
import {
  main,
  footer,
  title,
  cityInputStyle,
  titleLink,
  description,
  grid,
  logo,
  fullWidthSmallDevicesStyle,
} from "../styles/styles";
import TextField from "@mui/material/TextField";
import CountrySelect from "../components/Input/CountrySelect";
import useHomeHandler from "./useHomeHandler";
import ButtonRouter from "../components/Button/ButtonRouter";

const Home: NextPage = () => {
  const { country, city, isSearchFieldsFilled, setCountry, setCity } =
    useHomeHandler();

  return (
    <Container maxWidth="md">
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main css={main}>
        <h1 css={title}>
          Weather
          <a css={titleLink}>App</a>
        </h1>
        <p css={description}>
          Get started by typing the desired city and country
        </p>
        <div css={grid}>
          <CountrySelect setCountry={setCountry} />
          <TextField
            css={[fullWidthSmallDevicesStyle, cityInputStyle]}
            label="City"
            id="city"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <ButtonRouter
          fullWidth
          variant="contained"
          disabled={!isSearchFieldsFilled}
          path={`/results?city=${city}&country=${country.code?.toLowerCase()}`}
        >
          Search
        </ButtonRouter>
      </main>

      <footer css={footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span css={logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <span>Made with ❤️ by Yuri Ramos</span>
      </footer>
    </Container>
  );
};

export default Home;
