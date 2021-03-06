module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        // newCustomer: {
        //     type: DataTypes.BOOLEAN,
        // },
        // existingCustomer: {
        //     type: DataTypes.BOOLEAN,
        // },
        residentialCommercial: {
            type: DataTypes.STRING,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        positionDepartment: {
            type: DataTypes.STRING,

        },
        companyName: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        streetAddress: {
            type: DataTypes.STRING,
        },
        streetAddressL2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zipCode: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
        },
        // phase: {
        //     type: DataTypes.BOOLEAN,
        // },
        // class: {
        //     type: DataTypes.BOOLEAN,
        // },
        // complete: {
        //     type: DataTypes.BOOLEAN,
        // },
    });
    Customer.associate = (models) => {
        // Associating customer with jobTypes
        // When a customer is deleted, also delete any associated Posts
        Customer.hasMany(models.JobType, {
          onDelete: 'cascade',
        });
      };
    
      return Customer;
    };
