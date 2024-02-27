async function fetchUserData() {
    try {
        const data = await fetch("https://dummyjson.com/users");
        const result =  await data.json();
        console.log(result);
}catch (error) {
        console.error("Error met while fetching the data:",error.message);
        throw error;
    }
}
fetchUserData();