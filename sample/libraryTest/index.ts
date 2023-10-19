//import { trim } from "./node_modules/helloworldnpm/dist/hellolib.js";
import { ElevationLevel } from "elevationlevel";

/*
--- GL+0.0 = TP+5.5

--- GL-2.4 = TP+3.1

--- GL-5.5 = TP+0.0
*/



// GL=TP+5.5
const config = { GL: { standard: "TP" as const, level: 5.5 } }

// TP+3.1
const el = new ElevationLevel(
  {
    level: 3.1,
    standard: 'TP' as const,
  }
)

// GLに変換 → GL-2.4
console.log(
  el.to("GL", config) // = Decimal(-2.4)
)

// 機能未実装

// const el2 = new ElevationLevel(
//   {
//     level: 1.0,
//     standard: 'GL' as const,
//   }
// )

// console.log(
//   el.to("TP", config) // = Decimal(6.5)
// )

