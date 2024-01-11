export interface availableOptions {
    question: string
    query: string
}

export interface inputProps {
    label?:string
    options: Array<availableOptions>
    value?: availableOptions
    onChange: Function
}