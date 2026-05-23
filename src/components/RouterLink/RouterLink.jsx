const RouterLink = (props) => {
  const {
    to,
    children,
    ...rest
  } = props;

  const handleClick = (event) => {
    event.preventDefault();

    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    // TODO: занести в заметки, что можно вот так разворачивать пропсы
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export default RouterLink;