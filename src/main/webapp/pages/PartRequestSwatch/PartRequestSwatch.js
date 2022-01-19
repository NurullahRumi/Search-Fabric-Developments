Application.$controller("PartRequestSwatchPageController", ["$scope", function($scope) {
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


    $scope.btnCancelClick = function($event, $isolateScope) {
        $scope.$parent.Widgets.SwatchRequestPop.close();
    };


    $scope.btnReqSwatchClick = function($event, $isolateScope) {
        var Sorders;
        var LcnStrCod;
        if ($scope.pageParams.pOrdFabClrSq === null || $scope.pageParams.pOrdFabClrSq === undefined || $scope.pageParams.pOrdFabClrSq === "") {
            Sorders = "";
            if (!($scope.Widgets.txtRSOrdnum.datavalue === null || $scope.Widgets.txtRSOrdnum.datavalue === undefined || $scope.Widgets.txtRSOrdnum.datavalue === "" || $scope.Widgets.txtRSFabseq.datavalue === null || $scope.Widgets.txtRSFabseq.datavalue === undefined || $scope.Widgets.txtRSFabseq.datavalue === "" || $scope.Widgets.txtRSClrseq.datavalue === null || $scope.Widgets.txtRSClrseq.datavalue === undefined || $scope.Widgets.txtRSClrseq.datavalue === "")) {
                Sorders = $scope.Widgets.txtRSOrdnum.datavalue + "," + $scope.Widgets.txtRSFabseq.datavalue + "," + $scope.Widgets.txtRSClrseq.datavalue;
            } else {
                $isolateScope.$parent.Variables.appNotification.invoke({
                    "class": "error",
                    "message": "Please enter an Order, Fabric Seq and Colour Seq !"
                });
                return false;
            }
        }


        if ($scope.pageParams.pLcnStrCod === null || $scope.pageParams.pLcnStrCod === undefined || $scope.pageParams.pLcnStrCod === "") {
            LcnStrCod = "";
            if (!($scope.Widgets.sltstrcod.datavalue === null || $scope.Widgets.sltstrcod.datavalue === undefined || $scope.Widgets.sltstrcod.datavalue === "" || $scope.Widgets.txtRSStrLcnCod.datavalue === null || $scope.Widgets.txtRSStrLcnCod.datavalue === undefined ||
                    $scope.Widgets.txtRSStrLcnCod.datavalue === "")) {
                LcnStrCod = $scope.Widgets.sltstrcod.datavalue + "," + $scope.Widgets.sltstrcod.datavalue;
            } else {
                $isolateScope.$parent.Variables.appNotification.invoke({
                    "class": "error",
                    "message": "Please specify the Store !"


                });
            }


        }




        $isolateScope.$parent.Variables.svExecuteRequestSwatch.invoke({
                "inputFields": {
                    "P_Sorders": ($scope.pageParams.pOrdFabClrSq === null || $scope.pageParams.pOrdFabClrSq === undefined || $scope.pageParams.pOrdFabClrSq === "") ? Sorders : $scope.pageParams.pOrdFabClrSq,
                    "P_Team": $scope.Widgets.selectTeam.datavalue,
                    "P_Usrid": $scope.Variables.statAppUsrid.dataSet.dataValue,
                    "P_Fabformat": $scope.Widgets.selectFormat.datavalue.fbformatcode,
                    "P_Purpose": $scope.Widgets.sltPurpose.datavalue,
                    "P_Quantity": $scope.Widgets.txtQuantitySwatch.datavalue,
                    "P_Uom": $scope.Widgets.selectFormat.datavalue.uom,
                    "p_lcnstrcod": ($scope.pageParams.pLcnStrCod === null || $scope.pageParams.pLcnStrCod === undefined || $scope.pageParams.pLcnStrCod === "") ? LcnStrCod : $scope.pageParams.pLcnStrCod

                }
            }

            ,
            function(data) {
                // Success Callback

                // if (data.poutMessage == "OK") {
                $isolateScope.$parent.Widgets.txtQuantitySwatch.datavalue = null;
                // notify the swatch requestno
                $isolateScope.$parent.Variables.appNotification.invoke({
                    "class": "info",
                    "message": data.poutMessage
                    // "message": "Swatch Request #" + data.poutFabrequestno + " has been created"
                });

                $scope.$parent.Widgets.SwatchRequestPop.close();
                $scope.$parent.$parent.btnSearchStockClick();
                $scope.$parent.$parent.Widgets.gridSearchStockResult.selecteditem = [];
                //} else {
                // $isolateScope.$parent.Variables.appNotification.invoke({
                //     "class": "error",
                //     "message": "Error:" + data.poutMessage
                // });
                //  }

            },
            function(error) {
                // Error Callback

                $isolateScope.$parent.Variables.appNotification.invoke({
                    "class": "error",
                    "message": "Error: Could not call - " + error.toString()
                });
                console.log("error", error);
            });
    };

}]);