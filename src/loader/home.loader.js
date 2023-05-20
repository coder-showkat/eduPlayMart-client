export const homeLoader = async () => {
    const baseUrl = "https://eduplaymart-sam.vercel.app/api/toys/category/";
    const toysAndGames = await fetch(baseUrl + "Toys & Games").then(res=>res.json());
    const  puzzleToys = await fetch(baseUrl + "Puzzle Toys").then(res=>res.json());
    const developmentToys = await fetch(baseUrl + "Development Toys & Kits").then(res=>res.json());
    return {toysAndGames, puzzleToys, developmentToys};
}