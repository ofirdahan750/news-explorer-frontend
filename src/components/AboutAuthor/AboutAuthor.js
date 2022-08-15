import "./AboutAuthor.css";
// import staffImg from "../../images/staff-image.jpg";
const AboutAuthor = () => {
  return (
    <section className="about-author">
      <img
        src={require("../../images/About/ofir.png")}
        alt="Image of the owner of the website on cartoon style on azure background"
        className="about-author__img"
      />
      <article className="about-author__article">
        <h2 className="about-author__headling">About the author</h2>
        <p className="about-author__paragraph" style={{margin: "0 0 10px"}}>
          vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores
        </p>
        <p className="about-author__paragraph">
          vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores
        </p>
      </article>
    </section>
  );
};
export default AboutAuthor;
