import ServiceConfig from "./service-config";

class AviaSalesService {
  /* eslint-disable */
  serviceConfig = new ServiceConfig()

  async getSearchId() {
    const searchObj = await this.serviceConfig.getResource('search');
    this.id = searchObj.searchId;
  }

  // eslint-disable-next-line consistent-return
  async getFirstPackageTickets() {
    let getTicketsStop = true;
    while (getTicketsStop) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const firstPack = (await this.serviceConfig.getResource(`tickets?searchId=${this.id}`)).tickets;
        getTicketsStop = false;
        return firstPack;
      } catch (error) {}
    }
  }

  async getAllPackageTickets() {
    const ticketsPackageMass = [];
    let getTicketsStop = true;
    while (getTicketsStop) {
      // eslint-disable-next-line no-await-in-loop
      const tickestPack = await this.serviceConfig.getResource(`tickets?searchId=${this.id}`);
      if (tickestPack !== null) {
        ticketsPackageMass.push(...tickestPack.tickets);
        getTicketsStop = !tickestPack.stop;
      }
    }
    return ticketsPackageMass;
  }
}

export default AviaSalesService;
