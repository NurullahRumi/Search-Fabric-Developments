Application.$controller("ProvFabCCFPageController", ["$scope", function($scope) {
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


    $scope.svProcKn1620pk0_ccfmqryQryCCFonSuccess = function(variable, data) {
        $scope.Widgets.panel1.expanded = false;
    };


    $scope.svProcKn1620pk0_ccfmatchAddCCFonSuccess = function(variable, data) {
        $scope.Widgets.AddCCFMatch.close();
        $scope.Variables.appNotification.operation = "toast";
        $scope.Variables.appNotification.setMessage("Match Added");
        $scope.Variables.appNotification.setAlertType("info");
        $scope.Variables.appNotification.notify();


    };


    $scope.svProcKn1620pk0_ccfmatchAddCCFonError = function(variable, data) {
        $scope.Variables.appNotification.operation = "alert";
        $scope.Variables.appNotification.setMessage(data);
        $scope.Variables.appNotification.setAlertType("error");
        $scope.Variables.appNotification.notify();
    };


    $scope.btnQryCCFClick = function($event, $isolateScope) {
        if (!(((($scope.Widgets.txtSRCCCFNo.datavalue === null || $scope.Widgets.txtSRCCCFNo.datavalue === undefined || $scope.Widgets.txtSRCCCFNo.datavalue === "") && (($scope.Widgets.txtSRCOrder.datavalue === null || $scope.Widgets.txtSRCOrder.datavalue === undefined || $scope.Widgets.txtSRCOrder.datavalue === "") || ($scope.Widgets.txtSRCFabseq.datavalue === null || $scope.Widgets.txtSRCFabseq.datavalue === undefined || $scope.Widgets.txtSRCFabseq.datavalue === "")))) && (($scope.Widgets.txtMatchCCF.datavalue === null || $scope.Widgets.txtMatchCCF.datavalue === undefined || $scope.Widgets.txtMatchCCF.datavalue === "") && (($scope.Widgets.txtMatchOrder.datavalue === null || $scope.Widgets.txtMatchOrder.datavalue === undefined || $scope.Widgets.txtMatchOrder.datavalue === "") || ($scope.Widgets.txtMatchFabseq.datavalue === null || $scope.Widgets.txtMatchFabseq.datavalue === undefined || $scope.Widgets.txtMatchFabseq.datavalue === ""))))) {

            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_qrytype", $scope.Widgets.radioSearchOption.datavalue);
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_sintfabcertno", ($scope.Widgets.txtSRCCCFNo.datavalue === null || $scope.Widgets.txtSRCCCFNo.datavalue === undefined || $scope.Widgets.txtSRCCCFNo.datavalue === "") ? $scope.Widgets.txtSRCCCFNo.datavalue : $scope.Widgets.txtSRCCCFNo.datavalue.toUpperCase());
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_sordnum", ($scope.Widgets.txtSRCOrder.datavalue === null || $scope.Widgets.txtSRCOrder.datavalue === undefined || $scope.Widgets.txtSRCOrder.datavalue === "") ? $scope.Widgets.txtSRCOrder.datavalue : $scope.Widgets.txtSRCOrder.datavalue.toUpperCase());
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_sfabseq", $scope.Widgets.txtSRCFabseq.datavalue);
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_mintfabcertno", ($scope.Widgets.txtMatchCCF.datavalue === null || $scope.Widgets.txtMatchCCF.datavalue === undefined || $scope.Widgets.txtMatchCCF.datavalue === "") ? $scope.Widgets.txtMatchCCF.datavalue : $scope.Widgets.txtMatchCCF.datavalue.toUpperCase());
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_mordnum", ($scope.Widgets.txtMatchOrder.datavalue === null || $scope.Widgets.txtMatchOrder.datavalue === undefined || $scope.Widgets.txtMatchOrder.datavalue === "") ? $scope.Widgets.txtMatchOrder.datavalue : $scope.Widgets.txtMatchOrder.datavalue.toUpperCase());
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_mfabseq", $scope.Widgets.txtMatchFabseq.datavalue);
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.setInput("p_matchcat", $scope.Widgets.radiosetMatchCatFilter.datavalue);
            $scope.Variables.svProcKn1620pk0_ccfmqryQryCCF.invoke();

        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Enter atleast a CCF No or an order and a fab seq");
            $scope.Variables.appNotification.setAlertType("error");
            $scope.Variables.appNotification.notify();
        }
    };



    $scope.btnClearAllClick = function($event, $isolateScope) {
        $scope.Widgets.txtSRCCCFNo.datavalue = null;
        $scope.Widgets.txtSRCOrder.datavalue = null;
        $scope.Widgets.txtSRCFabseq.datavalue = null;
        $scope.Widgets.txtMatchCCF.datavalue = null;
        $scope.Widgets.txtMatchOrder.datavalue = null;
        $scope.Widgets.txtMatchFabseq.datavalue = null;
    };

}]);


