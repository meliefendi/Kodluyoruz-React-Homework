// import axios from "axios";

// export async function getData(Number) {
//     try {
//         const { data: userId } = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
//         const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/" + Number);

//         return { userId, posts };

//     } catch (e) {
//         console.log(e)
//     }
// }


// export default getData;


////////////////////////////////////

import axios from "axios";

const getData = async (Number) => {


    return new Promise(async (resolve, reject) => {

        if (typeof Number === "number") {

            const { data: userId } = await axios("https://jsonplaceholder.typicode.com/users/" + Number);
            const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/" + Number);

            userId.post = new Array()
            userId.post.push(posts)

            resolve(userId);
        } else {
            reject("Sayi girin.")
        }
    })
}

export default getData;
