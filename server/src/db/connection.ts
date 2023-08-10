import { Sequelize} from 'sequelize'

const sequelize = new Sequelize('crudproduct', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize