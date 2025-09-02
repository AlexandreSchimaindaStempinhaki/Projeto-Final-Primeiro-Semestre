const { Sequelize } = require('sequelize');

// MySQL connection configuration
const sequelize = new Sequelize(
    process.env.DB_NAME || 'crud_app',
    process.env.DB_USER || 'crud_user',
    process.env.DB_PASSWORD || 'crud_password',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            timestamps: true,
            underscored: false,
            freezeTableName: true
        }
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ MySQL connection established successfully.');

        // Synchronize models with the database
        await sequelize.sync({
            force: false,
            alter: process.env.NODE_ENV === 'development'
        });

        console.log('✅ Models synchronized with the database.');
    } catch (error) {
        console.error('❌ Error connecting to MySQL:', error);
        process.exit(1);
    }
};

// Graceful shutdown
process.on('SIGINT', async () => {
    try {
        await sequelize.close();
        console.log('🔌 MySQL connection closed due to application termination');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error closing connection:', error);
        process.exit(1);
    }
});

module.exports = { sequelize, connectDB };
