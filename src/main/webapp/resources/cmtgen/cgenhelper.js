// v1.00 16.5.2018 Pawan.  Set Value select widget. 

function cgenDatasetRowQuery(Dataset, FieldName, FieldValue) {
    for (var i = 0; i < Dataset.length; i++) {
        if (eval("Dataset[i]." + FieldName + " ===  FieldValue")) {
            return Dataset[i];
        }
    }
}

function cgenWMNullWidgetValue(WidgetObj) {

    if (WidgetObj.datavalue === null || WidgetObj.datavalue === undefined || WidgetObj.datavalue === "") {
        return true;
    } else {
        return false;

    }
}

function cgenWMSetWidgetValue(WidgetObj, FieldValue, FieldName) {
    if (cgenWMNullWidgetValue(WidgetObj) || cgenWMNullWidgetValue(FieldValue)) {
        if (WidgetObj.datafield === "All Fields") {
            if (WidgetObj._widgettype === "wm-select" || WidgetObj._widgettype === "wm-search") {

                var dataset = WidgetObj.dataset;
                WidgetObj.datavalue = cgenDatasetRowQuery(dataset, FieldName, FieldValue);
                return true;

            }
        } else {
            WidgetObj.datavalue = FieldValue;
            return true;
        }
    } else {
        return false;
    }

}


function cgenWMValidateAutoComplete($isolateScope) {

    if (cgenWMNullWidgetValue($isolateScope)) {
        $isolateScope.datavalue = null;
    } else {
        return true;
    }
}

function cgenDecodeParameter(link, FieldName) {


    link = "~26" + link + "~26";

    var Fieldvalue = link.split('~26' + FieldName + '~3D').pop().split('~26').shift();
    if (!(Fieldvalue === null || Fieldvalue === undefined || Fieldvalue === "")) {
        if (Fieldvalue.indexOf('~2F') > 0) {
            Fieldvalue = Fieldvalue.replace('~2F', '/');
        }
        if (Fieldvalue.indexOf('~23') > 0) {
            Fieldvalue = Fieldvalue.replace('~23', '#');
        }

        return Fieldvalue;
    } else {
        return false;
    }

}