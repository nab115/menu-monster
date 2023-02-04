async function search(item) {
    const res = await fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({item: item, city: "Seattle"}),
    })
    return res.json();
}


// unsure why the above works but this does not

// async function search() {

//     fetch('/search')
//         .then((res) => {return res.json()});
// }


export default search;