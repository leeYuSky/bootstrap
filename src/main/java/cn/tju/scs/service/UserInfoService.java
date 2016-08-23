package cn.tju.scs.service;

import cn.tju.scs.domain.UserInfo;
import cn.tju.scs.mapper.UserInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.List;
import java.util.Random;
import java.util.UUID;

/**
 * Created by liyuze on 16/6/4.
 */

@Service
public class UserInfoService {

    @Autowired
    UserInfoMapper userInfoMapper;

    public UserInfo getUserByUser(UserInfo userInfo){
        userInfo.setPassword(DigestUtils.md5DigestAsHex(userInfo.getPassword().getBytes()));
        UserInfo user = userInfoMapper.selectByUser(userInfo);

        if(user == null)
            return null;
        else
            return user;
    }

    public List<UserInfo> getAllUsers(){
        List<UserInfo> list = userInfoMapper.selectAllUsers();

        if(list.size() > 0){
            return list;
        }else{
            return null;
        }
    }

    public UserInfo getOneUser(String userId){
        UserInfo user = userInfoMapper.selectByPrimaryKey(userId);
        return user;
    }

    public int deleteUser(String userId){
        int status = userInfoMapper.deleteByPrimaryKey(userId);
        return status;
    }

    public int updatePwd(UserInfo userInfo){
        userInfo.setPassword(DigestUtils.md5DigestAsHex(userInfo.getPassword().getBytes()));
        int status = userInfoMapper.updateByPrimaryKeySelective(userInfo);
        return status;
    }

    public int updateAuth(UserInfo userInfo){
        int status = userInfoMapper.updateByPrimaryKeySelective(userInfo);
        return status;
    }

    public int insertUser(UserInfo userInfo){
        userInfo.setPassword(DigestUtils.md5DigestAsHex(userInfo.getPassword().getBytes()));
        int status = userInfoMapper.insertByUuid(userInfo);

        return status;
    }
}
