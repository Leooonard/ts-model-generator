# install
```javascript
npm install
```

# usage
```javascript
npm start -- {path to interface.ts}
```

# 功能
## 修改interface名字，确保以I开头
```javascript
// before
interface Flight {}

// after
interface IFlight {}
```

## 修改interface的property名字，改为小驼峰
```javascript
// before
interface IFlight {
    FlightNo: string;
}

// after
interface IFlight {
    flightNo: string;
}
```