const menu: MenuCfg = {
    defaultKey: 'child2',
    menuOption: [
        {
            key: 'HelloWorld',
            label: '示范',
            children: [
                {
                    key: 'child1',
                    label: '子项示范1',
                    children: [
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
}

export const defaultKey = menu.defaultKey

export default menu.menuOption
