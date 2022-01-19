/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class UpdFabdevnoResponse implements Serializable {


    @JsonProperty("p_out_successmsg")
    @ColumnAlias("p_out_successmsg")
    private String poutSuccessmsg;

    @JsonProperty("p_out_errmsg")
    @ColumnAlias("p_out_errmsg")
    private String poutErrmsg;

    public String getPoutSuccessmsg() {
        return this.poutSuccessmsg;
    }

    public void setPoutSuccessmsg(String poutSuccessmsg) {
        this.poutSuccessmsg = poutSuccessmsg;
    }

    public String getPoutErrmsg() {
        return this.poutErrmsg;
    }

    public void setPoutErrmsg(String poutErrmsg) {
        this.poutErrmsg = poutErrmsg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UpdFabdevnoResponse)) return false;
        final UpdFabdevnoResponse updFabdevnoResponse = (UpdFabdevnoResponse) o;
        return Objects.equals(getPoutSuccessmsg(), updFabdevnoResponse.getPoutSuccessmsg()) &&
                Objects.equals(getPoutErrmsg(), updFabdevnoResponse.getPoutErrmsg());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutSuccessmsg(),
                getPoutErrmsg());
    }
}