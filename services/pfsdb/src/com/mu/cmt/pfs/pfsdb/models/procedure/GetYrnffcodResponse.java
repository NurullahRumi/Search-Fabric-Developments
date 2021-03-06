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

public class GetYrnffcodResponse implements Serializable {


    @JsonProperty("p_out_lov_yrnffcod")
    @ColumnAlias("p_out_lov_yrnffcod")
    private List<GetYrnffcodResponsePoutLovYrnffcod> poutLovYrnffcod;

    public List<GetYrnffcodResponsePoutLovYrnffcod> getPoutLovYrnffcod() {
        return this.poutLovYrnffcod;
    }

    public void setPoutLovYrnffcod(List<GetYrnffcodResponsePoutLovYrnffcod> poutLovYrnffcod) {
        this.poutLovYrnffcod = poutLovYrnffcod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetYrnffcodResponse)) return false;
        final GetYrnffcodResponse getYrnffcodResponse = (GetYrnffcodResponse) o;
        return Objects.equals(getPoutLovYrnffcod(), getYrnffcodResponse.getPoutLovYrnffcod());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutLovYrnffcod());
    }
}