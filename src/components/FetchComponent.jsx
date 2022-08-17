import useFetch from "../hooks/useFetch";
import React from "react";


const FetchComponent = ({
	                        uri,
	                        renderSuccess,
	                        loadingFallback = <p>Loading...</p>,
	                        renderError = err => (
		                        <pre>{JSON.stringify(err, null, 2)}</pre>
	                        )
                        }) => {
	const {data, loading, error} = useFetch(uri);

	if (loading) return loadingFallback;
	if (error) return renderError(error);
	if (data) return renderSuccess(data);
};


export default FetchComponent;