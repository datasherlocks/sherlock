import React from 'react'
import {CodeBlock, dracula, CopyBlock} from 'react-code-blocks'

import {codeBlock} from '../../interface/common/codeBlock'
import {Wrapper} from './styles.tsx'

const Code = (props: codeBlock) => {
    const {code, language, theme, showLineNumbers = false, show} = props

    if(!show) return null
    return(
        <Wrapper>
            <CodeBlock 
                text = {code}
                language = {language}
                theme = {theme || dracula}
                showLineNumbers = {showLineNumbers}
            />
        </Wrapper>
    )
}

export default Code