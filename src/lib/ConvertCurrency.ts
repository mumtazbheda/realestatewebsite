

interface ConvertCurrencyI {
    convert_from?: string;
    convert_to?: string;
}

export const ConvertCurrency = async ({ convert_from = "aed", convert_to }: ConvertCurrencyI) => {
    const data = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${convert_from.toLowerCase()}.json`)
    const res = await data.json()
    return res[convert_from]
}