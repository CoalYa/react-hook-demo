### React Hooks基本概念

1. React16.8的新增特性，可以在不写class组件的情况下使用state
2. hooks对函数式组件极大的增强

### 状态

在某个上下文（用户界面）数据和改变数据的行为

```
const [count, setCount] = useState(0);
			 状态			行为				hooks API
```

React hooks帮助大家将数据和行为绑定，



### 作用（Effect）

状态映射到视图之外的东西，比如改变URL、计时器、logger...

```
//依赖[变化]变化的作用
useEffect(() => {
	console.log(...)
})
```

相同（或类似）的作用复用

```
function someEffect() {
	console.log(...)
}

useEffect(someEffect)
```



### 上下文（Context）

UI产生过程中，能够从context中获取信息



### 引用行为

引用React管理以外的对象，例如focus、媒体对象操作等，缓存值。通常搭配`useEffect`



### 缓存

缓存一个函数`useCallback`

缓存一个值`useMemo`



### 使用建议

1. `React.memo`减少重绘次数
2. hooks同步问题
3. 构造自己的hooks封装行为
4. 每种行为一个hooks
5. 不要再思考生命周期



