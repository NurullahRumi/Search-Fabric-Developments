/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.query;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class QryGetThemesResponse implements Serializable {


    @ColumnAlias("THEME")
    private String theme;

    public String getTheme() {
        return this.theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QryGetThemesResponse)) return false;
        final QryGetThemesResponse qryGetThemesResponse = (QryGetThemesResponse) o;
        return Objects.equals(getTheme(), qryGetThemesResponse.getTheme());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getTheme());
    }
}