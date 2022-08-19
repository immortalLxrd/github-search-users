import {useEffect, useState} from "react";


function useDebounce(value, delay) {
	const [debounceValue, setDebounceValue] = useState(value); // First render will be without delay because useState argument is value

	useEffect(() => {
		const timer = setTimeout(() => setDebounceValue(value), delay || 500);

		return () => clearTimeout(timer);
	}, [value, delay]);

	return debounceValue;
}

export default useDebounce;