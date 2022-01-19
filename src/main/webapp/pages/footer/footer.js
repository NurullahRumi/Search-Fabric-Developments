Application.$controller("footerPageController", ["$scope", function($scope) {
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
        var m_currentdate = new Date();
        $scope.Widgets.copyright.caption = "Copyright @ " + m_currentdate.getFullYear() + " Compagnie Mauricienne de Textile Ltée. All rights reserved.";
    };

}]);

Application.$controller("dialogCopyrightController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.dialogCopyrightOpened = function($event, $isolateScope) {
            $scope.Widgets.lblCopyright.caption = "Copyright Compagnie Mauricienne de Textile Ltée: The work and information contained in this document is an original creation of Compagnie Mauricienne de Textile Ltée (CMT). As the author of the said work and owner of the copyright in respect of that work, CMT holds all economic, moral and intellectual property rights throughout the world in respect of that work and of any derivative work created there from. The use, copying, printing, tracing, drawing, reproduction, adaptation, alteration, arrangement, application, displaying, communication, exploitation, transmission and/or publication of the said work and of any derivative work created there from is strictly prohibited and punishable by law. The communication by CMT of the present document shall under no circumstances be construed, interpreted or otherwise regarded as conferring upon or transferring to the recipient thereof the economic rights in connection with the work contained in this document.";
        };

    }
]);