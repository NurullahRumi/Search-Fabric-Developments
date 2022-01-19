/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.wavemaker.runtime.data.dao.WMGenericDao;
import com.wavemaker.runtime.data.exception.EntityNotFoundException;
import com.wavemaker.runtime.data.export.DataExportOptions;
import com.wavemaker.runtime.data.export.ExportType;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.model.AggregationInfo;
import com.wavemaker.runtime.file.model.Downloadable;

import com.mu.cmt.pfs.pfsdb.Ttt1010;


/**
 * ServiceImpl object for domain model class Ttt1010.
 *
 * @see Ttt1010
 */
@Service("pfsdb.Ttt1010Service")
@Validated
public class Ttt1010ServiceImpl implements Ttt1010Service {

    private static final Logger LOGGER = LoggerFactory.getLogger(Ttt1010ServiceImpl.class);


    @Autowired
    @Qualifier("pfsdb.Ttt1010Dao")
    private WMGenericDao<Ttt1010, String> wmGenericDao;

    public void setWMGenericDao(WMGenericDao<Ttt1010, String> wmGenericDao) {
        this.wmGenericDao = wmGenericDao;
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Ttt1010 create(Ttt1010 ttt1010) {
        LOGGER.debug("Creating a new Ttt1010 with information: {}", ttt1010);

        Ttt1010 ttt1010Created = this.wmGenericDao.create(ttt1010);
        // reloading object from database to get database defined & server defined values.
        return this.wmGenericDao.refresh(ttt1010Created);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public Ttt1010 getById(String ttt1010Id) {
        LOGGER.debug("Finding Ttt1010 by id: {}", ttt1010Id);
        return this.wmGenericDao.findById(ttt1010Id);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public Ttt1010 findById(String ttt1010Id) {
        LOGGER.debug("Finding Ttt1010 by id: {}", ttt1010Id);
        try {
            return this.wmGenericDao.findById(ttt1010Id);
        } catch (EntityNotFoundException ex) {
            LOGGER.debug("No Ttt1010 found with id: {}", ttt1010Id, ex);
            return null;
        }
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public List<Ttt1010> findByMultipleIds(List<String> ttt1010Ids, boolean orderedReturn) {
        LOGGER.debug("Finding Ttt1010s by ids: {}", ttt1010Ids);

        return this.wmGenericDao.findByMultipleIds(ttt1010Ids, orderedReturn);
    }


    @Transactional(rollbackFor = EntityNotFoundException.class, value = "pfsdbTransactionManager")
    @Override
    public Ttt1010 update(Ttt1010 ttt1010) {
        LOGGER.debug("Updating Ttt1010 with information: {}", ttt1010);

        this.wmGenericDao.update(ttt1010);
        this.wmGenericDao.refresh(ttt1010);

        return ttt1010;
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public Ttt1010 delete(String ttt1010Id) {
        LOGGER.debug("Deleting Ttt1010 with id: {}", ttt1010Id);
        Ttt1010 deleted = this.wmGenericDao.findById(ttt1010Id);
        if (deleted == null) {
            LOGGER.debug("No Ttt1010 found with id: {}", ttt1010Id);
            throw new EntityNotFoundException(String.valueOf(ttt1010Id));
        }
        this.wmGenericDao.delete(deleted);
        return deleted;
    }

    @Transactional(value = "pfsdbTransactionManager")
    @Override
    public void delete(Ttt1010 ttt1010) {
        LOGGER.debug("Deleting Ttt1010 with {}", ttt1010);
        this.wmGenericDao.delete(ttt1010);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public Page<Ttt1010> findAll(QueryFilter[] queryFilters, Pageable pageable) {
        LOGGER.debug("Finding all Ttt1010s");
        return this.wmGenericDao.search(queryFilters, pageable);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public Page<Ttt1010> findAll(String query, Pageable pageable) {
        LOGGER.debug("Finding all Ttt1010s");
        return this.wmGenericDao.searchByQuery(query, pageable);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager", timeout = 300)
    @Override
    public Downloadable export(ExportType exportType, String query, Pageable pageable) {
        LOGGER.debug("exporting data in the service pfsdb for table Ttt1010 to {} format", exportType);
        return this.wmGenericDao.export(exportType, query, pageable);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager", timeout = 300)
    @Override
    public void export(DataExportOptions options, Pageable pageable, OutputStream outputStream) {
        LOGGER.debug("exporting data in the service pfsdb for table Ttt1010 to {} format", options.getExportType());
        this.wmGenericDao.export(options, pageable, outputStream);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public long count(String query) {
        return this.wmGenericDao.count(query);
    }

    @Transactional(readOnly = true, value = "pfsdbTransactionManager")
    @Override
    public Page<Map<String, Object>> getAggregatedValues(AggregationInfo aggregationInfo, Pageable pageable) {
        return this.wmGenericDao.getAggregatedValues(aggregationInfo, pageable);
    }



}