const firstName = 'md';
const lastName = "khan"

const val = 42

const arr = [
	'string',
	42,
	function() {console.log('hi') }
]

//arr[2]() // calling function from an array

for ( let i = 0; i < arr.length; i++ ) {
	console.log(arr[i])
}