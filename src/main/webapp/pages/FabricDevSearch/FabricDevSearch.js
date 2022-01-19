Application.$controller("FabricDevSearchPageController", ["$scope", function($scope) {
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


        // cgenDecodeParameter('p_library_cat~3DORDERDOCS~26p_key_param1~3D1700001A~26p_usrid~3DD0~2F22~23', 'p_usrid');

        if (!($scope.pageParams.pParam1 === undefined || $scope.pageParams.pParam1 === null)) {
            var link = "~26" + $scope.pageParams.pParam1 + "~26";

            $scope.pageParams.pFabDevNo = link.split('~26pFabDevNo~3D').pop().split('~26').shift();

            var FabOpt = link.split('~26pFabOpt~3D').pop().split('~26').shift();


            if (FabOpt === "ALL") {
                $scope.pageParams.pFabOpt = FabOpt;
            } else {
                $scope.pageParams.pFabOpt = FabOpt.split('~2C');
            }

            $scope.Variables.statFabdevno.dataSet.dataValue = $scope.pageParams.pFabDevNo;
        }
        //$scope.$parent.Variables.statAppUsrid.dataSet.dataValue;
        // $scope.Widgets.gridSearchResult.show = false;
        // $scope.Widgets.gridSearchStockResult.show = false;
        // run query to fetch fabdevno details passed as parameter
        if ($scope.Variables.statFabdevno.dataSet.dataValue !== undefined) {

            $scope.Widgets.panel1.subheading = "Searching Fabrics similar to FabDev Number : " + $scope.Variables.statFabdevno.dataSet.dataValue;

            var svFabdevdet = $scope.Variables.svFabdevReqdet;
            svFabdevdet.invoke({
                    "inputFields": {
                        "p_fabdevno": $scope.Variables.statFabdevno.dataSet.dataValue
                    }
                },
                function(data) {},
                function(error) {}

            );
        }

        $scope.Variables.statCopySubYrnA.dataSet = undefined;
        $scope.Variables.statCopySubYrnB.dataSet = undefined;
        $scope.Variables.statCopyClrDes.dataSet = undefined;


    };
    //------------------------------------------------------------------------------------------------------

    /* after successfully executing service variable  svFabdevReqdet, populate fields on the layout*/
    $scope.svFabdevReqdetonSuccess = function(variable, data) {

        var dsfabdet = data[0].p_out_fabdet;
        if (dsfabdet.length > 0) {
            $scope.Widgets.searchFabtyp.datavalue = dsfabdet[0].INIFABTYP;
            $scope.Widgets.txtFabwgtFrom.datavalue = dsfabdet[0].FABWGT;
            $scope.Widgets.txtFabwgtTo.datavalue = dsfabdet[0].FABWGT;
            $scope.Widgets.txtBsfFrom.datavalue = dsfabdet[0].BSFFABWGT;
            $scope.Widgets.txtBsfTo.datavalue = dsfabdet[0].BSFFABWGT;
            $scope.Widgets.txtMchGauFrom.datavalue = dsfabdet[0].MCHGAU;
            $scope.Widgets.txtMchGauTo.datavalue = dsfabdet[0].MCHGAU;
            $scope.Widgets.wgselectInside.datavalue = {
                ITEMCOD: dsfabdet[0].INSIDE,
                ITEMDES: dsfabdet[0].INSIDEDES
            };
            $scope.Widgets.wgselectOutside.datavalue = {
                ITEMCOD: dsfabdet[0].OUTSIDE,
                ITEMDES: dsfabdet[0].OUTSIDEDES
            };
            $scope.Widgets.wgselectEnzyme.datavalue = {
                ITEMCOD: dsfabdet[0].ENZYME,
                ITEMDES: dsfabdet[0].ENZYMEDES
            };
            $scope.Widgets.wgselectSpfinish.datavalue = {
                ITEMCOD: dsfabdet[0].SPFINISH,
                ITEMDES: dsfabdet[0].SPFINISHDES,
                ITEMDES2: dsfabdet[0].SPFINISHDES2
            };
            $scope.Widgets.wgselectStr.datavalue = {
                ITEMCOD: dsfabdet[0].STR,
                ITEMDES: dsfabdet[0].STRDES
            };
            $scope.Widgets.txtStripeid.datavalue = dsfabdet[0].STRIPEID;
            $scope.Widgets.searchDccode.datavalue = {
                DCCODE: dsfabdet[0].DCCODE,
                LDESC: dsfabdet[0].DCCODELDESC,
                LABEL: dsfabdet[0].DCCODELABEL
            };
            $scope.Widgets.searchLDecoroute.datavalue = dsfabdet[0].LDECOROUTE;
            $scope.Variables.statFabcps.datavalue = dsfabdet[0].FABCPS;
            $scope.Variables.statFabcpsBsf.datavalue = dsfabdet[0].FABCPS_BSF;

            // 14.03.2017 $scope.Widgets.txtFabcps.datavalue = dsfabdet[0].FABCPS;
            // 14.03.2017 $scope.Widgets.txtFabcspBsf.datavalue = dsfabdet[0].FABCPS_BSF;
        }

        //get yarn details cursor to populate yarn count widget
        var dsyrndet = data[0].p_out_yarndet;


        //will populate on layout only the first row from cursor
        if (data[0].p_out_yarndet !== undefined) {

            for (var i = 0; i < data[0].p_out_yarndet.length; i++) {
                $scope.Variables.statSearchCombi.dataSet.push({
                    YrnCnt: data[0].p_out_yarndet[i].YRNCNT,
                    YrnClr: data[0].p_out_yarndet[i].YRNCLR,
                    ClrDes: data[0].p_out_yarndet[i].YRNCDES,
                    FFcod: data[0].p_out_yarndet[i].YRNFFCOD,
                    YrnQual: data[0].p_out_yarndet[i].YRNQLTY,
                    SubYrnQualA: data[0].p_out_yarndet[i].YRNSUBQLTYADESC,
                    SubYrnQualB: data[0].p_out_yarndet[i].YRNSUBQLTYBDESC,
                    YrnCombination: data[0].p_out_yarndet[i].YRNCPS,
                    LabRef: data[0].p_out_yarndet[i].CLRREF,
                    SubYrnQualAStk: data[0].p_out_yarndet[i].YRNSUBQLTYA,
                    SubYrnQualBStk: data[0].p_out_yarndet[i].YRNSUBQLTYB,
                    Yrncdes_lov: data[0].p_out_yarndet[i].YRNCDES_LOV

                });

            }

        }


        /*
           var yrncntArray = [];
        var count = dsyrndet.length;
        for (var i = 0; i < count; i++) {
            var dataRow = dsyrndet[i];
            yrncntArray.push(dataRow.YRNCNT);
        }
        //$scope.Widgets.chkboxYarncount.datavalue = yrncntArray.toString();
       
        */

    };

    //------------------------------------------------------------------------------------------------------------

    //when select the individual yarn count, build up yarn search list
    // not used
    /*   $scope.chkboxYrncntChange = function($event, $isolateScope, item, currentItemWidgets, newVal, oldVal) {
        
        

           var oldvalcntList = $scope.Variables.statYrncntList.dataValue;
           if (currentItemWidgets.chkboxYrncnt.datavalue == "Y") {

               if (oldvalcntList == undefined) {
                   $scope.Variables.statYrncntList.dataValue = currentItemWidgets.chkboxYrncnt.caption;
                   $scope.Widgets.txtSelectedyrncnt.datavalue = currentItemWidgets.chkboxYrncnt.caption;
               } else {
                   $scope.Variables.statYrncntList.dataValue = oldvalcntList + " | " + currentItemWidgets.chkboxYrncnt.caption;
                   $scope.Widgets.txtSelectedyrncnt.datavalue = oldvalcntList + "," + currentItemWidgets.chkboxYrncnt.caption;
               }
           }
           if (currentItemWidgets.chkboxYrncnt.datavalue == "N") {
               var curval = $scope.Variables.statYrncntList.dataValue;
               $scope.Variables.statYrncntList.dataValue = curval.replace(currentItemWidgets.chkboxYrncnt.caption, "").replace("| |", "|");
           }
          

           // currentItemWidgets.chkboxYrncnt.datavalue = oldVal;

       };*/


    //----------------------------------------------------------------------------------------
    /* when button clear search criteria is clicked*/
    $scope.btnClearClick = function($event, $isolateScope) {


        /*reset text boxes*/
        $scope.Widgets.searchFabtyp.datavalue = "";
        $scope.Widgets.txtFabwgtFrom.datavalue = "";
        $scope.Widgets.txtFabwgtTo.datavalue = "";
        $scope.Widgets.txtBsfFrom.datavalue = "";
        $scope.Widgets.txtBsfTo.datavalue = "";
        $scope.Widgets.txtMchGauFrom.datavalue = "";
        $scope.Widgets.txtMchGauTo.datavalue = "";
        $scope.Widgets.txtStripeid.datavalue = "";
        $scope.Widgets.searchYrncnt.datavalue = "";
        $scope.Widgets.txtYrncpsaFrom.datavalue = "";
        $scope.Widgets.txtYrncpsaTo.datavalue = "";
        $scope.Widgets.txtYrncpsbFrom.datavalue = "";
        $scope.Widgets.txtYrncpsbTo.datavalue = "";
        $scope.Widgets.txtYrncpscFrom.datavalue = "";
        $scope.Widgets.txtYrncpscTo.datavalue = "";
        $scope.Widgets.searchYrnclr.datavalue = "";
        $scope.Widgets.txtYrncdes.datavalue = "";
        $scope.Widgets.txtClrref.datavalue = "";
        $scope.Widgets.txtYrnffcod.datavalue = "";
        $scope.Widgets.txtYrnsubqltya.datavalue = "";
        $scope.Widgets.txtYrnsubqltyb.datavalue = "";
        $scope.Widgets.txtYrnqlty.datavalue = "";
        $scope.Widgets.searchDccode.datavalue = "";
        $scope.Widgets.searchLDecoroute.datavalue = "";

        $scope.Widgets.txtOrder.datavalue = "";
        $scope.Widgets.txtClient.datavalue = "";
        $scope.Widgets.sltFabSubCat.datavalue = "";
        $scope.Widgets.txtSkuno.datavalue = "";
        $scope.Widgets.txtFabDecoList.datavalue = "";
        $scope.Widgets.txtcalstn.datavalue = "";


        /*reset radio buttons*/
        $scope.Widgets.rdsCpstyp.datavalue = undefined;


        /*reset dropdowns*/
        $scope.Widgets.wgselectInside.datavalue = undefined;
        $scope.Widgets.wgselectOutside.datavalue = undefined;
        $scope.Widgets.wgselectEnzyme.datavalue = undefined;
        $scope.Widgets.wgselectSpfinish.datavalue = undefined;
        $scope.Widgets.wgselectStr.datavalue = undefined;
        $scope.Widgets.wgselectYrncpsA.datavalue = undefined;
        $scope.Widgets.wgselectYrncpsB.datavalue = undefined;
        $scope.Widgets.wgselectYrncpsC.datavalue = undefined;
        $scope.Widgets.sltStore.datavalue = undefined;
        $scope.Variables.statYrncntList.dataValue = undefined;
        $scope.Variables.statFabcps.datavalue = undefined;
        $scope.Variables.statFabcpsBsf.datavalue = undefined;

        $scope.Widgets.panel1.subheading = "New Fabric Search";
        $scope.Variables.statFabdevno.dataSet.dataValue = undefined;
        $scope.Variables.statSearchCombi.dataSet = [];
        $scope.Widgets.txtCCF.datavalue = undefined;
        $scope.Widgets.txtPatternCode.datavalue = undefined;

    };

    //---------------------------------------------------------------------------------------
    /* fabtyp textbox: set text to upper case */
    /*  $scope.txtFabtypChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.searchFabtyp.datavalue = newVal.toUpperCase();
    };
*/

    /* Stripe ID textbox: set text to upper case on change of text*/
    $scope.txtStripeidChange = function($event, $isolateScope, newVal, oldVal) {
        var upperVal = newVal.toUpperCase();
        $scope.Widgets.txtStripeid.datavalue = upperVal;

    };



    //-----------------------------------------------------------------------------------------
    /*search fabrics*/
    $scope.btnSearchClick = function($event, $isolateScope) {


        var sv = $scope.Variables.svFindfab;

        // set initial value of in-parameters. null values cannot be passed from wmaker to oracle
        var mFabwgtfrom = 0;
        var mFabwgtto = 0;
        var mBsffabwgtfrom = 0;
        var mBsffabwgtto = 0;
        var mMchgaufrom = 0;
        var mMchgauto = 0;

        var mFabdevno = $scope.Variables.statFabdevno.dataSet.dataValue;
        var mCpsField = "%";
        var mCpstypA = "%";
        var mCpstypAfrom = 0;
        var mCpstypAto = 0;
        var mCpstypB = "%";
        var mCpstypBfrom = 0;
        var mCpstypBto = 0;
        var mCpstypC = "%";
        var mCpstypCfrom = 0;
        var mCpstypCto = 0;


        if ($scope.Widgets.txtFabwgtFrom.datavalue !== undefined & $scope.Widgets.txtFabwgtFrom.datavalue !== "") {
            mFabwgtfrom = $scope.Widgets.txtFabwgtFrom.datavalue;
        }
        if ($scope.Widgets.txtFabwgtTo.datavalue !== undefined & $scope.Widgets.txtFabwgtTo.datavalue !== "") {
            mFabwgtto = $scope.Widgets.txtFabwgtTo.datavalue;
        }

        if ($scope.Widgets.txtBsfFrom.datavalue !== undefined & $scope.Widgets.txtBsfFrom.datavalue !== "") {
            mBsffabwgtfrom = $scope.Widgets.txtBsfFrom.datavalue;
        }

        if ($scope.Widgets.txtBsfTo.datavalue !== undefined & $scope.Widgets.txtBsfTo.datavalue !== "") {
            mBsffabwgtto = $scope.Widgets.txtBsfTo.datavalue;
        }

        if ($scope.Widgets.txtMchGauFrom.datavalue !== undefined & $scope.Widgets.txtMchGauFrom.datavalue !== "") {
            mMchgaufrom = $scope.Widgets.txtMchGauFrom.datavalue;
        }

        if ($scope.Widgets.txtMchGauTo.datavalue !== undefined & $scope.Widgets.txtMchGauTo.datavalue !== "") {
            mMchgauto = $scope.Widgets.txtMchGauTo.datavalue;
        }


        // yarn compositions from/to



        if ($scope.Widgets.rdsCpstyp.datavalue !== undefined & $scope.Widgets.rdsCpstyp.datavalue !== "") {
            mCpsField = $scope.Widgets.rdsCpstyp.datavalue;

        }


        if ($scope.Widgets.wgselectYrncpsA.datavalue !== undefined & $scope.Widgets.wgselectYrncpsA.datavalue !== "" & $scope.Widgets.wgselectYrncpsA.datavalue !== null) {
            mCpstypA = $scope.Widgets.wgselectYrncpsA.datavalue;
        }

        if ($scope.Widgets.wgselectYrncpsB.datavalue !== undefined & $scope.Widgets.wgselectYrncpsB.datavalue !== "" & $scope.Widgets.wgselectYrncpsB.datavalue !== null)

        {
            mCpstypB = $scope.Widgets.wgselectYrncpsB.datavalue;
        }

        if ($scope.Widgets.wgselectYrncpsC.datavalue !== undefined & $scope.Widgets.wgselectYrncpsC.datavalue !== "" & $scope.Widgets.wgselectYrncpsC.datavalue !== null)

        {
            mCpstypC = $scope.Widgets.wgselectYrncpsC.datavalue;
        }

        if ($scope.Widgets.txtYrncpsaFrom.datavalue !== undefined & $scope.Widgets.txtYrncpsaFrom.datavalue !== "" & $scope.Widgets.wgselectYrncpsA.datavalue !== undefined & $scope.Widgets.wgselectYrncpsA.datavalue !== "")

        {
            mCpstypAfrom = $scope.Widgets.txtYrncpsaFrom.datavalue;
        }


        if ($scope.Widgets.txtYrncpsbFrom.datavalue !== undefined & $scope.Widgets.txtYrncpsbFrom.datavalue !== "" & $scope.Widgets.wgselectYrncpsB.datavalue !== undefined & $scope.Widgets.wgselectYrncpsB.datavalue !== "")

        {
            mCpstypBfrom = $scope.Widgets.txtYrncpsbFrom.datavalue;
        }



        if ($scope.Widgets.txtYrncpscFrom.datavalue !== undefined & $scope.Widgets.txtYrncpscFrom.datavalue !== "" & $scope.Widgets.wgselectYrncpsC.datavalue !== undefined & $scope.Widgets.wgselectYrncpsC.datavalue !== "")

        {
            mCpstypCfrom = $scope.Widgets.txtYrncpscFrom.datavalue;
        }


        if ($scope.Widgets.txtYrncpsaTo.datavalue !== undefined & $scope.Widgets.txtYrncpsaTo.datavalue !== "" & $scope.Widgets.wgselectYrncpsA.datavalue !== undefined & $scope.Widgets.wgselectYrncpsA.datavalue !== "")

        {
            mCpstypAto = $scope.Widgets.txtYrncpsaTo.datavalue;
        }

        if ($scope.Widgets.txtYrncpsbTo.datavalue !== undefined & $scope.Widgets.txtYrncpsbTo.datavalue !== "" & $scope.Widgets.wgselectYrncpsB.datavalue !== undefined & $scope.Widgets.wgselectYrncpsB.datavalue !== "")

        {
            mCpstypBto = $scope.Widgets.txtYrncpsbTo.datavalue;
        }

        if ($scope.Widgets.txtYrncpscTo.datavalue !== undefined & $scope.Widgets.txtYrncpscTo.datavalue !== "" & $scope.Widgets.wgselectYrncpsC.datavalue !== undefined & $scope.Widgets.wgselectYrncpsC.datavalue !== "")

        {
            mCpstypCto = $scope.Widgets.txtYrncpscTo.datavalue;
        }



        //       validate filter parameters


        if (!(mCpstypA === "%" || mCpstypA === "" || mCpstypA === undefined || mCpstypA === null) && (mCpstypAfrom === 0 || mCpstypAto === 0)) {
            $scope.Variables.notifAlert.setMessage("Enter percentage composition for " + mCpstypA);
            $scope.Variables.notifAlert.notify();
            return false;
        }

        if (!(mCpstypB === "%" || mCpstypB === "" || mCpstypB === undefined || mCpstypB === null) && (mCpstypBfrom === 0 || mCpstypBto === 0)) {
            $scope.Variables.notifAlert.setMessage("Enter percentage composition for " + mCpstypB);
            $scope.Variables.notifAlert.notify();
            return false;
        }


        if (!(mCpstypC === "%" || mCpstypC === "" || mCpstypC === undefined || mCpstypC === null) && (mCpstypCfrom === 0 || mCpstypCto === 0)) {
            $scope.Variables.notifAlert.setMessage("Enter percentage composition for " + mCpstypC);
            $scope.Variables.notifAlert.notify();
            return false;
        }


        if (mCpsField == "%" && (mCpstypA != "%" || mCpstypB != "%" || mCpstypC != "%")) {
            $scope.Variables.notifAlert.setMessage("Select Before special finish or After Special Finish Fab composition");
            $scope.Variables.notifAlert.notify();
            return false;
        }


        // if user has not chosen individual compositions from dropdowns, filter by the fabdevno's fabcps or fabcps_bsf

        // if ($scope.Variables.statFabcps.datavalue !== undefined & (mCpsField === "%" || mCpsField === "ASF")) {
        //   
        //     searchString = searchString + " (" + $scope.Variables.statFabcps.datavalue + ")";
        // }

        // if ($scope.Variables.statFabcpsBsf.datavalue !== undefined & (mCpsField === "%" || mCpsField === "BSF")) {
        //   
        //     searchString = searchString + " (" + $scope.Variables.statFabcpsBsf.datavalue + ")";
        // }


        // clear dataset of service variables. so that dataset contains only new records of this new search.
        // var result = sv.clearData();

        // set filter parameters of the service variable
        //sv.invoke();

        //Creating the parameter YrnList//
        $scope.Variables.statSearchCombiList.dataSet.dataValue = "";

        if ($scope.Variables.statSearchCombi.dataSet.length !== 0) {
            for (var i = 0; i < $scope.Variables.statSearchCombi.dataSet.length; i++) {
                var CombinationList = "";
                if (!(($scope.Variables.statSearchCombi.dataSet[i].YrnCnt === undefined) || ($scope.Variables.statSearchCombi.dataSet[i].YrnCnt === null) || ($scope.Variables.statSearchCombi.dataSet[i].YrnCnt === ""))) {
                    CombinationList = CombinationList + " " + "(" + $scope.Variables.statSearchCombi.dataSet[i].YrnCnt + ")";
                }

                if (!(($scope.Variables.statSearchCombi.dataSet[i].YrnClr === undefined) || ($scope.Variables.statSearchCombi.dataSet[i].YrnClr === null) || ($scope.Variables.statSearchCombi.dataSet[i].YrnClr === ""))) {
                    CombinationList = CombinationList + " " + "(" + $scope.Variables.statSearchCombi.dataSet[i].YrnClr + ")";
                }
                if (!(($scope.Variables.statSearchCombi.dataSet[i].ClrDes === undefined) || ($scope.Variables.statSearchCombi.dataSet[i].ClrDes === null) || ($scope.Variables.statSearchCombi.dataSet[i].ClrDes === ""))) {
                    CombinationList = CombinationList + " " + "(" + $scope.Variables.statSearchCombi.dataSet[i].ClrDes + ")";
                }

                if (!(($scope.Variables.statSearchCombi.dataSet[i].FFcod === undefined) || ($scope.Variables.statSearchCombi.dataSet[i].FFcod === null) || ($scope.Variables.statSearchCombi.dataSet[i].FFcod === ""))) {
                    CombinationList = CombinationList + " " + "(" + $scope.Variables.statSearchCombi.dataSet[i].FFcod + ")";
                }
                if (!(($scope.Variables.statSearchCombi.dataSet[i].YrnQual === undefined) || ($scope.Variables.statSearchCombi.dataSet[i].YrnQual === null) || ($scope.Variables.statSearchCombi.dataSet[i].YrnQual === ""))) {
                    CombinationList = CombinationList + " " + "(" + $scope.Variables.statSearchCombi.dataSet[i].YrnQual + ")";
                }
                if (!(($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualA === undefined) || ($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualA === null) || ($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualA === ""))) {
                    CombinationList = CombinationList + " " + "(" + $scope.Variables.statSearchCombi.dataSet[i].SubYrnQualA + ")";
                }
                if (!(($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualB === undefined) || ($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualB === null) || ($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualB === ""))) {
                    CombinationList = CombinationList + " " + "(" + $scope.Variables.statSearchCombi.dataSet[i].SubYrnQualB + ")";
                }

                if ($scope.Variables.statSearchCombiList.dataSet.dataValue === "") {
                    $scope.Variables.statSearchCombiList.dataSet.dataValue = CombinationList;
                } else {
                    $scope.Variables.statSearchCombiList.dataSet.dataValue = $scope.Variables.statSearchCombiList.dataSet.dataValue + CombinationList;
                }
            }

        }

        //Checking Filter Option Value
        if ($scope.Widgets.checkboxsetFabCat.datavalue !== undefined) {
            var mFabFilterOpt = "";
            for (var i = 0; i < $scope.Widgets.checkboxsetFabCat.datavalue.length; i++) {

                if (mFabFilterOpt === "") {
                    mFabFilterOpt = $scope.Widgets.checkboxsetFabCat.datavalue[i];
                } else {
                    mFabFilterOpt = mFabFilterOpt + ";" + $scope.Widgets.checkboxsetFabCat.datavalue[i];
                }
            }
        }

        var mYrnCnt = null;
        var mYrncps = null;
        var mYrnclr = null;
        var mOriclr = null;
        var mYrnqlty = null;
        var mYrnsubqltyaStk = null;
        var mYrnsubqltybStk = null;
        var mYrnffcod = null;
        var mYrnclrref = null;





        for (var k = 0; k < $scope.Variables.statSearchCombi.dataSet.length; k++) {
            //Yarn Count List
            if (mYrnCnt === null) {
                mYrnCnt = (($scope.Variables.statSearchCombi.dataSet[k].YrnCnt === null || $scope.Variables.statSearchCombi.dataSet[k].YrnCnt === undefined || $scope.Variables.statSearchCombi.dataSet[k].YrnCnt === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].YrnCnt);
            } else {
                mYrnCnt = mYrnCnt + "," + (($scope.Variables.statSearchCombi.dataSet[k].YrnCnt === null || $scope.Variables.statSearchCombi.dataSet[k].YrnCnt === undefined || $scope.Variables.statSearchCombi.dataSet[k].YrnCnt === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].YrnCnt);
            }
            //Yarn Composition List
            if (mYrncps === null) {
                mYrncps = (($scope.Variables.statSearchCombi.dataSet[k].YrnCombination === null || $scope.Variables.statSearchCombi.dataSet[k].YrnCombination === undefined || $scope.Variables.statSearchCombi.dataSet[k].YrnCombination === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].YrnCombination);
            } else {
                mYrncps = mYrncps + "," + (($scope.Variables.statSearchCombi.dataSet[k].YrnCombination === null || $scope.Variables.statSearchCombi.dataSet[k].YrnCombination === undefined || $scope.Variables.statSearchCombi.dataSet[k].YrnCombination === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].YrnCombination);
            }
            //Yarn Colour List
            if (mYrnclr === null) {
                mYrnclr = (($scope.Variables.statSearchCombi.dataSet[k].YrnClr === null || $scope.Variables.statSearchCombi.dataSet[k].YrnClr === undefined || $scope.Variables.statSearchCombi.dataSet[k].YrnClr === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].YrnClr);
            } else {
                mYrnclr = mYrnclr + "," + (($scope.Variables.statSearchCombi.dataSet[k].YrnClr === null || $scope.Variables.statSearchCombi.dataSet[k].YrnClr === undefined || $scope.Variables.statSearchCombi.dataSet[k].YrnClr === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].YrnClr);
            }
            //Yarn Colour Desc List
            if (mOriclr === null) {
                mOriclr = (($scope.Variables.statSearchCombi.dataSet[k].ClrDes === null || $scope.Variables.statSearchCombi.dataSet[k].ClrDes === undefined || $scope.Variables.statSearchCombi.dataSet[k].ClrDes === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].ClrDes);
            } else {
                mOriclr = mOriclr + "," + (($scope.Variables.statSearchCombi.dataSet[k].ClrDes === null || $scope.Variables.statSearchCombi.dataSet[k].ClrDes === undefined || $scope.Variables.statSearchCombi.dataSet[k].ClrDes === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].ClrDes);
            }
            //Yarn Colour Quality List
            if (mYrnqlty === null) {
                mYrnqlty = (($scope.Variables.statSearchCombi.dataSet[k].YrnQual === null || $scope.Variables.statSearchCombi.dataSet[k].YrnQual === undefined || $scope.Variables.statSearchCombi.dataSet[k].YrnQual === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].YrnQual);
            } else {
                mYrnqlty = mYrnqlty + "," + (($scope.Variables.statSearchCombi.dataSet[k].YrnQual === null || $scope.Variables.statSearchCombi.dataSet[k].YrnQual === undefined || $scope.Variables.statSearchCombi.dataSet[k].YrnQual === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].YrnQual);
            }
            //Yarn Sub Qual A List
            if (mYrnsubqltyaStk === null) {
                mYrnsubqltyaStk = (($scope.Variables.statSearchCombi.dataSet[k].SubYrnQualAStk === null || $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualAStk === undefined || $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualAStk === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualAStk);
            } else {
                mYrnsubqltyaStk = mYrnsubqltyaStk + "," + (($scope.Variables.statSearchCombi.dataSet[k].SubYrnQualAStk === null || $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualAStk === undefined || $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualAStk === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualAStk);
            }
            //Yarn Sub Qual b List
            if (mYrnsubqltybStk === null) {
                mYrnsubqltybStk = (($scope.Variables.statSearchCombi.dataSet[k].SubYrnQualBStk === null || $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualBStk === undefined || $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualBStk === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualBStk);
            } else {
                mYrnsubqltybStk = mYrnsubqltybStk + "," + (($scope.Variables.statSearchCombi.dataSet[k].SubYrnQualBStk === null || $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualBStk === undefined || $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualBStk === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].SubYrnQualBStk);
            }
            //Yarn FFCode List
            if (mYrnffcod === null) {
                mYrnffcod = (($scope.Variables.statSearchCombi.dataSet[k].FFcod === null || $scope.Variables.statSearchCombi.dataSet[k].FFcod === undefined || $scope.Variables.statSearchCombi.dataSet[k].FFcod === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].FFcod);
            } else {
                mYrnffcod = mYrnffcod + "," + (($scope.Variables.statSearchCombi.dataSet[k].FFcod === null || $scope.Variables.statSearchCombi.dataSet[k].FFcod === undefined || $scope.Variables.statSearchCombi.dataSet[k].FFcod === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].FFcod);
            }
            if (mYrnclrref === null) {
                mYrnclrref = (($scope.Variables.statSearchCombi.dataSet[k].LabRef === null || $scope.Variables.statSearchCombi.dataSet[k].LabRef === undefined || $scope.Variables.statSearchCombi.dataSet[k].LabRef === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].LabRef);
            } else {
                mYrnclrref = mYrnclrref + "," + (($scope.Variables.statSearchCombi.dataSet[k].LabRef === null || $scope.Variables.statSearchCombi.dataSet[k].LabRef === undefined || $scope.Variables.statSearchCombi.dataSet[k].LabRef === "") ? "%" : $scope.Variables.statSearchCombi.dataSet[k].LabRef);
            }
        }



        if ($scope.Widgets.radiosetFilterOpt.datavalue === "Fabric Lib") {


            if (($scope.Widgets.txtOrder.datavalue === null || $scope.Widgets.txtOrder.datavalue === undefined || $scope.Widgets.txtOrder.datavalue === "") && ($scope.Widgets.searchFabtyp.datavalue === null || $scope.Widgets.searchFabtyp.datavalue === undefined || $scope.Widgets.searchFabtyp.datavalue === "") && ($scope.Widgets.txtSkuno.datavalue === null || $scope.Widgets.txtSkuno.datavalue === undefined || $scope.Widgets.txtSkuno.datavalue === "") && ($scope.Widgets.txtStripeid.datavalue === null || $scope.Widgets.txtStripeid.datavalue === undefined || $scope.Widgets.txtStripeid.datavalue === "") && ($scope.Widgets.txtFabDecoList.datavalue === null || $scope.Widgets.txtFabDecoList.datavalue === undefined || $scope.Widgets.txtFabDecoList.datavalue === "") && ($scope.Widgets.txtCCF.datavalue === null || $scope.Widgets.txtCCF.datavalue === undefined || $scope.Widgets.txtCCF.datavalue === "") && ($scope.Widgets.txtPatternCode.datavalue === null || $scope.Widgets.txtPatternCode.datavalue === undefined || $scope.Widgets.txtPatternCode.datavalue === "")) {
                $scope.Variables.notifAlert.setAlertType("error");
                $scope.Variables.notifAlert.setMessage("You need to specify atleast 1 filter option between Order,Fabric Certificate,Pattern Code,Fabric type,Sku No,Stripe ID or Fab Deco List  before you search.");
                $scope.Variables.notifAlert.notify();
                return false;
            }

            if ($scope.Widgets.cbBaseHanger.datavalue === "Y" && ($scope.Widgets.sltCligrp.datavalue === null || $scope.Widgets.sltCligrp.datavalue === undefined || $scope.Widgets.sltCligrp.datavalue === "")) {
                $scope.Variables.notifAlert.setAlertType("error");
                $scope.Variables.notifAlert.setMessage("You need to choose a client group");
                $scope.Variables.notifAlert.notify();
                return false;
            } else {

                sv.invoke({
                        "inputFields": {
                            "pUsrid": $scope.Variables.statAppUsrid.dataSet.dataValue,
                            "pPrgid": $scope.Variables.statPrgid.dataSet.dataValue,
                            "pFabFilterOption": mFabFilterOpt,
                            "pFabtyp": $scope.Widgets.searchFabtyp.datavalue,
                            "pInside": ($scope.Widgets.wgselectInside.datavalue === null || $scope.Widgets.wgselectInside.datavalue === undefined || $scope.Widgets.wgselectInside.datavalue === "") ? $scope.Widgets.wgselectInside.datavalue : ($scope.Widgets.wgselectInside.datavalue.ITEMDES === "NO-SPFINISH") ? null : $scope.Widgets.wgselectInside.datavalue.ITEMDES,
                            "pOutside": ($scope.Widgets.wgselectOutside.datavalue === null || $scope.Widgets.wgselectOutside.datavalue === undefined || $scope.Widgets.wgselectOutside.datavalue === "") ? $scope.Widgets.wgselectOutside.datavalue : ($scope.Widgets.wgselectOutside.datavalue.ITEMDES === "NO-SPFINISH") ? null : $scope.Widgets.wgselectOutside.datavalue.ITEMDES,
                            "pEnzyme": ($scope.Widgets.wgselectEnzyme.datavalue === null || $scope.Widgets.wgselectEnzyme.datavalue === undefined || $scope.Widgets.wgselectEnzyme.datavalue === "") ? $scope.Widgets.wgselectEnzyme.datavalue : $scope.Widgets.wgselectEnzyme.datavalue.ITEMDES,
                            "pSpfinish": ($scope.Widgets.wgselectSpfinish.datavalue === null || $scope.Widgets.wgselectSpfinish.datavalue === undefined || $scope.Widgets.wgselectSpfinish.datavalue === "") ? $scope.Widgets.wgselectSpfinish.datavalue : ($scope.Widgets.wgselectSpfinish.datavalue.ITEMDES === "NO-SPFINISH") ? null : $scope.Widgets.wgselectSpfinish.datavalue.ITEMDES,
                            "pStr": ($scope.Widgets.wgselectStr.datavalue === null || $scope.Widgets.wgselectStr.datavalue === undefined || $scope.Widgets.wgselectStr.datavalue === "") ? $scope.Widgets.wgselectStr.datavalue : $scope.Widgets.wgselectStr.datavalue.ITEMDES,
                            "pStripeid": ($scope.Widgets.txtStripeid.datavalue === null || $scope.Widgets.txtStripeid.datavalue === undefined || $scope.Widgets.txtStripeid.datavalue === "") ? $scope.Widgets.txtStripeid.datavalue : ($scope.Widgets.txtStripeid.datavalue === "NO-STRIPE") ? null : $scope.Widgets.txtStripeid.datavalue.toUpperCase(),
                            "pDccode": ($scope.Widgets.searchDccode.datavalue === null || $scope.Widgets.searchDccode.datavalue === undefined || $scope.Widgets.searchDccode.datavalue === "") ? $scope.Widgets.searchDccode.datavalue : ($scope.Widgets.searchDccode.datavalue.LDESC === "NO-DCCODE") ? null : $scope.Widgets.searchDccode.datavalue.LDESC,
                            "pLDecoroute": $scope.Widgets.searchLDecoroute.datavalue,
                            "pYarnList": $scope.Variables.statSearchCombiList.dataSet.dataValue,
                            "pYrncnt": mYrnCnt,
                            "pYrncps": mYrncps,
                            "pYrnclr": mYrnclr,
                            "pOriclr": mOriclr,
                            "pYrnqlty": mYrnqlty,
                            "pYrnsubqltya": mYrnsubqltyaStk,
                            "pYrnsubqltyb": mYrnsubqltybStk,
                            "pYrnffcod": mYrnffcod,
                            "pYrnClrref": mYrnclrref,
                            "pFabwgtfrom": mFabwgtfrom,
                            "pFabwgtto": mFabwgtto,
                            "pBsffabwgtfrom": mBsffabwgtfrom,
                            "pBsffabwgtto": mBsffabwgtto,
                            "pMchgaufrom": mMchgaufrom,
                            "pMchgauto": mMchgauto,
                            "pcpsField": mCpsField,
                            "pcpstypA": mCpstypA,
                            "pcpstypAFrom": mCpstypAfrom,
                            "pcpstypATo": mCpstypAto,
                            "pcpstypB": mCpstypB,
                            "pcpstypBFrom": mCpstypBfrom,
                            "pcpstypBTo": mCpstypBto,
                            "pcpstypC": mCpstypC,
                            "pcpstypCFrom": mCpstypCfrom,
                            "pcpstypCTo": mCpstypCto,
                            "p_fabdevno": mFabdevno,
                            "pOrdnum": ($scope.Widgets.txtOrder.datavalue === null || $scope.Widgets.txtOrder.datavalue === undefined || $scope.Widgets.txtOrder.datavalue === "") ? $scope.Widgets.txtOrder.datavalue : $scope.Widgets.txtOrder.datavalue.toUpperCase(),
                            "pfabsubcatdes": ($scope.Widgets.sltFabSubCat.datavalue === null || $scope.Widgets.sltFabSubCat.datavalue === undefined || $scope.Widgets.sltFabSubCat.datavalue === "") ? $scope.Widgets.sltFabSubCat.datavalue : $scope.Widgets.sltFabSubCat.datavalue.subcatdes,
                            "pSkuno": ($scope.Widgets.txtSkuno.datavalue === null || $scope.Widgets.txtSkuno.datavalue === undefined || $scope.Widgets.txtSkuno.datavalue === "") ? $scope.Widgets.txtSkuno.datavalue : $scope.Widgets.txtSkuno.datavalue.toUpperCase(),
                            "pFabdcodelist": ($scope.Widgets.txtFabDecoList.datavalue === null || $scope.Widgets.txtFabDecoList.datavalue === undefined || $scope.Widgets.txtFabDecoList.datavalue === "") ? $scope.Widgets.txtFabDecoList.datavalue : $scope.Widgets.txtFabDecoList.datavalue.toUpperCase(),
                            "pCalstn": ($scope.Widgets.txtcalstn.datavalue === null || $scope.Widgets.txtcalstn.datavalue === "" || $scope.Widgets.txtcalstn.datavalue === undefined) ? $scope.Widgets.txtcalstn.datavalue : $scope.Widgets.txtcalstn.datavalue.toUpperCase(),
                            "pIntfabcertno": ($scope.Widgets.txtCCF.datavalue === null || $scope.Widgets.txtCCF.datavalue === undefined || $scope.Widgets.txtCCF.datavalue === "") ? $scope.Widgets.txtCCF.datavalue : $scope.Widgets.txtCCF.datavalue.toUpperCase(),
                            "pOrderwithHanger": $scope.Widgets.cbBaseHanger.datavalue,
                            "pCligrp": $scope.Widgets.sltCligrp.datavalue,
                            "pTemplateSeq": ($scope.Widgets.txtPatternCode.datavalue === null || $scope.Widgets.txtPatternCode.datavalue === "" || $scope.Widgets.txtPatternCode.datavalue === undefined) ? $scope.Widgets.txtPatternCode.datavalue : $scope.Widgets.datavalue.toUpperCase()

                        }
                    },
                    function(data) {
                        // Success Callback
                        /* 
                         // ref cursor data is stored in a static variable

                         
                         $scope.Variables.statRefcurFindFabMatch.dataSet.dataValue = data[0].pFabrics;
                    
                    
                         $scope.Widgets.Fabdetgrid.dataset = $scope.Variables.statRefcurFindFabMatch.dataSet;
                         $scope.Widgets.Fabdetgrid.DOCID = data[0].pFabrics.DOCID;
                    

                        */
                        //$scope.Widgets.Fabdetgrid.update();




                        if (data[0].pFabrics.length === 0 || data[0].pFabrics.length === undefined) {
                            $scope.Widgets.dialogCCFmailSend.open();
                            return false;
                        }

                        /* collapse the "search criteria" panel to avoid user from scrolling down on result grid on page*/
                        $scope.Widgets.panel1.expanded = false;

                        /* display the result grid */
                        // $scope.Widgets.gridSearchResult.show = true;


                    },
                    function(error) {
                        // Error Callback
                        //alert("Error executing Fab Match Search " + error);

                        $scope.Variables.notifAlert.setAlertType("error");
                        $scope.Variables.notifAlert.setMessage("Could not find matching fabrics");
                        $scope.Variables.notifAlert.notify();

                    }
                );
            }
        } else if ($scope.Widgets.radiosetFilterOpt.datavalue === "Fabric Stock") {

            if (($scope.Widgets.sltStore.datavalue === null) || ($scope.Widgets.sltStore.datavalue === undefined)) {
                $scope.Variables.notifAlert.setMessage("You need to specify the store location before you search.");
                $scope.Variables.notifAlert.notify();
                return false;
            }
            if (($scope.Widgets.txtOrder.datavalue === null || $scope.Widgets.txtOrder.datavalue === undefined || $scope.Widgets.txtOrder.datavalue === "") && ($scope.Widgets.searchFabtyp.datavalue === null || $scope.Widgets.searchFabtyp.datavalue === undefined || $scope.Widgets.searchFabtyp.datavalue === "") && ($scope.Widgets.txtSkuno.datavalue === null || $scope.Widgets.txtSkuno.datavalue === undefined || $scope.Widgets.txtSkuno.datavalue === "") && ($scope.Widgets.txtStripeid.datavalue === null || $scope.Widgets.txtStripeid.datavalue === undefined || $scope.Widgets.txtStripeid.datavalue === "") && ($scope.Widgets.txtFabDecoList.datavalue === null || $scope.Widgets.txtFabDecoList.datavalue === undefined || $scope.Widgets.txtFabDecoList.datavalue === "") && ($scope.Widgets.txtCCF.datavalue === null || $scope.Widgets.txtCCF.datavalue === undefined || $scope.Widgets.txtCCF.datavalue === "") && ($scope.Widgets.txtPatternCode.datavalue === null || $scope.Widgets.txtPatternCode.datavalue === undefined || $scope.Widgets.txtPatternCode.datavalue === "")) {
                $scope.Variables.notifAlert.setAlertType("error");
                $scope.Variables.notifAlert.setMessage("You need to specify atleast 1 filter option between Order,Pattern Code,Fabric type,Fabric Certificate,Sku No,Stripe ID or Fab Deco List  before you search.");
                $scope.Variables.notifAlert.notify();
                return false;
            }


            $scope.Lclrcode = null;
            $scope.Aclrcode = null;
            $scope.Bclrcode = null;
            if ($scope.Widgets.togglestock.datavalue === "Y") {

                if ($scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone C" || $scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone TPX" || $scope.Widgets.radiosetClrFilterOpt.datavalue === "Pantone TCX") {
                    if (!($scope.Widgets.searchPantone.datavalue === null || $scope.Widgets.searchPantone.datavalue === undefined)) {
                        $scope.Lclrcode = $scope.Widgets.searchPantone.datavalue.labl;
                        $scope.Aclrcode = $scope.Widgets.searchPantone.datavalue.laba;
                        $scope.Bclrcode = $scope.Widgets.searchPantone.datavalue.labb;
                    } else {
                        $scope.Variables.notifAlert.setAlertType("error");
                        $scope.Variables.notifAlert.setMessage("You need to search a pantone first!");
                        $scope.Variables.notifAlert.notify();
                        return false;
                    }
                } else if ($scope.Widgets.radiosetClrFilterOpt.datavalue === "Input L.A.B values") {

                    if (!($scope.Widgets.txtLclrvalue.datavalue === null || $scope.Widgets.txtLclrvalue.datavalue === undefined || $scope.Widgets.txtAclrvalue.datavalue === null || $scope.Widgets.txtAclrvalue.datavalue === undefined ||
                            $scope.Widgets.txtBclrvalue.datavalue === null || $scope.Widgets.txtBclrvalue.datavalue === undefined)) {
                        $scope.Lclrcode = $scope.Widgets.txtLclrvalue.datavalue;
                        $scope.Aclrcode = $scope.Widgets.txtAclrvalue.datavalue;
                        $scope.Bclrcode = $scope.Widgets.txtBclrvalue.datavalue;
                    } else {
                        $scope.Variables.notifAlert.setAlertType("error");
                        $scope.Variables.notifAlert.setMessage("Enter L.A.B values!");
                        $scope.Variables.notifAlert.notify();
                        return false;
                    }
                } else {
                    $scope.Lclrcode = null;
                    $scope.Aclrcode = null;
                    $scope.Bclrcode = null;
                }

            }


            $scope.Variables.svFabricsStock.invoke({
                "inputFields": {
                    "pstore": $scope.Widgets.sltStore.datavalue,
                    "pordnum": ($scope.Widgets.txtOrder.datavalue === null || $scope.Widgets.txtOrder.datavalue === undefined || $scope.Widgets.txtOrder.datavalue === "") ? $scope.Widgets.txtOrder.datavalue : $scope.Widgets.txtOrder.datavalue.toUpperCase(),
                    "pclicod": ($scope.Widgets.txtClient.datavalue === null || $scope.Widgets.txtClient.datavalue === undefined || $scope.Widgets.txtClient.datavalue === "") ? $scope.Widgets.txtClient.datavalue : $scope.Widgets.txtClient.datavalue.toUpperCase(),
                    "pfabtyp": $scope.Widgets.searchFabtyp.datavalue,
                    "pfabsubcat": ($scope.Widgets.sltFabSubCat.datavalue === null || $scope.Widgets.sltFabSubCat.datavalue === undefined || $scope.Widgets.sltFabSubCat.datavalue === "") ? $scope.Widgets.sltFabSubCat.datavalue : $scope.Widgets.sltFabSubCat.datavalue.fabsubcat,
                    "pskuno": ($scope.Widgets.txtSkuno.datavalue === null || $scope.Widgets.txtSkuno.datavalue === undefined || $scope.Widgets.txtSkuno.datavalue === "") ? $scope.Widgets.txtSkuno.datavalue : $scope.Widgets.txtSkuno.datavalue.toUpperCase(),
                    "pfabwgtFrom": mFabwgtfrom,
                    "pfabwgtTo": mFabwgtto,
                    "pBsffabwgtfrom": mBsffabwgtfrom,
                    "pBsffabwgtto": mBsffabwgtto,
                    "pfabwid": 0,
                    "pinside": ($scope.Widgets.wgselectInside.datavalue === null || $scope.Widgets.wgselectInside.datavalue === undefined || $scope.Widgets.wgselectInside.datavalue === "") ? $scope.Widgets.wgselectInside.datavalue : ($scope.Widgets.wgselectInside.datavalue.ITEMCOD === "NO-SPFINISH") ? null : $scope.Widgets.wgselectInside.datavalue.ITEMCOD,
                    "poutside": ($scope.Widgets.wgselectOutside.datavalue === null || $scope.Widgets.wgselectOutside.datavalue === undefined || $scope.Widgets.wgselectOutside.datavalue === "") ? $scope.Widgets.wgselectOutside.datavalue : ($scope.Widgets.wgselectOutside.datavalue.ITEMCOD === "NO-SPFINISH") ? null : $scope.Widgets.wgselectOutside.datavalue.ITEMCOD,
                    "pcalstn": ($scope.Widgets.txtcalstn.datavalue === null || $scope.Widgets.txtcalstn.datavalue === "" || $scope.Widgets.txtcalstn.datavalue === undefined) ? $scope.Widgets.txtcalstn.datavalue : $scope.Widgets.txtcalstn.datavalue.toUpperCase(),
                    "pclrref": $scope.Widgets.txtStockLabRef.datavalue,
                    "pstr": ($scope.Widgets.wgselectStr.datavalue === null || $scope.Widgets.wgselectStr.datavalue === undefined || $scope.Widgets.wgselectStr.datavalue === "") ? $scope.Widgets.wgselectStr.datavalue : $scope.Widgets.wgselectStr.datavalue.ITEMCOD,
                    "pstripeId": ($scope.Widgets.txtStripeid.datavalue === null || $scope.Widgets.txtStripeid.datavalue === undefined || $scope.Widgets.txtStripeid.datavalue === "") ? $scope.Widgets.txtStripeid.datavalue : ($scope.Widgets.txtStripeid.datavalue === "NO-STRIPE") ? null : $scope.Widgets.txtStripeid.datavalue.toUpperCase(),
                    "ptheme": $scope.Widgets.searchThemes.datavalue,
                    "penzyme": ($scope.Widgets.wgselectEnzyme.datavalue === null || $scope.Widgets.wgselectEnzyme.datavalue === undefined || $scope.Widgets.wgselectEnzyme.datavalue === "") ? $scope.Widgets.wgselectEnzyme.datavalue : $scope.Widgets.wgselectEnzyme.datavalue.ITEMCOD,
                    "pteflon": ($scope.Widgets.wgselectSpfinish.datavalue === null || $scope.Widgets.wgselectSpfinish.datavalue === undefined || $scope.Widgets.wgselectSpfinish.datavalue === "") ? $scope.Widgets.wgselectSpfinish.datavalue : ($scope.Widgets.wgselectSpfinish.datavalue.ITEMCOD === "NO-SPFINISH") ? null : $scope.Widgets.wgselectSpfinish.datavalue.ITEMCOD,
                    "pldecoroute": $scope.Widgets.searchLDecoroute.datavalue,
                    "pfabdcodelist": ($scope.Widgets.txtFabDecoList.datavalue === null || $scope.Widgets.txtFabDecoList.datavalue === undefined || $scope.Widgets.txtFabDecoList.datavalue === "") ? $scope.Widgets.txtFabDecoList.datavalue : $scope.Widgets.txtFabDecoList.datavalue.toUpperCase(),
                    "pdccode": ($scope.Widgets.searchDccode.datavalue === null || $scope.Widgets.searchDccode.datavalue === undefined || $scope.Widgets.searchDccode.datavalue === "") ? $scope.Widgets.searchDccode.datavalue : ($scope.Widgets.searchDccode.datavalue.DCCODE === "NO-DCCODE") ? null : $scope.Widgets.searchDccode.datavalue.DCCODE,
                    "pmchgaufrom": mMchgaufrom,
                    "pmchgauto": mMchgauto,
                    "pYrncnt": mYrnCnt,
                    "pYrncps": mYrncps,
                    "pYrnclr": mYrnclr,
                    "pOriclr": mOriclr,
                    "pYrnqlty": mYrnqlty,
                    "pYrnsubqltya": mYrnsubqltyaStk,
                    "pYrnsubqltyb": mYrnsubqltybStk,
                    "pYrnffcod": mYrnffcod,
                    "pYrnclrref": mYrnclrref,
                    "pcpsField": mCpsField,
                    "pcpstypA": mCpstypA,
                    "pcpstypAFrom": mCpstypAfrom,
                    "pcpstypATo": mCpstypAto,
                    "pcpstypB": mCpstypB,
                    "pcpstypBFrom": mCpstypBfrom,
                    "pcpstypBTo": mCpstypBto,
                    "pcpstypC": mCpstypC,
                    "pcpstypCFrom": mCpstypCfrom,
                    "pcpstypCTo": mCpstypCto,
                    "psearchColour": $scope.Widgets.togglestock.datavalue,
                    "hexcolor": $scope.Widgets.clrpickerstock.datavalue,
                    "Lclrcode": $scope.Lclrcode,
                    "Aclrcode": $scope.Aclrcode,
                    "Bclrcode": $scope.Bclrcode,
                    "ptoleranceDeltaE": $scope.Widgets.txtTolereance.datavalue,
                    "pIntfabcertno": ($scope.Widgets.txtCCF.datavalue === null || $scope.Widgets.txtCCF.datavalue === undefined || $scope.Widgets.txtCCF.datavalue === "") ? $scope.Widgets.txtCCF.datavalue : $scope.Widgets.txtCCF.datavalue.toUpperCase(),
                    "pCCFMatchcat": $scope.Widgets.radiosetCCFMatchCat.datavalue,
                    "pWarehouse": $scope.Widgets.sltWarehouse.datavalue,
                    "pPatternCode": ($scope.Widgets.txtPatternCode.datavalue === null || $scope.Widgets.txtPatternCode.datavalue === "" || $scope.Widgets.txtPatternCode.datavalue === undefined) ? $scope.Widgets.txtPatternCode.datavalue : $scope.Widgets.datavalue.toUpperCase()
                }
            });



        }
    };

    //---------------------------------------------------------------------------------------------------

    /* on change of yrn qlty reset subqlty fields */
    $scope.wgselectYrnqltyChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtYrnsubqltya.datavalue.SUBQLTYDES = "";
        $scope.Widgets.txtYrnsubqltyb.datavalue.SUBQLTYDES = "";

    };



    // validate yrnclr from dataset of service variable
    $scope.isYrnclrValid = function(data, yrnclrToSearch) {
        var m_yrnclr_exist = false;

        if (data.length !== undefined) {

            var yrncdesDataset = data;

            for (var i = 0; i < yrncdesDataset.length; i++) {

                if (yrncdesDataset[i].NYRNCLR == yrnclrToSearch) {
                    m_yrnclr_exist = true;
                    return m_yrnclr_exist;
                }
            }
        }

    };


    //---------------------------------------------------------------------------------------------------
    // when text change of yrnclr, fetch LoV for yrncdes
    $scope.searchYrnclrChange = function($event, $isolateScope, newVal, oldVal) {

        var upperVal = newVal.toUpperCase();





        /* if ($scope.Variables.svgetYrnclr.dataSet != undefined) {
          
            var yrncdesDataset = $scope.Variables.svgetYrnclr.dataSet[0].p_out_lov_yrnclr;

            for (var i = 0; i < yrncdesDataset.length; i++) {
               
                if (yrncdesDataset[i].NYRNCLR == upperVal) {
                    m_yrnclr_exist = true;
                    
                    return;
                }

            }

        }
*/

        if ($scope.Variables.svgetYrnclr.dataSet !== undefined) {
            //  if ($scope.isYrnclrValid($scope.Variables.svgetYrnclr.dataSet[0].p_out_lov_yrnclr, upperVal)) {

            /*       var m_yrnclr = selectedValue.NYRNCLR;
                    var m_yrncnt = "";
                    var m_yrncdesLov = selectedValue.YRNCDES_LOV;
                
                    if ($scope.Widgets.searchYrncnt.datavalue != undefined) {
                        m_yrncnt = $scope.Widgets.searchYrncnt.datavalue.toUpperCase();
                    }
                
                    
                
                    if (m_yrnclr != "" & m_yrnclr != undefined) {
                        if (m_yrncdesLov == "YMT025" || (m_yrncdesLov == "YDT106" && m_yrncnt != "")) {
                            var svYrncdes = $scope.Variables.svgetYrncdes;
                            svYrncdes.invoke({
                                    "inputFields": {
                                        "p_yrnclr": m_yrnclr,
                                        "p_yrncnt": m_yrncnt
                                    }
                                },
                                function(data) {
                
                                },
                                function(error) {}
                            );
                        }
                    };
             */
            //   }
        }






        /*if (newVal != "" & newVal != undefined) {
            var svYrncdes = $scope.Variables.svgetYrncdes;
            svYrncdes.invoke({
                    "inputFields": {
                        "p_yrnclr": upperVal,
                        "p_yrncnt": $scope.Widgets.searchYrncnt.datavalue
                    }
                },
                function(data) {
                 
                },
                function(error) {}
            );

        };

        $scope.Widgets.txtYrncdes.datavalue = upperVal;
        */

    };
    //---------------------------------------------------------------------------------------------------

    $scope.searchYrnclrSelect = function($event, $isolateScope, selectedValue) {



        var m_yrnclr = selectedValue.NYRNCLR;
        var m_yrncnt = "";
        var m_yrncdesLov = selectedValue.YRNCDES_LOV;

        if ($scope.Widgets.searchYrncnt.datavalue !== undefined) {
            m_yrncnt == $scope.Widgets.searchYrncnt.datavalue.toUpperCase();
        }



        if (m_yrnclr !== "" & m_yrnclr !== undefined & m_yrnclr !== null) {
            if (m_yrncdesLov === "YMT025" || (m_yrncdesLov === "YDT106" && m_yrncnt !== "")) {
                var svYrncdes = $scope.Variables.svgetYrncdes;
                svYrncdes.invoke({
                        "inputFields": {
                            "p_yrnclr": m_yrnclr,
                            "p_yrncnt": m_yrncnt
                        }
                    },
                    function(data) {

                    },
                    function(error) {}
                );
            }
        }




    };

    //---------------------------------------------------------------------------------------------------
    $scope.searchDccodeFocus = function($event, $isolateScope) {
        $scope.Variables.svgetDccode.invoke();
        //$scope.Widgets.searchDccode.
    };
    //---------------------------------------------------------------------------------------------------

    $scope.searchFabtypFocus = function($event, $isolateScope) {

        $scope.Variables.svgetFabtyp.update();

    };

    //---------------------------------------------------------------------------------------------------
    //fetch LOV only when user has focused on the field. 
    // This is to prevent too many queries to be executed on page load
    $scope.wgselectInsideFocus = function($event, $isolateScope) {
        if ($scope.Variables.svgetInside.dataSet.length === undefined || $scope.Variables.svgetInside.dataSet.length === 0) {
            $scope.Variables.svgetInside.update();
        }

    };
    //---------------------------------------------------------------------------------------------------
    //fetch LOV only when user has focused on the field. 
    $scope.wgselectOutsideFocus = function($event, $isolateScope) {
        if ($scope.Variables.svgetOutside.dataSet.length === undefined || $scope.Variables.svgetOutside.dataSet.length === 0) {
            $scope.Variables.svgetOutside.invoke();
        }

    };
    //---------------------------------------------------------------------------------------------------

    //fetch LOV only when user has focused on the field. 
    $scope.wgselectEnzymeFocus = function($event, $isolateScope) {
        if ($scope.Variables.svgetEnzyme.dataSet.length === undefined || $scope.Variables.svgetEnzyme.dataSet.length === 0) {
            $scope.Variables.svgetEnzyme.invoke();
        }
    };
    //---------------------------------------------------------------------------------------------------
    //fetch LOV only when user has focused on the field. 
    $scope.wgselectSpfinishFocus = function($event, $isolateScope) {
        if ($scope.Variables.svgetSpFinish.dataSet.length === undefined || $scope.Variables.svgetSpFinish.dataSet.length === 0) {
            $scope.Variables.svgetSpFinish.invoke();
        }
    };
    //---------------------------------------------------------------------------------------------------
    //fetch LOV only when user has focused on the field. 
    $scope.wgselectStrFocus = function($event, $isolateScope) {
        if ($scope.Variables.svgetStr.dataSet.length === undefined || $scope.Variables.svgetStr.dataSet.length === 0) {
            $scope.Variables.svgetStr.invoke();
        }
    };
    //---------------------------------------------------------------------------------------------------
    //fetch LOV only when user has focused on the field. 
    $scope.wgselectYrncpsAFocus = function($event, $isolateScope) {
        if ($scope.Variables.svgetYrncps.dataSet.length === undefined || $scope.Variables.svgetYrncps.dataSet.length === 0) {
            $scope.Variables.svgetYrncps.invoke();
        }
    };

    //---------------------------------------------------------------------------------------------------
    $scope.searchLDecorouteFocus = function($event, $isolateScope) {
        if ($scope.Variables.svgetLdecoroute.dataSet.length === undefined || $scope.Variables.svgetLdecoroute.dataSet.length === 0) {
            $scope.Variables.svgetLdecoroute.invoke();
        }
    };

    //---------------------------------------------------------------------------------------------------
    $scope.searchYrncntFocus = function($event, $isolateScope) {
        if ($scope.Variables.svgetYrncnt.dataSet.length === undefined || $scope.Variables.svgetYrncnt.dataSet.length === 0) {
            $scope.Variables.svgetYrncnt.invoke();
        }
    };

    //---------------------------------------------------------------------------------------------------;



    $scope.txtYrnqltySelect = function($event, $isolateScope, selectedValue) {
        $scope.Variables.svgetYrnsubqltya.setInput("p_yrnqlty", selectedValue);
        $scope.Variables.svgetYrnsubqltya.invoke();
        $scope.Variables.svgetYrnsubqltyb.setInput("p_yrnqlty", selectedValue);
        $scope.Variables.svgetYrnsubqltyb.invoke();
    };



    $scope.btnSaveCombiClick = function($event, $isolateScope) {

        //Checks if everything is null or undefined
        if (!(($scope.Widgets.searchYrnclr.datavalue === undefined || $scope.Widgets.searchYrnclr.datavalue === "") && ($scope.Widgets.searchYrncnt.datavalue === undefined || $scope.Widgets.searchYrncnt.datavalue === "") && ($scope.Widgets.searchYrncps.datavalue === undefined || $scope.Widgets.searchYrncps.datavalue === "") && ($scope.Widgets.txtYrnffcod.datavalue === undefined || $scope.Widgets.txtYrnffcod.datavalue === "") && ($scope.Widgets.txtYrnqlty.datavalue === undefined || $scope.Widgets.txtYrnqlty.datavalue === "") && ($scope.Widgets.txtClrref.datavalue === undefined || $scope.Widgets.txtClrref.datavalue === ""))) {


            if ($scope.Widgets.searchYrnclr.datavalue === undefined) {
                $scope.Widgets.searchYrnclr.datavalue = "";
            }


            //Push data in statSearchCombi for display in grid

            $scope.Variables.statSearchCombi.dataSet.push({
                YrnCnt: $scope.Widgets.searchYrncnt.datavalue,
                YrnClr: (($scope.Widgets.searchYrnclr.datavalue === null || $scope.Widgets.searchYrnclr.datavalue === undefined || $scope.Widgets.searchYrnclr.datavalue === "") ? $scope.Widgets.searchYrnclr.datavalue : ($scope.Widgets.searchYrnclr.datavalue.NYRNCLR !== undefined) ? $scope.Widgets.searchYrnclr.datavalue.NYRNCLR : $scope.Widgets.searchYrnclr.datavalue),
                ClrDes: $scope.Widgets.txtYrncdes.datavalue,
                FFcod: $scope.Widgets.txtYrnffcod.datavalue,
                YrnQual: $scope.Widgets.txtYrnqlty.datavalue,
                SubYrnQualA: (($scope.Widgets.txtYrnsubqltya.datavalue === null || $scope.Widgets.txtYrnsubqltya.datavalue === undefined || $scope.Widgets.txtYrnsubqltya.datavalue === "") ? $scope.Widgets.txtYrnsubqltya.datavalue : $scope.Widgets.txtYrnsubqltya.datavalue.SUBQLTYDES),
                SubYrnQualB: (($scope.Widgets.txtYrnsubqltyb.datavalue === null || $scope.Widgets.txtYrnsubqltyb.datavalue === undefined || $scope.Widgets.txtYrnsubqltyb.datavalue === "") ? $scope.Widgets.txtYrnsubqltyb.datavalue : $scope.Widgets.txtYrnsubqltyb.datavalue.SUBQLTYDES),
                YrnCombination: $scope.Widgets.searchYrncps.datavalue,
                LabRef: $scope.Widgets.txtClrref.datavalue,
                SubYrnQualAStk: (($scope.Widgets.txtYrnsubqltya.datavalue === null || $scope.Widgets.txtYrnsubqltya.datavalue === undefined || $scope.Widgets.txtYrnsubqltya.datavalue === "") ? $scope.Widgets.txtYrnsubqltya.datavalue : $scope.Widgets.txtYrnsubqltya.datavalue.SUBQLTYCOD),
                SubYrnQualBStk: (($scope.Widgets.txtYrnsubqltyb.datavalue === null || $scope.Widgets.txtYrnsubqltyb.datavalue === undefined || $scope.Widgets.txtYrnsubqltyb.datavalue === "") ? $scope.Widgets.txtYrnsubqltyb.datavalue : $scope.Widgets.txtYrnsubqltyb.datavalue.SUBQLTYCOD),
                Yrncdes_lov: (($scope.Widgets.searchYrnclr.datavalue === null || $scope.Widgets.searchYrnclr.datavalue === undefined || $scope.Widgets.searchYrnclr.datavalue === "") ? $scope.Widgets.searchYrnclr.datavalue : $scope.Widgets.searchYrnclr.datavalue.YRNCDES_LOV)


            });


            $scope.Widgets.gridSearchCombination.refreshData();

        } else {
            $scope.Variables.appNotification.operation = "alert";
            $scope.Variables.appNotification.setMessage("Enter atleast 1 Yrn Filter !!");
            $scope.Variables.appNotification.setAlertType("alert");
            $scope.Variables.appNotification.notify();
        }

    };


    $scope.btnClearFiltersClick = function($event, $isolateScope) {
        $scope.Widgets.searchYrnclr.datavalue = undefined;
        $scope.Widgets.searchYrncnt.datavalue = undefined;
        $scope.Widgets.txtYrnffcod.datavalue = undefined;
        $scope.Widgets.txtYrnqlty.datavalue = undefined;
        $scope.Widgets.searchYrncps.datavalue = undefined;
        $scope.Widgets.txtYrncdes.datavalue = undefined;
        $scope.Widgets.txtYrnsubqltya.datavalue = undefined;
        $scope.Widgets.txtYrnsubqltyb.datavalue = undefined;
        $scope.Widgets.txtClrref.datavalue = undefined;


    };


    $scope.wgselectYrncpsAChange = function($event, $isolateScope, newVal, oldVal) {
        //Reseting the From and To values when changing category
        $scope.Widgets.txtYrncpsaFrom.datavalue = null;
        $scope.Widgets.txtYrncpsaTo.datavalue = null;
    };


    $scope.wgselectYrncpsBChange = function($event, $isolateScope, newVal, oldVal) {
        //Reseting the From and To values when changing category
        $scope.Widgets.txtYrncpsbFrom.datavalue = null;
        $scope.Widgets.txtYrncpsbTo.datavalue = null;

    };



    $scope.wgselectYrncpsCChange = function($event, $isolateScope, newVal, oldVal) {

        //Reseting the From and To values when changing category
        $scope.Widgets.txtYrncpscFrom.datavalue = null;
        $scope.Widgets.txtYrncpscTo.datavalue = null;
    };

    $scope.svProcTt130pk0_fabdevlibGetFabFilterOptonSuccess = function(variable, data) {
        $scope.Variables.statCheckAllFabOpt.dataSet.dataValue = "";
        for (var i = 0; i < $scope.Variables.svProcTt130pk0_fabdevlibGetFabFilterOpt.dataSet.poutFabFilterLov.length; i++) {
            if ($scope.Variables.statCheckAllFabOpt.dataSet.dataValue === "") {
                $scope.Variables.statCheckAllFabOpt.dataSet.dataValue = $scope.Variables.svProcTt130pk0_fabdevlibGetFabFilterOpt.dataSet.poutFabFilterLov[i].itemcod;
            } else {
                $scope.Variables.statCheckAllFabOpt.dataSet.dataValue = $scope.Variables.statCheckAllFabOpt.dataSet.dataValue + "," + $scope.Variables.svProcTt130pk0_fabdevlibGetFabFilterOpt.dataSet.poutFabFilterLov[i].itemcod;
            }
        }
    };


    $scope.gridSerchCombinationRowdelete = function($event, $isolateScope, $rowData) {
        alert("");
    };


    $scope.searchYrncntBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.searchYrncnt.datavalue != $isolateScope.$parent.Widgets.searchYrncnt.query) {
            $isolateScope.$parent.Widgets.searchYrncnt.datavalue = null;
        }


    };


    $scope.searchYrncpsBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.searchYrncps.datavalue != $isolateScope.$parent.Widgets.searchYrncps.query) {
            $isolateScope.$parent.Widgets.searchYrncps.datavalue = null;
        }
    };


    $scope.searchYrnclrBlur = function($event, $isolateScope) {

        if (!($isolateScope.$parent.Widgets.searchYrnclr.datavalue === undefined || $isolateScope.$parent.Widgets.searchYrnclr.datavalue === null)) {
            if ($isolateScope.$parent.Widgets.searchYrnclr.datavalue.NYRNCLR !== undefined) {
                if ($isolateScope.$parent.Widgets.searchYrnclr.datavalue.NYRNCLR !== $isolateScope.$parent.Widgets.searchYrnclr.query) {
                    $isolateScope.$parent.Widgets.searchYrnclr.datavalue = null;
                }
            }
        } else {
            if ($isolateScope.$parent.Widgets.searchYrnclr.datavalue !== $isolateScope.$parent.Widgets.searchYrnclr.query) {
                $isolateScope.$parent.Widgets.searchYrnclr.datavalue = null;
                $isolateScope.$parent.Widgets.searchYrnclr.datavalue = undefined;
            }
        }
    };





    $scope.txtYrnqltyBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.txtYrnqlty.datavalue != $isolateScope.$parent.Widgets.txtYrnqlty.query) {
            $isolateScope.$parent.Widgets.txtYrnqlty.datavalue = null;
        }
    };


    $scope.txtYrncdesBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.txtYrncdes.datavalue != $isolateScope.$parent.Widgets.txtYrncdes.query) {
            $isolateScope.$parent.Widgets.txtYrncdes.datavalue = null;
        }
    };


    $scope.txtYrnsubqltyaBlur = function($event, $isolateScope) {
        if (!(($isolateScope.$parent.Widgets.txtYrnsubqltya.queryModel === undefined) || ($isolateScope.$parent.Widgets.txtYrnsubqltya.queryModel === null) || ($isolateScope.$parent.Widgets.txtYrnsubqltya.queryModel === ""))) {
            if ($isolateScope.$parent.Widgets.txtYrnsubqltya.queryModel.SUBQLTYDES !== undefined) {
                if ($isolateScope.$parent.Widgets.txtYrnsubqltya.datavalue.SUBQLTYDES !== $isolateScope.$parent.Widgets.txtYrnsubqltya.queryModel.SUBQLTYDES) {
                    $isolateScope.$parent.Widgets.txtYrnsubqltya.datavalue.SUBQLTYDES = null;
                }
            } else if ($isolateScope.$parent.Widgets.txtYrnsubqltya.datavalue !== $isolateScope.$parent.Widgets.txtYrnsubqltya.query) {
                $isolateScope.$parent.Widgets.txtYrnsubqltya.datavalue = null;
                $isolateScope.$parent.Widgets.txtYrnsubqltya.datavalue = undefined;
            }
        }
    };


    $scope.txtYrnsubqltybBlur = function($event, $isolateScope) {

        if (!(($isolateScope.$parent.Widgets.txtYrnsubqltyb.queryModel === undefined) || ($isolateScope.$parent.Widgets.txtYrnsubqltyb.queryModel === null) || ($isolateScope.$parent.Widgets.txtYrnsubqltyb.queryModel === ""))) {
            if ($isolateScope.$parent.Widgets.txtYrnsubqltyb.queryModel.SUBQLTYDES !== undefined) {
                if ($isolateScope.$parent.Widgets.txtYrnsubqltyb.datavalue.SUBQLTYDES !== $isolateScope.$parent.Widgets.txtYrnsubqltyb.queryModel.SUBQLTYDES) {
                    $isolateScope.$parent.Widgets.txtYrnsubqltyb.datavalue.SUBQLTYDES = null;
                }
            } else if ($isolateScope.$parent.Widgets.txtYrnsubqltyb.datavalue !== $isolateScope.$parent.Widgets.txtYrnsubqltyb.queryModel) {
                $isolateScope.$parent.Widgets.txtYrnsubqltyb.datavalue = null;
                $isolateScope.$parent.Widgets.txtYrnsubqltyb.datavalue = undefined;
            }
        }
    };


    $scope.txtYrnffcodBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.txtYrnffcod.queryModel !== undefined) {
            if ($isolateScope.$parent.Widgets.txtYrnffcod.queryModel.YRNFFCOD !== undefined) {
                if ($isolateScope.$parent.Widgets.txtYrnffcod.datavalue !== $isolateScope.$parent.Widgets.txtYrnffcod.queryModel.YRNFFCOD) {
                    $isolateScope.$parent.Widgets.txtYrnffcod.datavalue = null;
                }
            } else if ($isolateScope.$parent.Widgets.txtYrnffcod.datavalue !== $isolateScope.$parent.Widgets.txtYrnffcod.queryModel) {
                $isolateScope.$parent.Widgets.txtYrnffcod.datavalue = null;
                $isolateScope.$parent.Widgets.txtYrnffcod.datavalue = undefined;
            }
        }

    };


    $scope.searchFabtypBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.searchFabtyp.queryModel !== undefined) {
            if ($isolateScope.$parent.Widgets.searchFabtyp.queryModel.FABTYP !== undefined) {
                if ($isolateScope.$parent.Widgets.searchFabtyp.datavalue !== $isolateScope.$parent.Widgets.searchFabtyp.queryModel.FABTYP) {
                    $isolateScope.$parent.Widgets.searchFabtyp.datavalue = null;
                }
            } else if ($isolateScope.$parent.Widgets.searchFabtyp.datavalue !== $isolateScope.$parent.Widgets.searchFabtyp.queryModel) {
                $isolateScope.$parent.Widgets.searchFabtyp.datavalue = null;
                $isolateScope.$parent.Widgets.searchFabtyp.datavalue = undefined;
            }
        }
    };


    $scope.searchLDecorouteBlur = function($event, $isolateScope) {
        if ($isolateScope.$parent.Widgets.searchLDecoroute.datavalue != $isolateScope.$parent.Widgets.searchLDecoroute.query) {
            $isolateScope.$parent.Widgets.searchLDecoroute.datavalue = null;
        }
    };


    $scope.searchDccodeBlur = function($event, $isolateScope) {

        if ($isolateScope.$parent.Widgets.searchDccode.queryModel !== undefined) {
            if ($isolateScope.$parent.Widgets.searchDccode.queryModel.LDESC !== undefined) {
                if ($isolateScope.$parent.Widgets.searchDccode.datavalue.LDESC !== $isolateScope.$parent.Widgets.searchDccode.queryModel.LDESC) {
                    $isolateScope.$parent.Widgets.searchDccode.datavalue.LDESC = null;
                }
            } else if ($isolateScope.$parent.Widgets.searchDccode.datavalue !== $isolateScope.$parent.Widgets.searchDccode.queryModel) {
                $isolateScope.$parent.Widgets.searchDccode.datavalue = null;
                $isolateScope.$parent.Widgets.searchDccode.datavalue = undefined;
            }
        }

    };


    $scope.btnSearchStockClick = function($event, $isolateScope) {
        $scope.btnSearchClick();
    };


    $scope.svFabricsStockonSuccess = function(variable, data) {
        if (data.length === 0 || data.length === undefined) {
            $scope.Variables.notifAlert.setAlertType("info");
            $scope.Variables.notifAlert.setMessage("There is no fabric with such criteria.");
            $scope.Variables.notifAlert.notify();
            return false;
        }
        $scope.Widgets.panel1.expanded = false;
        $scope.Widgets.gridSearchStockResult.selecteditem = [];
    };



    $scope.gridSearchStockResultSelect = function($event, $isolateScope, $rowData) {
        //// if (($scope.Widgets.sltStore.datavalue === "MRUDF") || ($scope.Widgets.sltStore.datavalue === "MRUGF")) {
        //     $scope.Widgets.gridSearchStockResult.selecteditem = [];
        // }
    };




    $scope.txtcalstnBlur = function($event, $isolateScope) {
        if (!($scope.Widgets.txtcalstn.datavalue === "C" || $scope.Widgets.txtcalstn.datavalue === "S" || $scope.Widgets.txtcalstn.datavalue === "c" || $scope.Widgets.txtcalstn.datavalue === "s" || $scope.Widgets.txtcalstn.datavalue === "" || $scope.Widgets.txtcalstn.datavalue === undefined)) {
            $scope.Variables.notifAlert.setAlertType("alert");
            $scope.Variables.notifAlert.setMessage("Value can be only be C or S");
            $scope.Variables.notifAlert.notify();
            $scope.Widgets.txtcalstn.datavalue = "";
        }

    };



    $scope.btnPlainFabricClick = function($event, $isolateScope) {

        $scope.Widgets.wgselectSpfinish.datavalue = {
            ITEMCOD: "NO-SPFINISH",
            ITEMDES: "NO-SPFINISH",
            ITEMDES2: "NO-SPFINISH"
        };
        $scope.Widgets.wgselectInside.datavalue = {
            ITEMCOD: "NO-SPFINISH",
            ITEMDES: "NO-SPFINISH"
        }; //wrong face
        $scope.Widgets.wgselectOutside.datavalue = {
            ITEMCOD: "NO-SPFINISH",
            ITEMDES: "NO-SPFINISH"
        }; //right face
        $scope.Widgets.searchDccode.datavalue = {
            DCCODE: "NO-DCCODE",
            LDESC: "NO-DCCODE",
            LABEL: "NO-DCCODE"
        };
        $scope.Widgets.txtStripeid.datavalue = "NO-STRIPE";
    };


    $scope.btnOpenCopyDetailsClick = function($event, $isolateScope) {
        $scope.Widgets.CopyOrderFabDetails.open();
    };


    $scope.svProcTT130pk0_fabdevlibGetOrderDetailsonSuccess = function(variable, data) {

        $scope.btnClearClick();
        if (data.poutFabdet.length > 0) {
            $scope.Widgets.searchFabtyp.datavalue = data.poutFabdet[0].fabdes;
            $scope.Widgets.txtFabwgtFrom.datavalue = data.poutFabdet[0].fabwgt;
            $scope.Widgets.txtFabwgtTo.datavalue = data.poutFabdet[0].fabwgt;
            $scope.Widgets.txtBsfFrom.datavalue = data.poutFabdet[0].bsffabwgt;
            $scope.Widgets.txtBsfTo.datavalue = data.poutFabdet[0].bsffabwgt;
            $scope.Widgets.txtMchGauFrom.datavalue = data.poutFabdet[0].mchgau;
            $scope.Widgets.txtMchGauTo.datavalue = data.poutFabdet[0].mchgau;
            $scope.Widgets.wgselectInside.datavalue = {
                ITEMCOD: data.poutFabdet[0].inside,
                ITEMDES: data.poutFabdet[0].insidedes
            };
            $scope.Widgets.wgselectOutside.datavalue = {
                ITEMCOD: data.poutFabdet[0].outside,
                ITEMDES: data.poutFabdet[0].outsidedes
            };
            $scope.Widgets.wgselectEnzyme.datavalue = {
                ITEMCOD: data.poutFabdet[0].enzyme,
                ITEMDES: data.poutFabdet[0].enzymedes
            };
            $scope.Widgets.wgselectSpfinish.datavalue = {
                ITEMCOD: data.poutFabdet[0].spfinish,
                ITEMDES: data.poutFabdet[0].spfinishdes,
                ITEMDES2: data.poutFabdet[0].spfinishdes2
            };
            $scope.Widgets.wgselectStr.datavalue = {
                ITEMCOD: data.poutFabdet[0].str,
                ITEMDES: data.poutFabdet[0].strdes
            };
            $scope.Widgets.txtStripeid.datavalue = data.poutFabdet[0].stripeid;
            $scope.Widgets.searchDccode.datavalue = {
                DCCODE: data.poutFabdet[0].dccode,
                LDESC: data.poutFabdet[0].dccodeldesc,
                LABEL: data.poutFabdet[0].dccodelabel
            };
            $scope.Widgets.searchLDecoroute.datavalue = data.poutFabdet[0].ldecoroute;
            $scope.Variables.statFabcps.datavalue = data.poutFabdet[0].fabcps;
            $scope.Variables.statFabcpsBsf.datavalue = data.poutFabdet[0].fabcpsBsf;
            $scope.Widgets.rdsCpstyp.datavalue = "ASF";

            if (!(data.poutFabdet[0].cpstypa === null || data.poutFabdet[0].cpstypa === undefined)) {
                $scope.Widgets.wgselectYrncpsA.disabled = false;
                $scope.Widgets.txtYrncpsaFrom.disabled = false;
                $scope.Widgets.txtYrncpsaTo.disabled = false;
                $scope.Widgets.wgselectYrncpsA.datavalue = data.poutFabdet[0].cpstypa;
                $scope.Widgets.txtYrncpsaFrom.datavalue = data.poutFabdet[0].cpstypafrom;
                $scope.Widgets.txtYrncpsaTo.datavalue = data.poutFabdet[0].cpstypafrom;
            } else {
                $scope.Widgets.wgselectYrncpsA.datavalue = null;
                $scope.Widgets.txtYrncpsaFrom.datavalue = null;
                $scope.Widgets.txtYrncpsaTo.datavalue = null;
            }

            if (!(data.poutFabdet[0].cpstypb === null || data.poutFabdet[0].cpstypb === undefined)) {
                $scope.Widgets.wgselectYrncpsB.disabled = false;
                $scope.Widgets.txtYrncpsbFrom.disabled = false;
                $scope.Widgets.txtYrncpsbTo.disabled = false;
                $scope.Widgets.wgselectYrncpsB.datavalue = data.poutFabdet[0].cpstypb;
                $scope.Widgets.txtYrncpsbFrom.datavalue = data.poutFabdet[0].cpstypbfrom;
                $scope.Widgets.txtYrncpsbTo.datavalue = data.poutFabdet[0].cpstypbfrom;
            } else {
                $scope.Widgets.wgselectYrncpsB.datavalue = null;
                $scope.Widgets.txtYrncpsbFrom.datavalue = null;
                $scope.Widgets.txtYrncpsbTo.datavalue = null;
            }
            if (!(data.poutFabdet[0].cpstypc === null || data.poutFabdet[0].cpstypc === undefined)) {
                $scope.Widgets.wgselectYrncpsC.disabled = false;
                $scope.Widgets.txtYrncpscFrom.disabled = false;
                $scope.Widgets.txtYrncpscTo.disabled = false;
                $scope.Widgets.wgselectYrncpsC.datavalue = data.poutFabdet[0].cpstypc;
                $scope.Widgets.txtYrncpscFrom.datavalue = data.poutFabdet[0].cpstypcfrom;
                $scope.Widgets.txtYrncpscTo.datavalue = data.poutFabdet[0].cpstypcfrom;
            } else {
                $scope.Widgets.wgselectYrncpsC.datavalue = null;
                $scope.Widgets.txtYrncpscFrom.datavalue = null;
                $scope.Widgets.txtYrncpscTo.datavalue = null;
            }
        }
        if (data.poutYarndet !== undefined) {

            for (var i = 0; i < data.poutYarndet.length; i++) {
                $scope.Variables.statSearchCombi.dataSet.push({
                    YrnCnt: data.poutYarndet[i].yrncnt,
                    YrnClr: data.poutYarndet[i].yrnclr,
                    ClrDes: data.poutYarndet[i].yrncdes,
                    FFcod: data.poutYarndet[i].yrnffcod,
                    YrnQual: data.poutYarndet[i].yrnqlty,
                    SubYrnQualA: data.poutYarndet[i].yrnsubqltyadesc,
                    SubYrnQualB: data.poutYarndet[i].yrnsubqltybdesc,
                    YrnCombination: data.poutYarndet[i].yrncps,
                    LabRef: data.poutYarndet[i].clrref,
                    SubYrnQualAStk: data.poutYarndet[i].yrnsubqltya,
                    SubYrnQualBStk: data.poutYarndet[i].yrnsubqltyb,
                    Yrncdes_lov: data.poutYarndet[i].yrncdesLov

                });

            }

        }

        $scope.Widgets.CopyOrderFabDetails.close();
    };


    $scope.svgetYrnsubqltyaonSuccess = function(variable, data) {

        if ($scope.Variables.statCopySubYrnA.dataSet !== undefined) {
            $scope.Widgets.txtYrnsubqltya.datavalue = $scope.Variables.statCopySubYrnA.dataSet;
        } else {
            $scope.Widgets.txtYrnsubqltya.datavalue = undefined;
        }
        $scope.Variables.statCopySubYrnA.dataSet = undefined;
    };


    $scope.svgetYrnsubqltybonSuccess = function(variable, data) {

        if ($scope.Variables.statCopySubYrnB.dataSet !== undefined) {
            $scope.Widgets.txtYrnsubqltyb.datavalue = $scope.Variables.statCopySubYrnB.dataSet;
        } else {
            $scope.Widgets.txtYrnsubqltyb.datavalue = undefined;
        }
        $scope.Variables.statCopySubYrnB.dataSet = undefined;
    };


    $scope.svgetYrncdesonSuccess = function(variable, data) {

        if ($scope.Variables.statCopyClrDes.dataSet !== undefined) {
            $scope.Widgets.txtYrncdes.datavalue = $scope.Variables.statCopyClrDes.dataSet;

        } else {
            $scope.Widgets.txtYrncdes.datavalue = undefined;
        }
        $scope.Variables.statCopyClrDes.dataSet = undefined;


    };






    $scope.searchPantoneChange = function($event, $isolateScope, newVal, oldVal) {

        if (newVal.length === 4) {
            $scope.Variables.svProcRf020pk0GetClrOpt.setInput("p_filter", newVal);
            $scope.Variables.svProcRf020pk0GetClrOpt.invoke();
        }
    };


    $scope.radiosetClrFilterOptChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtLclrvalue.datavalue = null;
        $scope.Widgets.txtAclrvalue.datavalue = null;
        $scope.Widgets.txtBclrvalue.datavalue = null;
        $scope.Widgets.clrpickerstock.datavalue = null;
        $scope.Widgets.searchPantone.datavalue = null;
        if ($scope.Widgets.searchPantone.dataset !== undefined) {
            $scope.Widgets.searchPantone.dataset.length = 0;
        }
    };


    $scope.togglestockChange = function($event, $isolateScope, newVal, oldVal) {
        if (newVal === "Y") {
            $scope.Widgets.txtTolereance.datavalue = 15;
        } else {
            $scope.Widgets.txtTolereance.datavalue = null;
        }
    };


    $scope.radiosetGFChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtCCF.datavalue = null;
        $scope.Widgets.txtPatternCode.datavalue = null;
    };


    $scope.sltStoreChange = function($event, $isolateScope, newVal, oldVal) {
        if ($scope.Widgets.gridSearchStockResult.show === true) {
            $scope.Variables.svFabricsStock.clearData();
        }

    };


    $scope.svUpdateTT130PK0_FABDEVLIB_request_FabSrcMailonSuccess = function(variable, data, options) {
        $scope.Widgets.dialogCCFmailSend.close();
        $scope.Widgets.dialogSndMail.close();
        $scope.Variables.notifAlert.setMessage("Mail has been sent successfully");
        $scope.Variables.notifAlert.notify();
    };


    $scope.svFindfabonSuccess = function(variable, data, options) {};

}]);

