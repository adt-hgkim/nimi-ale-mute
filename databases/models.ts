import { DataTypes, Model } from "../library/denodb.ts"

class User extends Model {
  static table = "Users"
  static timestamps = true

  static fields = {
    id: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    pw: {
      type: DataTypes.STRING,
    },
  }
}

export { User }
