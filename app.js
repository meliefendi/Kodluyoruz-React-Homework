import axios from "axios";

export async function getData(Number) {
    try {
        const { data: userId } = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/" + Number)

        return { userId, posts };

    } catch (e) {
        console.log(e)
    }
}


export default getData;

