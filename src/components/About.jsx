import { useReveal } from '../hooks/useReveal.js';
import aboutPhoto from '../assets/about-photo.jpg';

export default function About() {
  const scope = useReveal();

  return (
    <section id="about" aria-labelledby="about-heading" ref={scope}>
      <div data-reveal>
        <h2 id="about-heading">
          <span className="hi">hii,</span> i'm arpit
        </h2>
        <p className="lead">
          Copywriter, sneakerhead &amp; professional over-thinker of headlines. I turn <em>briefs</em> into stuff
          people actually want to read (and the occasional pair of size UK&nbsp;10s into inspiration).
        </p>
        <span className="sole">obsessed with sneakers</span>
      </div>
      <figure className="polaroid" data-reveal>
        <div className="photo">
          <img src={aboutPhoto} alt="Polaroid of Arpit holding a green sneaker up to his face" />
        </div>
        <figcaption>obsessed since 2016</figcaption>
      </figure>
    </section>
  );
}
