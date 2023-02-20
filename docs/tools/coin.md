---
title: 查看加密货币价格
---

[Github Address](https://github.com/WisestCoder/coin-watch)

一款可以随意查看加密货币价格、浮动等等信息的命令行工具

### 安装

```bash
yarn global add @wisestcoder/coin-watch
# 或者
npm install -g @wisestcoder/coin-watch
```

### 命令行

#### token

设置token，所有的api调用都需要配置自己的token

token获取地址 [CoinMarketCap](https://coinmarketcap.com/api/)

```bash
coin token
```

#### list

查看货币列表，按照分页返回数据

```bash
coin list

Options:
  -l, --start <start>   页码
  -l, --limit <limit>   每页条数
  -c, --convert <type>  兑换币种
  -h, --help            display help for command
```

#### currency

查看某一个货币信息

```bash
coin currency [coinType] # @example: coin currency btc

Options:
  -c, --convert <type>  兑换币种
```

#### manual

添加、查看、删除自选货币信息

```bash
coin manual

Options:
  -a, --add     添加币种
  -r, --remove  删除币种
  -l, --list    查看添加的币种信息
```

### 自定义信息

命令行工具在第一次初始化的时候，会在用户目录下创建一份配置信息的JSON，所以可以手动修改文件该来更新配置信息
文件位置`~/.coin/auth.json`

```javascript
{
  "token": "1e2992b4-437d-44g2-9d02-9fkw392mf94", // token
  "manual": { // 自选币种信息，按照兑换币种来分类
    "USD": [
      "cake" // 查询cake的USD价格
    ],
    "BTC": [
      "near" // 查询near的BTC价格
    ]
  },
  "effects": [ // 查询币种时显示的字段，传空显示全部 price,volume_24h,percent_change_1h,percent_change_24h,percent_change_7d,percent_change_30d,percent_change_60d,percent_change_90d
    "price",
    "volume_24h"
  ]
}
```
