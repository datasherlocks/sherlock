export interface tabData {
    label: string
    value: string
}

export interface multipleTabProp{
    options: Array<tabData>
    onClick: Function
    primaryColor?: string
    secondaryColor?: string,
    selected: tabData
    queryResult: any
}