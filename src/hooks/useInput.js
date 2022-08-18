import {useState} from "react";


function useInput(initialValue) {
	const [value, setValue] = useState('');

	return [
		{value, onChange: e => setValue(e.target.value)},
		() => setValue(initialValue)
	]
}


export default useInput;