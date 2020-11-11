import React, {useState} from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginator = ({totalCount, portionSize = 3, changePage}) => {
    let pageSize = 10
    let pageNumber = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageNumber; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageNumber / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <Pagination>
            {portionNumber > 1 &&
            <Pagination.Prev onClick={() => setPortionNumber(portionNumber - 1)}/>}
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => (
                        <Pagination.Item key={page} onClick={() => changePage(page)}>{page}</Pagination.Item>
                    )
                )}
            {portionCount > portionNumber &&
            <Pagination.Next onClick={() => setPortionNumber(portionNumber + 1)}/>
            }

        </Pagination>
    )
}

export default Paginator
