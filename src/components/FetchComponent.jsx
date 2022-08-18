import useFetch from "../hooks/useFetch";
import React from "react";


const FetchComponent = ({
	                        uri,
	                        renderSuccess,
	                        loadingFallback = loadingPropComponent,
	                        renderError = errorPropComponent
                        }) => {
	const {data, loading, error} = useFetch(uri);

	if (loading) return loadingFallback;
	if (error) return renderError(error);
	if (data) return renderSuccess(data);
};


const loadingPropComponent = <p>Loading...</p>;

const errorPropComponent = (err) => {
	return (<pre>{JSON.stringify(err, null, 2)}</pre>);
};


export default FetchComponent;