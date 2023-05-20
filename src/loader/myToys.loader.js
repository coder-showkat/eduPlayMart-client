export const myToysLoader = async () => {
    const token = localStorage.getItem("token");
    const myToys = await fetch("https://eduplaymart-sam.vercel.app/api/seller/toys", {
        headers: {
            Authorization: token,
        }
    }).then(res=>res.json());
    return myToys;
}