import "./AboutAuthor.css";
const AboutAuthor = () => {
  return (
    <section className="about-author">
      <img
        src={require("../../images/About/ofir.png")}
        alt="The owner of the website on cartoon style on azure background"
        className="about-author__img"
      />
      <article className="about-author__article">
        <h2 className="about-author__headling">About the author</h2>
        <p className="about-author__paragraph" style={{margin: "0 0 10px"}}>
          Hi! My name is Ofir Dahan. I'm a Full-Stack Developer with expertise
          in React, Angular, TypeScript, Design Patterns, and more.
        </p>
        <p className="about-author__paragraph">
          I am also an expert in digital marketing on a variety of platforms,
          such as Facebook (Meta) ads, Googles Ads, Tabla, Outbrain, LinkedIn,
          etc.
        </p>
      </article>
    </section>
  );
};
export default AboutAuthor;
