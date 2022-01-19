/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcKn1610pk0ExcccfProcExcpCertifyFabResponse implements Serializable {


    @ColumnAlias("p_errmsg")
    private String perrmsg;

    public String getPerrmsg() {
        return this.perrmsg;
    }

    public void setPerrmsg(String perrmsg) {
        this.perrmsg = perrmsg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcKn1610pk0ExcccfProcExcpCertifyFabResponse)) return false;
        final ProcKn1610pk0ExcccfProcExcpCertifyFabResponse procKn1610pk0excccfProcExcpCertifyFabResponse = (ProcKn1610pk0ExcccfProcExcpCertifyFabResponse) o;
        return Objects.equals(getPerrmsg(), procKn1610pk0excccfProcExcpCertifyFabResponse.getPerrmsg());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPerrmsg());
    }
}