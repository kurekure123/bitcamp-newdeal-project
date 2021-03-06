package bitcamp.newdeal.domain;

import java.io.Serializable;

public class Card implements Serializable{
    private static final long serialVersionUID = 1L;
    
    protected int bno;
    protected int memNo;
    protected String cardName;
    protected String bName;
    protected String bEmail;
    protected String bPhon;
    protected String fBook;
    protected String insta;
    protected String cName;
    protected String cAdd;
    protected String cPhon;
    protected String job;
    protected String fax;
    protected String web;
    
    public int getBno() {
        return bno;
    }
    public void setBno(int bno) {
        this.bno = bno;
    }
    public int getMemNo() {
        return memNo;
    }
    public void setMemNo(int memNo) {
        this.memNo = memNo;
    }
    public String getCardName() {
        return cardName;
    }
    public void setCardName(String cardName) {
        this.cardName = cardName;
    }
    public String getbName() {
        return bName;
    }
    public void setbName(String bName) {
        this.bName = bName;
    }
    public String getbEmail() {
        return bEmail;
    }
    public void setbEmail(String bEmail) {
        this.bEmail = bEmail;
    }
    public String getbPhon() {
        return bPhon;
    }
    public void setbPhon(String bPhon) {
        this.bPhon = bPhon;
    }
    public String getfBook() {
        return fBook;
    }
    public void setfBook(String fBook) {
        this.fBook = fBook;
    }
    public String getInsta() {
        return insta;
    }
    public void setInsta(String insta) {
        this.insta = insta;
    }
    public String getcName() {
        return cName;
    }
    public void setcName(String cName) {
        this.cName = cName;
    }
    public String getcAdd() {
        return cAdd;
    }
    public void setcAdd(String cAdd) {
        this.cAdd = cAdd;
    }
    public String getcPhon() {
        return cPhon;
    }
    public void setcPhon(String cPhon) {
        this.cPhon = cPhon;
    }
    public String getJob() {
        return job;
    }
    public void setJob(String job) {
        this.job = job;
    }
    public String getFax() {
        return fax;
    }
    public void setFax(String fax) {
        this.fax = fax;
    }
    public String getWeb() {
        return web;
    }
    public void setWeb(String web) {
        this.web = web;
    }
    @Override
    public String toString() {
        return "Card [bno=" + bno + ", memNo=" + memNo + ", cardName=" + cardName + ", bName=" + bName + ", bEmail="
                + bEmail + ", bPhon=" + bPhon + ", fBook=" + fBook + ", insta=" + insta + ", cName=" + cName + ", cAdd="
                + cAdd + ", cPhon=" + cPhon + ", job=" + job + ", fax=" + fax + ", web=" + web + "]";
    }
    
}

