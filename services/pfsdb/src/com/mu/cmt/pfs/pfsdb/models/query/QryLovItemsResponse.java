/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryLovItemsResponse implements Serializable {


    @ColumnAlias("ITEMCOD")
    private String itemcod;

    @ColumnAlias("ITEMDES")
    private String itemdes;

    @ColumnAlias("ITEMDES2")
    private String itemdes2;

    public String getItemcod() {
        return this.itemcod;
    }

    public void setItemcod(String itemcod) {
        this.itemcod = itemcod;
    }

    public String getItemdes() {
        return this.itemdes;
    }

    public void setItemdes(String itemdes) {
        this.itemdes = itemdes;
    }

    public String getItemdes2() {
        return this.itemdes2;
    }

    public void setItemdes2(String itemdes2) {
        this.itemdes2 = itemdes2;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryLovItemsResponse)) return false;
        final QryLovItemsResponse qryLovItemsResponse = (QryLovItemsResponse) o;
        return Objects.equals(getItemcod(), qryLovItemsResponse.getItemcod()) &&
                Objects.equals(getItemdes(), qryLovItemsResponse.getItemdes()) &&
                Objects.equals(getItemdes2(), qryLovItemsResponse.getItemdes2());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getItemcod(),
                getItemdes(),
                getItemdes2());
    }
}