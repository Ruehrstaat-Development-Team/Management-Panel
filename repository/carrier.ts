import type { NitroFetchRequest, $Fetch } from "nitropack";

export const carrierRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getCarrier(): Promise<PublicCarrier[]> {
      return await fetch<PublicCarrier[]>('http://localhost:8000/v1/public/carrier/', {
        method: 'GET',
      });
  },

  async getCarrierById(id: string): Promise<PublicCarrier> {
      return fetch<PublicCarrier>(`http://localhost:8000/v1/public/carrier/${id}`, {
        method: 'GET',
      });
  },
});
