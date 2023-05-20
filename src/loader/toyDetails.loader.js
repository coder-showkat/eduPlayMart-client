export const toyDetailsLoader = async ({params}) => {
    const baseUrl = "https://eduplaymart-sam.vercel.app/api/toys/";
    const toyDetails = await fetch(baseUrl + params.id).then(res=>res.json());
    const relatedToys = await fetch(baseUrl + "related-toys/" + params.id).then(res=>res.json());
    return {toyDetails, relatedToys};
}