
export async function getData(url){
    const promise = await fetch(url).then((res) => res.json())
    return promise.data
}