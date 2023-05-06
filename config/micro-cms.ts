type MicroCMSConfig = {
    serviceDomain: string;
    apiKey: string;
}

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || "";
const apiKey = process.env.MICROCMS_API_KEY || "";

if (!serviceDomain) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!apiKey) {
    throw new Error('MICROCMS_API_KEY is required');
}

export const microCMSConfig: MicroCMSConfig = {
    serviceDomain: serviceDomain,
    apiKey: apiKey,
}