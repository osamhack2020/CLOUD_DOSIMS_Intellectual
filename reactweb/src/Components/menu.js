import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'

export const MenuHome = (
    <div>
        <ListItem button component={Link} to="/Home">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="홈"/>
        </ListItem>
    </div>
)  

export const MenuProfile = (
    <div>
        <ListItem button component={Link} to="/Profile">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="프로필"/>
        </ListItem>
    </div>
)

export const MenuPassApply = (
    <div>
        <ListItem button component={Link} to="/PassApply">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="휴가 신청"/>
        </ListItem>
    </div>
)

export const MenuPassDetail = (
    <div>
         <ListItem button component={Link} to="/PassDetail">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="휴가 조회"/>
        </ListItem>
    </div>
)

export const MenuMessageSend = (
    <div>
         <ListItem button component={Link} to="/MessageSend">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="부대 보고"/>
        </ListItem>
    </div>
)

export const MenuMessageConfirm = (
    <div>
         <ListItem button component={Link} to="/MessageConfirm">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="전파사항 확인"/>
        </ListItem>
    </div>
)

export const MenuMessageSendAdmin = (
    <div>
         <ListItem button component={Link} to="/MessageSendAdmin">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="전파사항 송신"/>
        </ListItem>
    </div>
)

export const MenuMessageConfirmAdmin = (
    <div>
         <ListItem button component={Link} to="/MessageConfirmAdmin">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="보고 확인"/>
        </ListItem>
    </div>
)

export const MenuPassConfirm = (
    <div>
         <ListItem button component={Link} to="/PassConfirm">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="휴가 승인"/>
        </ListItem>
    </div>
)

export const MenuLocationManage = (
    <div>
         <ListItem button component={Link} to="/LocationManage">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="출타자 위치 조회"/>
        </ListItem>
    </div>
)

export const MenuDashboard = (
    <div>
         <ListItem button component={Link} to="/Dashboard">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="휴가 현황"/>
        </ListItem>
    </div>
)