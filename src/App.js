import React from 'react';

// function Food(props) {
//   console.log(props.fav);
function Food({ name, fig }) {
  // console.log(fav);
  // return <h2>I Like {props.fav}Beef!!!</h2>;
  // return <h2>I Like {props.fav}!!!</h2>;
  return (
    <div>
      <h2>I Like {name}!!!</h2>
      <img src={fig} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
  },
  {
    id: 4,
    name: 'Doncasu',
    image:
      'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
  },
  {
    id: 5,
    name: 'Kimbap',
    image:
      'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} fig={dish.image} />
      ))}
    </div>
  );
}

export default App;
