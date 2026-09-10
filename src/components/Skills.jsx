export default function Skills({ skills, title, id }) {
  return (
    <section className="skills" id="skills">
      <div className="skills__body container">
        <div className="card">
          <h2 className="skills__title">{title}</h2>
          <ul className="skills__list">
            {skills.map((skill, index) => (
              <Item key={index} skill={skill}></Item>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Item({skill}) {
  return <li className="skills__item">{skill}</li>;
}
