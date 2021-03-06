/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcTt130pk0FabdevlibGetFabFilterOptResponse implements Serializable {


    @ColumnAlias("pOutFabFilterLov")
    private List<ProcTt130pk0FabdevlibGetFabFilterOptResponsePoutFabFilterLov> poutFabFilterLov;

    public List<ProcTt130pk0FabdevlibGetFabFilterOptResponsePoutFabFilterLov> getPoutFabFilterLov() {
        return this.poutFabFilterLov;
    }

    public void setPoutFabFilterLov(List<ProcTt130pk0FabdevlibGetFabFilterOptResponsePoutFabFilterLov> poutFabFilterLov) {
        this.poutFabFilterLov = poutFabFilterLov;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcTt130pk0FabdevlibGetFabFilterOptResponse)) return false;
        final ProcTt130pk0FabdevlibGetFabFilterOptResponse procTt130pk0fabdevlibGetFabFilterOptResponse = (ProcTt130pk0FabdevlibGetFabFilterOptResponse) o;
        return Objects.equals(getPoutFabFilterLov(), procTt130pk0fabdevlibGetFabFilterOptResponse.getPoutFabFilterLov());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutFabFilterLov());
    }
}