//---------------------------------------------------------------------------------------------------
Application.$controller("gridSearchResultController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        // when clicked on button "update fab assess" in results grid
        $scope.updateFabdev = function(selectedItemData) {
            if ($scope.Variables.statFabdevno.dataSet.dataValue !== undefined) {


                //assign default values, because cannot pass null to oracle
                var m_ordnum = undefined;
                var m_fabseq = undefined;
                var m_fabbaseno = undefined;
                var m_fabdevno = undefined;
                var m_fabsearchsrc = undefined;

                if (selectedItemData.FABDEVNO != null & selectedItemData.FABDEVNO != "") {
                    m_fabdevno = selectedItemData.FABDEVNO;
                }

                if (selectedItemData.ORDNUM != null & selectedItemData.ORDNUM != "") {
                    m_ordnum = selectedItemData.ORDNUM;
                }

                if (selectedItemData.FABSEQ != null & selectedItemData.FABSEQ != "") {
                    m_fabseq = selectedItemData.FABSEQ;
                }

                if (selectedItemData.FABBASENO != null & selectedItemData.FABBASENO != "") {
                    m_fabbaseno = selectedItemData.FABBASENO;
                }
                if (selectedItemData.TABSRC != null & selectedItemData.TABSRC != "") {
                    m_fabsearchsrc = selectedItemData.TABSRC;
                }



                $scope.Variables.svUpdfabdev.invoke({
                        "inputFields": {
                            "p_fabAssessno": $scope.Variables.statFabdevno.dataSet.dataValue,
                            "p_fabdevno": m_fabdevno,
                            "p_ordnum": m_ordnum,
                            "p_fabseq": m_fabseq,
                            "p_fabbaseno": m_fabbaseno,
                            "p_fabsearchsrc": m_fabsearchsrc,
                            "p_prgid": $scope.Variables.statPrgid.dataSet.dataValue,
                            'p_usrid': $scope.Variables.statAppUsrid.dataSet.dataValue
                        }
                    },
                    function(data) {

                        if (data[0].p_out_errmsg != null) {
                            $scope.Variables.notifErrmsg.setMessage(data[0].p_out_errmsg);
                            $scope.Variables.notifErrmsg.notify();
                            return false;
                        } else {
                            if ((data[0].p_out_successmsg != "") & (data[0].p_out_successmsg != null)) {
                                $scope.Variables.notifAlert.setAlertType("success");
                                $scope.Variables.notifAlert.setMessage(data[0].p_out_successmsg);
                                $scope.Variables.notifAlert.notify();
                            }
                        }


                    },
                    function(error) {}
                );
            }

        };


    }
]);
//---------------------------------------------------------------------------------------------------

