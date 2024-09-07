import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Articles about SliDesk:</h2>
        <div className="row">
          <div className="col">
            <a href="https://philippart-s.github.io/blog/articles/dev/documentation/slidesk-discovery/" target="_blank" rel="noreferrer">
              🖼️ Slides as code avec SliDesk 👨‍💻
            </a>
          </div>
          <div className="col">
            <a href="https://www.programmez.com/magazine/article/slidesk-votre-compagnon-pour-vos-presentations" target="_blank" rel="noreferrer">
            SliDesk : votre compagnon pour vos présentations
            </a>
          </div>
          <div className="col">
            <a href="https://www.emaxilde.net/posts/2024/02/05/la-cathedrale-et-le-bazar-eric-raymond-avait-raison.html" target="_blank" rel="noreferrer">
              Live Twitch Olivier Poncet
            </a>
          </div>
          <div className="col">
            <a href="https://gitlab.com/fun_with/fun-with-slidesk" target="_blank" rel="noreferrer">
              Fun-with Slidesk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
