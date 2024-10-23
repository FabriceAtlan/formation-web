interface Movies {
  name: string;
  imgSrc: string;
  size: number
}

interface CardProps {
	movie: Movies;
}

export const newMovies = [
  {
    name: 'Joker',
    imgSrc: 'https://m.media-amazon.com/images/I/51R9B-uhtJL._AC_.jpg',
    size: 250
  },
  {
    name: 'Tenet',
    imgSrc: 'https://m.media-amazon.com/images/I/51cUcPSPq2L._AC_.jpg',
    size: 250
  },
  {
    name: 'Le cercle des poètes disparus',
    imgSrc: 'https://m.media-amazon.com/images/I/51I1y1Jvc7L._AC_SY445_.jpg',
    size: 250
  }
]

export function Card({ movie }: CardProps) {

	return (
		<figure>
			<img src={movie.imgSrc} alt="" width={movie.size} />
			<figcaption>{movie.name}</figcaption>
		</figure>
	)
}
