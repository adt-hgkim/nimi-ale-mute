import { DataTypes, Model } from "../../library/denodb.ts"

export default class User extends Model {
  static table = "Users"
  static timestamps = true

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      length: 50,
    },
    pw: {
      type: DataTypes.STRING,
      length: 50,
    },
  }
}
