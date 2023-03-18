package com.example.demo;
import java.time.LocalDateTime;


public class Reservation {
    private String fname;
    private String lname;
    private String email;
    private int amount;
    private LocalDateTime dateTime;
    private String telnr;

    public Reservation(String fname, String lname, String email, int amount, LocalDateTime dateTime, String telnr) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.amount = amount;
        this.dateTime = dateTime;
        this.telnr = telnr;
    }

    public String getfName() {
        return fname;
    }

    public void setfName(String fname) {
        this.fname = fname;
    }

    public String getlName() {
        return lname;
    }

    public void setlName(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getTelnr() {
        return telnr;
    }

    public void setTelnr(String telnr) {
        this.telnr = telnr;
    }
}