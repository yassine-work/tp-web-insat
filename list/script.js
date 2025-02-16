const items = document.querySelectorAll("li");
let random_number1;
let random_number2;
let random_number3;

items.forEach((item) => {
	item.addEventListener("click", () => {
		random_number1 = Math.floor(Math.random() * 256);
		random_number2 = Math.floor(Math.random() * 256);
		random_number3 = Math.floor(Math.random() * 256);
		item.style.color = `rgb(${random_number1},${random_number2},${random_number3})`;
	});
});