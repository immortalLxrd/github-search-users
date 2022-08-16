import {useEffect, useState} from "react";
import useDebounce from "./useDebounce";

export default function useFetch(uri) {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	const valueDebounce = useDebounce(uri, 1000);

	useEffect(() => {
		fetch(uri)
			.then(data => data.json())
			.then(setData)
			.then(() => setLoading(false))
			.catch(setError);
	}, [valueDebounce]);

	return {data, loading, error};
}
