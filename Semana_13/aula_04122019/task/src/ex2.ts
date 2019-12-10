import axios, { AxiosResponse } from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/posts"

const postsId = [process.argv[2], process.argv[3], process.argv[4]];

const allRequests = postsId.map((postId: string) => {
    return axios.get(`${baseURL}/${postId}`);
});

Promise.all(allRequests).then((allResponses:AxiosResponse[]) => {
    const allTitles = allResponses.map((response:AxiosResponse) => {
        return response.data.title;
    })
    console.log(allTitles);
})
