/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class ProcSr741pk0requestSwatchResponse implements Serializable {


    @ColumnAlias("p_out_message")
    private String poutMessage;

    @ColumnAlias("p_out_fabrequestno")
    private String poutFabrequestno;

    public String getPoutMessage() {
        return this.poutMessage;
    }

    public void setPoutMessage(String poutMessage) {
        this.poutMessage = poutMessage;
    }

    public String getPoutFabrequestno() {
        return this.poutFabrequestno;
    }

    public void setPoutFabrequestno(String poutFabrequestno) {
        this.poutFabrequestno = poutFabrequestno;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcSr741pk0requestSwatchResponse)) return false;
        final ProcSr741pk0requestSwatchResponse procSr741pk0requestSwatchResponse = (ProcSr741pk0requestSwatchResponse) o;
        return Objects.equals(getPoutMessage(), procSr741pk0requestSwatchResponse.getPoutMessage()) &&
                Objects.equals(getPoutFabrequestno(), procSr741pk0requestSwatchResponse.getPoutFabrequestno());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutMessage(),
                getPoutFabrequestno());
    }
}