import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Enrolled = () => {
    const { store, actions } = useContext(Context);
    const myArray = store.enrolled;
    console.log(myArray);
    console.log(myArray[0]);



    return (
        <div className="container enrolledtb">
            <ul className="enrolled_ul">
                {myArray.length === 0 ? (
                    <li><span className="spam_no">No element in Array</span></li>
                ) : (
                    myArray.map((item) => (
                        <li key={item.id} className="enrolled_li">
                            <span className="spam_li">ID:{item.id} - {item.email} - IS ACTIVE:{item.is_active} </span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

