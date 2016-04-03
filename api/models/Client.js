/**
 * Client.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	// connection: "rustyOldMySQLDatabase",
	// tableName: "Client",
	attributes: {
		"lClientID": {
			"type": "integer",
			"unique": true,
			"primaryKey": true,
			// "columnName": "lClientID"
		},
		"szLastName": {
			"type": "string",
			"minLength": 1,
			"required": true
		},
		"szFirstName": {
			"type": "string"
		},
		"szTitle": {
			"type": "string"
		},
		"szAddress1": {
			"type": "string"
		},
		"szAddress2": {
			"type": "string"
		},
		"szSuburb": {
			"type": "string"
		},
		"szState": {
			"type": "string"
		},
		"szPostcode": {
			"type": "string"
		},
		"szPhone": {
			"type": "string"
		},
		"szMobilePhone": {
			"type": "string"
		},
		"szSex": {
			"type": "string"
		},
		"lDOB": {
			"type": "integer"
		},
		"szMedicareNo": {
			"type": "string"
		},
		"lMedicareDate": {
			"type": "integer"
		},
		"szReferenceNo": {
			"type": "string"
		},
		"szSafetyNetNo": {
			"type": "string"
		},
		"szConcessionNo": {
			"type": "string"
		},
		"szRepatNo": {
			"type": "string"
		},
		"szDiabeticNo": {
			"type": "string"
		},
		"szAdmissionNo": {
			"type": "string"
		},
		"szWeight": {
			"type": "string"
		},
		"lWeightDate": {
			"type": "integer"
		},
		"szAllergies": {
			"type": "string"
		},
		"szDiagnosis": {
			"type": "string"
		},
		"lDoctorID": {
			"type": "integer"
		},
		"facilitySectionID": {
			"type": "integer",
			"columnName": "FacilitySectionID"
		},
		"szRoomNumber": {
			"type": "string"
		},
		"szComments": {
			"type": "string"
		},
		"fClientActive": {
			"type": "integer"
		},
		"szPhotoPath": {
			"type": "string"
		},
		"dtPhotoTimeStamp": {
			"type": "string"
		},
		"bDisabled": {
			"type": "boolean"
		},
		"bDeleted": {
			"type": "boolean"
		},
		"spare1": {
			"type": "string",
			"columnName": "Spare1"
		},
		"spare2": {
			"type": "string",
			"columnName": "Spare2"
		},
		"spare3": {
			"type": "string",
			"columnName": "Spare3"
		},
		"syncStatus": {
			"type": "integer",
			"columnName": "SyncStatus"
		},
		"createdBy": {
			"type": "string",
			"columnName": "CreatedBy"
		},
		"creationDate": {
			"type": "string",
			"columnName": "CreationDate"
		},
		"lastUpdatedBy": {
			"type": "string",
			"columnName": "LastUpdatedBy"
		},
		"lastUpdateDate": {
			"type": "string",
			"columnName": "LastUpdateDate"
		},
		"lastUpdateUTC": {
			"type": "string",
			"columnName": "LastUpdateUTC"
		},
		"syncUTC": {
			"type": "string",
			"columnName": "SyncUTC"
		}
	}
};