export const myToysLoader = async () => {
    const token = localStorage.getItem("token");
    const myToys = await fetch("http://localhost:5000/api/seller/toys", {
        headers: {
            Authorization: token,
        }
    }).then(res=>res.json());
    return myToys;
}