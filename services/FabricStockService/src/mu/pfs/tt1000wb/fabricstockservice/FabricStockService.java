/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package mu.pfs.tt1000wb.fabricstockservice;


import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.math.BigInteger;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;



import com.mu.cmt.pfs.pfsdb.service.PfsdbProcedureExecutorService;
//import com.mu.cmt.pfs.pfsdb.service.Ort120Service;
import com.mu.cmt.pfs.pfsdb.models.procedure.*;
import com.mu.cmt.pfs.pfsdb.*;
import com.chroma.*;
import com.wavemaker.runtime.data.annotations.ColumnAlias;




 
/**
 * This is a singleton class with all its public methods exposed as REST APIs via generated controller class.
 * To avoid exposing an API for a particular public method, annotate it with @HideFromClient.
 *
 * Method names will play a major role in defining the Http Method for the generated APIs. For example, a method name
 * that starts with delete/remove, will make the API exposed as Http Method "DELETE".
 *
 * Method Parameters of type primitives (including java.lang.String) will be exposed as Query Parameters &
 * Complex Types/Objects will become part of the Request body in the generated API.
 */
@ExposeToClient
public class FabricStockService {

    private static final Logger logger = LoggerFactory.getLogger(FabricStockService.class);

    @Autowired
    private SecurityService securityService;
    
    
    @Autowired
    private PfsdbProcedureExecutorService procService;
    
    //  @Autowired
    //  private Ort120Service ort120Service;

    /**
     * This is sample java operation that accepts an input from the caller and responds with "Hello".
     *
     * SecurityService that is Autowired will provide access to the security context of the caller. It has methods like isAuthenticated(),
     * getUserName() and getUserId() etc which returns the information based on the caller context.
     *
     * Methods in this class can declare HttpServletRequest, HttpServletResponse as input parameters to access the
     * caller's request/response objects respectively. These parameters will be injected when request is made (during API invocation).
     */
    public String sampleJavaOperation(String name, HttpServletRequest request) {
        logger.debug("Starting sample operation with request url " + request.getRequestURL().toString());
        
        String result = null;
        
        if (securityService.isAuthenticated()) {
            result = "Hello " + name + ", You are logged in as "+  securityService.getLoggedInUser().getUserName();
        } else {
            result = "Hello " + name + ", You are not authenticated yet!";
        }
        logger.debug("Returning {}", result);
        return result;
    }

     public double[] getLabFromHex(String hexcolor)
    {
        
        Chroma color = new Chroma(hexcolor);
        double[] lab = color.get(ColorSpace.LAB);
        return lab;
    }
    
    public double[] getRgbFromHex(String hexcolor){
        Chroma color = new Chroma(hexcolor);
        double [] rgb = color.get(ColorSpace.RGB);
        return rgb;
    }
    
    
     public String getHexFromLab(String lab)
    {
  //      logger.debug("fetching string lab");
        Double l, a, b;
        if (lab.startsWith("L"))
        {
            int posA = lab.indexOf("A");
            int posB = lab.indexOf("B");
            l = Double.parseDouble(lab.substring(1,posA));
            a = Double.parseDouble(lab.substring(posA+1,posB));
            b = Double.parseDouble(lab.substring(posB+1));
            
           
            Chroma color = new Chroma(ColorSpace.LAB, l, a, b);
            return color.toString();
        
        }
        else
        {
            Chroma color = new Chroma("Black");
            return color.toString();
        }
            
        
    }
   
    
    public class StockFabrics
    {
        
            @ColumnAlias("ORDNUM")
            private String ordnum;
            @ColumnAlias("CLICOD")
            private String clicod;
            @ColumnAlias("FABTYP")
            private String fabtyp;
            @ColumnAlias("FABWGT")
            private Short fabwgt;
            @ColumnAlias("FABWID")
            private BigInteger fabwid;
            @ColumnAlias("CLRDES")
            private String clrdes;
            @ColumnAlias("HEXCOLOR")
            private String hexcolor;
            @ColumnAlias("LAB")
            private String labvalue;
            @ColumnAlias("DELTAE")
            private String deltae;
            @ColumnAlias("MCHGAU")
            private BigInteger mchgau;
            @ColumnAlias("CLRREF")
            private String clrref;
            @ColumnAlias("STRIPEID")
            private String stripeid;
            @ColumnAlias("FABDCODELIST")
            private String fabdcodelist;
            @ColumnAlias("INSIDE")
            private String inside;
            @ColumnAlias("OUTSIDE")
            private String outside;
            @ColumnAlias("SPFINISH")
            private String spfinish;
            @ColumnAlias("ENZYMEWASH")
            private String enzymewash;
            @ColumnAlias("SKUNO")
            private String skuno;
            @ColumnAlias("CALSTN")
            private String calstn;                           
            @ColumnAlias("SDECOROUTE")
            private String sdecoroute;
            @ColumnAlias("LDECOROUTE")
            private String ldecoroute; 
            @ColumnAlias("YRNID")
            private BigInteger yrnid;
            @ColumnAlias("FABIMAGEREF")
            private String fabimageref;
            @ColumnAlias("STOCK")
            private String stock;
            @ColumnAlias("STORELOC")
            private String storeloc;
            @ColumnAlias("STRCOD")
            private String strcod;
            @ColumnAlias("FABCOMPO")
            private String fabcompo;
            @ColumnAlias("FABSEQ")
            private Byte fabseq;
            @ColumnAlias("CLRSEQ")
            private Byte clrseq;
            @ColumnAlias("CCFDET")
            private String ccfdet;
            @ColumnAlias("SIMILARCCFDET")
            private String similarccfdet;
            @ColumnAlias("STOCKSRC")
            private String stocksrc;

      
            public String getOrdnum() {
                return this.ordnum;
            }
        
