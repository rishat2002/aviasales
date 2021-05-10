class ServiceConfig {
  apiBase = 'https://front-test.beta.aviasales.ru/'

  id = ''

  async getResource(url: string) {
    const res = await fetch(`${this.apiBase}${url}`)
    if (!res.ok) {
      return null
    }
    return res.json()
  }
}

export default ServiceConfig
