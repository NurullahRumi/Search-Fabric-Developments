Application.$controller("DyedYarnStockPageController", ["$scope", function($scope) {
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
        $scope.Widgets.txtTolerance.datavalue = 15;
    };


    $scope.searchYrncntBlur = function($event, $isolateScope) {
        if (!($isolateScope.$parent.Widgets.searchYrncnt.datavalue === undefined || $isolateScope.$parent.Widgets.searchYrncnt.datavalue === null)) {
            if ($isolateScope.$parent.Widgets.searchYrncnt.datavalue.YRNCNT !== undefined) {
                if ($isolateScope.$parent.Widgets.searchYrncnt.datavalue.YRNCNT !== $isolateScope.$parent.Widgets.searchYrncnt.query) {
                    $isolateScope.$parent.Widgets.searchYrncnt.datavalue = null;
                }
            }
        } else {
            if ($isolateScope.$parent.Widgets.searchYrncnt.datavalue !== $isolateScope.$parent.Widgets.searchYrncnt.query) {
                $isolateScope.$parent.Widgets.searchYrncnt.datavalue = null;
                $isolateScope.$parent.Widgets.searchYrncnt.datavalue = undefined;
            }
        }

    };



    $scope.searchYrncpsBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.searchYrncps.datavalue !== $isolateScope.$parent.Widgets.searchYrncps.query) {
            $isolateScope.$parent.Widgets.searchYrncps.datavalue = null;
            $isolateScope.$parent.Widgets.searchYrncps.datavalue = undefined;
        }
    };


    $scope.searchYrnClrBlur = function($event, $isolateScope) {
        if (!($isolateScope.$parent.Widgets.searchYrnClr.datavalue === undefined || $isolateScope.$parent.Widgets.searchYrnClr.datavalue === null)) {
            if ($isolateScope.$parent.Widgets.searchYrnClr.datavalue.NYRNCLR !== undefined) {
                if ($isolateScope.$parent.Widgets.searchYrnClr.datavalue.NYRNCLR !== $isolateScope.$parent.Widgets.searchYrnClr.query) {
                    $isolateScope.$parent.Widgets.searchYrnClr.datavalue = null;
                }
            }
        } else {
            if ($isolateScope.$parent.Widgets.searchYrnClr.datavalue !== $isolateScope.$parent.Widgets.searchYrnClr.query) {
                $isolateScope.$parent.Widgets.searchYrnClr.datavalue = null;
                $isolateScope.$parent.Widgets.searchYrnClr.datavalue = undefined;
            }
        }
    };

    $scope.searchYrnClrDescBlur = function($event, $isolateScope) {
        if ($scope.Variables.svGetYrncdes.dataSet.length !== 0) {
            if ($isolateScope.$parent.Widgets.searchYrnClrDesc.datavalue != $isolateScope.$parent.Widgets.searchYrnClrDesc.query) {
                $isolateScope.$parent.Widgets.searchYrnClrDesc.datavalue = null;
            }
        } else {
            $scope.Widgets.searchYrnClrDesc.datavalue = $isolateScope.$parent.Widgets.searchYrnClrDesc.query;
        }
    };


    $scope.searchYrnQualBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.searchYrnQual.datavalue != $isolateScope.$parent.Widgets.searchYrnQual.query) {
            $isolateScope.$parent.Widgets.searchYrnQual.datavalue = null;
        }
    };


    $scope.searchYrnSubQualABlur = function($event, $isolateScope) {

        if (!(($isolateScope.$parent.Widgets.searchYrnSubQualA.queryModel === undefined) || ($isolateScope.$parent.Widgets.searchYrnSubQualA.queryModel === null) || ($isolateScope.$parent.Widgets.searchYrnSubQualA.queryModel === ""))) {
            if ($isolateScope.$parent.Widgets.searchYrnSubQualA.queryModel.SUBQLTYDES !== undefined) {
                if ($isolateScope.$parent.Widgets.searchYrnSubQualA.datavalue.SUBQLTYDES !== $isolateScope.$parent.Widgets.searchYrnSubQualA.queryModel.SUBQLTYDES) {
                    $isolateScope.$parent.Widgets.searchYrnSubQualA.datavalue = null;
                }
            } else if ($isolateScope.$parent.Widgets.searchYrnSubQualA.datavalue !== $isolateScope.$parent.Widgets.searchYrnSubQualA.query) {
                $isolateScope.$parent.Widgets.searchYrnSubQualA.datavalue = null;
                $isolateScope.$parent.Widgets.searchYrnSubQualA.datavalue = undefined;
            }
        }
    };


    $scope.searchYrnSubQualBBlur = function($event, $isolateScope) {
        if (!(($isolateScope.$parent.Widgets.searchYrnSubQualB.queryModel === undefined) || ($isolateScope.$parent.Widgets.searchYrnSubQualB.queryModel === null) || ($isolateScope.$parent.Widgets.searchYrnSubQualB.queryModel === ""))) {
            if ($isolateScope.$parent.Widgets.searchYrnSubQualB.queryModel.SUBQLTYDES !== undefined) {
                if ($isolateScope.$parent.Widgets.searchYrnSubQualB.datavalue.SUBQLTYDES !== $isolateScope.$parent.Widgets.searchYrnSubQualB.queryModel.SUBQLTYDES) {
                    $isolateScope.$parent.Widgets.searchYrnSubQualB.datavalue = null;
                }
            } else if ($isolateScope.$parent.Widgets.searchYrnSubQualB.datavalue !== $isolateScope.$parent.Widgets.searchYrnSubQualB.queryModel) {
                $isolateScope.$parent.Widgets.searchYrnSubQualB.datavalue = null;
                $isolateScope.$parent.Widgets.searchYrnSubQualB.datavalue = undefined;
            }
        }
    };



    $scope.searchYrnffcodBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.searchYrnffcod.queryModel !== undefined) {
            if ($isolateScope.$parent.Widgets.searchYrnffcod.queryModel.YRNFFCOD !== undefined) {
                if ($isolateScope.$parent.Widgets.searchYrnffcod.datavalue !== $isolateScope.$parent.Widgets.searchYrnffcod.queryModel.YRNFFCOD) {
                    $isolateScope.$parent.Widgets.searchYrnffcod.datavalue = null;
                }
            } else if ($isolateScope.$parent.Widgets.searchYrnffcod.datavalue !== $isolateScope.$parent.Widgets.searchYrnffcod.queryModel) {
                $isolateScope.$parent.Widgets.searchYrnffcod.datavalue = null;
                $isolateScope.$parent.Widgets.searchYrnffcod.datavalue = undefined;
            }
        }

    };










    $scope.searchYrnClrSelect = function($event, $isolateScope, selectedValue) {
        // var m_yrnclr = selectedValue.NYRNCLR;
        // var m_yrncnt = "";
        // var m_yrncdesLov = selectedValue.YRNCDES_LOV;

        // if ($scope.Widgets.searchYrncnt.datavalue !== undefined) {
        //     m_yrncnt == $scope.Widgets.searchYrncnt.datavalue.toUpperCase();
        // }

        // //console.log(m_yrnclr + " lov " + m_yrncdesLov);

        // if (m_yrnclr !== "" & m_yrnclr !== undefined & m_yrnclr !== null) {
        //     if (m_yrncdesLov === "YMT025" || (m_yrncdesLov === "YDT106" && m_yrncnt !== "")) {
        //         var svYrncdes = $scope.Variables.svGetYrncdes;
        //         svYrncdes.invoke({
        //                 "inputFields": {
        //                     "p_yrnclr": m_yrnclr,
        //                     "p_yrncnt": m_yrncnt
        //                 }
        //             },
        //             function(data) {

        //             },
        //             function(error) {}
        //         );
        //     }
        // }
    };


    $scope.searchYrnQualSelect = function($event, $isolateScope, selectedValue) {
        $scope.Variables.svGetYrnsubqltya.setInput("p_yrnqlty", selectedValue);
        $scope.Variables.svGetYrnsubqltya.invoke();
        $scope.Variables.svGetYrnsubqltyb.setInput("p_yrnqlty", selectedValue);
        $scope.Variables.svGetYrnsubqltyb.invoke();
    };


    $scope.radiosetClrFilterOptChange = function($event, $isolateScope, newVal, oldVal) {
        if (newVal === "Any Color") {
            $scope.Anycolor = "Y";
            $scope.Widgets.txtTolerance.datavalue = undefined;
        } else {
            $scope.Anycolor = "N";
        }
        if (newVal === "Lab Reference " || newVal === "Any Color") {
            $scope.Widgets.txtTolerance.datavalue = undefined;
        } else {
            $scope.Widgets.txtTolerance.datavalue = 15;
        }

        $scope.Widgets.txtLclrvalue.datavalue = undefined;
        $scope.Widgets.txtAclrvalue.datavalue = undefined;
        $scope.Widgets.txtBclrvalue.datavalue = undefined;
        $scope.Widgets.colorpickerDyeYrn.datavalue = null;

        $scope.Widgets.txtLabref.datavalue = null;
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



    $scope.svYarnDyeStockonSuccess = function(variable, data) {
        $scope.Widgets.panelYDStk.expanded = false;
    };


    $scope.btnQryYrnStkClick = function($event, $isolateScope) {

        if (!(($scope.Widgets.txtLclrvalue.datavalue === null || $scope.Widgets.txtLclrvalue.datavalue === undefined) && ($scope.Widgets.txtAclrvalue.datavalue === null || $scope.Widgets.txtAclrvalue.datavalue === undefined) && ($scope.Widgets.txtBclrvalue.datavalue === null || $scope.Widgets.txtBclrvalue.datavalue === undefined) && ($scope.Widgets.searchPantone.datavalue === null || $scope.Widgets.searchPantone.datavalue === undefined) && ($scope.Widgets.txtLabref.datavalue === null || $scope.Widgets.txtLabref.datavalue === undefined) && ($scope.Widgets.searchYrncnt.datavalue === null || $scope.Widgets.searchYrncnt.datavalue === undefined) && ($scope.Widgets.searchYrncps.datavalue === null || $scope.Widgets.searchYrncps.datavalue === undefined) && ($scope.Widgets.searchYrnClrDesc.datavalue === null || $scope.Widgets.searchYrnClrDesc.datavalue === undefined || $scope.Widgets.searchYrnClrDesc.datavalue === "") && ($scope.Widgets.searchYrnQual.datavalue === null || $scope.Widgets.searchYrnQual.datavalue === undefined) && ($scope.Widgets.searchYrnffcod.datavalue === null || $scope.Widgets.searchYrnffcod.datavalue === undefined) &&
                ($scope.Widgets.txtYrnLot.datavalue === null || $scope.Widgets.txtYrnLot.datavalue === undefined || $scope.Widgets.txtYrnLot.datavalue === "") && ($scope.Widgets.colorpickerDyeYrn.datavalue === null || $scope.Widgets.colorpickerDyeYrn.datavalue === undefined || $scope.Widgets.colorpickerDyeYrn.datavalue === ""))) {
            if ($scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone C" || $scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone TPX" || $scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone TCX") {
                if (!($scope.Widgets.searchPantone.datavalue === null || $scope.Widgets.searchPantone.datavalue === undefined)) {
                    $scope.Lclrcode = $scope.Widgets.searchPantone.datavalue.labl;
                    $scope.Aclrcode = $scope.Widgets.searchPantone.datavalue.laba;
                    $scope.Bclrcode = $scope.Widgets.searchPantone.datavalue.labb;
                }
            } else if ($scope.Widgets.radiosetClrFilterOpt.datavalue === "Input L.A.B values") {

                if (!($scope.Widgets.txtLclrvalue.datavalue === null || $scope.Widgets.txtLclrvalue.datavalue === undefined || $scope.Widgets.txtAclrvalue.datavalue === null || $scope.Widgets.txtAclrvalue.datavalue === undefined ||
                        $scope.Widgets.txtBclrvalue.datavalue === null || $scope.Widgets.txtBclrvalue.datavalue === undefined)) {
                    $scope.Lclrcode = $scope.Widgets.txtLclrvalue.datavalue;
                    $scope.Aclrcode = $scope.Widgets.txtAclrvalue.datavalue;
                    $scope.Bclrcode = $scope.Widgets.txtBclrvalue.datavalue;
                }
            } else {
                $scope.Lclrcode = null;
                $scope.Aclrcode = null;
                $scope.Bclrcode = null;
            }

            $scope.Variables.svYarnDyeStock.setInput("pYrncnt", (($scope.Widgets.searchYrncnt.datavalue === null || $scope.Widgets.searchYrncnt.datavalue === undefined) ? $scope.Widgets.searchYrncnt.datavalue : $scope.Widgets.searchYrncnt.datavalue.YRNCNT));
            $scope.Variables.svYarnDyeStock.setInput("pCompo", $scope.Widgets.searchYrncps.datavalue);
            $scope.Variables.svYarnDyeStock.setInput("pYrnCdes", ($scope.Widgets.searchYrnClrDesc.datavalue === undefined || $scope.Widgets.searchYrnClrDesc.datavalue === null) ? $scope.Widgets.searchYrnClrDesc.datavalue : $scope.Widgets.searchYrnClrDesc.datavalue.toUpperCase());
            $scope.Variables.svYarnDyeStock.setInput("pYrnQual", $scope.Widgets.searchYrnQual.datavalue);
            $scope.Variables.svYarnDyeStock.setInput("pYrnYrnQualSubA", ($scope.Widgets.searchYrnSubQualA.datavalue === null || $scope.Widgets.searchYrnSubQualA.datavalue === undefined) ? $scope.Widgets.searchYrnSubQualA.datavalue : $scope.Widgets.searchYrnSubQualA.datavalue.SUBQLTYCOD);
            $scope.Variables.svYarnDyeStock.setInput("pYrnYrnQualSubB", ($scope.Widgets.searchYrnSubQualB.datavalue === null || $scope.Widgets.searchYrnSubQualB.datavalue === undefined) ? $scope.Widgets.searchYrnSubQualB.datavalue : $scope.Widgets.searchYrnSubQualB.datavalue.SUBQLTYCOD);
            $scope.Variables.svYarnDyeStock.setInput("pYrnffcod", $scope.Widgets.searchYrnffcod.datavalue);
            $scope.Variables.svYarnDyeStock.setInput("hexcolor", $scope.Widgets.colorpickerDyeYrn.datavalue);
            $scope.Variables.svYarnDyeStock.setInput("plabL", $scope.Lclrcode);
            $scope.Variables.svYarnDyeStock.setInput("plabA", $scope.Aclrcode);
            $scope.Variables.svYarnDyeStock.setInput("plabB", $scope.Bclrcode);
            $scope.Variables.svYarnDyeStock.setInput("pToleranceDeltaE", $scope.Widgets.txtTolerance.datavalue);
            $scope.Variables.svYarnDyeStock.setInput("pYrnlot", $scope.Widgets.txtYrnLot.datavalue);
            $scope.Variables.svYarnDyeStock.setInput("pYrnLabref", $scope.Widgets.txtLabref.datavalue);
            $scope.Variables.svYarnDyeStock.setInput("pAnycolor", $scope.Anycolor);
            $scope.Variables.svYarnDyeStock.invoke();
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Enter a color option or a yarn to filter !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };


    $scope.btnClearClick = function($event, $isolateScope) {
        $scope.Widgets.txtLclrvalue.datavalue = undefined;
        $scope.Widgets.txtAclrvalue.datavalue = undefined;
        $scope.Widgets.txtBclrvalue.datavalue = undefined;
        $scope.Widgets.colorpickerDyeYrn.datavalue = null;
        $scope.Widgets.txtTolerance.datavalue = undefined;
        $scope.Widgets.txtLabref.datavalue = null;
        if ($scope.Widgets.searchPantone.dataset !== undefined) {
            $scope.Widgets.searchPantone.dataset.length = 0;
            $scope.Widgets.searchPantone.datavalue = null;
        }
        $scope.Widgets.searchYrncnt.datavalue = undefined;
        $scope.Widgets.searchYrncps.datavalue = undefined;
        $scope.Widgets.searchYrnClr.datavalue = undefined;
        $scope.Widgets.searchYrnClrDesc.datavalue = undefined;
        $scope.Widgets.searchYrnQual.datavalue = undefined;
        $scope.Widgets.searchYrnSubQualA.datavalue = undefined;
        $scope.Widgets.searchYrnSubQualB.datavalue = undefined;
        $scope.Widgets.searchYrnffcod.datavalue = undefined;
        $scope.Widgets.txtYrnLot.datavalue = undefined;

    };





    $scope.svYarnDyeStockonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.txtToleranceBlur = function($event, $isolateScope) {

        if ($isolateScope.datavalue === undefined || $isolateScope.datavalue === null) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Maximum value for Tolerance Delta E is 20!!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
            $isolateScope.datavalue = 1;
        }


    };

}]);

Application.$controller("getYarnDyeStockTable1Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);