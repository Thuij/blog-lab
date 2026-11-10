function Header(props) {
  return (
    <header>
      <h1>{props.name || props.title}</h1>
      <p>Welcome to my personal blog!</p>
    </header>
  );
}

export default Header;