Application.$controller("gridCCFListController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("AddCCFMatchController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;




        $scope.btnAddClick = function($event, $isolateScope) {
            if (!($scope.Widgets.txtAddSourceFab.datavalue === null || $scope.Widgets.txtAddSourceFab.datavalue === undefined || $scope.Widgets.txtAddSourceFab.datavalue === "" ||
                    $scope.Widgets.txtAddMatchingFab.datavalue === null || $scope.Widgets.txtAddMatchingFab.datavalue === undefined || $scope.Widgets.txtAddMatchingFab.datavalue === "" ||
                    $scope.Widgets.txtAddDestinationFab.datavalue === null || $scope.Widgets.txtAddDestinationFab.datavalue === undefined || $scope.Widgets.txtAddDestinationFab.datavalue === "")) {

                $scope.Variables.svProcKn1620pk0_ccfmatchAddCCF.setInput("p_prgid", $scope.Variables.statPrgid.dataSet.dataValue);
                $scope.Variables.svProcKn1620pk0_ccfmatchAddCCF.setInput("p_usrid", $scope.Variables.statAppUsrid.dataSet.dataValue);
                $scope.Variables.svProcKn1620pk0_ccfmatchAddCCF.setInput("p_sintfabcertno", ($scope.Widgets.txtAddSourceFab.datavalue === null || $scope.Widgets.txtAddSourceFab.datavalue === undefined || $scope.Widgets.txtAddSourceFab.datavalue === "") ?
                    $scope.Widgets.txtAddSourceFab.datavalue : $scope.Widgets.txtAddSourceFab.datavalue.toUpperCase());
                $scope.Variables.svProcKn1620pk0_ccfmatchAddCCF.setInput("p_mintfabcertno", ($scope.Widgets.txtAddMatchingFab.datavalue === null || $scope.Widgets.txtAddMatchingFab.datavalue === undefined || $scope.Widgets.txtAddMatchingFab.datavalue === "") ? $scope.Widgets.txtAddMatchingFab.datavalue : $scope.Widgets.txtAddMatchingFab.datavalue.toUpperCase());
                $scope.Variables.svProcKn1620pk0_ccfmatchAddCCF.setInput("p_dintfabcertno", ($scope.Widgets.txtAddDestinationFab.datavalue === null || $scope.Widgets.txtAddDestinationFab.datavalue === undefined || $scope.Widgets.txtAddDestinationFab.datavalue === "") ? $scope.Widgets.txtAddDestinationFab.datavalue : $scope.Widgets.txtAddDestinationFab.datavalue.toUpperCase());
                $scope.Variables.svProcKn1620pk0_ccfmatchAddCCF.setInput("p_matchcat", $scope.Widgets.radiosetInsMatchCAt.datavalue);
                $scope.Variables.svProcKn1620pk0_ccfmatchAddCCF.invoke();
            } else {
                $scope.Variables.appNotification.operation = "alert";
                $scope.Variables.appNotification.setMessage("Enter fill all Fields");
                $scope.Variables.appNotification.setAlertType("error");
                $scope.Variables.appNotification.notify();
            }
        };


        $scope.radiosetInsMatchCAtChange = function($event, $isolateScope, newVal, oldVal) {
            if (newVal === "EXACT") {
                $scope.Widgets.txtAddMatchingFab.disabled = true;
                if ($scope.Widgets.txtAddDestinationFab.datavalue === null || $scope.Widgets.txtAddDestinationFab.datavalue === undefined || $scope.Widgets.txtAddDestinationFab.datavalue === "") {
                    $scope.Widgets.txtAddMatchingFab.placeholder = "Same as Destination CFF.";
                } else {
                    $scope.Widgets.txtAddMatchingFab.datavalue = $scope.Widgets.txtAddDestinationFab.datavalue;
                }
            } else {
                $scope.Widgets.txtAddMatchingFab.disabled = false;
                $scope.Widgets.txtAddMatchingFab.placeholder = "Enter Similar CCF No.";
                $scope.Widgets.txtAddMatchingFab.datavalue = null;
            }
        };


        $scope.txtAddDestinationFabChange = function($event, $isolateScope, newVal, oldVal) {
            if ($scope.Widgets.radiosetInsMatchCAt.datavalue === "EXACT") {
                $scope.Widgets.txtAddMatchingFab.datavalue = newVal;
            }
        };

    }
]);