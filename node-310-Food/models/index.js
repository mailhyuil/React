import Sequelize from "sequelize";
import config from "../mysqlConfig.js"

import initModel from "./init-models.js"

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = initModel(sequelize);
export { db, sequelize };