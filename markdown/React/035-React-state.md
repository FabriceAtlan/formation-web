# React | Utiliser un state

## Sommaire

- []()

### ... [^](#sommaire)

Nous allons voir comment gérer des valeurs dynamiques à l'intérieur d'un composant grâce au **state**.

Dans React, un **state** est géré avec des `fonctions` de type `hook` : ce sont des fonctions dont le nom commence par `use`.

Dans le cas d'un **state**, tu vas « prévenir » **React** que tu veux utiliser un état à l'intérieur de ton composant avec le `hook` `useState` (littéralement, "utiliser un état").

Comment ça se présente ?

```javascript
import { useState } from "react";

function App() {
  const state = useState("hello");

  console.log(state)

  return <p>Hello world !</p>;
}

export default App;
```

```javascript
import { useState } from "react";


function App() {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<p>{counter}</p>
			<button onClick{() => {
				const result = counter +1;
				setCOunter(result);
			}}>Incrément
			<button/>
		</>
	)
}
```
