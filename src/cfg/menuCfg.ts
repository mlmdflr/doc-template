import type { MenuOption } from "naive-ui";
export const menuOption: MenuOption[] = [
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
export default menuOption
