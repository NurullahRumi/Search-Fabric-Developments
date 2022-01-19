/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wavemaker.runtime.data.dao.query.WMQueryExecutor;
import com.wavemaker.runtime.data.export.ExportOptions;
import com.wavemaker.runtime.data.model.QueryProcedureInput;

import com.mu.cmt.pfs.pfsdb.models.query.*;

@Service
public class PfsdbQueryExecutorServiceImpl implements PfsdbQueryExecutorService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PfsdbQueryExecutorServiceImpl.class);

    @Autowired
    @Qualifier("pfsdbWMQueryExecutor")
    private WMQueryExecutor queryExecutor;

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryStrLcnCodResponse> executeQryStrLcnCod(String strcod, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("strcod", strcod);

        return queryExecutor.executeNamedQuery("QryStrLcnCod", params, QryStrLcnCodResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryStrLcnCod(String strcod, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("strcod", strcod);

        QueryProcedureInput queryInput = new QueryProcedureInput("QryStrLcnCod", params, QryStrLcnCodResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryLovSwatchFormatResponse> executeQryLovSwatchFormat(String ppurpose, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("p_Purpose", ppurpose);

        return queryExecutor.executeNamedQuery("qryLovSwatchFormat", params, QryLovSwatchFormatResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryLovSwatchFormat(String ppurpose, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("p_Purpose", ppurpose);

        QueryProcedureInput queryInput = new QueryProcedureInput("qryLovSwatchFormat", params, QryLovSwatchFormatResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryGetFabtypResponse> executeQryGetFabtyp(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("qryGetFabtyp", params, QryGetFabtypResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryGetFabtyp(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("qryGetFabtyp", params, QryGetFabtypResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryLovItemsResponse> executeQryLovItems(String plovfld, String ptab, String pshowAll, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pLovfld", plovfld);
        params.put("pTab", ptab);
        params.put("pShowAll", pshowAll);

        return queryExecutor.executeNamedQuery("qryLovItems", params, QryLovItemsResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryLovItems(String plovfld, String ptab, String pshowAll, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(3);

        params.put("pLovfld", plovfld);
        params.put("pTab", ptab);
        params.put("pShowAll", pshowAll);

        QueryProcedureInput queryInput = new QueryProcedureInput("qryLovItems", params, QryLovItemsResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryWarehouseLocResponse> executeQryWarehouseLoc(String pitemdes3, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pitemdes3", pitemdes3);

        return queryExecutor.executeNamedQuery("QryWarehouseLoc", params, QryWarehouseLocResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryWarehouseLoc(String pitemdes3, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pitemdes3", pitemdes3);

        QueryProcedureInput queryInput = new QueryProcedureInput("QryWarehouseLoc", params, QryWarehouseLocResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryStrCodLcnResponse> executeQryStrCodLcn(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("QryStrCodLcn", params, QryStrCodLcnResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryStrCodLcn(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("QryStrCodLcn", params, QryStrCodLcnResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryFabSubCatResponse> executeQryFabSubCat(Pageable pageable) {
        Map<String, Object> params = new HashMap<>(0);


        return queryExecutor.executeNamedQuery("QryFabSubCat", params, QryFabSubCatResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryFabSubCat(ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(0);


        QueryProcedureInput queryInput = new QueryProcedureInput("QryFabSubCat", params, QryFabSubCatResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryStockLocationResponse> executeQryStockLocation(String pstockType, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pStockType", pstockType);

        return queryExecutor.executeNamedQuery("QryStockLocation", params, QryStockLocationResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryStockLocation(String pstockType, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pStockType", pstockType);

        QueryProcedureInput queryInput = new QueryProcedureInput("QryStockLocation", params, QryStockLocationResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryYarnIdResponse> executeQryYarnId(String pordnum, Integer pyrnid, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pOrdnum", pordnum);
        params.put("pYrnid", pyrnid);

        return queryExecutor.executeNamedQuery("QryYarnId", params, QryYarnIdResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryYarnId(String pordnum, Integer pyrnid, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(2);

        params.put("pOrdnum", pordnum);
        params.put("pYrnid", pyrnid);

        QueryProcedureInput queryInput = new QueryProcedureInput("QryYarnId", params, QryYarnIdResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

    @Transactional(value = "pfsdbTransactionManager", readOnly = true)
    @Override
    public Page<QryGetThemesResponse> executeQryGetThemes(String ptheme, Pageable pageable) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pTheme", ptheme);

        return queryExecutor.executeNamedQuery("QryGetThemes", params, QryGetThemesResponse.class, pageable);
    }

    @Transactional(value = "pfsdbTransactionManager", timeout = 300, readOnly = true)
    @Override
    public void exportQryGetThemes(String ptheme, ExportOptions exportOptions, Pageable pageable, OutputStream outputStream) {
        Map<String, Object> params = new HashMap<>(1);

        params.put("pTheme", ptheme);

        QueryProcedureInput queryInput = new QueryProcedureInput("QryGetThemes", params, QryGetThemesResponse.class);

        queryExecutor.exportNamedQueryData(queryInput, exportOptions, pageable, outputStream);
    }

}