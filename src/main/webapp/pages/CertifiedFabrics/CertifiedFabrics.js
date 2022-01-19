Application.$controller("CertifiedFabricsPageController", ["$scope", function($scope) {
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
        $scope.Widgets.formRelatedMatrix.formWidgets.pRelDateFrom.datavalue = $scope.Widgets.formRelatedMatrix.formWidgets.pRelDateTo.timestamp - (180 * 24 * 60 * 60 * 1000);
        $scope.Widgets.compositeremarks.show = false;
        $scope.Widgets.container10.show = false;
    };


    $scope.btnCCFClick = function($event, $isolateScope) {
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_ordnum", $scope.Variables.statOrdnum.dataSet.dataValue.toUpperCase());
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_fabseq", $scope.Variables.statFabseq.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_newsts", "CCF");
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_newremarks", $scope.Widgets.txtCCfRemarks.datavalue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.invoke();


    };


    $scope.btnTCFClick = function($event, $isolateScope) {
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_ordnum", $scope.Variables.statOrdnum.dataSet.dataValue.toUpperCase());
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_fabseq", $scope.Variables.statFabseq.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_newsts", "TCF");
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_newremarks", $scope.Widgets.txtCCfRemarks.datavalue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.invoke();

    };


    $scope.btnCanClick = function($event, $isolateScope) {
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_ordnum", $scope.Variables.statOrdnum.dataSet.dataValue.toUpperCase());
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_fabseq", $scope.Variables.statFabseq.dataSet.dataValue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_newsts", "CAN");
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.setInput("p_newremarks", $scope.Widgets.txtCCfRemarks.datavalue);
        $scope.Variables.svProcKn1610pk0_excccfProcExcpCertifyFab.invoke();
    };

    $scope.btnSearchStsClick = function($event, $isolateScope) {
        if ((!($scope.Widgets.txtOrdnum.datavalue === undefined || $scope.Widgets.txtOrdnum.datavalue === null || $scope.Widgets.txtOrdnum.datavalue === "") & $scope.Widgets.txtFabseq.datavalue !== 0)) {

            $scope.Variables.statOrdnum.dataSet.dataValue = $scope.Widgets.txtOrdnum.datavalue;
            $scope.Variables.statFabseq.dataSet.dataValue = $scope.Widgets.txtFabseq.datavalue;
            if ($scope.Variables.svProckn1610pk0_excccfGetOrderSts.dataSet.length !== 0) {
                $scope.Variables.svProckn1610pk0_excccfGetOrderSts.clearData();
            }
            $scope.Variables.svProckn1610pk0_excccfGetOrderSts.invoke();

        } else {

            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Enter correct Order and Fabric Sequence ");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();

        }

    };


    $scope.svProcKn1610pk0_excccfProcExcpCertifyFabonSuccess = function(variable, data) {
        if (data.perrmsg === null) {

            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Status and Remarks Updated");
            $scope.Variables.appNotification.setAlertType("success");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.txtOrdnum.datavalue = "";
            $scope.Widgets.txtFabseq.datavalue = 0;
            $scope.Variables.statOrdnum.dataSet.dataValue = "";
            $scope.Variables.statFabseq.dataSet.dataValue = 0;
            $scope.Variables.svProckn1610pk0_excccfGetOrderSts.clearData();
            $scope.Widgets.btnSearchSts.show = true;
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage(data.perrmsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();

        }
    };

    $scope.svProcKn1610pk0_excccfProcExcpCertifyFabonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();

    };


    $scope.svProckn1610pk0_excccfGetOrderStsonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };



    $scope.btnSearchClick = function($event, $isolateScope) {
        $scope.Variables.svProcKn1610pk0_excccfGetCCFList.invoke();
    };




    $scope.btnResetClick = function($event, $isolateScope) {
        if ($scope.Variables.svProckn1610pk0_excccfGetOrderSts.dataSet.length !== 0) {
            $scope.Variables.svProckn1610pk0_excccfGetOrderSts.clearData();
        }
        $scope.Widgets.txtOrdnum.datavalue = "";
        $scope.Widgets.txtFabseq.datavalue = 0;
        $scope.Variables.statOrdnum.dataSet.dataValue = "";
        $scope.Variables.statFabseq.dataSet.dataValue = 0;
        $scope.Widgets.btnSearchSts.show = true;
        $scope.Widgets.compositeremarks.show = false;
        $scope.Widgets.container10.show = false;


    };


    $scope.svProckn1610pk0_excccfGetOrderStsonSuccess = function(variable, data) {
        $scope.Widgets.compositeremarks.show = true;
        $scope.Widgets.container10.show = true;
        $scope.Widgets.btnSearchSts.show = false;
    };


    $scope.txtOrdnumChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.btnSearchSts.show = true;
    };


    $scope.txtFabseqChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.btnSearchSts.show = true;
    };


    $scope.gridRelatedMatrixSelect = function($event, $isolateScope, $rowData) {

        if (!($rowData.intfabcertno === undefined || $rowData.intfabcertno === null)) {
            $scope.Widgets.gridRelatedMatrix.deselectItem($rowData, 1);
            $scope.Variables.statDisplayOrders.dataSet.length = 0;
            if ($scope.Widgets.gridRelatedMatrix.selecteditem.length !== 0) {
                for (var i = 0; i < $scope.Widgets.gridRelatedMatrix.selecteditem.length; i++) {
                    $scope.Variables.statDisplayOrders.dataSet.push({
                        "orders": $scope.Widgets.gridRelatedMatrix.selecteditem[i].ordnum,
                        "fabseq": $scope.Widgets.gridRelatedMatrix.selecteditem[i].fabseq
                    });
                }
            }
        } else {
            $scope.Variables.statDisplayOrders.dataSet.length = 0;
            if ($scope.Widgets.gridRelatedMatrix.selecteditem.length !== 0) {
                for (var i = 0; i < $scope.Widgets.gridRelatedMatrix.selecteditem.length; i++) {
                    $scope.Variables.statDisplayOrders.dataSet.push({
                        "orders": $scope.Widgets.gridRelatedMatrix.selecteditem[i].ordnum,
                        "fabseq": $scope.Widgets.gridRelatedMatrix.selecteditem[i].fabseq
                    });
                }
            }

        }


    };


    $scope.gridRelatedMatrixDeselect = function($event, $isolateScope, $rowData) {
        if (!($rowData.intfabcertno === undefined || $rowData.intfabcertno === null)) {
            $scope.Widgets.gridRelatedMatrix.deselectItem($rowData, 1);
            $scope.Variables.statDisplayOrders.dataSet.length = 0;
            if ($scope.Widgets.gridRelatedMatrix.selecteditem.length !== 0) {
                for (var i = 0; i < $scope.Widgets.gridRelatedMatrix.selecteditem.length; i++) {
                    $scope.Variables.statDisplayOrders.dataSet.push({
                        "orders": $scope.Widgets.gridRelatedMatrix.selecteditem[i].ordnum,
                        "fabseq": $scope.Widgets.gridRelatedMatrix.selecteditem[i].fabseq
                    });
                }
            }
        } else {
            $scope.Variables.statDisplayOrders.dataSet.length = 0;
            if ($scope.Widgets.gridRelatedMatrix.selecteditem.length !== 0) {
                for (var i = 0; i < $scope.Widgets.gridRelatedMatrix.selecteditem.length; i++) {
                    $scope.Variables.statDisplayOrders.dataSet.push({
                        "orders": $scope.Widgets.gridRelatedMatrix.selecteditem[i].ordnum,
                        "fabseq": $scope.Widgets.gridRelatedMatrix.selecteditem[i].fabseq
                    });
                }
            }
        }



    };

    $scope.svProcKn1610pk0_excccfGetRelatedMatrixonBeforeDatasetReady = function(variable, data) {
        $scope.Widgets.gridRelatedMatrix.selecteditem = null;
        $scope.Widgets.gridRelatedMatrix.selectedItems = null;
    };


    $scope.btnCertifyClick = function($event, $isolateScope) {
        $scope.Variables.statOrdFabList.dataSet.dataValue = "";
        if ($scope.Variables.statDisplayOrders.dataSet.length !== 0) {
            for (var i = 0; i < $scope.Variables.statDisplayOrders.dataSet.length; i++) {
                $scope.Variables.statOrdFabList.dataSet.dataValue = $scope.Variables.statOrdFabList.dataSet.dataValue + $scope.Variables.statDisplayOrders.dataSet[i].orders + "," + $scope.Variables.statDisplayOrders.dataSet[i].fabseq + ";";
            }
            $scope.Variables.svProcKn1610pk0_exccfUpdRelMatrix.setInput("pPrgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcKn1610pk0_exccfUpdRelMatrix.setInput("pUsrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
            $scope.Variables.svProcKn1610pk0_exccfUpdRelMatrix.setInput("pCCFNo", $scope.Widgets.txtRelMatCCF.datavalue);
            $scope.Variables.svProcKn1610pk0_exccfUpdRelMatrix.setInput("pOrdFabList", $scope.Variables.statOrdFabList.dataSet.dataValue);

            $scope.Variables.svProcKn1610pk0_exccfUpdRelMatrix.invoke();
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Select atleast one order !!");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };


    $scope.svProcKn1610pk0_exccfUpdRelMatrixonSuccess = function(variable, data) {
        if (data.poutMsg === null) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Status Updated");
            $scope.Variables.appNotification.setAlertType("success");
            $scope.Variables.appNotification.notify();
            $scope.Variables.svProcKn1610pk0_excccfGetRelatedMatrix.clearData();
            $scope.Widgets.txtRelMatCCF.datavalue = null;
            $scope.Variables.statOrdFabList.dataSet = null;
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage(data.poutMsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };


    $scope.svProcKn1610pk0_exccfUpdRelMatrixonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };

    $scope.svProcKn1610pk0_excccfAssociateOrderonSuccess = function(variable, data) {
        if (data.poutMsg === null) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Status Updated");
            $scope.Variables.appNotification.setAlertType("success");
            $scope.Variables.appNotification.notify();
            $scope.Widgets.form3.reset();
        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage(data.poutMsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };




    $scope.svProcKn1610pk0_excccfAssociateOrderonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.svProcKn1610pk0_excccfGetCCFListonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.svProcKn1610pk0_excccfGetRelatedMatrixonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.svProcKn1610pk0_excccfGetRelatedMatrixonSuccess = function(variable, data) {
        if (data.poutMsg !== null) {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage(data.poutMsg);
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };



    $scope.panel5Mouseover = function($event, $isolateScope) {
        $scope.Widgets.panel5.expanded = true;
    };


    $scope.panel5Mouseout = function($event, $isolateScope) {
        $scope.Widgets.panel5.expanded = false;
    };


    $scope.svProcKn1610pk0_excccfGetCCFFabDiffonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.svProcKn1610pk0_excccfGetFablibKdsonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.svProcKn1610pk0_updccfUpdRemonSuccess = function(variable, data) {
        $scope.Widgets.ccfremarksPop.close();
        $scope.Widgets.gridCCFResultList.refreshData();
    };

}]);

Application.$controller("gridCCFResultListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


    }
]);

