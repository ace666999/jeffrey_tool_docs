<template><div><h2 id="maptree" tabindex="-1"><a class="header-anchor" href="#maptree"><span>mapTree</span></a></h2>
<p>通过迭代，对每个树结构数组元素执行函数，返回新的树结构数组。</p>
<ul>
<li>1：tree - 树结构数组，每个元素是一个具有可选 children 属性的对象。</li>
<li>2：func - 回调函数，接收两个参数：1-当前节点，2-当前节点的深度（从根节点开始为 0）</li>
</ul>
<p><code v-pre>如果传入的原始数据（第一个参数）不是数组，或者迭代函数（第二个参数）不是函数，则返回原数据。</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 1.1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> newTree <span class="token operator">=</span> <span class="token function">mapTree</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span>level</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    node<span class="token punctuation">.</span>level <span class="token operator">=</span> level<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newTree<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="queryobjectsintreeusingkey" tabindex="-1"><a class="header-anchor" href="#queryobjectsintreeusingkey"><span>queryObjectsInTreeUsingKey</span></a></h2>
<p>通过迭代，在树结构数组中查找具有指定键和值的对象，返回第一个匹配到的对象。</p>
<ul>
<li>1：tree - 树结构数组，每个元素是一个具有可选 children 属性的对象。</li>
<li>2：key - 用于查找的目标键名。</li>
<li>2：value - 目标键对应的期望值。</li>
<li></li>
</ul>
<p><code v-pre>如果传入的原始数据（第一个参数）不是数组，则返回null</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 1.1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Node 2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> findObj <span class="token operator">=</span> <span class="token function">queryObjectsInTreeUsingKey</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span><span class="token string">"id"</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>findObj<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//{ id: 2,name: "Node 1.1"}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


