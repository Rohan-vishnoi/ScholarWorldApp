package org.scholarworld.scholarworld.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchRequestDto {
    private String keyword;
    private int pagenumber;
    private int pagesize;

    public SearchRequestDto(String keyword, int pagenumber, int pagesize) {
        this.keyword = keyword;
        this.pagenumber = pagenumber;
        this.pagesize = pagesize;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public int getPagenumber() {
        return pagenumber;
    }

    public void setPagenumber(int pagenumber) {
        this.pagenumber = pagenumber;
    }

    public int getPagesize() {
        return pagesize;
    }

    public void setPagesize(int pagesize) {
        this.pagesize = pagesize;
    }
}