            public void setOrdnum(String ordnum) {
                this.ordnum = ordnum;
            }
        
            public String getClicod() {
                return this.clicod;
            }
        
            public void setClicod(String clicod) {
                this.clicod = clicod;
            }
        
            public String getFabtyp() {
                return this.fabtyp;
            }
        
            public void setFabtyp(String fabtyp) {
                this.fabtyp = fabtyp;
            }
        
            public Short getFabwgt() {
                return this.fabwgt;
            }
        
            public void setFabwgt(Short fabwgt) {
                this.fabwgt = fabwgt;
            }
        
            public BigInteger getFabwid() {
                return this.fabwid;
            }
        
            public void setFabwid(BigInteger fabwid) {
                this.fabwid = fabwid;
            }
        
            public String getClrdes() {
                return this.clrdes;
            }
        
            public void setClrdes(String clrdes) {
                this.clrdes = clrdes;
            }
        
            public String getHexcolor() {
                return this.hexcolor;
            }
        
            public void setHexcolor(String hexcolor) {
                this.hexcolor = hexcolor;
            }
            
            public void setLab(String lab){
                this.hexcolor = getHexFromLab(lab);
            }
            public String getLabvalue(){
                return this.labvalue;
            }
            public void setLabvalue(String labvalue){
                this.labvalue = labvalue;
            }
            public void setLabval(String lab){
                this.labvalue = lab;
            }
        
            public String getDeltae() {
                return this.deltae;
            }
        
            public void setDeltae(String deltae) {
                this.deltae = deltae;
            }
        
            public BigInteger getMchgau() {
                return this.mchgau;
            }
        
            public void setMchgau(BigInteger mchgau) {
                this.mchgau = mchgau;
            }
        
            public String getClrref() {
                return this.clrref;
            }
        
            public void setClrref(String clrref) {
                this.clrref = clrref;
            }
        
            public String getStripeid() {
                return this.stripeid;
            }
        
            public void setStripeid(String stripeid) {
                this.stripeid = stripeid;
            }
        
            public String getFabdcodelist() {
                return this.fabdcodelist;
            }
        
            public void setFabdcodelist(String fabdcodelist) {
                this.fabdcodelist = fabdcodelist;
            }
        
            public String getInside() {
                return this.inside;
            }
        
            public void setInside(String inside) {
                this.inside = inside;
            }
        
            public String getOutside() {
                return this.outside;
            }
        
            public void setOutside(String outside) {
                this.outside = outside;
            }
        
            public String getSpfinish() {
                return this.spfinish;
            }
        
            public void setSpfinish(String spfinish) {
                this.spfinish = spfinish;
            }
        
            public String getEnzymewash() {
                return this.enzymewash;
            }
        
            public void setEnzymewash(String enzymewash) {
                this.enzymewash = enzymewash;
            }
        
            public String getSkuno() {
                return this.skuno;
            }
        
            public void setSkuno(String skuno) {
                this.skuno = skuno;
            }
        
            public String getCalstn() {
                return this.calstn;
            }
        
            public void setCalstn(String calstn) {
                this.calstn = calstn;
            }
        
            public String getSdecoroute() {
                return this.sdecoroute;
            }
        
            public void setSdecoroute(String sdecoroute) {
                this.sdecoroute = sdecoroute;
            }
        
            public String getLdecoroute() {
                return this.ldecoroute;
            }
        
            public void setLdecoroute(String ldecoroute) {
                this.ldecoroute = ldecoroute;
            }
        
            public BigInteger getYrnid() {
                return this.yrnid;
            }
        
