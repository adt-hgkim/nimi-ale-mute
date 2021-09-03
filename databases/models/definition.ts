import { DataTypes, Model } from "../../library/denodb.ts"

export default class Definition extends Model {
  static table = "Definitions"
  static timestamps = true

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    definition: {
      type: DataTypes.STRING,
      length: 50,
    },
    country: {
      type: DataTypes.STRING,
      length: 50,
    },
  }
}
