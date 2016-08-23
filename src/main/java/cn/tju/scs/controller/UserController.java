package cn.tju.scs.controller;

import cn.tju.scs.domain.UserInfo;
import cn.tju.scs.service.UserInfoService;
import cn.tju.scs.util.QrcodeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by liyuze on 16/6/3.
 */

@Controller
public class UserController {

    @Autowired
    UserInfoService userInfoService;

    @RequestMapping(value = "login")
    public String GoLogin(Model modelMap){

        return "login";
    }

//    @ResponseBody
    @RequestMapping(value = "checkLogin")
    public String checkLogin(HttpServletRequest request, UserInfo userInfo){

        UserInfo user = userInfoService.getUserByUser(userInfo);

        if(user != null){
            request.getSession().setAttribute("user",user);
            return "admin";
        }else{
            return "login";
        }
        //1. response输出html
//        response.setContentType("text/html;charset=UTF-8");
//        PrintWriter out = response.getWriter();
//        if(status.equals("yes")){
//            out.print("[{message:123}]");
//        }else {
//            out.print("no");
//        }
//        out.flush();
//        out.close();
        //2. 输出json
//        Map<String, Object> res = new HashMap<String, Object>();
//        res.put("status","1");
//        Map<String, Object> res1 = new HashMap<String, Object>();
//        res1.put("sex","男");
//        List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
//        data.add(res1);
//        data.add(res1);
//        res.put("data",data);
//        return res;
    }

    @ResponseBody
    @RequestMapping(value = "getAllUsers")
    public Object getAllUsers(){
        List<UserInfo> list = userInfoService.getAllUsers();

        Map<String,Object> map = new HashMap<String,Object>();
        map.put("status","success");
        map.put("data",list);
        return map;
    }

    @ResponseBody
    @RequestMapping(value = "deleteUser")
    public Object deleteUser(@RequestBody  Map<String,Object> id){
        //如果前台是 data : JSON.stringify([name]) 这样传来的json,那么参数类型应为List<String>

        int status = userInfoService.deleteUser((String) id.get("name"));
        Map<String ,Object> map = new HashMap<String,Object>();
        map.put("message",status);
        return map;
    }

    @ResponseBody
    @RequestMapping(value = "getOneUser")
    public Object getOneUser(@RequestBody List<String> id){
//        System.out.println(id);
        UserInfo user = userInfoService.getOneUser(id.get(0));
        Map<String ,Object> map = new HashMap<String,Object>();
        if(user != null) {
            map.put("message", "success");
            map.put("user",user);
        }else{
            map.put("message","fail");
            map.put("user",null);
        }
        return map;
    }

    @ResponseBody
    @RequestMapping(value = "updatePwd")
    public Object updatePwd(UserInfo userInfo){

        int status = userInfoService.updatePwd(userInfo);
        Map<String ,Object> map = new HashMap<String,Object>();
        map.put("message", "success");
        map.put("status",status);
        return map;
    }

    @ResponseBody
    @RequestMapping(value = "updateAuth")
    public Object updateAuth(UserInfo userInfo){
        System.out.println(userInfo.getAuth());
        System.out.println(userInfo.getUserName());
        System.out.println(userInfo.getPassword());
        System.out.println(userInfo.getUserId());
        int status = userInfoService.updateAuth(userInfo);
        Map<String ,Object> map = new HashMap<String,Object>();
        map.put("message", "success");
        map.put("status",status);
        return map;
    }

    @ResponseBody
    @RequestMapping(value = "insertUser")
    public Object insertNewUser(UserInfo userInfo){

        int status = userInfoService.insertUser(userInfo);
        Map<String ,Object> map = new HashMap<String,Object>();
        map.put("message", "success");
        map.put("status",status);
        return map;
    }



    @RequestMapping(value = "image",method = RequestMethod.GET)
    public void getImage(HttpServletRequest request, HttpServletResponse response,String imageUrl){
        System.out.println(imageUrl);
        QrcodeUtil.encoderQRCoder(imageUrl,response);

    }







}
