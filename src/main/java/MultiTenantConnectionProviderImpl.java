package com.mu.cmt.pfs.ClientID;

/*Copyright (c) 2015-2016 wavemaker-com All Rights Reserved.
 This software is the confidential and proprietary information of wavemaker-com You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with wavemaker-com*/
import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.hibernate.HibernateException;
import org.hibernate.engine.jdbc.connections.spi.MultiTenantConnectionProvider;
import org.hibernate.service.spi.Stoppable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import com.wavemaker.runtime.security.SecurityService;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

public class MultiTenantConnectionProviderImpl implements MultiTenantConnectionProvider, Stoppable {

    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(MultiTenantConnectionProviderImpl.class);

    @Autowired
    private SecurityService securityService;

    @Autowired
    private ApplicationContext appContext;

    private DataSource dataSource;

    @Override
    public Connection getAnyConnection() throws SQLException {
        return dataSource.getConnection();
    }

    @Override
    public void releaseAnyConnection(Connection connection) throws SQLException {
        connection.close();
    }

    @Override
    public Connection getConnection(String tenantId) throws SQLException {
        final Connection connection = getAnyConnection();
        try {
	        boolean authenticated = securityService.isAuthenticated();
            if (authenticated) {
                connection.setClientInfo("OCSID.CLIENTID", getUserID());
            } else {
                connection.setClientInfo("OCSID.CLIENTID", "");
                // logger.info("Not authenticated");
            }
            connection.setClientInfo("OCSID.MODULE", getWebAppName());
        } catch (SQLException e) {
            try {
                connection.close();
            } catch (Exception e1)
            {
                logger.warn("Failed to close connection", e1);
            }
            throw new HibernateException("Failed to set user id in jdbc connection", e);
        }
        return connection;
    }

    private String getWebAppName() {
        String module = appContext.getApplicationName();
        if (module != null)
        {
            if (module.startsWith("/"))
                module = module.substring(1);
            if (module.length() > 63)
                module = module.substring(0, 63);
        }
        return module;
    }
    
    private String getUserID() {
        String userID = "";
        if (securityService != null)
        {
            userID = securityService.getUserId();
            if (userID == null || userID.isEmpty()) {
                userID = securityService.getUserName();
            }
            if (userID != null && !userID.isEmpty()) {
                userID = userID.toUpperCase();
            }
        }
        return userID;
    }

    @Override
    public boolean supportsAggressiveRelease() {
        return false;
    }

    @Override
    public void stop() {
    }
    
    @Override
    public void releaseConnection(String tenantIdentifier, Connection connection) throws SQLException {
        connection.close();
    }

    @Override
    public boolean isUnwrappableAs(Class unwrapType) {
        return false;
    }

    @Override
    public <T> T unwrap(Class<T> unwrapType) {
        return null;
    }

    public DataSource getDataSource() {
        return dataSource;
    }
    
    public void setDataSource(DataSource dataSource) {
        this.dataSource= dataSource;
    }
}