            public void setYrnid(BigInteger yrnid) {
                this.yrnid = yrnid;
            }
        
        
            public String getFabimageref() {
                return this.fabimageref;
            }
            
            public void setFabimageref(String fabimageref) {
                this.fabimageref = fabimageref;
            }
        
            public String getStock() {
                return this.stock;
            }
        
            public void setStock(String stock) {
                this.stock = stock;
            }
        
            public String getStoreloc() {
                return this.storeloc;
            }
              
            public void setStoreloc(String storeloc) {
                this.storeloc = storeloc;
            } 
            public String getStrcod() {
            return this.strcod;
            }

            public void setStrcod(String strcod) {
                this.strcod = strcod;
            }
          
            public String getFabcompo() {
                return this.fabcompo;
            }
        
            public void setFabcompo(String fabcompo) {
                this.fabcompo = fabcompo;
            }
        
            public Byte getFabseq() {
                return this.fabseq;
            }
        
            public void setFabseq(Byte fabseq) {
                this.fabseq = fabseq;
            }
        
            public Byte getClrseq() {
                return this.clrseq;
            }
        
            public void setClrseq(Byte clrseq) {
                this.clrseq = clrseq;
            }
            public String getCcfdet() {
                return this.ccfdet;
            }
        
            public void setCcfdet(String ccfdet) {
                this.ccfdet = ccfdet;
            }
            
            public String getSimilarccfdet(){
                return this.similarccfdet;
            }
            
            public void setSimilarccfdet(String similarccfdet){
                this.similarccfdet = similarccfdet;
            }
            
            public String getStocksrc(){
                return this.stocksrc;
            }
            
            
            public void setStocksrc(String stocksrc){
                this.stocksrc = stocksrc;
            }

    }

 
  public List<StockFabrics> getStockFabrics(String pstore,String pordnum,String pclicod,String pfabtyp,String pfabsubcat,String pskuno,Integer pfabwgtFrom,Integer pfabwgtTo,Integer pBsffabwgtfrom,Integer pBsffabwgtto,Integer pfabwid,String pinside,String poutside,String pcalstn,String pclrref,String pstr,String pstripeId,String ptheme,String penzyme,String pteflon ,String pldecoroute,String  pfabdcodelist,String pdccode,Integer pmchgaufrom,Integer pmchgauto,String pYrncnt,String pYrncps,String pYrnclr,String pOriclr,String pYrnqlty,String pYrnsubqltya,String pYrnsubqltyb,String pYrnffcod,String pYrnclrref,String pcpsField,String pcpstypA,Integer  pcpstypAFrom,Integer  pcpstypATo,String pcpstypB,Integer  pcpstypBFrom,Integer  pcpstypBTo,String pcpstypC,Integer pcpstypCFrom,Integer pcpstypCTo,String psearchColour,String hexcolor,Double Lclrcode,Double Aclrcode,Double Bclrcode, Double ptoleranceDeltaE , HttpServletRequest request, String pIntfabcertno ,String pCCFMatchcat , String pWarehouse , String pPatternCode){
        
        double l,a,b;
        l=a=b=0.0;
         if (hexcolor != null)
        {
            try
            {
                Chroma c = new Chroma(hexcolor);
                
                double[] lab = c.getLAB();
                l = lab[0];
                a = lab[1];
                b = lab[2];
            }
            catch (Exception e)
            {
                l = 0.0; 
                a = 0.0;
                b = 0.0;
            }
        }
      else if (Lclrcode != null) {
       l  =  Lclrcode;  
       a  =  Aclrcode;
       b  =  Bclrcode;
      }
 
 
 
    SprocMatchFabricClrResponse listloc = procService.executeSprocMatchFabricClr(pstore, pordnum,pclicod, pfabtyp, pfabsubcat, pskuno, pfabwgtFrom, pfabwgtTo,pBsffabwgtfrom,pBsffabwgtto, pfabwid, pinside, poutside,pcalstn, pclrref, pstr, pstripeId, ptheme, penzyme, pteflon ,pldecoroute, pfabdcodelist,pdccode,pmchgaufrom, pmchgauto,pYrncnt,pYrncps,pYrnclr,pOriclr,pYrnqlty,pYrnsubqltya,pYrnsubqltyb,pYrnffcod,pYrnclrref,pcpsField,pcpstypA, pcpstypAFrom, pcpstypATo,pcpstypB, pcpstypBFrom, pcpstypBTo,pcpstypC, pcpstypCFrom, pcpstypCTo,psearchColour,
     l, a, b, ptoleranceDeltaE,"",pIntfabcertno,pCCFMatchcat,pWarehouse,pPatternCode);
  

  
          List<SprocMatchFabricClrResponsePfabrics> locs = listloc.getPfabrics();
          List<StockFabrics> stockList = new ArrayList<>();
          for(SprocMatchFabricClrResponsePfabrics i : locs)
         {
            StockFabrics s = new StockFabrics();
            s.setOrdnum(i.getOrdnum() );
            s.setClicod(i.getClicod() );
            s.setFabtyp(i.getFabtyp());
            s.setFabwid(i.getFabwid());
            s.setFabwgt(i.getFabwgt());
            s.setClrdes(i.getClrdes());
            s.setLab(i.getLab());
            s.setLabval(i.getLab());
            s.setDeltae(i.getDeltae());
            s.setMchgau(i.getMchgau());
            s.setClrref(i.getClrref());
            s.setStripeid(i.getStripeid());
            s.setFabdcodelist(i.getFabdcodelist());
            s.setInside(i.getInside());
            s.setOutside(i.getOutside());
            s.setSpfinish(i.getSpfinish());
            s.setEnzymewash(i.getEnzymewash());
            s.setSkuno(i.getSkuno());
            s.setCalstn(i.getCalstn());
            s.setSdecoroute(i.getSdecoroute());
            s.setLdecoroute(i.getLdecoroute());
            s.setYrnid(i.getYrnid());
            s.setFabimageref(i.getFabimageref());
            s.setStock(i.getStock());
            s.setStoreloc(i.getStoreloc());
            s.setStrcod(i.getStrcod());
            s.setFabcompo(i.getFabcompo());
            s.setFabseq(i.getFabseq());
            s.setClrseq(i.getClrseq());
            s.setCcfdet(i.getCcfdet());
            s.setSimilarccfdet(i.getSimilarccfdet());
            s.setStocksrc(i.getStocksrc());
            stockList.add(s);
            
          }
 return stockList;
      }
      
      
     public class YarnDyeStock{
         @ColumnAlias("YRNCOD")
    private String yrncod;

