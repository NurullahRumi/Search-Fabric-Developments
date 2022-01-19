package com.mu.cmt.pfs.ClientID;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.context.spi.CurrentTenantIdentifierResolver;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.wavemaker.runtime.security.SecurityService;

public class CurrentTenantIdentifierResolverImpl implements CurrentTenantIdentifierResolver {

    private static final String DEFAULT_SCHEMA = "CMT";

    @Autowired
    private SecurityService securityService;

    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(CurrentTenantIdentifierResolverImpl.class);

    @Override
    public String resolveCurrentTenantIdentifier() {
        return DEFAULT_SCHEMA;
    }
    
    @Override
    public boolean validateExistingCurrentSessions() {
        return true;
    }
}

