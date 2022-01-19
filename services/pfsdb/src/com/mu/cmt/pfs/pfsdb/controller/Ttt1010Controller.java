/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.TypeMismatchException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.wavemaker.commons.wrapper.StringWrapper;
import com.wavemaker.runtime.data.export.DataExportOptions;
import com.wavemaker.runtime.data.export.ExportType;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.model.AggregationInfo;
import com.wavemaker.runtime.file.manager.ExportedFileManager;
import com.wavemaker.runtime.file.model.DownloadResponse;
import com.wavemaker.runtime.file.model.Downloadable;
import com.wavemaker.runtime.util.WMMultipartUtils;
import com.wavemaker.runtime.util.WMRuntimeUtils;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;

import com.mu.cmt.pfs.pfsdb.Ttt1010;
import com.mu.cmt.pfs.pfsdb.service.Ttt1010Service;


/**
 * Controller object for domain model class Ttt1010.
 * @see Ttt1010
 */
@RestController("pfsdb.Ttt1010Controller")
@Api(value = "Ttt1010Controller", description = "Exposes APIs to work with Ttt1010 resource.")
@RequestMapping("/pfsdb/Ttt1010")
public class Ttt1010Controller {

    private static final Logger LOGGER = LoggerFactory.getLogger(Ttt1010Controller.class);

    @Autowired
	@Qualifier("pfsdb.Ttt1010Service")
	private Ttt1010Service ttt1010Service;

	@Autowired
	private ExportedFileManager exportedFileManager;

	@ApiOperation(value = "Creates a new Ttt1010 instance.")
    @RequestMapping(method = RequestMethod.POST, consumes = "multipart/form-data")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Ttt1010 createTtt1010(@RequestPart("wm_data_json") Ttt1010 ttt1010, @RequestPart(value = "fabphoto", required = false) MultipartFile _fabphoto, @RequestPart(value = "fabthumb", required = false) MultipartFile _fabthumb) {
		LOGGER.debug("Create Ttt1010 with information: {}" , ttt1010);

    ttt1010.setFabphoto(WMMultipartUtils.toByteArray(_fabphoto));
    ttt1010.setFabthumb(WMMultipartUtils.toByteArray(_fabthumb));
		ttt1010 = ttt1010Service.create(ttt1010);
		LOGGER.debug("Created Ttt1010 with information: {}" , ttt1010);

	    return ttt1010;
	}