    @ColumnAlias("YRNLOT")
    private String yrnlot;

    @ColumnAlias("CLRREF")
    private String clrref;

    @ColumnAlias("QTY")
    private String qty;

    @ColumnAlias("NYRNCNT")
    private String nyrncnt;

    @ColumnAlias("NFYRNCPS")
    private String nfyrncps;
    
    @ColumnAlias("NYRNCLR")
    private String nyrnclr;

    @ColumnAlias("NYRNCDES")
    private String nyrncdes;

    @ColumnAlias("NYRNQLTY")
    private String nyrnqlty;

    @ColumnAlias("NYRNSUBQLTYA")
    private String nyrnsubqltya;

    @ColumnAlias("NYRNSUBQLTYB")
    private String nyrnsubqltyb;

    @ColumnAlias("NYRNSUBQLTYC")
    private String nyrnsubqltyc;

    @ColumnAlias("MAXYRNFFCOD")
    private String maxyrnffcod;

    @ColumnAlias("WRHNUM")
    private String wrhnum;

    @ColumnAlias("HEXCOLOR")
    private String hexcolor;

    @ColumnAlias("LAB")
    private String labvalue;

    @ColumnAlias("DELTAE")
    private String deltae;
    @ColumnAlias("PANTONEREF")
    private String pantoneref;

    public String getYrncod() {
        return this.yrncod;
    }

    public void setYrncod(String yrncod) {
        this.yrncod = yrncod;
    }

    public String getYrnlot() {
        return this.yrnlot;
    }

    public void setYrnlot(String yrnlot) {
        this.yrnlot = yrnlot;
    }

    public String getClrref() {
        return this.clrref;
    }

    public void setClrref(String clrref) {
        this.clrref = clrref;
    }

    public String getQty() {
        return this.qty;
    }

    public void setQty(String qty) {
        this.qty = qty;
    }

    public String getNyrncnt() {
        return this.nyrncnt;
    }

    public void setNyrncnt(String nyrncnt) {
        this.nyrncnt = nyrncnt;
    }

    public String getNfyrncps() {
        return this.nfyrncps;
    }

    public void setNfyrncps(String nfyrncps) {
        this.nfyrncps = nfyrncps;
    }
    public String getNyrnclr(){
        return this.nyrnclr;
    }
    public void setNyrnclr(String nyrnclr){
        this.nyrnclr =nyrnclr;
    }

    public String getNyrncdes() {
        return this.nyrncdes;
    }

    public void setNyrncdes(String nyrncdes) {
        this.nyrncdes = nyrncdes;
    }

    public String getNyrnqlty() {
        return this.nyrnqlty;
    }

