# ElevationLevel

標高計算をするためのライブラリ。
建築系のプロジェクトに置いて、TPやGLなどの標高基準を扱うことを想定し、
標高の計算や、基準の変換(TPからGLなど)を実施する。
小数の計算に、decimal.jsを使用しています。

## 現行機能(v0.1.2)
- TP,GLを用いた標高の宣言と値の取得
- GLの定義(例えば、GL=TP+6.0など)
- TPからGLへの変換(例えば、GL=TP+6.0の時、TP+10.0→GL+4.0に変換)

## 使い方

### TP+1.0を宣言と値の取得

```ts
// TP+1.0 
const el = new ElevationLevel(
  {
    level: 1.0,
    standard: 'TP' as const,
  }
)
el.get('TP') // = Decimal(1.0)
```

### TPからGLへの変換
```ts
const el = new ElevationLevel(
  {
    level: 10,
    standard: 'TP' as const,
  }
)
el.to("GL", { GL: { standard: "TP" as const, level: 6 } }) // = Decimal(4.0)
```

## サンプル実装
https://github.com/ncdcdev/ElevationLevel/tree/main/sample/libraryTest

## npm
https://www.npmjs.com/package/elevationlevel

# 本ライブラリの開発用情報

## Build

- install
  - `npm install`
- build
  - `npm run build`

## publish

- npmにlogin
```
npm login
```

- npmにpublishする
```
npx np
```

- (参考)npmにpublishしない(githubにpushしてtagを打つ)
```
npx np -no-publish
```
