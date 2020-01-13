const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'e375bd90',
            s: 'avengers' 
        }
    });
    console.log(response.data)
}
fetchData()