Application.$controller("gridSearchCombinationController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.deleterowAction = function($event, $rowData) {

            for (var i = 0; i < $scope.Variables.statSearchCombi.dataSet.length; i++) {
                if (($scope.Variables.statSearchCombi.dataSet[i].YrnCnt === $rowData.YrnCnt) && ($scope.Variables.statSearchCombi.dataSet[i].YrnClr === $rowData.YrnClr) && ($scope.Variables.statSearchCombi.dataSet[i].ClrDes === $rowData.ClrDes) && ($scope.Variables.statSearchCombi.dataSet[i].FFcod === $rowData.FFcod) && ($scope.Variables.statSearchCombi.dataSet[i].YrnQual === $rowData.YrnQual) && ($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualA === $rowData.SubYrnQualA) && ($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualB === $rowData.SubYrnQualB) && ($scope.Variables.statSearchCombi.dataSet[i].YrnCombination === $rowData.YrnCombination) && ($scope.Variables.statSearchCombi.dataSet[i].LabRef === $rowData.LabRef) && ($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualAStk === $rowData.SubYrnQualAStk) && ($scope.Variables.statSearchCombi.dataSet[i].SubYrnQualBStk === $rowData.SubYrnQualBStk)) {
                    $scope.Variables.statSearchCombi.dataSet.splice(i, 1);
                }
            }
        };




        $scope.customFieldAction = function(selectedItemData) {


            if (selectedItemData.YrnCnt !== undefined) {
                $scope.Widgets.searchYrncnt.datavalue = selectedItemData.YrnCnt;
            } else {
                $scope.Widgets.searchYrncnt.datavalue = undefined;
            }
            if (selectedItemData.YrnCombination !== undefined) {
                $scope.Widgets.searchYrncps.datavalue = selectedItemData.YrnCombination;
            } else {
                $scope.Widgets.searchYrncps.datavalue = undefined;
            }
            if (selectedItemData.YrnClr !== undefined || selectedItemData.YrnClr !== null) {
                $scope.Widgets.searchYrnclr.datavalue = selectedItemData.YrnClr;

            } else {
                $scope.Widgets.searchYrnclr.datavalue = undefined;
            }

            if (selectedItemData.ClrDes !== undefined || selectedItemData.ClrDes !== null) {

                var m_yrnclr = selectedItemData.YrnClr;
                var m_yrncnt = "";
                var m_yrncdesLov = selectedItemData.Yrncdes_lov;
                if (selectedItemData.YrnCnt !== undefined || selectedItemData.YrnCnt !== null) {
                    m_yrncnt = selectedItemData.YrnCnt;
                }


                if (m_yrnclr !== "" & m_yrnclr !== undefined & m_yrnclr !== null) {
                    if (m_yrncdesLov === "YMT025" || (m_yrncdesLov === "YDT106" && m_yrncnt !== "")) {
                        $scope.Variables.statCopyClrDes.dataSet = selectedItemData.ClrDes;
                        $scope.Variables.svgetYrncdes.setInput("p_yrnclr", m_yrnclr);
                        $scope.Variables.svgetYrncdes.setInput("p_yrncnt", m_yrncnt);
                        $scope.Variables.svgetYrncdes.invoke();
                    }
                }
            } else {
                $scope.Widgets.txtYrncdes.datavalue = undefined;
            }

            if (selectedItemData.FFcod !== undefined) {
                $scope.Widgets.txtYrnffcod.datavalue = selectedItemData.FFcod;
            } else {
                $scope.Widgets.txtYrnffcod.datavalue = undefined;
            }
            if (selectedItemData.YrnQual !== undefined) {
                $scope.Widgets.txtYrnqlty.datavalue = selectedItemData.YrnQual;
            } else {
                $scope.Widgets.txtYrnqlty.datavalue = undefined;
            }
            if (!(selectedItemData.SubYrnQualA === undefined || selectedItemData.SubYrnQualA === null)) {
                $scope.Variables.statCopySubYrnA.dataSet = {
                    SUBQLTYCOD: selectedItemData.SubYrnQualAStk,
                    SUBQLTYDES: selectedItemData.SubYrnQualA,
                    LABEL: selectedItemData.SubYrnQualAStk + " - " + selectedItemData.SubYrnQualA
                };
                $scope.Variables.svgetYrnsubqltya.setInput("p_yrnqlty", selectedItemData.YrnQual);
                $scope.Variables.svgetYrnsubqltya.invoke();
            } else {
                $scope.Variables.statCopySubYrnA.dataSet = undefined;
            }


            if (!(selectedItemData.SubYrnQualB === undefined || selectedItemData.SubYrnQualB === null)) {
                $scope.Variables.statCopySubYrnB.dataSet = {
                    SUBQLTYCOD: selectedItemData.SubYrnQualBStk,
                    SUBQLTYDES: selectedItemData.SubYrnQualB,
                    LABEL: selectedItemData.SubYrnQualBStk + " - " + selectedItemData.SubYrnQualB
                };
                $scope.Variables.svgetYrnsubqltyb.setInput("p_yrnqlty", selectedItemData.YrnQual);
                $scope.Variables.svgetYrnsubqltyb.invoke();
            } else {
                $scope.Variables.statCopySubYrnB.dataSet = undefined;
            }
            if (selectedItemData.LabRef !== undefined) {
                $scope.Widgets.txtClrref.datavalue = selectedItemData.LabRef;
            } else {
                $scope.Widgets.txtClrref.datavalue = undefined;
            }


        };

    }
]);

