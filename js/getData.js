window.getData = (account) => {

  let url = `https://gist.githubusercontent.com/choiwook940/3669e2f5bfa33bb17c70dbc66ca49e59/raw/${account}.json`
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // Date data-type converter
      for(let date in data.bankList) {
        data.bankList[date].date = parseInt(data.bankList[date].date.replaceAll('-',''))
      }

      // Sort data descending by date
      const sortJSON = (data, key, type) => {
        if(type === undefined) {
          type = 'ascend'
        }
        return data.sort(function(a, b) {
          let x = a[key]
          let y = b[key]
  
          if(type === 'descend') {
            return x > y ? -1 : x < y ? 1 : 0
          } else if (type === 'ascend') {
            return x < y ? -1 : x > y ? 1 : 0
          }
        })
      }
      sortJSON(data.bankList, 'date', 'descend')
      return {account, data}
    })    
}