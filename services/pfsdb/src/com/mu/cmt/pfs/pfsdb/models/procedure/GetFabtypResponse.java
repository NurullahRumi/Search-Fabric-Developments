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

public class GetFabtypResponse implements Serializable {


    @JsonProperty("p_out_lov_fabtyp")
    @ColumnAlias("p_out_lov_fabtyp")
    private List<GetFabtypResponsePoutLovFabtyp> poutLovFabtyp;

    public List<GetFabtypResponsePoutLovFabtyp> getPoutLovFabtyp() {
        return this.poutLovFabtyp;
    }

    public void setPoutLovFabtyp(List<GetFabtypResponsePoutLovFabtyp> poutLovFabtyp) {
        this.poutLovFabtyp = poutLovFabtyp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetFabtypResponse)) return false;
        final GetFabtypResponse getFabtypResponse = (GetFabtypResponse) o;
        return Objects.equals(getPoutLovFabtyp(), getFabtypResponse.getPoutLovFabtyp());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutLovFabtyp());
    }
}