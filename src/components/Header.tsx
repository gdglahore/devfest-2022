import React from "react";

const styles = {
};

const SECTIONS = [
  {name: 'Home'},
  {name: 'About'},
  {name: 'Speakers'},
  {name: 'Schedule'},
  {name: 'Team'},
];

const Header = () => {
  return (
    <header style={styles}>
      <h1>GDG Lahore</h1>

      <ul>
        {SECTIONS.map(s => (
          <li key={s.name}>{s.name}</li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
