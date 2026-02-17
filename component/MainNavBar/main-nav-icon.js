'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark, faFilter,faCartShopping,faTrash} from "@fortawesome/free-solid-svg-icons";

export function BarIcon({classN, handlerToggel}) {
    return (
        <FontAwesomeIcon className={classN} icon={faBars} onClick={handlerToggel} />
    )
}

export function XmarkIcon({classN, handlerToggel}) {
    return(
        <FontAwesomeIcon className={classN} icon={faXmark} onClick={handlerToggel} />
    )
}

export function FilterIcon({classN, handlerToggel}) {
    return(
        <FontAwesomeIcon icon={faFilter} onClick={handlerToggel} className={classN} />
    )
}
export function CarShop({classN}) {
    return <FontAwesomeIcon icon={faCartShopping} className={classN} />
}
export function Delete({onClick}) {
    return <FontAwesomeIcon icon={faTrash} onClick={onClick} />
}