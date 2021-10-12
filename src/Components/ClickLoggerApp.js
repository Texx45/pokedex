function ClickLoggerApp() {
  function logWhenClicked() {
    console.log("Button was clicked");
  }

  return (
    <div>
      <FancyButton handleClick={logWhenClicked} />
      <p>Then look in the console.</p>
    </div>
  );
}

function FancyButton(props) {
  return (
    <button className="my-fancy-classname" onClick={props.handleClick}>
      Click Me!
    </button>
  );
}

export default ClickLoggerApp;
