module.exports = (sequelize, DataTypes) => {
    const JobType = sequelize.define('JobType', {
        startDate: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.STRING,
        },
        sourceOfWork: {
            type: DataTypes.STRING,
        },
        typeOfWork: {
            type: DataTypes.STRING,
        },
        phase: {
            type: DataTypes.STRING,
        },
        jobStreetAddress: {
            type: DataTypes.STRING,
        },
        jobStreetAddressL2: {
            type: DataTypes.STRING,
        },
        jobCity: {
            type: DataTypes.STRING,
        },
        jobState: {
            type: DataTypes.STRING,
        },
        jobZipCode: {
            type: DataTypes.INTEGER,
        },
    });

    JobType.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        JobType.belongsTo(models.Customer, {
          foreignKey: {
            allowNull: false,
          },
        });
      };
    
      return JobType;
    };



// retroFit: {
//     type: DataTypes.BOOLEAN,
//         },
// newConstruction: {
//     type: DataTypes.BOOLEAN,
//         },
// repairWork: {
//     type: DataTypes.BOOLEAN,
//         },
// originatedAsSvcCall: {
//     type: DataTypes.BOOLEAN,
//         },
// marketingOriginationInternet: {
//     type: DataTypes.BOOLEAN,
//         },
// marketingOriginationReferral: {
//     type: DataTypes.BOOLEAN,
//         },
// notes: {
//     type: DataTypes.STRING