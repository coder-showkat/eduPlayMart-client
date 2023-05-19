export const toyDetailsLoader = async ({params}) => {
    const baseUrl = "http://localhost:5000/api/toys/";
    const toyDetails = await fetch(baseUrl + params.id).then(res=>res.json());
    const relatedToys = await fetch(baseUrl + "related-toys/" + params.id).then(res=>res.json());
    return {toyDetails, relatedToys};
}