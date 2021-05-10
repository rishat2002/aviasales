import ServiceConfig from './service-config'
import { servTicketType } from '../redux/tickets-redux/tickets-actions'

class AviaSalesService {
  /* eslint-disable */
  serviceConfig = new ServiceConfig()
  async getSearchId() {
    const searchObj: {
      searchId: string
    } = await this.serviceConfig.getResource("search")
    this.serviceConfig.id = searchObj.searchId
  }

  async getFirstPackageTickets() {
    let getTicketsStop: boolean = true
    while (getTicketsStop) {
      try {
        const firstPack: Array<servTicketType> = (
          await this.serviceConfig.getResource(
            `tickets?searchId=${this.serviceConfig.id}`,
          )
        ).tickets
        getTicketsStop = false
        return firstPack
      } catch (error) {
        console.log(error)
      }
    }
    return null
  }

  async getAllPackageTickets() {
    const ticketsPackageMass = []
    let getTicketsStop = true
    while (getTicketsStop) {
      const tickestPack: {
        tickets: Array<servTicketType>
        stop: boolean
      } = await this.serviceConfig.getResource(
        `tickets?searchId=${this.serviceConfig.id}`,
      )
      if (tickestPack !== null) {
        ticketsPackageMass.push(...tickestPack.tickets)
        getTicketsStop = !tickestPack.stop
      }
    }
    return ticketsPackageMass
  }
}

export default AviaSalesService
