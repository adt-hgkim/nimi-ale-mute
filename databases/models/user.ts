import { DataTypes, Model } from "../../library/denodb.ts";

export default class User extends Model {
  static table = "Users";
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      length: 50,
    },
    password: {
      type: DataTypes.STRING,
      length: 500,
    },
  };
}
