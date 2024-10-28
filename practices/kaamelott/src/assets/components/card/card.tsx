import './card.css'

interface CharactersProps {
	name: string,
	arm: string,
	img: string,
	alt: string,
}

interface Character {
	characters: CharactersProps,
}

function Card({characters}: Character) {
	return (
		<figure className="card card-wrapper">
			<img className="card__img" src={characters.img} alt={characters.alt}></img>
			<figcaption>{characters.name}</figcaption>
		</figure>
	)
}

export default Card;