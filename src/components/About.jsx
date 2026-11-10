function About(props) {
  return (
    <section>
      <h2>About Me</h2>
      <h3>{props.name}</h3>
      <p>{props.about}</p>
    </section>
  );
}

export default About; 