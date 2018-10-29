// Using books.html. When a user clicks one of the book titles, 
// use the data attributes to display the price and author of the book.

//id="list"
(() => {
	//Get the buttons to put the listener on
	let books = document.getElementById("list");

	//Get the parent element to add the output p to.
	let main  = books.parentElement;

	//Create the Output p area
	let outP = document.createElement("p");

	//give it an ID, so we can reference later if required.
	outP.setAttribute("id","js__output");
	
	//Add to HTML...will be emty to start with
	main.appendChild(outP);

	//Function to format the output string
	let outputInfo = (auth, price) => {
	 	outP.textContent = (`Author: ${auth}, Price £${price}`);
	}


	//Add event listener to books click
	books.addEventListener("click", event => {
		// //Where was the click
		// let clicked = event.target.id;

		//Format and output the author/price
		outputInfo(event.target.dataset.author,
		 		   event.target.dataset.price);

	});





})();
