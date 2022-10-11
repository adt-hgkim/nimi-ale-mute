import { DataTypes, Model } from "../../library/denodb.ts"

export default class Vote extends Model {
  static table = "Votes"
  static timestamps = true

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    definition_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
      length: 10,
    },
  }
}
