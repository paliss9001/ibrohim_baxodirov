import exchange from "/assets/images/exchange-converter.png";
import planets from "/assets/images/planets.png";
import wpm from "/assets/images/measure-typing-speed.png";

export default function Portfolio() {
  const portfolioData = [
    {
      img: planets,
      title: "Planets",
      desc: "An interactive website where you can see the internals of all the major planets of the solar system and what their surface looks like.",
      link: "https://paliss9001.github.io/planets/",
      repo: "https://github.com/paliss9001/planets",
    },
    {
      img: wpm,
      title: "WPM checker",
      desc: "This web app evalutaes your typing speed in two modes: timed and untimed and stores your best run in the local storage.",
      link: "https://paliss9001.github.io/test-typing-speed/",
      repo: "https://github.com/paliss9001/test-typing-speed",
    },
    {
      img: exchange,
      title: "Currency converter",
      desc: "This one allows you to convert money between currencies. It uses frankfurt API and central bank of Uzbekistan as a provider, so data you receive is up-to-date. You can also find a line graph there that shows changes between the chosen currencies over a selected period.",
      link: "https://paliss9001.github.io/exchange-converter/",
      repo: "https://github.com/paliss9001/exchange-converter",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__body container">
        <h1 className="portfolio__title">My Portfolio</h1>
        <ul className="portfolio__list">
          {portfolioData.map((data, i) => {
            const { img, title, desc, link, repo } = data;

            return (
              <li key={i} className="portfolio__item card">
                <header className="portfolio__item-header">
                  <span className="portfolio__item-title">{title}</span>
                  <span className="portfolio__project-count">
                    {i + 1} / {Object.keys(portfolioData).length}
                  </span>
                </header>
                <div className="portfolio__img-wrapper">
                  <img className="portfolio__img" src={img}></img>
                  <a href={link} className="button portfolio__item-btn">
                    Demo
                  </a>
                </div>
                <div className="portfolio__info">{desc}</div>
                <div className="portfolio__code">
                  <span className="portfolio__label">Code: </span> 
                  <a href={repo}>{repo}</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
