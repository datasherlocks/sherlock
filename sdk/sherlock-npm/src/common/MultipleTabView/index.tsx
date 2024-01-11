import React from 'react'

import {multipleTabProp,tabData} from '../../interface/common/multipleTab'
import {Wrapper, TabStyle} from './styles.tsx'

const MultipleTab = (props:multipleTabProp) => {
    const {options, onClick, primaryColor, secondaryColor, selected} = props
    return(
        <Wrapper>
            {
                options?.map((item:tabData) => (
                    <TabStyle onClick = {() => onClick(item)} selected = {selected?.value === item?.value} primaryColor = {primaryColor} >
                        {item?.label}
                    </TabStyle>
                ))
            }
        </Wrapper>
    )
}

export default MultipleTab