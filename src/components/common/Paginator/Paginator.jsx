import React from 'react';
import styles from "./Paginator.module.css";

function Paginator ({currentPage, onPageChanged, totalUsersCount, pageSize}) {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        {pages.map(p => {
            return <span className={currentPage == p && styles.selectedPage || styles.cursor}
                         onClick={(e) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>)
}
    export default Paginator;
