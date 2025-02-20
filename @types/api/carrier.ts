declare global {
    type PublicCarrier = {
        callsign: string;
        category: string;
        currentLocation: string;
        dockingAccess: string;
        id: string;
        marketId: string;
        name: string;
        owner: string;
        services: string[];
    };
    type PublicCarrierList = PublicCarrier[];
}