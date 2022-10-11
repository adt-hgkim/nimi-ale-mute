import { DataTypes, Model } from "../../library/denodb.ts"

export default class Word extends Model {
  static table = "Words"
  static timestamps = true

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tokipona: {
      type: DataTypes.STRING,
      length: 50,
    },
  }
}