Application.$controller("gridRelatedMatrixController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("grid3Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("CompareKdsPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnCmpFablibClick = function($event, $isolateScope) {
            if ($scope.Widgets.radiosetCmp.datavalue === "Compare with Fabric Library") {

                if ($scope.Widgets.txtOrdnumCmp.datavalue === null || $scope.Widgets.txtOrdnumCmp.datavalue === "" || $scope.Widgets.txtOrdnumCmp.datavalue === undefined) {
                    $scope.Variables.appNotification.operation = "alert";
                    $scope.Variables.appNotification.setMessage("Order cannot be null !!");
                    $scope.Variables.appNotification.setAlertType("error");
                    $scope.Variables.appNotification.notify();
                } else if ($scope.Widgets.txtFabSeqCmp.datavalue === null || $scope.Widgets.txtFabSeqCmp.datavalue === undefined) {
                    $scope.Variables.appNotification.operation = "alert";
                    $scope.Variables.appNotification.setMessage("Fabric Sequence cannot be null !!");
                    $scope.Variables.appNotification.setAlertType("error");
                    $scope.Variables.appNotification.notify();
                } else {
                    $scope.Variables.svProcKn1610pk0_excccfGetFablibKds.invoke();
                }
            } else if ($scope.Widgets.radiosetCmp.datavalue === "Compare with Certified Fabric") {
                if ($scope.Widgets.txtOrdnumCmp.datavalue === null || $scope.Widgets.txtOrdnumCmp.datavalue === "" || $scope.Widgets.txtOrdnumCmp.datavalue === undefined) {
                    $scope.Variables.appNotification.operation = "alert";
                    $scope.Variables.appNotification.setMessage("Order cannot be null !!");
                    $scope.Variables.appNotification.setAlertType("error");
                    $scope.Variables.appNotification.notify();
                } else if ($scope.Widgets.txtFabSeqCmp.datavalue === null || $scope.Widgets.txtFabSeqCmp.datavalue === undefined) {
                    $scope.Variables.appNotification.operation = "alert";
                    $scope.Variables.appNotification.setMessage("Fabric Sequence cannot be null !!");
                    $scope.Variables.appNotification.setAlertType("error");
                    $scope.Variables.appNotification.notify();
                } else if ($scope.Widgets.txtCCF.datavalue === null || $scope.Widgets.txtCCF.datavalue === "" || $scope.Widgets.txtCCF.datavalue === undefined) {
                    $scope.Variables.appNotification.operation = "alert";
                    $scope.Variables.appNotification.setMessage("Enter CCF No !!");
                    $scope.Variables.appNotification.setAlertType("error");
                    $scope.Variables.appNotification.notify();
                } else {
                    $scope.Variables.svProcKn1610pk0_excccfGetCCFFabDiff.invoke();
                }
            }
        };

        $scope.CompareKdsPopClose = function($event, $isolateScope) {
            $scope.Variables.svProcKn1610pk0_excccfGetCCFFabDiff.clearData();
            $scope.Variables.svProcKn1610pk0_excccfGetFablibKds.clearData();
        };


        $scope.radiosetCmpChange = function($event, $isolateScope, newVal, oldVal) {
            if (oldVal === "Compare with Fabric Library") {
                $scope.Variables.svProcKn1610pk0_excccfGetFablibKds.clearData();
            } else if (oldVal === "Compare with Certified Fabric") {
                $scope.Variables.svProcKn1610pk0_excccfGetCCFFabDiff.clearData();
            }
        };

    }
]);

Application.$controller("ccfremarksPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);