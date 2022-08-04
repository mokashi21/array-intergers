// "Write a method that accepts an array of integers and ;pdates every element with m;ltiplication of previo;s and
// next elements.
// Note:N
// : First element is replaced by m;ltiplication of first and second. 
// : Last element is replaced by m;ltiplication of last and second last."


function modify(arr, n)

{
	// Nothing to do when array size is 1
	if (n <= 1)
	return;

	// store current value of arr[0] and update it
	let prev = arr[0];
	arr[0] = arr[0] * arr[1];

	// Update rest of the array elements
	for (let i = 1; i < n - 1; i++)
	{
		// Store current value of next interaction
		let curr = arr[i];

		// Update current value using previous value
		arr[i] = prev * arr[i+1];

		// Update previous value
		prev = curr;
	}

	// Update last array element
	arr[n-1] = prev * arr[n-1];
}

// Driver program
let arr = [12, 10, 44, 50, 66, 32, 21 ];

let n = arr.length;

modify(arr, n);

for (let i = 0; i < n; i++)
	console.log(arr[i] + " ");
	
// answer = create a function and give name to it  answer = 
// create a function as modify with parameters arr & n
// then use if statement then if array size if 1 do nothing otherwise start loop,
// then store the curent value of arr[0] and update it using for loop,\
// again use for loop with iteration & update it using parametr n ,put i=0 value,
// then store and update the values of previos and next & update to next.
// for runnig the program use a let variable and aassign the value as arrays  as ui or you register
// again for knownig the lenght of  arr varibale use  another variablw named as --
// let =arr.length

// then call the  function ===
// again for declaring use a for loop,
// and also do  a iteration file of above 


