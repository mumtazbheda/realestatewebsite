import { client } from "../../sanity/lib/client"

export const SanityFetch = async ({ Query }: { Query: string }) => {
    try {
        // const Data = await client.fetch(Query)
        const Data = await client.fetch(Query, {}, {cache : "no-cache"})
        const res = await Data
        return res
    } catch (err) {
        return (err as string).toString()
    }

}