    public void setNyrnqlty(String nyrnqlty) {
        this.nyrnqlty = nyrnqlty;
    }

    public String getNyrnsubqltya() {
        return this.nyrnsubqltya;
    }

    public void setNyrnsubqltya(String nyrnsubqltya) {
        this.nyrnsubqltya = nyrnsubqltya;
    }

    public String getNyrnsubqltyb() {
        return this.nyrnsubqltyb;
    }

    public void setNyrnsubqltyb(String nyrnsubqltyb) {
        this.nyrnsubqltyb = nyrnsubqltyb;
    }

    public String getNyrnsubqltyc() {
        return this.nyrnsubqltyc;
    }

    public void setNyrnsubqltyc(String nyrnsubqltyc) {
        this.nyrnsubqltyc = nyrnsubqltyc;
    }

    public String getMaxyrnffcod() {
        return this.maxyrnffcod;
    }

    public void setMaxyrnffcod(String maxyrnffcod) {
        this.maxyrnffcod = maxyrnffcod;
    }

    public String getWrhnum() {
        return this.wrhnum;
    }

    public void setWrhnum(String wrhnum) {
        this.wrhnum = wrhnum;
    }
   public String getHexcolor() {
       return this.hexcolor;
   }
        
   public void setHexcolor(String hexcolor) {
       this.hexcolor = hexcolor;
   }
            
   public void setLab(String lab){
       if(lab != null){
            this.hexcolor = getHexFromLab(lab);
       }
       else{
           this.hexcolor = null;
       }
   }
    public String getLabvalue(){
        return this.labvalue;
   }
    public void setLabvalue(String labvalue){
        this.labvalue = labvalue;
   }
    public void setLabval(String lab){
        this.labvalue = lab;
   }
    public String getDeltae() {
        return this.deltae;
    }

    public void setDeltae(String deltae) {
        this.deltae = deltae;
    }
    
  public String getPantoneref(){
      return this.pantoneref;
  }
  public void setPantoneref(String pantoneref){
      this.pantoneref= pantoneref;
  }
    
    
    
      }
      
      public List<YarnDyeStock> getYarnDyeStock(String pYrncnt,String pCompo,String pYrnCdes,String pYrnQual,String pYrnYrnQualSubA,String pYrnYrnQualSubB,String pYrnffcod,String pYrnLabref,String pYrnlot,String pAnycolor,String hexcolor,Double plabL,Double plabA,Double plabB,Double pToleranceDeltaE,HttpServletRequest request){
           
      
      double l,a,b;
        l=a=b= 0.0;
         if (hexcolor != null)
        {
            try
            {
                Chroma c = new Chroma(hexcolor);
                
                double[] lab = c.getLAB();
                l = lab[0];
                a = lab[1];
                b = lab[2];
            }
            catch (Exception e)
            {
                l = 0.0; 
                a = 0.0;
                b = 0.0;
            }
        }
      else if (plabL != null) {
      l  =  plabL;  
      a  =  plabA;
      b  =  plabB;
      }
      
       ProcFindMatchYrnStockClrResponse listloc = procService.executeProcFindMatchYrnStockClr(pYrncnt,pCompo,pYrnCdes,pYrnQual,pYrnYrnQualSubA,pYrnYrnQualSubB,pYrnffcod,pYrnLabref,pYrnlot,pAnycolor,l,a,b,pToleranceDeltaE);
      
      List<ProcFindMatchYrnStockClrResponsePyarnStock> locs = listloc.getPyarnStock();
          List<YarnDyeStock> ydstockList = new ArrayList<>();
          for(ProcFindMatchYrnStockClrResponsePyarnStock i : locs)
         {
            YarnDyeStock s = new YarnDyeStock();
            s.setYrncod(i.getYrncod() );
            s.setYrnlot(i.getYrnlot() );
            s.setClrref(i.getClrref());
            s.setNfyrncps(i.getNfyrncps());
            s.setQty(i.getQty());
            s.setNyrncnt(i.getNyrncnt());
            s.setNyrnclr(i.getNyrnclr());
            s.setNyrncdes(i.getNyrncdes());
            s.setNyrnqlty(i.getNyrnqlty());
            s.setNyrnsubqltya(i.getNyrnsubqltya());
            s.setNyrnsubqltyb(i.getNyrnsubqltyb());
            s.setNyrnsubqltyc(i.getNyrnsubqltyc());
            s.setMaxyrnffcod(i.getMaxyrnffcod());
            s.setWrhnum(i.getWrhnum());
            s.setLab(i.getLab());
            s.setLabval(i.getLab());
            s.setDeltae(i.getDeltae());
            s.setPantoneref(i.getPantoneref());
            ydstockList.add(s);
         }
 return ydstockList;
                                              }
                                              
                                              
    public class ColourLibraries{
    @ColumnAlias("LABL")
    private String labl;

