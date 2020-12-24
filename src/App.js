import React from 'react';

// function Food(props) {
//   console.log(props.fav);
function Food({ fav }) {
  console.log(fav);
  // return <h2>I Like {props.fav}Beef!!!</h2>;
  // return <h2>I Like {props.fav}!!!</h2>;
  return <h2>I Like {fav}!!!</h2>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="Kimchi" love={[1, 2, 56, true]} att={false} />
      <Food fav="Ramen" />
      <Food fav="Pork" />
    </div>
  );
}

export default App;
