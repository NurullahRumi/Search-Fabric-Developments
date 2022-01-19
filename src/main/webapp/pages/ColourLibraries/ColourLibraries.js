/*
v1.00 cn04 05/04/2017 create fabric search


*/
Application.$controller("ColourLibrariesPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
    };

    $scope.radiosetClrFilterOptChange = function($event, $isolateScope, newVal, oldVal) {
        if (newVal === "Lab Reference") {
            $scope.Variables.statSearchOption.dataSet.dataValue = "LABREF";
            $scope.Widgets.txtDeltaE.datavalue = null;
        } else {
            $scope.Variables.statSearchOption.dataSet.dataValue = "LAB";
            $scope.Widgets.txtDeltaE.datavalue = 10;
        }
        $scope.Widgets.txtL.datavalue = null;
        $scope.Widgets.txtA.datavalue = null;
        $scope.Widgets.txtB.datavalue = null;
        $scope.Widgets.txtLabRef.datavalue = null;
        $scope.Widgets.colorpickerSearchColour.datavalue = null;
        if ($scope.Widgets.searchPantone.dataset !== undefined) {
            $scope.Widgets.searchPantone.dataset.length = 0;
            $scope.Widgets.searchPantone.datavalue = null;
        }


    };


    $scope.searchPantoneChange = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Variables.svProcRf020pk0GetClrOpt.dataSet.length !== 0) {

            if (newVal.length > 4) {
                if (newVal.substring(0, 4) != $scope.Variables.svProcRf020pk0GetClrOpt.dataBinding.p_filter) {
                    $scope.Variables.svProcRf020pk0GetClrOpt.setInput("p_filter", newVal);
                    $scope.Variables.svProcRf020pk0GetClrOpt.invoke();
                }
            }
        } else if (newVal.length > 4) {
            $scope.Variables.svProcRf020pk0GetClrOpt.setInput("p_filter", newVal);
            $scope.Variables.svProcRf020pk0GetClrOpt.invoke();
        }

        if (newVal.length === 4) {
            $scope.Variables.svProcRf020pk0GetClrOpt.setInput("p_filter", newVal);
            $scope.Variables.svProcRf020pk0GetClrOpt.invoke();
        }
    };

    $scope.btnFilterClick = function($event, $isolateScope) {

        if (!(($scope.Widgets.colorpickerSearchColour.datavalue === null || $scope.Widgets.colorpickerSearchColour.datavalue === undefined || $scope.Widgets.colorpickerSearchColour.datavalue === "") &&
                ($scope.Widgets.searchPantone.datavalue === null || $scope.Widgets.searchPantone.datavalue === undefined || $scope.Widgets.searchPantone.datavalue === "") &&
                ($scope.Widgets.txtL.datavalue === null || $scope.Widgets.txtL.datavalue === undefined || $scope.Widgets.txtL.datavalue === "") &&
                ($scope.Widgets.txtA.datavalue === null || $scope.Widgets.txtA.datavalue === undefined || $scope.Widgets.txtA.datavalue === "") &&
                ($scope.Widgets.txtB.datavalue === null || $scope.Widgets.txtB.datavalue === undefined || $scope.Widgets.txtB.datavalue === "") &&
                ($scope.Widgets.txtLabRef.datavalue === null || $scope.Widgets.txtLabRef.datavalue === undefined || $scope.Widgets.txtLabRef.datavalue === ""))) {

            if ($scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone C" || $scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone TPX" || $scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone TCX") {
                if (!($scope.Widgets.searchPantone.datavalue === null || $scope.Widgets.searchPantone.datavalue === undefined)) {
                    $scope.Lclrcode = $scope.Widgets.searchPantone.datavalue.labl;
                    $scope.Aclrcode = $scope.Widgets.searchPantone.datavalue.laba;
                    $scope.Bclrcode = $scope.Widgets.searchPantone.datavalue.labb;
                }
            } else if ($scope.Widgets.radiosetClrFilterOpt.datavalue === "Input L.A.B values") {

                if (!($scope.Widgets.txtL.datavalue === null || $scope.Widgets.txtL.datavalue === undefined || $scope.Widgets.txtA.datavalue === null || $scope.Widgets.txtA.datavalue === undefined ||
                        $scope.Widgets.txtB.datavalue === null || $scope.Widgets.txtB.datavalue === undefined)) {
                    $scope.Lclrcode = $scope.Widgets.txtL.datavalue;
                    $scope.Aclrcode = $scope.Widgets.txtA.datavalue;
                    $scope.Bclrcode = $scope.Widgets.txtB.datavalue;
                }
            } else {
                $scope.Lclrcode = null;
                $scope.Aclrcode = null;
                $scope.Bclrcode = null;
            }

            $scope.Variables.svgetColourLibraries.setInput("p_ToleranceDeltaE", $scope.Widgets.txtDeltaE.datavalue);
            $scope.Variables.svgetColourLibraries.setInput("p_search_opt", $scope.Variables.statSearchOption.dataSet.dataValue);
            $scope.Variables.svgetColourLibraries.setInput("hexcolor", $scope.Widgets.colorpickerSearchColour.datavalue);
            $scope.Variables.svgetColourLibraries.setInput("p_labL", $scope.Lclrcode);
            $scope.Variables.svgetColourLibraries.setInput("p_labA", $scope.Aclrcode);
            $scope.Variables.svgetColourLibraries.setInput("p_labB", $scope.Bclrcode);
            $scope.Variables.svgetColourLibraries.setInput("p_labref", ($scope.Widgets.txtLabRef.datavalue === null || $scope.Widgets.txtLabRef.datavalue === undefined || $scope.Widgets.txtLabRef.datavalue === "") ? $scope.Widgets.txtLabRef.datavalue : $scope.Widgets.txtLabRef.datavalue.toUpperCase());
            $scope.Variables.svgetColourLibraries.setInput("p_value", $scope.Widgets.cbValue.datavalue);
            $scope.Variables.svgetColourLibraries.invoke();


        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Please choose a colour or a labref!!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();

        }



    };


    $scope.txtLChange = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < 0 || newVal > 100) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab L Value must be between 0 and  100 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtL.datavalue = null;
        }

    };


    $scope.txtAChange = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < -128 || newVal > 128) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab A Value must be between -128 and  128 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtA.datavalue = null;
        }
    };


    $scope.txtBChange = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < -128 || newVal > 128) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab B Value must be between -128 and  128 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtB.datavalue = null;
        }
    };
    ///////////////////////////////////////////////////////////////////Compare Colours///////////////////////////////////////////////////////////////////

    $scope.btnCompareClick = function($event, $isolateScope) {
        if (!(($scope.Widgets.colorpickerClr1.datavalue === null || $scope.Widgets.colorpickerClr1.datavalue === undefined || $scope.Widgets.colorpickerClr1.datavalue === "") &&
                ($scope.Widgets.searchPantoneClr1.datavalue === null || $scope.Widgets.searchPantoneClr1.datavalue === undefined || $scope.Widgets.searchPantoneClr1.datavalue === "") &&
                ($scope.Widgets.txtLabL1.datavalue === null || $scope.Widgets.txtLabL1.datavalue === undefined || $scope.Widgets.txtLabL1.datavalue === "") &&
                ($scope.Widgets.txtLabA1.datavalue === null || $scope.Widgets.txtLabA1.datavalue === undefined || $scope.Widgets.txtLabA1.datavalue === "") &&
                ($scope.Widgets.txtLabB1.datavalue === null || $scope.Widgets.txtLabB1.datavalue === undefined || $scope.Widgets.txtLabB1.datavalue === ""))) {
            if (!(($scope.Widgets.colorpickerClr2.datavalue === null || $scope.Widgets.colorpickerClr2.datavalue === undefined || $scope.Widgets.colorpickerClr2.datavalue === "") &&
                    ($scope.Widgets.searchPantoneClr2.datavalue === null || $scope.Widgets.searchPantoneClr2.datavalue === undefined || $scope.Widgets.searchPantoneClr2.datavalue === "") &&
                    ($scope.Widgets.txtLabL2.datavalue === null || $scope.Widgets.txtLabL2.datavalue === undefined || $scope.Widgets.txtLabL2.datavalue === "") &&
                    ($scope.Widgets.txtLabA2.datavalue === null || $scope.Widgets.txtLabA2.datavalue === undefined || $scope.Widgets.txtLabA2.datavalue === "") &&
                    ($scope.Widgets.txtLabB2.datavalue === null || $scope.Widgets.txtLabB2.datavalue === undefined || $scope.Widgets.txtLabB2.datavalue === ""))) {
                /*First Colour*/
                if ($scope.Widgets.radioCompareClr1.datavalue === "Pantone C" || $scope.Widgets.radioCompareClr1.datavalue === "Pantone TPX" || $scope.Widgets.radioCompareClr1.datavalue === "Pantone TCX") {
                    if (!($scope.Widgets.searchPantoneClr1.datavalue === null || $scope.Widgets.searchPantoneClr1.datavalue === undefined)) {
                        $scope.LabL1 = $scope.Widgets.searchPantoneClr1.datavalue.labl;
                        $scope.LabA1 = $scope.Widgets.searchPantoneClr1.datavalue.laba;
                        $scope.LabB1 = $scope.Widgets.searchPantoneClr1.datavalue.labb;
                    }
                } else if ($scope.Widgets.radioCompareClr1.datavalue === "Input L.A.B values") {

                    if (!($scope.Widgets.txtLabL1.datavalue === null || $scope.Widgets.txtLabL1.datavalue === undefined || $scope.Widgets.txtLabA1.datavalue === null || $scope.Widgets.txtLabA1.datavalue === undefined ||
                            $scope.Widgets.txtLabB1.datavalue === null || $scope.Widgets.txtLabB1.datavalue === undefined)) {
                        $scope.LabL1 = $scope.Widgets.txtLabL1.datavalue;
                        $scope.LabA1 = $scope.Widgets.txtLabA1.datavalue;
                        $scope.LabB1 = $scope.Widgets.txtLabB1.datavalue;
                    }
                } else {
                    $scope.LabL1 = null;
                    $scope.LabA1 = null;
                    $scope.LabB1 = null;
                }

                /*Second Colour*/
                if ($scope.Widgets.radioCompareClr2.datavalue === "Pantone C" || $scope.Widgets.radioCompareClr2.datavalue === "Pantone TPX" || $scope.Widgets.radioCompareClr2.datavalue === "Pantone TCX") {
                    if (!($scope.Widgets.searchPantoneClr2.datavalue === null || $scope.Widgets.searchPantoneClr2.datavalue === undefined)) {
                        $scope.LabL2 = $scope.Widgets.searchPantoneClr2.datavalue.labl;
                        $scope.LabA2 = $scope.Widgets.searchPantoneClr2.datavalue.laba;
                        $scope.LabB2 = $scope.Widgets.searchPantoneClr2.datavalue.labb;
                    }
                } else if ($scope.Widgets.radioCompareClr2.datavalue === "Input L.A.B values") {

                    if (!($scope.Widgets.txtLabL2.datavalue === null || $scope.Widgets.txtLabL2.datavalue === undefined || $scope.Widgets.txtLabA2.datavalue === null || $scope.Widgets.txtLabA2.datavalue === undefined ||
                            $scope.Widgets.txtLabB2.datavalue === null || $scope.Widgets.txtLabB2.datavalue === undefined)) {
                        $scope.LabL2 = $scope.Widgets.txtLabL2.datavalue;
                        $scope.LabA2 = $scope.Widgets.txtLabA2.datavalue;
                        $scope.LabB2 = $scope.Widgets.txtLabB2.datavalue;
                    }
                } else {
                    $scope.LabL2 = null;
                    $scope.LabA2 = null;
                    $scope.LabB2 = null;
                }

                $scope.Variables.svgetCompareColours.setInput("pLabL1", $scope.LabL1);
                $scope.Variables.svgetCompareColours.setInput("pLabA1", $scope.LabA1);
                $scope.Variables.svgetCompareColours.setInput("pLabB1", $scope.LabB1);
                $scope.Variables.svgetCompareColours.setInput("pLabL2", $scope.LabL2);
                $scope.Variables.svgetCompareColours.setInput("pLabA2", $scope.LabA2);
                $scope.Variables.svgetCompareColours.setInput("pLabB2", $scope.LabB2);
                $scope.Variables.svgetCompareColours.setInput("hexcolor1", $scope.Widgets.colorpickerClr1.datavalue);
                $scope.Variables.svgetCompareColours.setInput("hexcolor2", $scope.Widgets.colorpickerClr2.datavalue);
                $scope.Variables.svgetCompareColours.invoke();


            } else {
                $scope.Variables.appNotification.operation = "alert";
                $scope.Variables.appNotification.setMessage("Enter 2nd Colour Values");
                $scope.Variables.appNotification.setAlertType("error");
                $scope.Variables.appNotification.notify();
            }
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Enter 1st Colour Values");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };


    $scope.searchPantoneClr1Change = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Variables.svProcRf020pk0GetClrOptCompareClr1.dataSet.length !== 0) {

            if (newVal.length > 4) {
                if (newVal.substring(0, 4) != $scope.Variables.svProcRf020pk0GetClrOptCompareClr1.dataBinding.p_filter) {
                    $scope.Variables.svProcRf020pk0GetClrOptCompareClr1.setInput("p_filter", newVal);
                    $scope.Variables.svProcRf020pk0GetClrOptCompareClr1.invoke();
                }
            }
        } else if (newVal.length > 4) {
            $scope.Variables.svProcRf020pk0GetClrOptCompareClr1.setInput("p_filter", newVal);
            $scope.Variables.svProcRf020pk0GetClrOptCompareClr1.invoke();
        }

        if (newVal.length === 4) {
            $scope.Variables.svProcRf020pk0GetClrOptCompareClr1.setInput("p_filter", newVal);
            $scope.Variables.svProcRf020pk0GetClrOptCompareClr1.invoke();
        }
    };


    $scope.searchPantoneClr2Change = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Variables.svProcRf020pk0GetClrOptClr2.dataSet.length !== 0) {

            if (newVal.length > 4) {
                if (newVal.substring(0, 4) != $scope.Variables.svProcRf020pk0GetClrOptClr2.dataBinding.p_filter) {
                    $scope.Variables.svProcRf020pk0GetClrOptClr2.setInput("p_filter", newVal);
                    $scope.Variables.svProcRf020pk0GetClrOptClr2.invoke();
                }
            }
        } else if (newVal.length > 4) {
            $scope.Variables.svProcRf020pk0GetClrOptClr2.setInput("p_filter", newVal);
            $scope.Variables.svProcRf020pk0GetClrOptClr2.invoke();
        }

        if (newVal.length === 4) {
            $scope.Variables.svProcRf020pk0GetClrOptClr2.setInput("p_filter", newVal);
            $scope.Variables.svProcRf020pk0GetClrOptClr2.invoke();
        }
    };


    $scope.radioCompareClr1Change = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtLabL1.datavalue = null;
        $scope.Widgets.txtLabA1.datavalue = null;
        $scope.Widgets.txtLabB1.datavalue = null;
        $scope.Widgets.colorpickerClr1.datavalue = null;
        if ($scope.Widgets.searchPantoneClr1.dataset !== undefined) {
            $scope.Widgets.searchPantoneClr1.dataset.length = 0;
            $scope.Widgets.searchPantoneClr1.datavalue = null;
        }
    };


    $scope.radioCompareClr2Change = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtLabL2.datavalue = null;
        $scope.Widgets.txtLabA2.datavalue = null;
        $scope.Widgets.txtLabB2.datavalue = null;
        $scope.Widgets.colorpickerClr2.datavalue = null;
        if ($scope.Widgets.searchPantoneClr2.dataset !== undefined) {
            $scope.Widgets.searchPantoneClr2.dataset.length = 0;
            $scope.Widgets.searchPantoneClr2.datavalue = null;
        }
    };


    $scope.txtLabL1Change = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < 0 || newVal > 100) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab L Value must be between 0 and  100 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtLabL1.datavalue = null;
        }
    };


    $scope.txtLabA1Change = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < -128 || newVal > 128) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab A Value must be between -128 and  128 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtLabA1.datavalue = null;
        }
    };


    $scope.txtLabB1Change = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < -128 || newVal > 128) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab B Value must be between -128 and  128 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtLabB1.datavalue = null;
        }
    };


    $scope.txtLabL2Change = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < 0 || newVal > 100) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab L Value must be between 0 and  100 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtLabL2.datavalue = null;
        }
    };


    $scope.txtLabA2Change = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < -128 || newVal > 128) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab A Value must be between -128 and  128 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtLabA2.datavalue = null;
        }
    };


    $scope.txtLabB2Change = function($event, $isolateScope, newVal, oldVal) {
        if (newVal < -128 || newVal > 128) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Lab B Value must be between -128 and  128 !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtLabB2.datavalue = null;
        }
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Widgets.sltPantoneCat.datavalue = undefined;
        $scope.Widgets.txtInsertPantone.datavalue = undefined;
        $scope.Widgets.txtInsertL.datavalue = undefined;
        $scope.Widgets.txtInsertA.datavalue = undefined;
        $scope.Widgets.txtInsertB.datavalue = undefined;
        if ($scope.Variables.svgetAddPantone.dataSet !== undefined) {
            $scope.Variables.svgetAddPantone.dataSet.length = 0;
        }
    };


    $scope.btnAddPantoneClick = function($event, $isolateScope) {
        if (!($scope.Widgets.sltPantoneCat.datavalue === null || $scope.Widgets.sltPantoneCat.datavalue === undefined ||
                $scope.Widgets.txtInsertPantone.datavalue === undefined || $scope.Widgets.txtInsertPantone.datavalue === null || $scope.Widgets.txtInsertPantone.datavalue === "" ||
                $scope.Widgets.txtInsertL.datavalue === undefined || $scope.Widgets.txtInsertL.datavalue === null ||
                $scope.Widgets.txtInsertA.datavalue === undefined || $scope.Widgets.txtInsertA.datavalue === null ||
                $scope.Widgets.txtInsertB.datavalue === undefined || $scope.Widgets.txtInsertA.datavalue === null)) {

            if ($scope.Widgets.sltPantoneCat.datavalue === "PANTONETPX") {
                $scope.addpantone = $scope.Widgets.txtInsertPantone.datavalue + " " + "TPX";
            } else if ($scope.Widgets.sltPantoneCat.datavalue === "PANTONETCX") {
                $scope.addpantone = $scope.Widgets.txtInsertPantone.datavalue + " " + "TCX";
            } else if ($scope.Widgets.sltPantoneCat.datavalue === "PANTONEC") {
                $scope.addpantone = $scope.Widgets.txtInsertPantone.datavalue + "C";
            }


            $scope.Variables.svgetAddPantone.setInput("p_pantone", $scope.addpantone);
            $scope.Variables.svgetAddPantone.setInput("p_pantoneCat", $scope.Widgets.sltPantoneCat.datavalue);
            $scope.Variables.svgetAddPantone.setInput("p_labL", $scope.Widgets.txtInsertL.datavalue);
            $scope.Variables.svgetAddPantone.setInput("p_labA", $scope.Widgets.txtInsertA.datavalue);
            $scope.Variables.svgetAddPantone.setInput("p_labB", $scope.Widgets.txtInsertB.datavalue);
            $scope.Variables.svgetAddPantone.setInput("p_option", "INSERT");
            $scope.Variables.svgetAddPantone.invoke();
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Enter All Values First !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }

    };


    $scope.svgetAddPantoneonSuccess = function(variable, data) {
        if (data.length === 0) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Pantone Code already exists !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        } else {
            if (variable.dataBinding.p_option !== "CHECK") {
                $scope.Variables.appNotification.operation = "toast";
                $scope.Variables.appNotification.setMessage("Pantone added");
                $scope.Variables.appNotification.setToasterClass("success");
                $scope.Variables.appNotification.notify();
            }
        }
    };


    $scope.btnCheckDetailsClick = function($event, $isolateScope) {
        if (!($scope.Widgets.sltPantoneCat.datavalue === null || $scope.Widgets.sltPantoneCat.datavalue === undefined ||
                $scope.Widgets.txtInsertPantone.datavalue === undefined || $scope.Widgets.txtInsertPantone.datavalue === null || $scope.Widgets.txtInsertPantone.datavalue === "" ||
                $scope.Widgets.txtInsertL.datavalue === undefined || $scope.Widgets.txtInsertL.datavalue === null ||
                $scope.Widgets.txtInsertA.datavalue === undefined || $scope.Widgets.txtInsertA.datavalue === null ||
                $scope.Widgets.txtInsertB.datavalue === undefined || $scope.Widgets.txtInsertA.datavalue === null)) {


            if ($scope.Widgets.sltPantoneCat.datavalue === "PANTONETPX") {
                $scope.pantone = $scope.Widgets.txtInsertPantone.datavalue + " " + "TPX";
            } else if ($scope.Widgets.sltPantoneCat.datavalue === "PANTONETCX") {
                $scope.pantone = $scope.Widgets.txtInsertPantone.datavalue + " " + "TCX";
            } else if ($scope.Widgets.sltPantoneCat.datavalue === "PANTONEC") {
                $scope.pantone = $scope.Widgets.txtInsertPantone.datavalue + "C";
            }



            $scope.Variables.svgetAddPantone.setInput("p_pantone", $scope.pantone);
            $scope.Variables.svgetAddPantone.setInput("p_pantoneCat", $scope.Widgets.sltPantoneCat.datavalue);
            $scope.Variables.svgetAddPantone.setInput("p_labL", $scope.Widgets.txtInsertL.datavalue);
            $scope.Variables.svgetAddPantone.setInput("p_labA", $scope.Widgets.txtInsertA.datavalue);
            $scope.Variables.svgetAddPantone.setInput("p_labB", $scope.Widgets.txtInsertB.datavalue);
            $scope.Variables.svgetAddPantone.setInput("p_option", "CHECK");
            $scope.Variables.svgetAddPantone.invoke();
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Enter All Values First !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };


    $scope.txtInsertPantoneChange = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Widgets.sltPantoneCat.datavalue === "PANTONETPX" || $scope.Widgets.sltPantoneCat.datavalue === "PANTONETCX") {
            if (!(/^([0-9][0-9][-][0-9][0-9][0-9][0-9])$/.test(newVal))) {
                $scope.Variables.appNotification.operation = "alert";
                $scope.Variables.appNotification.setMessage("Pantone code should be in this format XX-XXXX");
                $scope.Variables.appNotification.setAlertType("error");
                $scope.Variables.appNotification.notify();
                $isolateScope.datavalue = null;
            }
        } else if ($scope.Widgets.sltPantoneCat.datavalue === "PANTONEC") {
            if (!(/^[0-9]{3,4}$/.test(newVal))) {
                $scope.Variables.appNotification.operation = "alert";
                $scope.Variables.appNotification.setMessage("Pantone code should be either in this format XXX or XXXX");
                $scope.Variables.appNotification.setAlertType("error");
                $scope.Variables.appNotification.notify();
                $isolateScope.datavalue = null;
            }
        }

    };


    $scope.svgetColourLibrariesonSuccess = function(variable, data) {
        if (data.length === 0) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("No data found!!");
            $scope.Variables.appNotification.setAlertType("info");
            $scope.Variables.appNotification.notify();
        }
    };

}]);





Application.$controller("gridGetColourLibrariesController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("getCompareColoursTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("getAddPantoneTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);