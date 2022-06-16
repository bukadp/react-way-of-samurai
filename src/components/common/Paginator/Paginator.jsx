import React, {useState} from 'react';
import styles from "./Paginator.module.css";

function Paginator({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={styles.paginator}>
            { portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                    return <span className={currentPage == p && styles.selectedPage || styles.pageNumber}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}

            { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }

        </div>)

}


export default Paginator;




    /*<div>
    {pages.map(p => {
        return <span className={currentPage == p && styles.selectedPage || styles.cursor}
                     onClick={(e) => {
                         onPageChanged(p);
                     }}>{p}</span>
    })}
</div>)*/