    @ApiOperation(value = "Returns the Ttt1010 instance associated with the given id.")
    @RequestMapping(value = "/{id:.+}", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Ttt1010 getTtt1010(@PathVariable("id") String id) {
        LOGGER.debug("Getting Ttt1010 with id: {}" , id);

        Ttt1010 foundTtt1010 = ttt1010Service.getById(id);
        LOGGER.debug("Ttt1010 details with id: {}" , foundTtt1010);

        return foundTtt1010;
    }

    @ApiOperation(value = "Retrieves content for the given BLOB field in Ttt1010 instance" )
    @RequestMapping(value = "/{id}/content/{fieldName}", method = RequestMethod.GET, produces="application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public DownloadResponse getTtt1010BLOBContent(@PathVariable("id") String id, @PathVariable("fieldName") String fieldName, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, @RequestParam(value="download", defaultValue = "false") boolean download) {

        LOGGER.debug("Retrieves content for the given BLOB field {} in Ttt1010 instance" , fieldName);

        if(!WMRuntimeUtils.isLob(Ttt1010.class, fieldName)) {
            throw new TypeMismatchException("Given field " + fieldName + " is not a valid BLOB type");
        }
        Ttt1010 ttt1010 = ttt1010Service.getById(id);

        return WMMultipartUtils.buildDownloadResponseForBlob(ttt1010, fieldName, httpServletRequest, download);
    }

    @ApiOperation(value = "Updates the Ttt1010 instance associated with the given id.")
    @RequestMapping(value = "/{id:.+}", method = RequestMethod.PUT)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Ttt1010 editTtt1010(@PathVariable("id") String id, @RequestBody Ttt1010 ttt1010) {
        LOGGER.debug("Editing Ttt1010 with id: {}" , ttt1010.getIntrefno());

        ttt1010.setIntrefno(id);
        ttt1010 = ttt1010Service.update(ttt1010);
        LOGGER.debug("Ttt1010 details with id: {}" , ttt1010);

        return ttt1010;
    }

    @ApiOperation(value = "Updates the Ttt1010 instance associated with the given id.This API should be used when Ttt1010 instance fields that require multipart data.") 
    @RequestMapping(value = "/{id:.+}", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Ttt1010 editTtt1010(@PathVariable("id") String id, MultipartHttpServletRequest multipartHttpServletRequest) {
        Ttt1010 newTtt1010 = WMMultipartUtils.toObject(multipartHttpServletRequest, Ttt1010.class, "pfsdb");
        newTtt1010.setIntrefno(id);

        Ttt1010 oldTtt1010 = ttt1010Service.getById(id);
        WMMultipartUtils.updateLobsContent(oldTtt1010, newTtt1010);
        LOGGER.debug("Updating Ttt1010 with information: {}" , newTtt1010);

        return ttt1010Service.update(newTtt1010);
    }

    @ApiOperation(value = "Deletes the Ttt1010 instance associated with the given id.")
    @RequestMapping(value = "/{id:.+}", method = RequestMethod.DELETE)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public boolean deleteTtt1010(@PathVariable("id") String id) {
        LOGGER.debug("Deleting Ttt1010 with id: {}" , id);

        Ttt1010 deletedTtt1010 = ttt1010Service.delete(id);

        return deletedTtt1010 != null;
    }

    /**
     * @deprecated Use {@link #findTtt1010s(String, Pageable)} instead.
     */
    @Deprecated
    @ApiOperation(value = "Returns the list of Ttt1010 instances matching the search criteria.")
    @RequestMapping(value = "/search", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Ttt1010> searchTtt1010sByQueryFilters( Pageable pageable, @RequestBody QueryFilter[] queryFilters) {
        LOGGER.debug("Rendering Ttt1010s list by query filter:{}", (Object) queryFilters);
        return ttt1010Service.findAll(queryFilters, pageable);
    }

    @ApiOperation(value = "Returns the paginated list of Ttt1010 instances matching the optional query (q) request param. If there is no query provided, it returns all the instances. Pagination & Sorting parameters such as page& size, sort can be sent as request parameters. The sort value should be a comma separated list of field names & optional sort order to sort the data on. eg: field1 asc, field2 desc etc ")
    @RequestMapping(method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Ttt1010> findTtt1010s(@ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
        LOGGER.debug("Rendering Ttt1010s list by filter:", query);
        return ttt1010Service.findAll(query, pageable);
    }

    @ApiOperation(value = "Returns the paginated list of Ttt1010 instances matching the optional query (q) request param. This API should be used only if the query string is too big to fit in GET request with request param. The request has to made in application/x-www-form-urlencoded format.")
    @RequestMapping(value="/filter", method = RequestMethod.POST, consumes= "application/x-www-form-urlencoded")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Ttt1010> filterTtt1010s(@ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
        LOGGER.debug("Rendering Ttt1010s list by filter", query);
        return ttt1010Service.findAll(query, pageable);
    }

    @ApiOperation(value = "Returns downloadable file for the data matching the optional query (q) request param. If query string is too big to fit in GET request's query param, use POST method with application/x-www-form-urlencoded format.")
    @RequestMapping(value = "/export/{exportType}", method = {RequestMethod.GET,  RequestMethod.POST}, produces = "application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Downloadable exportTtt1010s(@PathVariable("exportType") ExportType exportType, @ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
         return ttt1010Service.export(exportType, query, pageable);
    }

    @ApiOperation(value = "Returns a URL to download a file for the data matching the optional query (q) request param and the required fields provided in the Export Options.") 
    @RequestMapping(value = "/export", method = {RequestMethod.POST}, consumes = "application/json")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportTtt1010sAndGetURL(@RequestBody DataExportOptions exportOptions, Pageable pageable) {
        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = Ttt1010.class.getSimpleName();
        }
        exportedFileName += exportOptions.getExportType().getExtension();
        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName, outputStream -> ttt1010Service.export(exportOptions, pageable, outputStream));
        return new StringWrapper(exportedUrl);
    }

	@ApiOperation(value = "Returns the total count of Ttt1010 instances matching the optional query (q) request param. If query string is too big to fit in GET request's query param, use POST method with application/x-www-form-urlencoded format.")
	@RequestMapping(value = "/count", method = {RequestMethod.GET, RequestMethod.POST})
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
	public Long countTtt1010s( @ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query) {
		LOGGER.debug("counting Ttt1010s");
		return ttt1010Service.count(query);
	}

    @ApiOperation(value = "Returns aggregated result with given aggregation info")
	@RequestMapping(value = "/aggregations", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
	public Page<Map<String, Object>> getTtt1010AggregatedValues(@RequestBody AggregationInfo aggregationInfo, Pageable pageable) {
        LOGGER.debug("Fetching aggregated results for {}", aggregationInfo);
        return ttt1010Service.getAggregatedValues(aggregationInfo, pageable);
    }


    /**
	 * This setter method should only be used by unit tests
	 *
	 * @param service Ttt1010Service instance
	 */
	protected void setTtt1010Service(Ttt1010Service service) {
		this.ttt1010Service = service;
	}

}