function getCurrentTopNews(){
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    return fetch(url).then(res => res.json());
}
function getNewsById(id){
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    return fetch(url).then(res => res.json());
}

export{
    getNewsById,
    getCurrentTopNews
}