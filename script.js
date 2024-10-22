function nbToGuess() {
	let num = prompt("Joueur 1, entrez un nombre entre 0 et 50")
	let nb = parseInt(num)
	while (typeof(nb) != "number" || (nb < 0 || nb > 50))
	{
		num = prompt("Veuillez entrez un nombre entre 0 et 50")
		nb = parseInt(num)
	}
	return (nb)
}

let toGuess = nbToGuess()

function didWin (givenNumber, numToGuess) {
	if (givenNumber == numToGuess)
	{
		return (1)
	}
	if (givenNumber < numToGuess) 
	{
		return (0)
	}
	if (givenNumber > numToGuess)
	{
		return (2)
	}
}

let givenNumber
let winBool
let count = 0
let min = 0
let max = 50
const button = document.getElementById('num')

button.addEventListener('click', () => {
	givenNumber = document.getElementById('nb')
	givenNumber = givenNumber.value
	winBool = didWin(givenNumber, toGuess)
	document.getElementById('nb').value = ""
	document.getElementById('counter').innerText = ++count + " tentatives"
	if (winBool == 1)
	{
		document.getElementById('nb').placeholder = "Bravo! Vous avez trouvé."
	}
	else if (winBool == 0)
	{

		document.getElementById('nb').placeholder = "Plus grand."
	}
	else
	{

		document.getElementById('nb').placeholder = "Plus petit."
	}
	if (givenNumber > min && givenNumber < max) 
	{
		if (givenNumber < toGuess)
		{
			min = givenNumber
		}
		else
		{
			max = givenNumber
		}
	}
	else if (givenNumber < max && givenNumber > min)
	{
		if (givenNumber > toGuess)
		{
			max = givenNumber
		}
		else
		{
			min = givenNumber
		}
	}
	if (winBool != 1)
	{
		document.getElementById('range').innerText = min + " < ? < " + max
	}
	else
	{
		document.getElementById('range').innerText = " le nombre à trouver était " + toGuess
	}
})