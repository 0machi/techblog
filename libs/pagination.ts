const perPage = Number(process.env.PER_PAGE)
export const getPaginationCount = (totalCount: number) => Math.ceil(totalCount / perPage)
