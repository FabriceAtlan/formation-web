function Card() {
	const ListMovies = [
		{ 
			name: 'Joker',
			src: 'https://images.affiches-et-posters.com//albums/3/56170/medium/affiche-film-joker.jpg'
		},
		{
			name: 'Tenet',
			src: 'https://static.actu.fr/uploads/2021/01/cine-affiche-tenet.jpg'
		},
		{
			name: 'Je suis une légende',
			src: 'https://images.affiches-et-posters.com//albums/3/3136/medium/affiche-film-suis-une-legende--will-smith-949.jpg'
		},
		{
			name: 'Pirates des caraïbes',
			src: 'https://antreducinema.fr/wp-content/uploads/2022/03/affiche2.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg'
		}
	]

	const RndMovies = Math.floor(Math.random() * ListMovies.length); 

	return (
		<figure>
			<img src={ListMovies[RndMovies].src} alt="" />
			<figcaption>{ListMovies[RndMovies].name}</figcaption>
		</figure>
	)
}

export default Card;