Application.$controller("SwatchRequestPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("gridSearchStockResultController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.customButtonAction = function($event) {
            $scope.Variables.statDisplayOrder.dataSet.dataValue = "";
            $scope.Variables.statOrdFabClrSeq.dataSet.dataValue = "";
            $scope.Variables.statLcnStrCod.dataSet.dataValue = "";

            for (var i = 0; i < $scope.Widgets.gridSearchStockResult.selecteditem.length; i++) {
                if ($scope.Variables.statOrdFabClrSeq.dataSet.dataValue === "") {
                    $scope.Variables.statDisplayOrder.dataSet.dataValue = $scope.Widgets.gridSearchStockResult.selecteditem[i].ordnum;
                    $scope.Variables.statOrdFabClrSeq.dataSet.dataValue = $scope.Widgets.gridSearchStockResult.selecteditem[i].ordnum + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].fabseq + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].clrseq;
                    $scope.Variables.statLcnStrCod.dataSet.dataValue = $scope.Widgets.gridSearchStockResult.selecteditem[i].storeloc + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].strcod + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].stocksrc;
                } else {
                    $scope.Variables.statDisplayOrder.dataSet.dataValue = $scope.Variables.statDisplayOrder.dataSet.dataValue + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].ordnum;
                    $scope.Variables.statOrdFabClrSeq.dataSet.dataValue = $scope.Variables.statOrdFabClrSeq.dataSet.dataValue + ";" + $scope.Widgets.gridSearchStockResult.selecteditem[i].ordnum + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].fabseq + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].clrseq;
                    $scope.Variables.statLcnStrCod.dataSet.dataValue = $scope.Variables.statLcnStrCod.dataSet.dataValue + ";" + $scope.Widgets.gridSearchStockResult.selecteditem[i].storeloc + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].strcod + "," + $scope.Widgets.gridSearchStockResult.selecteditem[i].stocksrc;
                }
            }
            $scope.Widgets.SwatchRequestPop.open();
        };


        $scope.imageAction = function(selectedItemData) {

            $scope.Variables.statImageFabRef.dataSet.dataValue = selectedItemData;
            $scope.Widgets.dialogPicture.open();
        };


        $scope.yrnidAction = function(selectedItemData) {
            $scope.Variables.statYrnOrdnum.dataSet.dataValue = selectedItemData.ordnum;
            $scope.Variables.statYrnid.dataSet.dataValue = selectedItemData.yrnid;


            //    $scope.Widgets.gridSearchStockResult.deselectItem(selectedItemData);


            $scope.Widgets.YarnDetailsPop.open();
        };


    }
]);

