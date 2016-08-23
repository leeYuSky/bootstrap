package cn.tju.scs.mapper;

import cn.tju.scs.domain.UserInfo;

import java.util.List;

public interface UserInfoMapper {
    int deleteByPrimaryKey(String userId);

    int insert(UserInfo record);

    int insertSelective(UserInfo record);

    UserInfo selectByPrimaryKey(String userId);

    int updateByPrimaryKey(UserInfo record);



    int insertByUuid(UserInfo userInfo);

    int updateByPrimaryKeySelective(UserInfo record);

    UserInfo selectByUser(UserInfo userInfo);

    int countByUserName(String userName);

    List<UserInfo> selectAllUsers();
}