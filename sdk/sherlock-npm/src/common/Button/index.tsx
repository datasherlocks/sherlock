import React from 'react'
import {buttonInterface} from '../../interface/common/button'

import {FilledWrapper} from './styles.tsx'

export const ButtonFilled = (props:buttonInterface) => {
    const {label, onClick} = props
    return(
        <FilledWrapper onClick={onClick} >
            {label}
        </FilledWrapper>
    )
}