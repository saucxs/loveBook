# loveBook
loveBook爱上阅读，是一款webapp的读小说等书籍的并且阅读的应用。如果觉得可以，欢迎fork和star。
自己最近在追斗破苍穹电视剧，下班时候在地铁上总听到有人说，斗破苍穹书籍比电视剧好看，于是想弄个看书的webapp，这样在手机上看电子书很爽。找了好久发现发现只有追书神器的api暴露出来了，起点之类的api找不到。

### 技术栈
vue2 + vuex + vue-router + webpack + ES6 + axios + sass

### 源码地址
[https://github.com/saucxs/loveBook](https://github.com/saucxs/loveBook) 

### 项目截图
![热门模块](./screenshot/photo2.png)

### 版本功能
- [x] Element UI
- [x] 书籍列表
- [x] 书籍详情
- [x] 热门模块

+ 2018.10.17
   - 完成热门模块
+ 2018.10.21
    - 分类模块
    - 排行模块


## 项目运行

```   
git clone https://github.com/saucxs/loveBook

cd loveBook

npm install

npm run dev（本地运行 访问：http://localhost:8083）

npm run build （部署上线 生成的dist文件夹放到服务器中即可：需要配置代理，如使用nginx，可参考下面问题中的配置）

```

## 说明 
是基于[structure_webApp](https://github.com/saucxs/structure_webApp)架子上进行添加业务逻辑。

