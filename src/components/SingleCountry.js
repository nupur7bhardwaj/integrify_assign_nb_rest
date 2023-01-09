import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <>
      <section className="section-population">
        {country.map((item) => (
          <div
            key={item.population}
            className="item-population"
          >
            <article>
              <img src={item.flags.svg} alt={item.name.common} />
            </article>

            <article>
              <h1 className="country-name">
                {item.name.official}
              </h1>

              <ul className="sub-info">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                <li>Language: {item.language}</li>
              </ul>

              {item.borders && (
                <>
                  <h3 className="border">
                    Borders:
                  </h3>
                  <ul className="sub-info">
                    {item.borders.map((border, index) => (
                      <li
                        key={index}
                        className="index"
                      >
                        {border}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link
                to="/"
                className="link">
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
