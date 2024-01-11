import {useEffect, useState} from 'react';
import * as React from 'react';

export default function Search({theme, searchData, onClick, showList}) {
    return (
        <div className="flex">
            {showList && (
                <div className="results-list w-full">
                    {searchData.map((result, id) => (
                        <div
                            className="search-result"
                            onClick={onClick}
                            key={id}>
                            {result.question}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}