
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6674b2cac1msh09f79213f696183p161236jsna84cc147558a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}