Application.$controller("YarnDetailsPopController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


    }
]);

Application.$controller("dialogPictureController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

    }
]);

Application.$controller("CopyOrderFabDetailsController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnCopyOrderDetailsClick = function($event, $isolateScope) {
            if (($scope.Widgets.txtCopyOrdnum.datavalue === undefined || $scope.Widgets.txtCopyOrdnum.datavalue === null || $scope.Widgets.txtCopyOrdnum.datavalue === "" || $scope.Widgets.txtCopyFabseq.datavalue === undefined || $scope.Widgets.txtCopyFabseq.datavalue === null) && ($scope.Widgets.txtCopyCCF.datavalue === "" ||
                    $scope.Widgets.txtCopyCCF.datavalue === undefined || $scope.Widgets.txtCopyCCF.datavalue === null)) {
                $scope.Variables.notifAlert.setAlertType("error");
                $scope.Variables.notifAlert.setMessage("Enter atleast Order and Fabric or CCF!!");
                $scope.Variables.notifAlert.notify();
            } else {
                $scope.Variables.svProcTT130pk0_fabdevlibGetOrderDetails.setInput("p_ordnum", $scope.Widgets.txtCopyOrdnum.datavalue);
                $scope.Variables.svProcTT130pk0_fabdevlibGetOrderDetails.setInput("p_fabseq", $scope.Widgets.txtCopyFabseq.datavalue);
                $scope.Variables.svProcTT130pk0_fabdevlibGetOrderDetails.setInput("p_intfabcertno", $scope.Widgets.txtCopyCCF.datavalue);
                $scope.Variables.svProcTT130pk0_fabdevlibGetOrderDetails.invoke();
            }
        };

    }
]);

