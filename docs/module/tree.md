## mapTree
通过迭代，对每个树结构数组元素执行函数，返回新的树结构数组。

- 1：tree - 树结构数组，每个元素是一个具有可选 children 属性的对象。
- 2：func - 回调函数，接收两个参数：1-当前节点，2-当前节点的深度（从根节点开始为 0）

`如果传入的原始数据（第一个参数）不是数组，或者迭代函数（第二个参数）不是函数，则返回原数据。`

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



## queryObjectsInTreeUsingKey
通过迭代，在树结构数组中查找具有指定键和值的对象，返回第一个匹配到的对象。

- 1：tree - 树结构数组，每个元素是一个具有可选 children 属性的对象。
- 2：key - 用于查找的目标键名。
- 2：value - 目标键对应的期望值。
- 

`如果传入的原始数据（第一个参数）不是数组，则返回null`

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

const findObj = queryObjectsInTreeUsingKey(tree,"id",2)

console.log(findObj);

//{ id: 2,name: "Node 1.1"}
````