    @ColumnAlias("LABA")
    private String laba;

    @ColumnAlias("LABB")
    private String labb;

    @ColumnAlias("DELTAE")
    private String deltae;

    @ColumnAlias("CLRREF")
    private String clrref;

    @ColumnAlias("CLRCODE")
    private String clrcode;

    @ColumnAlias("HEXVAL")
    private String hexval;

    @ColumnAlias("RGBR")
    private Short rgbr;

    @ColumnAlias("RGBG")
    private Short rgbg;

    @ColumnAlias("RGBB")
    private Short rgbb;

    public String getLabl() {
        return this.labl;
    }

    public void setLabl(String labl) {
        this.labl = labl;
    }

    public String getLaba() {
        return this.laba;
    }

    public void setLaba(String laba) {
        this.laba = laba;
    }

    public String getLabb() {
        return this.labb;
    }

    public void setLabb(String labb) {
        this.labb = labb;
    }

    public String getDeltae() {
        return this.deltae;
    }

    public void setDeltae(String deltae) {
        this.deltae = deltae;
    }

    public String getClrref() {
        return this.clrref;
    }

    public void setClrref(String clrref) {
        this.clrref = clrref;
    }

    public String getClrcode() {
        return this.clrcode;
    }

    public void setClrcode(String clrcode) {
        this.clrcode = clrcode;
    }

    public String getHexval() {
        return this.hexval;
    }

    public void setHexval(String hexval) {
        this.hexval = hexval;
    }

    public Short getRgbr() {
        return this.rgbr;
    }

    public void setRgbr(Short rgbr) {
        this.rgbr = rgbr;
    }

    public Short getRgbg() {
        return this.rgbg;
    }

    public void setRgbg(Short rgbg) {
        this.rgbg = rgbg;
    }

    public Short getRgbb() {
        return this.rgbb;
    }

    public void setRgbb(Short rgbb) {
        this.rgbb = rgbb;
    }
    }
    
     public List<ColourLibraries> getColourLibraries(Double p_labL,Double p_labA,Double p_labB,Double p_ToleranceDeltaE,String p_search_opt,String p_labref,String p_value,String hexcolor,HttpServletRequest request){
          double l,a,b;
        l=a=b= 0.0;
         if (hexcolor != null)
        {
            try
            {
                Chroma c = new Chroma(hexcolor);
                
                double[] lab = c.getLAB();
                l = lab[0];
                a = lab[1];
                b = lab[2];
            }
            catch (Exception e)
            {
                l = 0.0; 
                a = 0.0;
                b = 0.0;
            }
        }
      else if (p_labL != null) {
      l  =  p_labL;  
      a  =  p_labA;
      b  =  p_labB;
      }
         
         
         
      ProcRf020pk0QryclrsGetColoursResponse listloc = procService.executeProcRf020pk0_qryclrsGetColours(l,a,b,p_ToleranceDeltaE,p_search_opt,p_labref,p_value); 
    
          List<ProcRf020pk0QryclrsGetColoursResponsePoutLov> locs = listloc.getPoutLov();
          List<ColourLibraries> ClrList = new ArrayList<>();
          for(ProcRf020pk0QryclrsGetColoursResponsePoutLov i : locs)
         {
            ColourLibraries s = new ColourLibraries();
            s.setLabl(i.getLabl());
            s.setLaba(i.getLaba());
            s.setLabb(i.getLabb());
            s.setDeltae(i.getDeltae());
            s.setClrref(i.getClrref());
            s.setClrcode(i.getClrcode());
            s.setHexval(i.getHexval());
            s.setRgbr(i.getRgbr());
            s.setRgbg(i.getRgbg());
            s.setRgbb(i.getRgbb());
            ClrList.add(s);
         }
 return ClrList;
      }
      
      
      
      
      public class CompareColours{
    @ColumnAlias("DELTAE")
    private String deltae;

    @ColumnAlias("LABL1")
    private String labl1;

    @ColumnAlias("LABA1")
    private String laba1;

    @ColumnAlias("LABB1")
    private String labb1;

    @ColumnAlias("LABL2")
    private String labl2;

    @ColumnAlias("LABA2")
    private String laba2;

    @ColumnAlias("LABB2")
    private String labb2;

    @ColumnAlias("HEXCOLOR1")
    private String hexcolor1;
    
    @ColumnAlias("HEXCOLOR2")
    private String hexcolor2;
    
    public String getDeltae() {
        return this.deltae;
    }

    public void setDeltae(String deltae) {
        this.deltae = deltae;
    }

