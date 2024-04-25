function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Bunny Binky!</h1>
      <h2>The date today is {currDate.toLocaleDateString()}.</h2>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;