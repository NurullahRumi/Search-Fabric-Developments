/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.InputStream;
import java.sql.Date;
import java.util.List;

import com.mu.cmt.pfs.pfsdb.models.procedure.*;

@Deprecated
public interface PfsdbProcedureExecutorService_V1 {

    @Deprecated
    List<Object> executeGetEnzyme();

    @Deprecated
    List<Object> executeGetYrnclr();

    @Deprecated
    List<Object> executeGetYrncnt();

    @Deprecated
    List<Object> executeGetYrnffcod();

    @Deprecated
    List<Object> executeGetOutside();

    @Deprecated
    List<Object> executeGetYrnsubqltyb(String pyrnqlty);

    @Deprecated
    List<Object> executeGetYrnsubqltya(String pyrnqlty);

    @Deprecated
    List<Object> executeGetYrnsubqltyc(String pyrnqlty);

    @Deprecated
    List<Object> executeGetFabdevreqdet(String pfabdevno);

    @Deprecated
    List<Object> executeUpdFabdevno(String pfabAssessno, String pfabdevno, String pordnum, Integer pfabseq, String pfabbaseno, String pfabsearchsrc, String pprgid, String pusrid);

    @Deprecated
    List<Object> executeGetYrncdes(String pyrnclr, String pyrncnt);

    @Deprecated
    List<Object> executeGetYrncpstyp();

    @Deprecated
    List<Object> executeGetSpFinish();

    @Deprecated
    List<Object> executeGetFabtyp();

    @Deprecated
    List<Object> executeGetStr();

    @Deprecated
    List<Object> executeGetInside();

    @Deprecated
    List<Object> executeGetYrnqlty();

    @Deprecated
    List<Object> executeGetMatchingFabs(String pusrid, String pprgid, String pfabFilterOption, String pfabtyp, String pinside, String poutside, String penzyme, String pspfinish, String pstr, String pstripeid, String pdccode, String pldecoroute, String pyarnList, String pyrncnt, String pyrncps, String pyrnclr, String poriclr, String pyrnqlty, String pyrnsubqltya, String pyrnsubqltyb, String pyrnffcod, String pyrnClrref, Integer pfabwgtfrom, Integer pfabwgtto, Integer pbsffabwgtfrom, Integer pbsffabwgtto, Integer pmchgaufrom, Integer pmchgauto, String pcpsField, String pcpstypA, Integer pcpstypAfrom, Integer pcpstypAto, String pcpstypB, Integer pcpstypBfrom, Integer pcpstypBto, String pcpstypC, Integer pcpstypCfrom, Integer pcpstypCto, String pfabdevno, String pordnum, String pfabsubcatdes, String pskuno, String pfabdcodelist, String pcalstn, String pintfabcertno, String porderwithHanger, String pcligrp, String ptemplateSeq);

    @Deprecated
    List<Object> executeGetLdecoroute();

    @Deprecated
    List<Object> executeGetDccode();

}