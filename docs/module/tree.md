## buildTree

把列表构建成树形结构,返回构建好的树形结构数组。

- 1：array - {Array} 原始节点数组。
- 2：id - {string = "id"} (可选参数)节点唯一标识的字段名。
- 3：parentId - {string = "parentId"} (可选参数)父节点标识的字段名。
- 4：sort - {number|string = "sort"} (可选参数)用于排序的字段名。

  `id、parentId、sort 为可选参数，如果有传入 sort，则会按照 sort 排序。`

示例：

````javascript
const list = [
  {id: 1, name: 'tree1'},
  {id: 2, name: 'tree2', parentId: 1,sort: 2},
  {id: 3, name: 'tree3', parentId: 1,sort:'1'},
  {id: 4, name: 'tree4', parentId: 0,sort: 1},
];
const tree=buildTree(list);
console.log(tree);
// [
//   {
//     "id": 4,
//     "name": "tree4",
//     "parentId": 0,
//     "sort": 1,
//     "children": []
//   },
//   {
//     "id": 1,
//     "name": "tree1",
//     "children": [
//       {
//         "id": 3,
//         "name": "tree3",
//         "parentId": 1,
//         "sort": "1",
//         "children": []
//       },
//       {
//         "id": 2,
//         "name": "tree2",
//         "parentId": 1,
//         "sort": 2,
//         "children": []
//       }
//     ]
//   }
// ]
````

## mapTree

对每个树结构数组元素执行函数，返回新的树结构数组。

- 1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。
- 2：func - {function} 回调函数，接收两个参数：1-当前节点，2-当前节点的深度（从根节点开始为 0）

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
const newTree = mapTree(tree, (node, level) => {
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
- 3：keyValue - {string|number} 用于查找的目标对象属性值。

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
const findObj = findObjectByKeyValue(tree, "id", 2)
console.log(findObj);
//{ id: 2,name: "Node 1.1"}
````

## findNodePath

查找树结构数组中指定节点的路径，并返回从根节点到目标节点的路径项数组，如果找不到目标节点，则返回空数组。

- 1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。
- 2：keyProperty - {string} 用于查找的目标对象属性名。
- 3：keyValue - {string|number} 用于查找的目标对象属性值。

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
const findPathArr = findNodePath(tree, "id", 2)
console.log(findPathArr);
//[{ id: 4,...},{ id: 6,...},{ id: 7,...}]
````

## removeEmptyChildren

递归地从树结构中移除空的 'children' 属性,返回新的树结构数组。

- 1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。

`如果节点的 children 属性是空数组或者为 null、undefined 等值，则删除该属性。`

示例：

````javascript
const tree = [
  {
    value: 'Root1',
    children: [
      {
        value: 'Root2',
        children: [
          {
            value: 'Root3',
            children: [
              {     value: 'Root4',children:undefined},
            ],
          },
        ],
      },
      {value: 'Root5', children: [] },
    ],
  },
  {
    value: 'Root2',
    children:null,
  },
];
const processingTrees = removeEmptyChildren(tree)
console.log(processingTrees);
// [
//   {
//     "value": "Root1",
//     "children": [
//       {
//         "value": "Root2",
//         "children": [
//           {
//             "value": "Root3",
//             "children": [
//               {
//                 "value": "Root4"
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "value": "Root5"
//       }
//     ]
//   },
//   {
//     "value": "Root2"
//   }
// ]
````


## truncateTree

截断树结构数组至指定层级,返回新的树结构数组。

- 1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。
- 2：level  - {number=1} 指定要保留的层级数，默认为1级。

`不会改变原数据，返回新的树结构数组。`

示例：

````javascript
const tree = [
  {
    value: 'Root1',
    children: [
      {
        value: 'Root2',
        children: [
          {
            value: 'Root3',
            children: [
              {     value: 'Root4',children:undefined},
            ],
          },
        ],
      },
      {value: 'Root5', children: [] },
    ],
  },
  {
    value: 'Root2',
    children:null,
  },
];
const newTree = truncateTree(tree, 1);
console.log(newTree);
// [
//   {
//     "value": "Root1",
//     "children": []
//   },
//   {
//     "value": "Root2",
//     "children": []
//   }
// ]
````
