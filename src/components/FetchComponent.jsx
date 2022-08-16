import useFetch from "../hooks/useFetch";

const FetchComponent = ({uri, renderSuccess, loadingFallback, renderError}) => {
	const {data, loading, error} = useFetch(uri);

	if (loading) return loadingFallback;
	if (error) return renderError(error);
	if (data) return renderSuccess(data);
};

export default FetchComponent;