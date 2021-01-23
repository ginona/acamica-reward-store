import React from 'react'

const useCustomPagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = () => {
        const begin = (currentPage -1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end)
    }

    const currentArray = data.slice((currentPage-1) * itemsPerPage, currentPage * itemsPerPage)

    const next = () => {
        setCurrentPage(currentPage + 1)
    }

    const prev = () => {
        setCurrentPage(currentPage - 1, 1);
    }

    const jump = (page) => {
        // const pageNumber = Math.max(1, page);
        setCurrentPage(page);
    }

    return { next, prev, jump, currentData, currentPage, maxPage, currentArray }
}

export default useCustomPagination;