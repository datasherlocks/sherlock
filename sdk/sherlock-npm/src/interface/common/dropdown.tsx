export interface availableOptions {
    label: string
    value: any
}

export interface dropdownProps {
    label?:string
    options: Array<availableOptions>
    value?: availableOptions
    onChange: Function
}