Application.$controller("dialogSndMailController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;


        $scope.btnSendmailClick = function($event, $isolateScope) {
            if (!$scope.Widgets.searchClicod.datavalue) {
                $scope.Variables.notifAlert.setMessage("Select Client.");
                $scope.Variables.notifAlert.notify();
                return false;
            }

            if (!$scope.Widgets.txtRemakrs.datavalue) {
                $scope.Variables.notifAlert.setMessage("Put a remarks first");
                $scope.Variables.notifAlert.notify();
                return false;
            }

            var m_ConStr = "";
            var str = "";
            var m_remarks = "";
            var m_YrnStr = "";
            var str2 = "";

            if (!!$scope.Widgets.radiosetFilterOpt.datavalue) {
                m_ConStr = 'Filter Option' + '*' + $scope.Widgets.radiosetFilterOpt.datavalue + ';';
            }

            if (!!$scope.Widgets.checkboxsetFabCat.datavalue) {
                m_ConStr = m_ConStr + 'Fabric Category' + '*' + $scope.Widgets.checkboxsetFabCat.datavalue + ';';
            }

            if (!!$scope.Widgets.txtOrder.datavalue) {
                m_ConStr = m_ConStr + 'Order' + '*' + $scope.Widgets.txtOrder.datavalue + ';';
            }

            if (!!$scope.Widgets.cbBaseHanger.datavalue) {
                m_ConStr = m_ConStr + 'With Base Hanger' + '*' + $scope.Widgets.cbBaseHanger.datavalue + ';';
            }

            if (!!$scope.Widgets.txtCCF.datavalue) {
                m_ConStr = m_ConStr + 'CCF No' + '*' + $scope.Widgets.txtCCF.datavalue + ';';
            }
            if (!!$scope.Widgets.txtPatternCode.datavalue) {
                m_ConStr = m_ConStr + 'Template Seq' + '*' + $scope.Widgets.txtPatternCode.datavalue + ';';
            }

            if (!!$scope.Widgets.sltCligrp.datavalue) {
                m_ConStr = m_ConStr + 'Client group' + '*' + $scope.Widgets.sltCligrp.datavalue + ';';
            }

            if (!!$scope.Widgets.searchFabtyp.datavalue) {
                m_ConStr = m_ConStr + 'Fabric Type' + '*' + $scope.Widgets.searchFabtyp.datavalue + ';';
            }

            if (!!$scope.Widgets.txtFabwgtFrom.datavalue || !!$scope.Widgets.txtFabwgtTo.datavalue) {
                m_ConStr = m_ConStr + 'G/M2' + '*' + 'From' + ' ' + (!$scope.Widgets.txtFabwgtFrom.datavalue ? 0 : $scope.Widgets.txtFabwgtFrom.datavalue) + ' ' + 'To' + ' ' + (!$scope.Widgets.txtFabwgtTo.datavalue ? 0 : $scope.Widgets.txtFabwgtTo.datavalue) + ';';
            }

            if (!!$scope.Widgets.txtBsfFrom.datavalue || !!$scope.Widgets.txtBsfTo.datavalue) {
                m_ConStr = m_ConStr + 'BSF G/M2' + '*' + 'From' + ' ' + (!$scope.Widgets.txtBsfFrom.datavalue ? 0 : $scope.Widgets.txtBsfFrom.datavalue) + ' ' + 'To' + ' ' + (!$scope.Widgets.txtBsfTo.datavalue ? 0 : $scope.Widgets.txtBsfTo.datavalue) + ';';
            }

            if (!!$scope.Widgets.txtMchGauFrom.datavalue || !!$scope.Widgets.txtMchGauTo.datavalue) {
                m_ConStr = m_ConStr + 'Gauge' + '*' + 'From' + ' ' + (!$scope.Widgets.txtMchGauFrom.datavalue ? 0 : $scope.Widgets.txtMchGauFrom.datavalue) + ' ' + 'To' + ' ' + (!$scope.Widgets.txtMchGauTo.datavalue ? 0 : $scope.Widgets.txtMchGauTo.datavalue) + ';';
            }

            if (!!$scope.Widgets.sltFabSubCat.datavalue) {
                m_ConStr = m_ConStr + 'Fab Sub Category' + '*' + $scope.Widgets.sltFabSubCat.displayValue + ';';
            }

            if (!!$scope.Widgets.wgselectSpfinish.datavalue) {
                m_ConStr = m_ConStr + 'Fab Sub Category' + '*' + $scope.Widgets.wgselectSpfinish.displayValue + ';';
            }

            if (!!$scope.Widgets.wgselectEnzyme.datavalue) {
                m_ConStr = m_ConStr + 'Enzyme' + '*' + $scope.Widgets.wgselectEnzyme.displayValue + ';';
            }

            if (!!$scope.Widgets.searchDccode.datavalue) {
                m_ConStr = m_ConStr + 'DC Code' + '*' + $scope.Widgets.searchDccode.datavalue.LABEL + ';';
            }

            if (!!$scope.Widgets.wgselectOutside.datavalue) {
                m_ConStr = m_ConStr + 'Fab Right Face' + '*' + $scope.Widgets.wgselectOutside.displayValue + ';';
            }

            if (!!$scope.Widgets.wgselectInside.displayValue) {
                m_ConStr = m_ConStr + 'Fab Wrong Face' + '*' + $scope.Widgets.wgselectInside.displayValue + ';';
            }

            if (!!$scope.Widgets.wgselectStr.displayValue) {
                m_ConStr = m_ConStr + 'Stripe' + '*' + $scope.Widgets.wgselectStr.displayValue + ';';
            }

            if (!!$scope.Widgets.searchLDecoroute.datavalue) {
                m_ConStr = m_ConStr + 'Decoration Sub Process' + '*' + $scope.Widgets.searchLDecoroute.datavalue + ';';
            }

            if (!!$scope.Widgets.txtSkuno.datavalue) {
                m_ConStr = m_ConStr + 'Sku No' + '*' + $scope.Widgets.txtSkuno.datavalue + ';';
            }

            if (!!$scope.Widgets.txtStripeid.datavalue) {
                m_ConStr = m_ConStr + 'Stripe ID' + '*' + $scope.Widgets.txtStripeid.datavalue + ';';
            }

            if (!!$scope.Widgets.txtFabDecoList.datavalue) {
                m_ConStr = m_ConStr + 'Fab Deco List' + '*' + $scope.Widgets.txtFabDecoList.datavalue + ';';
            }

            if (!!$scope.Widgets.txtcalstn.datavalue) {
                m_ConStr = m_ConStr + 'C/S' + '*' + $scope.Widgets.txtcalstn.datavalue + ';';
            }

            if (!!$scope.Widgets.rdsCpstyp.displayValue) {
                m_ConStr = m_ConStr + 'Fab composition' + '*' + $scope.Widgets.rdsCpstyp.displayValue + ';';
            }

            if (!!$scope.Widgets.wgselectYrncpsA.displayValue) {
                m_ConStr = m_ConStr + ' ' + '*' + $scope.Widgets.wgselectYrncpsA.datavalue + '-' + $scope.Widgets.wgselectYrncpsA.displayValue + ' ' + 'From' + ' ' + (!$scope.Widgets.txtYrncpsaFrom.datavalue ? 0 : $scope.Widgets.txtYrncpsaFrom.datavalue) + ' ' + 'To' + ' ' + (!$scope.Widgets.txtYrncpsaTo.datavalue ? 0 : $scope.Widgets.txtYrncpsaTo.datavalue) + ';';
            }

            if (!!$scope.Widgets.wgselectYrncpsB.displayValue) {
                m_ConStr = m_ConStr + ' ' + '*' + $scope.Widgets.wgselectYrncpsB.datavalue + '-' + $scope.Widgets.wgselectYrncpsB.displayValue + ' ' + 'From' + ' ' + (!$scope.Widgets.txtYrncpsbFrom.datavalue ? 0 : $scope.Widgets.txtYrncpsbFrom.datavalue) + ' ' + 'To' + ' ' + (!$scope.Widgets.txtYrncpsbTo.datavalue ? 0 : $scope.Widgets.txtYrncpsbTo.datavalue) + ';';
            }

            if (!!$scope.Widgets.wgselectYrncpsC.displayValue) {
                m_ConStr = m_ConStr + ' ' + '*' + $scope.Widgets.wgselectYrncpsC.datavalue + '-' + $scope.Widgets.wgselectYrncpsC.displayValue + ' ' + 'From' + ' ' + (!$scope.Widgets.txtYrncpscFrom.datavalue ? 0 : $scope.Widgets.txtYrncpscFrom.datavalue) + ' ' + 'To' + ' ' + (!$scope.Widgets.txtYrncpscTo.datavalue ? 0 : $scope.Widgets.txtYrncpscTo.datavalue) + ';';
            }

            if (!!$scope.Widgets.txtRemakrs.datavalue) {
                m_remarks = m_remarks + $scope.Widgets.txtRemakrs.datavalue; //+ 'Remarks:' + '*' 
            }

            str = m_ConStr;
            str = str.substring(0, str.length - 1);

            for (var i = 0; i < $scope.Widgets.gridSearchCombination.dataset.length; i++) {
                str2 = str2 + (!$scope.Widgets.gridSearchCombination.dataset[i].YrnCnt ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].YrnCnt) + '*' + (!$scope.Widgets.gridSearchCombination.dataset[i].YrnCombination ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].YrnCombination) + '*' + (!$scope.Widgets.gridSearchCombination.dataset[i].YrnClr ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].YrnClr) + '*' + (!$scope.Widgets.gridSearchCombination.dataset[i].ClrDes ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].ClrDes) + '*' + (!$scope.Widgets.gridSearchCombination.dataset[i].YrnQual ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].YrnQual) + '*' + (!$scope.Widgets.gridSearchCombination.dataset[i].SubYrnQualA ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].SubYrnQualA) + '*' + (!$scope.Widgets.gridSearchCombination.dataset[i].SubYrnQualB ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].SubYrnQualB) + '*' + (!$scope.Widgets.gridSearchCombination.dataset[i].FFcod ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].FFcod) + '*' + (!$scope.Widgets.gridSearchCombination.dataset[i].LabRef ? ' ' : $scope.Widgets.gridSearchCombination.dataset[i].LabRef) + ';';
            }

            m_YrnStr = str2;
            m_YrnStr = m_YrnStr.substring(0, m_YrnStr.length - 1);

            $scope.Variables.svUpdateTT130PK0_FABDEVLIB_request_FabSrcMail.invoke({
                    "inputFields": {
                        "pYarnFilter": m_YrnStr,
                        "pClient": $scope.Widgets.searchClicod.datavalue,
                        "pStrFrmWM": str,
                        "pRemakrs": m_remarks
                    }
                },
                function(error) {}
            );
        };

    }
]);

Application.$controller("alertdialog2Controller", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;
    }
]);

Application.$controller("dialogCCFmailSendController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.btnSndMailCCFClick = function($event, $isolateScope) {
            $scope.Widgets.dialogSndMail.open();
        };

    }
]);