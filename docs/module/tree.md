## mapTree
对每个树结构数组元素执行函数，返回新的树结构数组。

- 1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。
- 2：func - {function}回调函数，接收两个参数：1-当前节点，2-当前节点的深度（从根节点开始为 0）

`如果传入的原始数据（第一个参数）不是数组，或者迭代函数（第二个参数）不是函数，则返回[]。`

示例：
````javascript
const tree = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 1.1",
      },
    ]
  },
  {
    id: 2,
    name: "Node 2",
    children: []
  }
];
const newTree = mapTree(tree,(node,level)=>{
    node.level = level;
})
console.log(newTree);
// [
//     {
//         "id": 1,
//         "name": "Node 1",
//         "children": [
//             {
//                 "id": 2,
//                 "name": "Node 1.1",
//                 "level": 1
//             }
//         ],
//         "level": 0
//     },
//     {
//         "id": 2,
//         "name": "Node 2",
//         "children": [],
//         "level": 0
//     }
// ]
````

## findObjectByKeyValue
在树结构数组中查找具有指定键和值的对象，返回第一个匹配到的对象，如果找不到目标对象，则返回 null。

- 1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。
- 2：keyProperty - {string} 用于查找的目标对象属性名。
- 3：keyValue - {string|number}用于查找的目标对象属性值。

`如果传入的原始数据（第一个参数）不是数组，则返回null。`

示例：
````javascript
const tree = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 1.1",
      },
    ]
  },
  {
    id: 2,
    name: "Node 2",
    children: []
  }
];
const findObj = findObjectByKeyValue(tree,"id",2)
console.log(findObj);
//{ id: 2,name: "Node 1.1"}
````

## findNodePath
查找树结构数组中指定节点的路径，并返回从根节点到目标节点的路径项数组，如果找不到目标节点，则返回空数组。

- 1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。
- 2：keyProperty - {string} 用于查找的目标对象属性名。
- 3：keyValue - {string|number}用于查找的目标对象属性值。

`如果传入的原始数据（第一个参数）不是数组，则返回[]。`

示例：
````javascript
const tree = [
    {
        id: 1,
        parentId: 0,
        name: '子节点 1', children: [
            {name: '子节点 1', id: 2, parentId: 1},
            {name: '子节点 2', id: 3, parentId: 1},
        ]
    },
    {
        id: 4,
        parentId: 0,
        name: '子节点 2',
        children: [
            {name: '子节点 1', id: 5, parentId: 4},
            {
                id: 6,
                parentId: 4,
                name: '子节点 2-1',
                children: [
                    {
                        id: 7,
                        parentId: 6,
                        name: '子节点 2-1-1'
                    },
                ]
            },

        ]
    },
    {
        id: 8,
        parentId: 0,
        name: '子节点 3',
        children: []
    }
]
const findPathArr = findNodePath(tree,"id",2)
console.log(findPathArr);
//[{ id: 4,...},{ id: 6,...},{ id: 7,...}]
````
