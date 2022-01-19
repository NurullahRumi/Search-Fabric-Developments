/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu 
 You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.wavemaker.runtime.data.dao.procedure;

import java.util.Map;
import com.wavemaker.runtime.data.dao.procedure.WMProcedureExecutorImpl;
import com.wavemaker.commons.WMRuntimeException;
import org.apache.commons.lang.exception.ExceptionUtils;

/*
 pi01: shim to intercept ORA- messages when executing procedures
*/

public class WMProcedureExecutorImplCMT
  extends WMProcedureExecutorImpl
{
  public <T> T executeNamedProcedure(String procedureName, Map<String, Object> params, Class<T> type)
  {
    try
    {
      return super.executeNamedProcedure(procedureName, params, type);
    }
    catch (WMRuntimeException e)
    {
      // we replace the generic "Failed to execute Named Procedure" with root cause message.
      throw new WMRuntimeException(ExceptionUtils.getRootCause(e).getMessage(), e);
    }
  }
}
/*
  Notes: 
    1. Wavemaker ignores 'no_data_found', 'no_data_needed' exceptions and does not raise error in these cases.
    2. Re-import pfsdb tables will wipe out all changes, therefore file moved from /project/services/pfsdb/src/com to /project/src/main/java directory
    
  Files:
    1. project/src/main/java/WMProcedureExecutorImplCMT.java
    2. project/src/main/webapp/WEB-INF/project-user-spring.xml

*/