/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetEnzymeResponse implements Serializable {


    @JsonProperty("p_out_lov_enzyme")
    @ColumnAlias("p_out_lov_enzyme")
    private List<GetEnzymeResponsePoutLovEnzyme> poutLovEnzyme;

    public List<GetEnzymeResponsePoutLovEnzyme> getPoutLovEnzyme() {
        return this.poutLovEnzyme;
    }

    public void setPoutLovEnzyme(List<GetEnzymeResponsePoutLovEnzyme> poutLovEnzyme) {
        this.poutLovEnzyme = poutLovEnzyme;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetEnzymeResponse)) return false;
        final GetEnzymeResponse getEnzymeResponse = (GetEnzymeResponse) o;
        return Objects.equals(getPoutLovEnzyme(), getEnzymeResponse.getPoutLovEnzyme());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutLovEnzyme());
    }
}