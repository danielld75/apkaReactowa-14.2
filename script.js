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

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img, alt: "jakieś foto"})
	);
});


var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));