    public String getLabl1() {
        return this.labl1;
    }

    public void setLabl1(String labl1) {
        this.labl1 = labl1;
    }

    public String getLaba1() {
        return this.laba1;
    }

    public void setLaba1(String laba1) {
        this.laba1 = laba1;
    }

    public String getLabb1() {
        return this.labb1;
    }

    public void setLabb1(String labb1) {
        this.labb1 = labb1;
    }

    public String getLabl2() {
        return this.labl2;
    }

    public void setLabl2(String labl2) {
        this.labl2 = labl2;
    }

    public String getLaba2() {
        return this.laba2;
    }

    public void setLaba2(String laba2) {
        this.laba2 = laba2;
    }

    public String getLabb2() {
        return this.labb2;
    }

    public void setLabb2(String labb2) {
        this.labb2 = labb2;
    }
     public String getHexcolor1() {
       return this.hexcolor1;
   }
        
   public void setHexcolor1(String hexcolor1) {
       this.hexcolor1 = hexcolor1;
   }
            
   public void setLab1(String lab1){
       if(lab1 != null){
            this.hexcolor1 = getHexFromLab(lab1);
       }
       else{
           this.hexcolor1 = null;
       }
   }
   
     public String getHexcolor2() {
       return this.hexcolor2;
   }
        
   public void setHexcolor2(String hexcolor2) {
       this.hexcolor2 = hexcolor2;
   }
   
   public void setLab2(String lab2){
       if(lab2 != null){
            this.hexcolor2 = getHexFromLab(lab2);
       }
       else{
           this.hexcolor2 = null;
       }
   }
   
   
      }
 
      
      public List<CompareColours> getCompareColours(Double pLabL1,Double pLabA1,Double pLabB1,Double pLabL2,Double pLabA2,Double pLabB2,String hexcolor1,String hexcolor2,HttpServletRequest request){
          double l1,a1,b1;
          double l2,a2,b2;
        l1=a1=b1= 0.0;
         if (hexcolor1 != null)
        {
            try
            {
                Chroma c = new Chroma(hexcolor1);
                
                double[] lab1 = c.getLAB();
                l1 = lab1[0];
                a1 = lab1[1];
                b1 = lab1[2];
            }
            catch (Exception e)
            {
                l1 = 0.0; 
                a1 = 0.0;
                b1 = 0.0;
            }
        }
      else if (pLabL1 != null) {
      l1  =  pLabL1;  
      a1  =  pLabA1;
      b1  =  pLabB1;
      }
      
      l2=a2=b2= 0.0;
      if(hexcolor2 != null)
      {
          try
            {
                Chroma c = new Chroma(hexcolor2);
                
                double[] lab2 = c.getLAB();
                l2 = lab2[0];
                a2 = lab2[1];
                b2 = lab2[2];
            }
            catch (Exception e)
            {
                l2 = 0.0; 
                a2 = 0.0;
                b2 = 0.0;
            } 
      }
     else if (pLabL2 != null) {
      l2  =  pLabL2;  
      a2  =  pLabA2;
      b2  =  pLabB2;
      } 
         
      ProcRf020pk0QryClrsCompareDeltaEResponse listloc = procService.executeProcRf020pk0_QryClrsCompareDeltaE(l1,a1,b1,l2,a2,b2); 
      
          List<ProcRf020pk0QryClrsCompareDeltaEResponsePdeltae> locs = listloc.getPdeltae();
          List<CompareColours> CmpClrs = new ArrayList<>();
          for(ProcRf020pk0QryClrsCompareDeltaEResponsePdeltae i : locs)
         {
            CompareColours s = new CompareColours();
            s.setDeltae(i.getDeltae());
            s.setLabl1(i.getLabl1());
            s.setLaba1(i.getLaba1());
            s.setLabb1(i.getLabb1());
            s.setLabl2(i.getLabl2());
            s.setLaba2(i.getLaba2());
            s.setLabb2(i.getLabb2());
            s.setLab1(i.getLab1());
            s.setLab2(i.getLab2());
            CmpClrs.add(s);
         }
 return CmpClrs;
      }
     
    public class AddPantone{ 
    @ColumnAlias("PANTONE")
    private String pantone;

    @ColumnAlias("LABL")
    private String labl;

    @ColumnAlias("LABA")
    private String laba;

    @ColumnAlias("LABB")
    private String labb;

    @ColumnAlias("RGBR")
    private String rgbr;

    @ColumnAlias("RGBG")
    private String rgbg;

    @ColumnAlias("RGBB")
    private String rgbb;

    @ColumnAlias("COLOUR")
    private String colour;

