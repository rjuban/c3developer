/*
 * Copyright 2009-2016 C3 IoT (http://www.c3iot.com). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret
 * and proprietary information of C3 IoT and its licensors. Reproduction, use and distribution
 * of this material in any form is strictly prohibited except as set forth in a written
 * license agreement with C3 IoT and/or its authorized distributors.
 */
/*
 * @author: Scott Kurinskas
 */
/* obsolete.  no longer in use */
c3Import('metadata');
var log = C3.logger("backblaze");

function transform(hdMeasurements) {

	var pmsAry = [];
	var resp = [];
	var name;
	
	var assetId = hdMeasurements.serial_number;
	var fields = hdMeasurements.fields();

	fields.forEach(function (f) {

		if (f.name.includes("smart") || f.name.includes("failure") || f.name.includes("bytes")) {
			name = getColumnMetricMapping(f.name);

			var id = assetId + "_" + name;
			var pms = PhysicalMeasurementSeries.make({
				id: id,
				name: name,
				asset: {id : assetId},
				measurementType: name,
				treatment: "rate",
				unitConstraint: {id: "dimensionless"}
			});

			pmsAry.push(pms);
		}
	})

	return pmsAry;
  
}


function getColumnMetricMapping(fieldName) {

	var mapping = [
	    {
	      "id": "capacity_bytes",
	      "name": "capacity"
	    },
	    {
	      "id": "failure",
	      "name": "failure"
	    },
	    {
	      "id": "smart_1_normalized",
	      "name": "readErrorRateNormalized"
	    },
	    {
	      "id": "smart_1_raw",
	      "name": "readErrorRate"
	    },
	    {
	      "id": "smart_2_normalized",
	      "name": "throughputNormalized"
	    },
	    {
	      "id": "smart_2_raw",
	      "name": "throughput"
	    },
	    {
	      "id": "smart_3_normalized",
	      "name": "spinUpNormalized"
	    },
	    {
	      "id": "smart_3_raw",
	      "name": "spinUp"
	    },
	    {
	      "id": "smart_4_normalized",
	      "name": "startStopCountNormalized"
	    },
	    {
	      "id": "smart_4_raw",
	      "name": "startStopCount"
	    },
	    {
	      "id": "smart_5_normalized",
	      "name": "reallocatedSectorsNormalized"
	    },
	    {
	      "id": "smart_5_raw",
	      "name": "reallocatedSectors"
	    },
	    {
	      "id": "smart_7_normalized",
	      "name": "seekErrorNormalized"
	    },
	    {
	      "id": "smart_7_raw",
	      "name": "seekError"
	    },
	    {
	      "id": "smart_8_normalized",
	      "name": "seekTimeNormalized"
	    },
	    {
	      "id": "smart_8_raw",
	      "name": "seekTime"
	    },
	    {
	      "id": "smart_9_normalized",
	      "name": "powerOnNormalized"
	    },
	    {
	      "id": "smart_9_raw",
	      "name": "powerOn"
	    },
	    {
	      "id": "smart_10_normalized",
	      "name": "spinRetryNormalized"
	    },
	    {
	      "id": "smart_10_raw",
	      "name": "spinRetry"
	    },
	    {
	      "id": "smart_11_normalized",
	      "name": "calibrationRetryNormalized"
	    },
	    {
	      "id": "smart_11_raw",
	      "name": "calibrationRetry"
	    },
	    {
	      "id": "smart_12_normalized",
	      "name": "powerCycleNormalized"
	    },
	    {
	      "id": "smart_12_raw",
	      "name": "powerCycle"
	    },
	    {
	      "id": "smart_13_normalized",
	      "name": "softReadNormalized"
	    },
	    {
	      "id": "smart_13_raw",
	      "name": "softRead"
	    },
	    {
	      "id": "smart_15_normalized",
	      "name": "smart15Normalized"
	    },
	    {
	      "id": "smart_15_raw",
	      "name": "smart15"
	    },
	    {
	      "id": "smart_22_raw",
	      "name": "heliumLevel"
	    },
	    {
	      "id": "smart_22_normalized",
	      "name": "heliumLevelNormalized"
	    },
	    {
	      "id": "smart_183_normalized",
	      "name": "runtimeBadBlockNormalized"
	    },
	    {
	      "id": "smart_183_raw",
	      "name": "runtimeBadBlock"
	    },
	    {
	      "id": "smart_184_normalized",
	      "name": "endToEndErrorNormalized"
	    },
	    {
	      "id": "smart_184_raw",
	      "name": "endToEndError"
	    },
	    {
	      "id": "smart_187_normalized",
	      "name": "uncorrectableErrorsNormalized"
	    },
	    {
	      "id": "smart_187_raw",
	      "name": "uncorrectableErrors"
	    },
	    {
	      "id": "smart_188_normalized",
	      "name": "commandTimeoutNormalized"
	    },
	    {
	      "id": "smart_188_raw",
	      "name": "commandTimeout"
	    },
	    {
	      "id": "smart_189_normalized",
	      "name": "highFlyWritesNormalized"
	    },
	    {
	      "id": "smart_189_raw",
	      "name": "highFlyWrites"
	    },
	    {
	      "id": "smart_190_normalized",
	      "name": "airflowTempNormalized"
	    },
	    {
	      "id": "smart_190_raw",
	      "name": "airflowTemp"
	    },
	    {
	      "id": "smart_191_normalized",
	      "name": "gSenseErrorNormalized"
	    },
	    {
	      "id": "smart_191_raw",
	      "name": "gSenseError"
	    },
	    {
	      "id": "smart_192_normalized",
	      "name": "powerOffCountNormalized"
	    },
	    {
	      "id": "smart_192_raw",
	      "name": "powerOffCount"
	    },
	    {
	      "id": "smart_193_normalized",
	      "name": "loadCycleCountNormalized"
	    },
	    {
	      "id": "smart_193_raw",
	      "name": "loadCycleCount"
	    },
	    {
	      "id": "smart_194_normalized",
	      "name": "temperatureNormalized"
	    },
	    {
	      "id": "smart_194_raw",
	      "name": "temperature"
	    },
	    {
	      "id": "smart_195_normalized",
	      "name": "eccRecoveredNormalized"
	    },
	    {
	      "id": "smart_195_raw",
	      "name": "eccRecovered"
	    },
	    {
	      "id": "smart_196_normalized",
	      "name": "reallocationEventCountNormalized"
	    },
	    {
	      "id": "smart_196_raw",
	      "name": "reallocationEventCount"
	    },
	    {
	      "id": "smart_197_normalized",
	      "name": "currentPendingSectorNormalized"
	    },
	    {
	      "id": "smart_197_raw",
	      "name": "currentPendingSector"
	    },
	    {
	      "id": "smart_198_normalized",
	      "name": "uncorrectableSectorCountNormalized"
	    },
	    {
	      "id": "smart_198_raw",
	      "name": "uncorrectableSectorCount"
	    },
	    {
	      "id": "smart_199_normalized",
	      "name": "dmaCrcErrorNormalized"
	    },
	    {
	      "id": "smart_199_raw",
	      "name": "dmaCrcError"
	    },
	    {
	      "id": "smart_200_normalized",
	      "name": "multiZoneErrorNormalized"
	    },
	    {
	      "id": "smart_200_raw",
	      "name": "multiZoneError"
	    },
	    {
	      "id": "smart_201_normalized",
	      "name": "softErrorNormalized"
	    },
	    {
	      "id": "smart_201_raw",
	      "name": "softError"
	    },
	    {
	      "id": "smart_220_normalized",
	      "name": "diskShiftNormalized"
	    },
	    {
	      "id": "smart_220_raw",
	      "name": "diskShift"
	    },
	    {
	      "id": "smart_222_normalized",
	      "name": "loadedHoursNormalized"
	    },
	    {
	      "id": "smart_222_raw",
	      "name": "loadedHours"
	    },
	    {
	      "id": "smart_223_raw",
	      "name": "loadUnloadRetry"
	    },
	    {
	      "id": "smart_223_normalized",
	      "name": "loadUnloadRetryNormalized"
	    },
	    {
	      "id": "smart_224_raw",
	      "name": "loadFriction"
	    },
	    {
	      "id": "smart_224_normalized",
	      "name": "loadFrictionNormalized"
	    },
	    {
	      "id": "smart_225_raw",
	      "name": "loadUnloadCycle"
	    },
	    {
	      "id": "smart_225_normalized",
	      "name": "loadUnloadCycleNormalized"
	    },
	    {
	      "id": "smart_226_raw",
	      "name": "loadInTime"
	    },
	    {
	      "id": "smart_226_normalized",
	      "name": "loadInTimeNormalized"
	    },
	    {
	      "id": "smart_240_normalized",
	      "name": "transferErrorRateNormalized"
	    },
	    {
	      "id": "smart_240_raw",
	      "name": "transferErrorRate"
	    },
	    {
	      "id": "smart_241_normalized",
	      "name": "totalLBAWrittenNormalized"
	    },
	    {
	      "id": "smart_241_raw",
	      "name": "totalLBAWritten"
	    },
	    {
	      "id": "smart_242_normalized",
	      "name": "totalLBAReadNormalized"
	    },
	    {
	      "id": "smart_242_raw",
	      "name": "totalLBARead"
	    },
	    {
	      "id": "smart_250_normalized",
	      "name": "readErrorRetryNormalized"
	    },
	    {
	      "id": "smart_250_raw",
	      "name": "readErrorRetry"
	    },
	    {
	      "id": "smart_251_normalized",
	      "name": "minimumSparesRemainingNormalized"
	    },
	    {
	      "id": "smart_251_raw",
	      "name": "minimumSparesRemaining"
	    },
	    {
	      "id": "smart_252_normalized",
	      "name": "newlyAddedBadFlashNormalized"
	    },
	    {
	      "id": "smart_252_raw",
	      "name": "newlyAddedBadFlash"
	    },
	    {
	      "id": "smart_254_normalized",
	      "name": "freeFallProtectionNormalized"
	    },
	    {
	      "id": "smart_254_raw",
	      "name": "freeFallProtection"
	    },
	    {
	      "id": "smart_255_normalized",
	      "name": "smart255Normalized"
	    },
	    {
	      "id": "smart_255_raw",
	      "name": "smart255"
	    }
  	];

  	var name = mapping.filter(function (d) {
	    		return d.id === fieldName;
			})[0].name;

  	return name;

}

//# sourceURL=transformCanonicalBBToPMS.js

