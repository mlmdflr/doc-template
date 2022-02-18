export const documentName = 'xps-doc-template'

export default [
    {
        key: 'HelloWorld',
        label: '示范',
        children: [
            {
                key: 'child1',
                label: '子项示范1',
                children:[
                    {
                        key: 'child2',
                        label: '子项示范2',
                    }
                ]
            },
            {
                key: 'child1',
                label: '子项示范'
            }
        ]
    }
]
