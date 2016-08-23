package cn.tju.scs.domain;

import org.springframework.stereotype.Repository;

/**
 * Created by liyuze on 16/6/4.
 */

@Repository
public class UserInfo {

    private String userId;
    private String userName;
    private String password;
    private Integer auth;



    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAuth(Integer auth) {
        this.auth = auth;
    }

    public String getUserId() {
        return userId;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }

    public Integer getAuth() {
        return auth;
    }
}
