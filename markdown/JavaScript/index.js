const array = [1,2,3,4,5];

const result = array.map((el) =>{
	el++;
});

console.log('array', array);


Dans le JSX ouvrir les accolades:

{data.map((el) => {
	return (
		<Card key={el.firstname} firstname={el.firstname ...}/>
	)
})}