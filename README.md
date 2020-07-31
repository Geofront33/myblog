# myblog

<p align="right">10172100304 王瑞鑫</p>

#### 运行方式

+ 本项目前后端分离，myblog-vue为前端项目，myblog-java为后端项目，分别在各自环境下运行即可访问网站

#### 初始界面

+ 访问网站后的第一张页面，点击Start按钮跳转至登陆界面

![img](file:///C:\Users\james\AppData\Roaming\Tencent\Users\1445031625\QQ\WinTemp\RichOle\4H]DC$Q3I1GHR2ACL51@2NA.png)

#### 登陆界面

+ 默认登陆账号是Geofront，密码是111111
+ 目前注册部分仅能通过访问相应api实现

![](C:\Users\james\Pictures\QQ图片20200731200721.png)

#### 主页

+ 主页会访问到所有人发的博客（目前只有自己发送），以element-ui中时间线+卡片的形式呈现
+ 页面最顶部为公用组件header，该部分会通过vuex获取到登陆时的账号，显示其账号与头像

![](C:\Users\james\Pictures\QQ图片20200731212008.png)

+ 再使用element-ui其中的分页组件将博客分为一页五篇

![img](file:///C:\Users\james\AppData\Roaming\Tencent\Users\1445031625\QQ\WinTemp\RichOle\Y]U]XS@JY2Q]EMP{4YA}2ZW.png)

#### 详情页

+ 页面中的header部分作为公用组件在详情页中依旧可以显示
+ 详情页默认为markdown格式渲染
+ 当访问者为文章创建者时，会出现编辑和删除界面

![](C:\Users\james\Pictures\QQ图片20200731212535.png)

+ 详情页中最后会有另一个公用组件footer

![](C:\Users\james\Pictures\QQ图片20200731214629.png)

#### 编辑页

+ 编辑页具体界面会与之后展示的发表文章页面相同，区别在于会自动填充

![img](file:///C:\Users\james\AppData\Roaming\Tencent\Users\1445031625\QQ\WinTemp\RichOle\21%~L]J7E8QAB4G$Q]A1S~L.png)

+ 页面最后会有提交和重置按钮

![](C:\Users\james\Pictures\QQ图片20200731214514.png)

#### 删除页

+ 点击“是”则删除该篇文章，点击“否”返回博客首页

![](C:\Users\james\Pictures\QQ图片20200731221112.png)

#### 发表文章页
+ 与之前编辑完全相同，点击提交后文章即被发表到首页

![img](file:///C:\Users\james\AppData\Roaming\Tencent\Users\1445031625\QQ\WinTemp\RichOle\1LAWY{H[1N1FNXKYFU][4W7.png)

#### 数据库设计

+ 网站只涉及到两张表，在navicat中生成后使用mybatis-plus自动导入进springboot项目中

```sql
CREATE TABLE `m_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `status` int(5) NOT NULL,
  `created` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UK_USERNAME` (`username`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `m_blog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `content` longtext,
  `created` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
```

+ 数据库放置在腾讯云服务器中，在运行代码后均可访问到数据库内数据

#### 接口设计

+ login作为登陆接口，post接受LoginDto数据，返回成功或失败
+ logout作为退出接口，项目中整合了shiro+jwt，token可作为长期访问的凭据
+ blog页面的crud均被实现

#### 平台

+ web开发

#### 数据集来源

+ 本期课程作业+通识精品课markdown版作业

#### 权限验证

+ 使用vuex组件，确保用户在没有登陆的情况下无法进行编辑或增加操作
+ history路由模式会将用户强制返回到登陆页面

![img](file:///C:\Users\james\AppData\Roaming\Tencent\Users\1445031625\QQ\WinTemp\RichOle\S72D7Q{$7AEQKQ%_[8ZPF}Y.png)

#### 部署

+ 可将vue部分代码整合进springboot文件后通过maven package打包成一个jar包后放入服务器内运行

#### 技术栈

+ vue+element-ui+springboot+mybatis-plus+mysql