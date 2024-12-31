<template><div><h2 id="buildtree" tabindex="-1"><a class="header-anchor" href="#buildtree"><span>buildTree</span></a></h2>
<p>把列表构建成树形结构,返回构建好的树形结构数组。</p>
<ul>
<li>
<p>1：array - {Array} 原始节点数组。</p>
</li>
<li>
<p>2：id - {string = &quot;id&quot;} (可选参数)节点唯一标识的字段名。</p>
</li>
<li>
<p>3：parentId - {string = &quot;parentId&quot;} (可选参数)父节点标识的字段名。</p>
</li>
<li>
<p>4：sort - {number|string = &quot;sort&quot;} (可选参数)用于排序的字段名。</p>
<p><code v-pre>id、parentId、sort 为可选参数，如果有传入 sort，则会按照 sort 排序。</code></p>
</li>
</ul>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'tree1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'tree2'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">sort</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'tree3'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">sort</span><span class="token operator">:</span><span class="token string">'1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'tree4'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token literal-property property">sort</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> tree<span class="token operator">=</span><span class="token function">buildTree</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// [</span></span>
<span class="line"><span class="token comment">//   {</span></span>
<span class="line"><span class="token comment">//     "id": 4,</span></span>
<span class="line"><span class="token comment">//     "name": "tree4",</span></span>
<span class="line"><span class="token comment">//     "parentId": 0,</span></span>
<span class="line"><span class="token comment">//     "sort": 1,</span></span>
<span class="line"><span class="token comment">//     "children": []</span></span>
<span class="line"><span class="token comment">//   },</span></span>
<span class="line"><span class="token comment">//   {</span></span>
<span class="line"><span class="token comment">//     "id": 1,</span></span>
<span class="line"><span class="token comment">//     "name": "tree1",</span></span>
<span class="line"><span class="token comment">//     "children": [</span></span>
<span class="line"><span class="token comment">//       {</span></span>
<span class="line"><span class="token comment">//         "id": 3,</span></span>
<span class="line"><span class="token comment">//         "name": "tree3",</span></span>
<span class="line"><span class="token comment">//         "parentId": 1,</span></span>
<span class="line"><span class="token comment">//         "sort": "1",</span></span>
<span class="line"><span class="token comment">//         "children": []</span></span>
<span class="line"><span class="token comment">//       },</span></span>
<span class="line"><span class="token comment">//       {</span></span>
<span class="line"><span class="token comment">//         "id": 2,</span></span>
<span class="line"><span class="token comment">//         "name": "tree2",</span></span>
<span class="line"><span class="token comment">//         "parentId": 1,</span></span>
<span class="line"><span class="token comment">//         "sort": 2,</span></span>
<span class="line"><span class="token comment">//         "children": []</span></span>
<span class="line"><span class="token comment">//       }</span></span>
<span class="line"><span class="token comment">//     ]</span></span>
<span class="line"><span class="token comment">//   }</span></span>
<span class="line"><span class="token comment">// ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="maptree" tabindex="-1"><a class="header-anchor" href="#maptree"><span>mapTree</span></a></h2>
<p>对每个树结构数组元素执行函数，返回新的树结构数组。</p>
<ul>
<li>1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。</li>
<li>2：func - {function} 回调函数，接收两个参数：1-当前节点，2-当前节点的深度（从根节点开始为 0）</li>
</ul>
<p><code v-pre>如果传入的原始数据（第一个参数）不是数组，或者迭代函数（第二个参数）不是函数，则返回[]。</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 1.1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 2"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newTree <span class="token operator">=</span> <span class="token function">mapTree</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> level</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    node<span class="token punctuation">.</span>level <span class="token operator">=</span> level<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newTree<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// [</span></span>
<span class="line"><span class="token comment">//     {</span></span>
<span class="line"><span class="token comment">//         "id": 1,</span></span>
<span class="line"><span class="token comment">//         "name": "Node 1",</span></span>
<span class="line"><span class="token comment">//         "children": [</span></span>
<span class="line"><span class="token comment">//             {</span></span>
<span class="line"><span class="token comment">//                 "id": 2,</span></span>
<span class="line"><span class="token comment">//                 "name": "Node 1.1",</span></span>
<span class="line"><span class="token comment">//                 "level": 1</span></span>
<span class="line"><span class="token comment">//             }</span></span>
<span class="line"><span class="token comment">//         ],</span></span>
<span class="line"><span class="token comment">//         "level": 0</span></span>
<span class="line"><span class="token comment">//     },</span></span>
<span class="line"><span class="token comment">//     {</span></span>
<span class="line"><span class="token comment">//         "id": 2,</span></span>
<span class="line"><span class="token comment">//         "name": "Node 2",</span></span>
<span class="line"><span class="token comment">//         "children": [],</span></span>
<span class="line"><span class="token comment">//         "level": 0</span></span>
<span class="line"><span class="token comment">//     }</span></span>
<span class="line"><span class="token comment">// ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="findobjectbykeyvalue" tabindex="-1"><a class="header-anchor" href="#findobjectbykeyvalue"><span>findObjectByKeyValue</span></a></h2>
<p>在树结构数组中查找具有指定键和值的对象，返回第一个匹配到的对象，如果找不到目标对象，则返回 null。</p>
<ul>
<li>1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。</li>
<li>2：keyProperty - {string} 用于查找的目标对象属性名。</li>
<li>3：keyValue - {string|number} 用于查找的目标对象属性值。</li>
</ul>
<p><code v-pre>如果传入的原始数据（第一个参数）不是数组，则返回null。</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 1.1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 2"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> findObj <span class="token operator">=</span> <span class="token function">findObjectByKeyValue</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>findObj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//{ id: 2,name: "Node 1.1"}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="findnodepath" tabindex="-1"><a class="header-anchor" href="#findnodepath"><span>findNodePath</span></a></h2>
<p>查找树结构数组中指定节点的路径，并返回从根节点到目标节点的路径项数组，如果找不到目标节点，则返回空数组。</p>
<ul>
<li>1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。</li>
<li>2：keyProperty - {string} 用于查找的目标对象属性名。</li>
<li>3：keyValue - {string|number} 用于查找的目标对象属性值。</li>
</ul>
<p><code v-pre>如果传入的原始数据（第一个参数）不是数组，则返回[]。</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'子节点 1'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'子节点 1'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'子节点 2'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'子节点 2'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'子节点 1'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'子节点 2-1'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'子节点 2-1-1'</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'子节点 3'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">const</span> findPathArr <span class="token operator">=</span> <span class="token function">findNodePath</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>findPathArr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//[{ id: 4,...},{ id: 6,...},{ id: 7,...}]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removeemptychildren" tabindex="-1"><a class="header-anchor" href="#removeemptychildren"><span>removeEmptyChildren</span></a></h2>
<p>递归地从树结构中移除空的 'children' 属性,返回新的树结构数组。</p>
<ul>
<li>1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。</li>
</ul>
<p><code v-pre>如果节点的 children 属性是空数组或者为 null、undefined 等值，则删除该属性。</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root1'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root2'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root3'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">              <span class="token punctuation">{</span>     <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root4'</span><span class="token punctuation">,</span><span class="token literal-property property">children</span><span class="token operator">:</span><span class="token keyword">undefined</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root5'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root2'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> processingTrees <span class="token operator">=</span> <span class="token function">removeEmptyChildren</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>processingTrees<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// [</span></span>
<span class="line"><span class="token comment">//   {</span></span>
<span class="line"><span class="token comment">//     "value": "Root1",</span></span>
<span class="line"><span class="token comment">//     "children": [</span></span>
<span class="line"><span class="token comment">//       {</span></span>
<span class="line"><span class="token comment">//         "value": "Root2",</span></span>
<span class="line"><span class="token comment">//         "children": [</span></span>
<span class="line"><span class="token comment">//           {</span></span>
<span class="line"><span class="token comment">//             "value": "Root3",</span></span>
<span class="line"><span class="token comment">//             "children": [</span></span>
<span class="line"><span class="token comment">//               {</span></span>
<span class="line"><span class="token comment">//                 "value": "Root4"</span></span>
<span class="line"><span class="token comment">//               }</span></span>
<span class="line"><span class="token comment">//             ]</span></span>
<span class="line"><span class="token comment">//           }</span></span>
<span class="line"><span class="token comment">//         ]</span></span>
<span class="line"><span class="token comment">//       },</span></span>
<span class="line"><span class="token comment">//       {</span></span>
<span class="line"><span class="token comment">//         "value": "Root5"</span></span>
<span class="line"><span class="token comment">//       }</span></span>
<span class="line"><span class="token comment">//     ]</span></span>
<span class="line"><span class="token comment">//   },</span></span>
<span class="line"><span class="token comment">//   {</span></span>
<span class="line"><span class="token comment">//     "value": "Root2"</span></span>
<span class="line"><span class="token comment">//   }</span></span>
<span class="line"><span class="token comment">// ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="truncatetree" tabindex="-1"><a class="header-anchor" href="#truncatetree"><span>truncateTree</span></a></h2>
<p>截断树结构数组至指定层级,返回新的树结构数组。</p>
<ul>
<li>1：tree - {tree} 树形结构数组，每个元素是一个具有可选 children 属性的对象。</li>
<li>2：level  - {number=1} 指定要保留的层级数，默认为1级。</li>
</ul>
<p><code v-pre>不会改变原数据，返回新的树结构数组。</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root1'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root2'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root3'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">              <span class="token punctuation">{</span>     <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root4'</span><span class="token punctuation">,</span><span class="token literal-property property">children</span><span class="token operator">:</span><span class="token keyword">undefined</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root5'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Root2'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> newTree <span class="token operator">=</span> <span class="token function">truncateTree</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newTree<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// [</span></span>
<span class="line"><span class="token comment">//   {</span></span>
<span class="line"><span class="token comment">//     "value": "Root1",</span></span>
<span class="line"><span class="token comment">//     "children": []</span></span>
<span class="line"><span class="token comment">//   },</span></span>
<span class="line"><span class="token comment">//   {</span></span>
<span class="line"><span class="token comment">//     "value": "Root2",</span></span>
<span class="line"><span class="token comment">//     "children": []</span></span>
<span class="line"><span class="token comment">//   }</span></span>
<span class="line"><span class="token comment">// ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


