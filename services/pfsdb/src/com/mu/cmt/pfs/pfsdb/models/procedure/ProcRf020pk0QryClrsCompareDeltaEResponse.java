/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcRf020pk0QryClrsCompareDeltaEResponse implements Serializable {


    @ColumnAlias("pDeltae")
    private List<ProcRf020pk0QryClrsCompareDeltaEResponsePdeltae> pdeltae;

    public List<ProcRf020pk0QryClrsCompareDeltaEResponsePdeltae> getPdeltae() {
        return this.pdeltae;
    }

    public void setPdeltae(List<ProcRf020pk0QryClrsCompareDeltaEResponsePdeltae> pdeltae) {
        this.pdeltae = pdeltae;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcRf020pk0QryClrsCompareDeltaEResponse)) return false;
        final ProcRf020pk0QryClrsCompareDeltaEResponse procRf020pk0qryClrsCompareDeltaEresponse = (ProcRf020pk0QryClrsCompareDeltaEResponse) o;
        return Objects.equals(getPdeltae(), procRf020pk0qryClrsCompareDeltaEresponse.getPdeltae());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPdeltae());
    }
}