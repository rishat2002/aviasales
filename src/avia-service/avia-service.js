class AviaSalesService {
  apiBase = 'https://front-test.beta.aviasales.ru/';

   id = ''
    /* eslint-disable */
  async getResource(url) {
      const res = await fetch(`${this.apiBase}${url}`);
      if (!res.ok) {
          return null
      }
      return res.json();

  }

  async getSearchId() {
  const searchObj = await this.getResource('search')
  this.id = searchObj.searchId
  }

    // eslint-disable-next-line consistent-return
  async getFirstPackageTickets() {
    let getTicketsStop = true
    while (getTicketsStop) {
    try {
        // eslint-disable-next-line no-await-in-loop
    const firstPack = (await this.getResource(`tickets?searchId=${this.id}`)).tickets
    getTicketsStop = false
    return firstPack
   }
    catch(error) {
        console.log(error)
    }
  }
 }

 async getAllPackageTickets() {
  const ticketsPackageMass = []
  let getTicketsStop = true
  while (getTicketsStop) {
      // eslint-disable-next-line no-await-in-loop
  const tickestPack = await this.getResource(`tickets?searchId=${this.id}`)
  if(tickestPack!==null) {
      ticketsPackageMass.push(...tickestPack.tickets)
      getTicketsStop = !tickestPack.stop
  }
}
 return ticketsPackageMass
}
}

export default AviaSalesService;
