export const homeLoader = async () => {
    const baseUrl = "https://eduplaymart-sam.vercel.app/api/toys/category/";
    // for shop by category section
    const toysAndGames = await fetch(baseUrl + "Toys & Games").then(res=>res.json());
    const  puzzleToys = await fetch(baseUrl + "Puzzle Toys").then(res=>res.json());
    const developmentToys = await fetch(baseUrl + "Development Toys & Kits").then(res=>res.json());

    // for banner section
    const bannerContent = await fetch("https://eduplaymart-sam.vercel.app/api/banner-contents").then(res=>res.json());

    // for how it works section
    const contents = await fetch("https://eduplaymart-sam.vercel.app/api/hiw-contents").then(res=>res.json());

    // for gallery section
    const gallery = await fetch("https://eduplaymart-sam.vercel.app/api/gallery").then(res=>res.json());

    // for features section
    const features = await fetch("https://eduplaymart-sam.vercel.app/api/features").then(res=>res.json());

    // for testimonials section
    const testimonials = await fetch("https://eduplaymart-sam.vercel.app/api/testimonials").then(res=>res.json());
    
    return {bannerContent, toysAndGames, puzzleToys, developmentToys, contents, gallery, features, testimonials};
}