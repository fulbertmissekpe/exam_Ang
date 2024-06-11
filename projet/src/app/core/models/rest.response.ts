export interface RestResponse<T>{
    totalItems?: number,
    pages?: Number[],
    totalPages?: number,
    currentPage?: number,
    results:T
    statuts:number
}