    public String getPantone() {
        return this.pantone;
    }

    public void setPantone(String pantone) {
        this.pantone = pantone;
    }

    public String getLabl() {
        return this.labl;
    }

    public void setLabl(String labl) {
        this.labl = labl;
    }

    public String getLaba() {
        return this.laba;
    }

    public void setLaba(String laba) {
        this.laba = laba;
    }

    public String getLabb() {
        return this.labb;
    }

    public void setLabb(String labb) {
        this.labb = labb;
    }

    public String getRgbr() {
        return this.rgbr;
    }

    public void setRgbr(String rgbr) {
        this.rgbr = rgbr;
    }

    public String getRgbg() {
        return this.rgbg;
    }

    public void setRgbg(String rgbg) {
        this.rgbg = rgbg;
    }

    public String getRgbb() {
        return this.rgbb;
    }

    public void setRgbb(String rgbb) {
        this.rgbb = rgbb;
    }

    public String getColour() {
        return this.colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    }     
     
     public List<AddPantone> getAddPantone(String p_prgid,String p_userid,String p_pantone,String p_pantoneCat,Double p_labL,Double p_labA,Double p_labB,String p_option,HttpServletRequest request){
        double r,g,b;
        String lab;
        String hexval;
        hexval = "";
        r=g=b= 0.0;
        
         if (p_labL != null)
        {
         lab = "L"+ p_labL + "A" + p_labA + "B" + p_labB; 
         hexval = getHexFromLab(lab);
        }
        if(hexval != ""){
         double[] rgb = getRgbFromHex(hexval);  
         r = rgb[0];
         g = rgb[1];
         b = rgb[2];
        }
     
      
      ProcRf020pk0UpdClrsAddPantoneResponse listloc = procService.executeProcRf020pk0_UpdClrsAddPantone(p_prgid,p_userid,p_pantone,p_pantoneCat,p_labL,p_labA,p_labB,r,g,b,hexval,p_option); 
      
          List<ProcRf020pk0UpdClrsAddPantoneResponsePoutDetails> locs = listloc.getPoutDetails();
          List<AddPantone> AddPan = new ArrayList<>();
          for(ProcRf020pk0UpdClrsAddPantoneResponsePoutDetails i : locs)
         {
            AddPantone s = new AddPantone();
            s.setPantone(i.getPantone());
            s.setLabl(i.getLabl());
            s.setLaba(i.getLaba());
            s.setLabb(i.getLabb());
            s.setRgbr(i.getRgbr());
            s.setRgbg(i.getRgbg());
            s.setRgbb(i.getRgbb());
            s.setColour(i.getColour());
            AddPan.add(s);
         }
 return AddPan;
      }
     

     
     //      public Sr741pk0sprocCreateFabRequestResponse executeRequestSwatchFabric(String psordnum, Byte pclrseq, Byte pfabseq, String pteam, String pfabformat, String ppurpose, double pquantity, String puom, String minLength, HttpServletRequest request)
    //  {
    //     /* get the fabric width from ort120 */
             
        
    //     logger.debug("Starting request swatch " + psordnum );
    //     double ptotalmetresreq=pquantity;
    //     if (minLength != "")
    //     {
    //         logger.debug("nullif" );
    //         Ort120Id pkOrt120 = new Ort120Id();
    //         pkOrt120.setOrdnum(psordnum);
    //         pkOrt120.setFabseq(pfabseq);
    //         Ort120 mOrt120 = ort120Service.getById(pkOrt120);
            
    //         float fabwid;  // in metres
    //         Float mFabwid = mOrt120.getFabwid();
    //         String mCalstn = mOrt120.getCalstn();
    //         if (mFabwid == null || mCalstn == null)
    //             fabwid = 1;
    //         else if (mCalstn == "C")
    //             fabwid = mFabwid * 2/100;
    //         else
    //             fabwid = mFabwid/100;
                
    //         // check number of swatches that can be obtained in a width of fabric 
    //         int noHeights = ((int) (pquantity  * Double.parseDouble(minLength)/fabwid )  )+1; 
    //         // get the number of heights required - always add 1 to round up. Even if it's a full number, need to add allowance
    //         ptotalmetresreq = noHeights * (Double.parseDouble(minLength));
    //     }
    //     logger.debug("request swatch " + psordnum + " " + Double.toString(ptotalmetresreq));
    //     return procService.executeSr741pk0sprocCreateFabRequest(psordnum, pclrseq, pfabseq, Double.toString(ptotalmetresreq), pteam, 
    //         securityService.getLoggedInUser().getUserName().toUpperCase()
    //         , pfabformat,  ppurpose,  Double.toString(pquantity),  puom);
    // }



 

}
