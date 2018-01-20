var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://picsum.photos/250/350'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://picsum.photos/200/200'
  },
  {
    id: 3,
    title: 'Piraci z Karaibów',
    desc: 'film o nauce pływania kutrem',
    img: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    title: 'Reksio',
    desc: 'jak wychować sobie psa',
    img: 'images/image.jpg'
  }
];

// var moviesElements = movies.map(function(movie) {
// 	return React.createElement('li', {key: movie.id},
// 		React.createElement('h2', {}, movie.title),
// 		React.createElement('p', {}, movie.desc),
// 		React.createElement('img', {src: movie.img, alt: "jakieś foto"})
// 	);
// });
//
//
// var element =
// 	React.createElement('div', {},
// 		React.createElement('h1', {}, 'Lista filmów'),
// 		React.createElement('ul', {}, moviesElements)
// 	);

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function () {
    return React.createElement('h2', {}, this.props.title)
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function () {
    return React.createElement('p', {}, this.props.desc)
  },
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },
  render: function () {
    return React.createElement('img', {src: this.props.img})
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function () {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        React.createElement(MovieImage, {img: this.props.movie.img})
      )
    )
  }
});

var MovieList = React.createClass({
  render: function () {
    return React.createElement('ul', {}, movies.map(function (movie) {
        return React.createElement(Movie, {key: movie.id, movie: movie})
      })
    )
  }
});

var element = React.createElement("div", {},
  React.createElement('h1', {}, "Lista filmów"),
  React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));
